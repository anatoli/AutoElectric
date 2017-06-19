/**
 * Created by Anatoliy Arinovich on 18.11.2016.
 */
'use strict';
angular.module('siBelApp')
  .controller('CasesCtrl',[ '$scope', '$rootScope', '$translate', '$http', '$anchorScroll', '$uibModal', function ($scope, $rootScope, $translate, $http, $anchorScroll, $uibModal) {
    $rootScope.$on('$translateChangeSuccess', function () {
      $translate('Cases.Slider.Title').then(function (translation) {
        $scope.Cases_Slider_Title = translation;
      });
      $translate('Cases.Slider.Description').then(function (translation) {
        $scope.Cases_Slider_Description = translation;
      });
      $translate('Ideas.Btn_1').then(function (translation) {
        $scope.Ideas_Btn_1 = translation;
      });
      $translate('SLIDER.BTN_2').then(function (translation) {
        $scope.SLIDER_BTN_2 = translation;
      });
      var lang = $translate.proposedLanguage();
      $http.get('cases_'+lang+'.json').then(function (res) {
        $scope.items = res.data;
        console.log($scope.items);
      });

    });
    $translate.use($translate.proposedLanguage()).then(function () {});

    $scope.Active = function (data) {
      $scope.active = data.id;
      $scope.details = data;
      $anchorScroll('details');
    };

    $scope.Email = function (data) {
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
