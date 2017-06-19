"use strict";
/**
 * Created by Anatoli on 16.09.2016.
 */
angular.module('siBelApp')
  .controller('FooterCtrl', [ '$scope', '$state', '$uibModal',  '$translate', '$rootScope', function ($scope, $state, $uibModal, $translate, $rootScope) {

    $rootScope.$on('$translateChangeSuccess', function () {

      /////// Title  //////////////
      $translate('Footer.nav_1').then(function (translation) {
        $scope.Footer_nav_1 = translation;
      });
      $translate('Footer.nav_2').then(function (translation) {
        $scope.Footer_nav_2 = translation;
      });
      $translate('Footer.nav_3').then(function (translation) {
        $scope.Footer_nav_3 = translation;
      });
      $translate('Footer.nav_4').then(function (translation) {
        $scope.Footer_nav_4 = translation;
      });
      $translate('Footer.nav_5').then(function (translation) {
        $scope.Footer_nav_5 = translation;
      });

      /////// Sub_title/////////
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
      $translate('Header.nav_2_1').then(function (translation) {
        $scope.Header_nav_2_1 = translation;
      });
      $translate('Header.nav_2_2').then(function (translation) {
        $scope.Header_nav_2_2 = translation;
      });
      $translate('Header.nav_2_3').then(function (translation) {
        $scope.Header_nav_2_3 = translation;
      });
      $translate('Header.nav_2_4').then(function (translation) {
        $scope.Header_nav_2_4 = translation;
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

    });
    $translate.use($translate.proposedLanguage()).then(function () {});


    $scope.Go = function (data) {
      $state.go(data);
    };

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
