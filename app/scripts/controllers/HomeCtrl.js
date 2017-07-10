'use strict';
angular.module('siBelApp')
  .controller('HomeCtrl', ['$scope', '$uibModal', '$state', '$http', function ($scope, $uibModal, $state, $http) {

    setTimeout(function () {
      $scope.iconFirs = true;
      $('#first-icon').addClass('flip');
    }, 2000);
    setTimeout(function () {

      $scope.iconFirs = true;
      $('#second-icon').addClass('flip');
    }, 3000);
    setTimeout(function () {
      $scope.iconFirs = true;
      $('#third-icon').addClass('flip');
    }, 4000);

    $http({
      method: 'GET',
      url: '/cars_details.json'
    }).then(function successCallback(res) {
      $scope.autos = res.data;
    }, function errorCallback(res) {
      console.log(res);
    });

    $scope.Active = function(data){
      console.log(data);
    };
    $scope.openDetails =function () {
      window.scrollTo(0, 0);
      $state.go('root.404');
    };
    $scope.OpenState = function (data, param) {
      $state.go('root'+data, {param: param});
    };

    $scope.ClickCars = function (data) {
      $scope.description = data.desc;
      $scope.src = data.src;
    };
    $scope.stateGo = function (data, stateParams, $event) {
      if(data !=='#/'){
        $state.go(data, {param: stateParams});
        if($event){
          $event.stopPropagation();
        }else{
          // event.stopPropagation();
          $event.stopPropagation();
          $event.preventDefault();
        }
      }
    };

  }]);
