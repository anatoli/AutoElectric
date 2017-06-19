/**
 * Created by Anatoliy Arinovich on 07.12.2016.
 */
"use strict";
angular.module('siBelApp')
  .controller("EchCtrl", ["$scope", "$timeout", "$interval", "$echarts",
    function($scope, $timeout, $interval, $echarts) {

      function numToString(num) {
        if (num < 0) {return "";}
        var result = (num < 10 ) ? "0" + num : "" + num;
        return result;
      }

      /**
       * трансформация текущего времени из формата Date в строку
       * @param date {Date} - дата/время в формате Date
       * @returns {string} - время в виде строки вида "чч:мм:cc"
       */
      function dateToString(date) {
        var tHours = date.getHours();
        var tMinutes = date.getMinutes();
        var tSeconds = date.getSeconds();
        var result = numToString(tHours) + ":" + numToString(tMinutes) + ":" + numToString(tSeconds);
        return result;
      }

      /**
       * генерация случайного целого числа в диапазоне от min до max
       * @param min {number} - минимальное целое число диапазона
       * @param max {number} - максимальное целое число диапазона
       * @returns {number} - случайное число из указанного диапазона
       */
      function randomInteger(min, max) {
        var rand = min + Math.random() * (max + 1 - min);
        rand = Math.floor(rand);
        return rand;
      }

      /**
       * округление времени к выбранному шагу времени
       * @param date {Date} - дата/время в формате Date
       * @param timeInterval {number} - шаг времени в секундах
       * @returns {Date} - огругленное дата/время в формате Date
       */
      function roundTime(date, timeInterval) {
        var sDate = date.toISOString();
        var dateStr = sDate.split("T")[0];
        var sTime = sDate.split("T")[1].substr(0, 8);
        var sHour = sTime.substr(0, 2);
        var sMin = sTime.substr(3, 2);
        var nSec = Number(sTime.substr(6, 2));
        var resDate = null;
        if (nSec/timeInterval === Math.floor(nSec/timeInterval)) {
          resDate = dateStr + "T" + sHour + ":" + sMin + ":" + numToString(nSec) + "Z";
        } else {
          var newSec = Math.floor(nSec/timeInterval) * timeInterval;
          resDate = dateStr + "T" + sHour + ":" + sMin + ":" + numToString(newSec) + "Z";
        }
        return new Date(resDate);
      }

      /**
       * генерация данных для одной итерации графика
       * в диапазоне чисел 0...100
       * @param date {Date} - дата/время в формате Date
       * @param timeInterval {number} - интервал (с) добавления новых данных
       * @param qt {number} - количество необходимых данных в иттерации
       * @returns {array} - массив данных, первым элементом которого является дата
       */
      function generationDataToIteration(date, timeInterval, qt) {
        var result = [];
        var rTime = roundTime(date, timeInterval);
        var sTime = dateToString(rTime);
        result.push(sTime);
        for (var i = 1; i <= qt; i++) {
          var tmp = randomInteger(0, 100);
          result.push(tmp);
        }
        return result;
      }

      /**
       * подготовка первоначальных данных для вывода
       * @param qtIteration {number} - необходимое количество данных (итераций)
       * @param timeInterval {number} - интервал (с) добавления новых данных
       * @param qt {number} - необходимое количество данных в одной итерации
       * @returns {array} - массив массивов с данными
       */
      function generationFirstData(qtIteration, timeInterval, qt) {
        var result = [];
        var curDate = new Date().getTime();
        for (var i = 0; i < qtIteration; i++) {
          var tmpDate = new Date (curDate - timeInterval * 1000 * i);
          var itemData = generationDataToIteration(tmpDate, timeInterval, qt);
          result.unshift(itemData);
        }
        return result;
      }

      /**
       * транформация данных для графика
       * @param data {[][]} - массив массивов с данными
       * @param legendName {string[]} - массив строк с названием полей
       * @returns {xAxisData: any[], legendData: string[], seriesData: [][]}
       */
      function dataToEhart(data, legendName) {
        var xAxisData = [];
        var seriesData = [];

        for (var a = 0; a < legendName.length; a++) {
          var tmp = {
            name: legendName[a],
            type: "line",
            data: []
          };
          seriesData.push(tmp);
        }

        for (var i = 0; i < data.length; i++) {
          var tmpX = data[i].slice(0, 1);
          xAxisData.push(tmpX);
          var tmpSerData = data[i].slice(1);
          for (var j = 0; j < tmpSerData.length; j++) {
            seriesData[j].data.push(tmpSerData[j]);
          }
        }
        return {xAxisData: xAxisData, legendData: legendName, seriesData: seriesData};
      }

      /**
       * запуск постоянного добавления данных
       */
      function runChangeChart() {
        if (angular.isDefined(graphConfig.timer)) {
          $interval.cancel(graphConfig.timer);
          graphConfig.timer = undefined;
        }

        graphConfig.timer = $interval(function() {
          //console.log("RUN!");
          var curDate = roundTime(new Date(), graphConfig.interval);
          var newIterationData = generationDataToIteration(curDate, graphConfig.interval, graphConfig.lineName.length);
          graphConfig.data.shift();
          graphConfig.data.push(newIterationData);
          var tmpToEchart = dataToEhart(grf, graphConfig.lineName);
          $scope.chart.config.xAxis.data = angular.copy(tmpToEchart.xAxisData);
          $scope.chart.config.legend.data = angular.copy(tmpToEchart.legendData);
          $scope.chart.config.series = angular.copy(tmpToEchart.seriesData);

        }, graphConfig.interval * 1000);
      }


  var graphConfig = {
    interval: 5, // интервал (с) добавления новых данных (должен быть >=5 и <= 59)
    timer: undefined, // для хранения promise генерируемого сервисом $interval
    data: [], // массив массивов для хранения данных для графика
    qtItem: 25, // отображаемое количество иттераций графика
    lineName: ["data01", "data02", "data03", "data04", "data05"] // массив строк с названием линий графика
  };
  var grf = generationFirstData(graphConfig.qtItem, graphConfig.interval, graphConfig.lineName.length);
  graphConfig.data = grf.data;

  $scope.chart = {
    identity: $echarts.generateInstanceIdentity(),
    dimention: "16:9",
    config: {
      theme: 'mint',
      driftPalette: false,
      title: {
        x: 'center',
        y: 'top',
        padding: [20, 10, 10, 10],
        text: "График в реальном времени"
      },
      toolbox: {
        show: false,
        feature: {
          magicType: {
            show: true,
            title: {
              'line': 'line',
              'bar': 'bar'
            },
            type: ['line', 'bar']
          },
          saveAsImage: {
            show: true,
            title: "save as image",
            type: "png"
          }
        }
      },
      tooltip: {
        trigger: 'axis'
      },
      calculable: true,
      xAxis: {
        type: 'category',
        data: []
      },
      yAxis: {
        type: 'value'
      },
      legend: {
        show: true,
        orient: "vertical",
        x: "right",
        y: "center",
        backgroundColor: "rgba(0, 0, 0, 0.05)",
        padding: [10, 10, 10, 10],
        data: []
      },
      grid: {
        x: 20,
        x2: 130,
        y2: 60
      },
      dataZoom: {
        show: false,
        start: 0
      },
      series: []
    }
  };

  /* наполнение графика первичными данными */
  // var grf = generationFirstData(graphConfig.qtItem, graphConfig.interval, graphConfig.lineName.length);
  graphConfig.data = grf;
  var toEchart = dataToEhart(grf, graphConfig.lineName);
  $scope.chart.config.xAxis.data = angular.copy(toEchart.xAxisData);
  $scope.chart.config.legend.data = angular.copy(toEchart.legendData);
  $scope.chart.config.series = angular.copy(toEchart.seriesData);
  /* запускаем процесс генерации новых данных */
  runChangeChart();


  /**
   *  преобразование положительного числа в строку, содержащую 2 символа
   *  @param num {number}
   *  @returns {string}
   */
  /**
   * остановка добавления данных в график
   */
  // function stopChangeChart() {
  //   $interval.cancel(graphConfig.timer);
  //   graphConfig.timer = undefined;
  // }

}]);
