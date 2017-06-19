"use strict";
/**
 * Created by Anatoli on 19.09.2016.
 */
/**
 * Created by Anatoli on 16.09.2016.
 */
angular.module('siBelApp')
  .controller('CompanyCtrl', ['$scope', '$uibModal', '$state', '$translate', '$rootScope', '$location',
    function ($scope, $uibModal, $state, $translate, $rootScope, $location) {

      $scope.dateStart=1950;

      function iconActive() {
        var arr = $location.$$path.split('/');
        var n = arr.length-1;
        // if(arr[n]=== 'company'){
        //   $state.go('root.company.about');
        //   $scope.state='.about';
        // }else {
          $scope.state = "."+arr[n];
        // }
      }

      iconActive();

      $rootScope.$on('$stateChangeSuccess',
        function(){
          iconActive();
      });


      // setInterval(function () {
      //   if ($scope.dateStart<2006){
      //     $scope.dateStart++;
      //     console.log( $scope.dateStart);
      //   }
      // },500)


      $scope.Go = function (data) {
        $state.go('root.company'+data);
        $scope.state = data;
      };

     $rootScope.$on('$translateChangeSuccess', function () {
      $translate('SecondPage.Slider.Title').then(function (translation) {
        $scope.SecondPage_Slider_Title = translation;
      });
      $translate('SecondPage.Slider.Text').then(function (translation) {
        $scope.SecondPage_Slider_Text = translation;
      });
      $translate('SecondPage.Slider.Btn_1').then(function (translation) {
        $scope.SecondPage_Slider_Btn_1 = translation;
      });
      $translate('SecondPage.Slider.Btn_2').then(function (translation) {
        $scope.SecondPage_Slider_Btn_2 = translation;
      });

      $translate('SecondPage.Icons.Title').then(function (translation) {
        $scope.SecondPage_Icons_Title = translation;
      });
      $translate('SecondPage.Icons.Header_ICO_1').then(function (translation) {
        $scope.SecondPage_Icons_Header_ICO_1 = translation;
      });
      $translate('SecondPage.Icons.Header_ICO_2').then(function (translation) {
        $scope.SecondPage_Icons_Header_ICO_2 = translation;
      });
      $translate('SecondPage.Icons.Header_ICO_3').then(function (translation) {
        $scope.SecondPage_Icons_Header_ICO_3 = translation;
      });
      $translate('SecondPage.Icons.Text_ICO_1').then(function (translation) {
        $scope.SecondPage_Icons_Text_ICO_1 = translation;
      });
      $translate('SecondPage.Icons.Text_ICO_2').then(function (translation) {
        $scope.SecondPage_Icons_Text_ICO_2 = translation;
      });
      $translate('SecondPage.Icons.Text_ICO_3').then(function (translation) {
        $scope.SecondPage_Icons_Text_ICO_3 = translation;
      });
      $translate('SecondPage.Icons.Btn_ICO_1').then(function (translation) {
        $scope.SecondPage_Icons_Btn_ICO_1 = translation;
      });
      $translate('SecondPage.Icons.Btn_ICO_2').then(function (translation) {
        $scope.SecondPage_Icons_Btn_ICO_2 = translation;
      });
      $translate('SecondPage.Icons.Btn_ICO_3').then(function (translation) {
        $scope.SecondPage_Icons_Btn_ICO_3 = translation;
      });
      $translate('SecondPage.Comments.Title').then(function (translation) {
        $scope.SecondPage_Comments_Title = translation;
      });
      $translate('SecondPage.Comments.Descriptions_11').then(function (translation) {
        $scope.SecondPage_Comments_Descriptions_11 = translation;
      });
       $translate('SecondPage.Comments.Descriptions_12').then(function (translation) {
        $scope.SecondPage_Comments_Descriptions_12 = translation;
      });
      $translate('SecondPage.Comments.Text_11').then(function (translation) {
        $scope.SecondPage_Comments_Text_11 = translation;
      });
      $translate('SecondPage.Comments.Btn_1').then(function (translation) {
        $scope.SecondPage_Comments_Btn_1 = translation;
      });
      $translate('SecondPage.Comments.Btn_2').then(function (translation) {
        $scope.SecondPage_Comments_Btn_2 = translation;
      });
       $translate('SecondPage.Comments.Btn_3').then(function (translation) {
        $scope.SecondPage_Comments_Btn_3 = translation;
      });

    });

      $translate.use($translate.proposedLanguage()).then(function () {});

      $scope.openModal = function (data) {
        $uibModal.open({
          backdropClass: 'backdrop',
          backdrop: 'static',
          animation: false,
          size: 'dialog',
          templateUrl: 'views/modals/email.html',
          resolve: {
            dataModal: function () {
              return {
                data: data,
                lang: $translate.proposedLanguage()
              };
            }
          },
          controller: 'EmailCtrl'
        });
      };


  }]);
