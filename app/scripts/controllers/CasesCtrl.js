/**
 * Created by Anatoliy Arinovich on 18.11.2016.
 */
'use strict';
angular.module('siBelApp')
  .controller('CasesCtrl',[ '$scope', '$rootScope', '$translate', '$http', '$anchorScroll', '$uibModal', function ($scope, $rootScope, $translate, $http, $anchorScroll, $uibModal) {

    $http.get('cases.json').then(function (res) {
      $scope.items = res.data;
    });

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
