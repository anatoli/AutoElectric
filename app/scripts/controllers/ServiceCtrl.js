/**
 * Created by Anatoliy Arinovich on 18.11.2016.
 */
'use strict';
angular.module('siBelApp')
  .controller('ServiceCtrl',[ '$scope', '$rootScope', '$translate', function ($scope, $rootScope, $translate) {
    $rootScope.$on('$translateChangeSuccess', function () {
      // $translate('Error.Title_1').then(function (translation) {
      //   $scope.Error_Title_1 = translation;
      // }); // todo template translate form

    });
    $translate.use($translate.proposedLanguage()).then(function () {});
  }]);
