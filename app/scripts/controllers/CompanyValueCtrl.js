'use strict';
angular.module('siBelApp')
  .controller('CompanyValueCtrl', ['$scope', '$uibModal', '$state', '$translate', '$rootScope', function ($scope, $uibModal, $state, $translate, $rootScope) {

    $rootScope.$on('$translateChangeSuccess', function () {
      $translate('SecondPage.Value.Title_1').then(function (translation) {
        $scope.SecondPage_Value_Title_1 = translation;
      });
      $translate('SecondPage.Value.Title_2').then(function (translation) {
        $scope.SecondPage_Value_Title_2 = translation;
      });
      $translate('SecondPage.Value.Title_3').then(function (translation) {
        $scope.SecondPage_Value_Title_3 = translation;
      });
      $translate('SecondPage.Value.Title_4').then(function (translation) {
        $scope.SecondPage_Value_Title_4 = translation;
      });
      $translate('SecondPage.Value.Title_5').then(function (translation) {
        $scope.SecondPage_Value_Title_5 = translation;
      });
      $translate('SecondPage.Value.Title_6').then(function (translation) {
        $scope.SecondPage_Value_Title_6 = translation;
      });
      $translate('SecondPage.Value.Text_1').then(function (translation) {
        $scope.SecondPage_Value_Text_1 = translation;
      });
      $translate('SecondPage.Value.Text_2').then(function (translation) {
        $scope.SecondPage_Value_Text_2 = translation;
      });
      $translate('SecondPage.Value.Text_3').then(function (translation) {
        $scope.SecondPage_Value_Text_3 = translation;
      });
      $translate('SecondPage.Value.Text_4').then(function (translation) {
        $scope.SecondPage_Value_Text_4 = translation;
      });
      $translate('SecondPage.Value.Text_5').then(function (translation) {
        $scope.SecondPage_Value_Text_5 = translation;
      });
      $translate('SecondPage.Value.Text_6').then(function (translation) {
        $scope.SecondPage_Value_Text_6 = translation;
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


    $scope.first_blue = false;

  }]);
