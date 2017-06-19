'use strict';
angular.module('siBelApp')
  .controller('CompanyTimeCtrl', ['$scope', '$uibModal', '$state', '$translate', '$rootScope', function ($scope, $uibModal, $state, $translate, $rootScope) {

    $rootScope.$on('$translateChangeSuccess', function () {
      $translate('SecondPage.Time.Title_1').then(function (translation) {
        $scope.SecondPage_Time_Title_1 = translation;
      });
      $translate('SecondPage.Time.Title_2').then(function (translation) {
        $scope.SecondPage_Time_Title_2 = translation;
      });
      $translate('SecondPage.Time.Text_1').then(function (translation) {
        $scope.SecondPage_Time_Text_1 = translation;
      });
      $translate('SecondPage.Time.Text_2').then(function (translation) {
        $scope.SecondPage_Time_Text_2 = translation;
      });
      $translate('SecondPage.Time.Head_li_1').then(function (translation) {
        $scope.SecondPage_Time_Head_li_1 = translation;
      });
      $translate('SecondPage.Time.Head_li_2').then(function (translation) {
        $scope.SecondPage_Time_Head_li_2 = translation;
      });
      $translate('SecondPage.Time.Head_li_3').then(function (translation) {
        $scope.SecondPage_Time_Head_li_3 = translation;
      });
      $translate('SecondPage.Time.Head_li_4').then(function (translation) {
        $scope.SecondPage_Time_Head_li_4 = translation;
      });
      $translate('SecondPage.Time.li_1').then(function (translation) {
        $scope.SecondPage_Time_li_1 = translation;
      });
      $translate('SecondPage.Time.li_2').then(function (translation) {
        $scope.SecondPage_Time_li_2 = translation;
      });
      $translate('SecondPage.Time.li_3').then(function (translation) {
        $scope.SecondPage_Time_li_3 = translation;
      });
      $translate('SecondPage.Time.li_4').then(function (translation) {
        $scope.SecondPage_Time_li_4 = translation;
      });
      $translate('SecondPage.Time.Descriptions_Text').then(function (translation) {
        $scope.SecondPage_Time_Descriptions_Text = translation;
      });
      $translate('SecondPage.Time.Btn').then(function (translation) {
        $scope.SecondPage_Time_Btn = translation;
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
