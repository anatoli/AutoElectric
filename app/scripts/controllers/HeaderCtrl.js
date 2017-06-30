"use strict";
/**
 * Created by Anatoli on 16.09.2016.
 */
angular.module('siBelApp')
  .controller('HeaderCtrl',['$scope', '$rootScope', '$state', '$translate',  function ($scope, $rootScope, $state, $translate) {
    $scope.by=false;
    $scope.ru=true;
    $scope.en=false;
    $scope.tabActive = $state.current.name = null ? "root.main" : $state.current.name ;
    $translate.use('ru');

    $scope.opened1=false;

    $scope.changeLanguage = function (key) {
      if(key === 'by'){
        $scope.by=true;
        $scope.ru=false;
        $scope.en=false;
      }else
      if(key === 'ru'){
        $scope.by=false;
        $scope.ru=true;
        $scope.en=false;
      }else
      if(key === 'en'){
        $scope.by=false;
        $scope.ru=false;
        $scope.en=true;
      }
      $translate.use(key);
    };

    // $scope.changeLanguage = function (key) {
    //
    // };
    $rootScope.$on('$translateChangeSuccess', function () {
      $translate('Header.nav_1').then(function (translation) {
        $scope.Header_nav_1 = translation;
      });
      $translate('Header.nav_1_1').then(function (translation) {
        $scope.Header_nav_1_1 = translation;
      });
      $translate('Header.nav_1_2').then(function (translation) {
        $scope.Header_nav_1_2 = translation;
      });
      $translate('Header.nav_1_3').then(function (translation) {
        $scope.Header_nav_1_3 = translation;
      });
      $translate('Header.nav_1_4').then(function (translation) {
        $scope.Header_nav_1_4 = translation;
      });
      $translate('Header.nav_1_5').then(function (translation) {
        $scope.Header_nav_1_5 = translation;
      });
      $translate('Header.nav_2').then(function (translation) {
        $scope.Header_nav_2 = translation;
      });
      $translate('Header.nav_2_1').then(function (translation) {
        $scope.Header_nav_2_1 = translation;
      });
      $translate('Header.nav_2_1_1').then(function (translation) {
        $scope.Header_nav_2_1_1 = translation;
      });
      $translate('Header.nav_2_1_2').then(function (translation) {
        $scope.Header_nav_2_1_2 = translation;
      });
      $translate('Header.nav_2_1_3').then(function (translation) {
        $scope.Header_nav_2_1_3 = translation;
      });
      $translate('Header.nav_2_2').then(function (translation) {
        $scope.Header_nav_2_2 = translation;
      });
      $translate('Header.nav_2_2_1').then(function (translation) {
        $scope.Header_nav_2_2_1 = translation;
      });
      $translate('Header.nav_2_2_2').then(function (translation) {
        $scope.Header_nav_2_2_2 = translation;
      });
      $translate('Header.nav_2_2_3').then(function (translation) {
        $scope.Header_nav_2_2_3 = translation;
      });
      $translate('Header.nav_2_3').then(function (translation) {
        $scope.Header_nav_2_3 = translation;
      });
      $translate('Header.nav_2_3_1').then(function (translation) {
        $scope.Header_nav_2_3_1 = translation;
      });
      $translate('Header.nav_2_3_2').then(function (translation) {
        $scope.Header_nav_2_3_2 = translation;
      });
      $translate('Header.nav_2_3_3').then(function (translation) {
        $scope.Header_nav_2_3_3 = translation;
      });
      $translate('Header.nav_2_4').then(function (translation) {
        $scope.Header_nav_2_4 = translation;
      });
      $translate('Header.nav_3').then(function (translation) {
        $scope.Header_nav_3 = translation;
      });
      $translate('Header.nav_4').then(function (translation) {
        $scope.Header_nav_4 = translation;
      });
      $translate('Header.nav_4_1').then(function (translation) {
        $scope.Header_nav_4_1 = translation;
      });
      $translate('Header.nav_4_2').then(function (translation) {
        $scope.Header_nav_4_2 = translation;
      });
      $translate('Header.nav_4_3').then(function (translation) {
        $scope.Header_nav_4_3 = translation;
      });
      $translate('Header.nav_4_4').then(function (translation) {
        $scope.Header_nav_4_4 = translation;
      });

      $translate('Header.nav_5').then(function (translation) {
        $scope.Header_nav_5 = translation;
      });
    });
    $translate.use($translate.proposedLanguage()).then(function () {});


    // $scope.Start = function(data){
    //
    //   $translate('TITLE').then(function (result) {
    //     $scope.fruitName = result;
    //   });
    // }


    $scope.stateGo = function (data, stateParams, $event) {
      if(data !=='#/'){
        $state.go(data, {param: stateParams});
        if($event){
          $event.stopPropagation();
        }else{
          event.stopPropagation();
          $event.stopPropagation();
          $event.preventDefault();
        }

      }
      // $scope.tabActive = data;
    };

    // function iconActive() {
    //   var arr = $location.$$path.split('/');
    //   var n = arr.length-1;
    //   if(arr[n]=== 'company'){
    //     $state.go('root.company.about');
    //     $scope.state='.about';
    //   }else {
    //     $scope.state = "."+arr[n];
    //   }
    // }

    $rootScope.$on('$stateChangeSuccess',
      function(){
      debugger
        $scope.tabActive = $state.current.name;
      });

    $scope.MouseOut = function () {
      $scope.opened1=false;
    };
    $scope.MouseOver = function () {
      $scope.opened1=true;
    };

  }]);
