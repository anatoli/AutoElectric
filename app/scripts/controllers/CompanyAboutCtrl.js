'use strict';
angular.module('siBelApp')
  .controller('CompanyAboutCtrl', ['$scope', '$uibModal', '$state', '$translate', '$rootScope', function ($scope, $uibModal, $state, $translate, $rootScope) {

    $rootScope.$on('$translateChangeSuccess', function () {
      $translate('SecondPage.About.Title_1').then(function (translation) {
        $scope.SecondPage_About_Title_1 = translation;
      });
      $translate('SecondPage.About.Text_1_1').then(function (translation) {
        $scope.SecondPage_About_Text_1_1 = translation;
      });
      $translate('SecondPage.About.Text_1_2').then(function (translation) {
        $scope.SecondPage_About_Text_1_2 = translation;
      });
      $translate('SecondPage.About.Title_2').then(function (translation) {
        $scope.SecondPage_About_Title_2 = translation;
      });
      $translate('SecondPage.About.Text_2_1').then(function (translation) {
        $scope.SecondPage_About_Text_2_1 = translation;
      });
      $translate('SecondPage.About.Text_2_2').then(function (translation) {
        $scope.SecondPage_About_Text_2_2 = translation;
      });
      $translate('SecondPage.About.Text_2_2_1').then(function (translation) {
        $scope.SecondPage_About_Text_2_2_1 = translation;
      });
      $translate('SecondPage.About.Text_2_2_2').then(function (translation) {
        $scope.SecondPage_About_Text_2_2_2 = translation;
      })
      ;$translate('SecondPage.About.Text_2_2_3').then(function (translation) {
        $scope.SecondPage_About_Text_2_2_3 = translation;
      });
      $translate('SecondPage.About.Title_3').then(function (translation) {
        $scope.SecondPage_About_Title_3 = translation;
      });
      $translate('SecondPage.About.Text_3_1').then(function (translation) {
        $scope.SecondPage_About_Text_3_1 = translation;
      });
      $translate('SecondPage.Comments.Text_11').then(function (translation) {
        $scope.SecondPage_Comments_Text_11 = translation;
      });
      $translate('SecondPage.Comments.Text_12').then(function (translation) {
        $scope.SecondPage_Comments_Text_12 = translation;
      });
      $translate('SecondPage.Comments.Text_13').then(function (translation) {
        $scope.SecondPage_Comments_Text_13 = translation;
      });
      $translate('SecondPage.Comments.Title_2').then(function (translation) {
        $scope.SecondPage_Comments_Title_2 = translation;
      });
      $translate('SecondPage.Comments.Descriptions_21').then(function (translation) {
        $scope.SecondPage_Comments_Descriptions_21 = translation;
      });
      $translate('SecondPage.Comments.Descriptions_22').then(function (translation) {
        $scope.SecondPage_Comments_Descriptions_22 = translation;
      });
      $translate('SecondPage.Comments.Text_21').then(function (translation) {
        $scope.SecondPage_Comments_Text_21 = translation;
      });
      $translate('SecondPage.Comments.Text_22').then(function (translation) {
        $scope.SecondPage_Comments_Text_22 = translation;
      });
      $translate('SecondPage.Comments.Text_23').then(function (translation) {
        $scope.SecondPage_Comments_Text_23 = translation;
      });
      $translate('SecondPage.Comments.Title_3').then(function (translation) {
        $scope.SecondPage_Comments_Title_3 = translation;
      });
      $translate('SecondPage.Comments.Descriptions_31').then(function (translation) {
        $scope.SecondPage_Comments_Descriptions_31 = translation;
      });
      $translate('SecondPage.Comments.Descriptions_32').then(function (translation) {
        $scope.SecondPage_Comments_Descriptions_32 = translation;
      });
      $translate('SecondPage.Comments.Text_31').then(function (translation) {
        $scope.SecondPage_Comments_Text_31 = translation;
      });

    });
    $translate.use($translate.proposedLanguage()).then(function () {});


  }]);
