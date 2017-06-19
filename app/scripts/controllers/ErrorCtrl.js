"use strict";
/**
 * Created by Anatoli on 27.09.2016.
 */
/**
 * Created by Anatoli on 16.09.2016.
 */
angular.module('siBelApp')
  .controller('ErrorCtrl',[ '$scope', '$rootScope', '$translate', function ($scope, $rootScope, $translate) {
    $rootScope.$on('$translateChangeSuccess', function () {
      $translate('Error.Title_1').then(function (translation) {
        $scope.Error_Title_1 = translation;
      });
      $translate('Error.Title_2').then(function (translation) {
        $scope.Error_Title_2 = translation;
      });
      $translate('Error.Title_Color').then(function (translation) {
        $scope.Error_Title_Color = translation;
      });
      $translate('Error.Descriptions_1').then(function (translation) {
        $scope.Error_Descriptions_1 = translation;
      });
      $translate('Error.Descriptions_2').then(function (translation) {
        $scope.Error_Descriptions_2 = translation;
      });
      $translate('Error.Btn').then(function (translation) {
        $scope.Error_Btn = translation;
      });
      $translate('Error.Address_1').then(function (translation) {
        $scope.Error_Address_1 = translation;
      });
      $translate('Error.Address_2').then(function (translation) {
        $scope.Error_Address_2 = translation;
      });
    });
    $translate.use($translate.proposedLanguage()).then(function () {});
  }]);
