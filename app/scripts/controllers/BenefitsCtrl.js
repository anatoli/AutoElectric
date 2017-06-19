/**
 * Created by Anatoliy Arinovich on 18.11.2016.
 */
'use strict';
angular.module('siBelApp')
  .controller('BenefitsCtrl',[ '$scope', '$rootScope', '$translate', '$location', '$state', '$uibModal',
    function ($scope, $rootScope, $translate, $location, $state, $uibModal) {
    $rootScope.$on('$translateChangeSuccess', function () {

      $translate('Ideas.Btn_1').then(function (translation) {
        $scope.Ideas_Btn_1 = translation;
      });

      /// slider ///////
      $translate('SLIDER.BTN_2').then(function (translation) {
        $scope.SLIDER_BTN_2 = translation;
      });
      $translate('Benefits.Slider.Title').then(function (translation) {
        $scope.Benefits_Slider_Title = translation;
      });
      $translate('Benefits.Slider.Description').then(function (translation) {
        $scope.Benefits_Slider_Description = translation;
      });

      ///////// icons /////////
      $translate('Benefits.Icon.Title').then(function (translation) {
        $scope.Benefits_Icon_Title = translation;
      });
      $translate('Benefits.Icon.icon_1_title').then(function (translation) {
        $scope.Benefits_Icon_icon_1_title = translation;
      });
      $translate('Benefits.Icon.icon_1_description').then(function (translation) {
        $scope.Benefits_Icon_icon_1_description = translation;
      });
      $translate('Benefits.Icon.icon_1_btn').then(function (translation) {
        $scope.Benefits_Icon_icon_1_btn = translation;
      });
      $translate('Benefits.Icon.icon_2_title').then(function (translation) {
        $scope.Benefits_Icon_icon_2_title = translation;
      });
      $translate('Benefits.Icon.icon_2_description').then(function (translation) {
        $scope.Benefits_Icon_icon_2_description = translation;
      });
      $translate('Benefits.Icon.icon_2_btn').then(function (translation) {
        $scope.Benefits_Icon_icon_2_btn = translation;
      });
      $translate('Benefits.Icon.icon_3_title').then(function (translation) {
        $scope.Benefits_Icon_icon_3_title = translation;
      });
      $translate('Benefits.Icon.icon_3_description').then(function (translation) {
        $scope.Benefits_Icon_icon_3_description = translation;
      });
      $translate('Benefits.Icon.icon_3_btn').then(function (translation) {
        $scope.Benefits_Icon_icon_3_btn = translation;
      });

      /////// Employees /////////////
      $translate('Benefits.Employees.Blue.Title').then(function (translation) {
        $scope.Benefits_Employees_Blue_Title = translation;
      });
      $translate('Benefits.Employees.White.Title').then(function (translation) {
        $scope.Benefits_Employees_White_Title = translation;
      });
      $translate('Benefits.Employees.Blue.Description_1').then(function (translation) {
        $scope.Benefits_Employees_Blue_Description_1 = translation;
      });
      $translate('Benefits.Employees.Blue.Description_2').then(function (translation) {
        $scope.Benefits_Employees_Blue_Description_2 = translation;
      });
      $translate('Benefits.Employees.Blue.Description_2_2').then(function (translation) {
        $scope.Benefits_Employees_Blue_Description_2_2 = translation;
      });
      $translate('Benefits.Employees.Blue.Description_2_3').then(function (translation) {
        $scope.Benefits_Employees_Blue_Description_2_3 = translation;
      });
      $translate('Benefits.Employees.Blue.Description_3').then(function (translation) {
        $scope.Benefits_Employees_Blue_Description_3 = translation;
      });
      $translate('Benefits.Employees.Orange.Title_1').then(function (translation) {
        $scope.Benefits_Employees_Orange_Title_1 = translation;
      });
      $translate('Benefits.Employees.Orange.Title_2').then(function (translation) {
        $scope.Benefits_Employees_Orange_Title_2 = translation;
      });
      $translate('Benefits.Employees.Orange.Description_1').then(function (translation) {
        $scope.Benefits_Employees_Orange_Description_1 = translation;
      });
      /////// innovations /////////////
      $translate('Benefits.Innovations.Blue.Title').then(function (translation) {
        $scope.Benefits_Innovations_Blue_Title = translation;
      });
      $translate('Benefits.Innovations.White.Title').then(function (translation) {
        $scope.Benefits_Innovations_White_Title = translation;
      });
      $translate('Benefits.Innovations.Blue.Description_1').then(function (translation) {
        $scope.Benefits_Innovations_Blue_Description_1 = translation;
      });
      $translate('Benefits.Innovations.Blue.Description_2').then(function (translation) {
        $scope.Benefits_Innovations_Blue_Description_2 = translation;
      });
      $translate('Benefits.Innovations.Blue.Description_3').then(function (translation) {
        $scope.Benefits_Innovations_Blue_Description_3 = translation;
      });
      $translate('Benefits.Innovations.Orange.Title_1').then(function (translation) {
        $scope.Benefits_Innovations_Orange_Title_1 = translation;
      });
      $translate('Benefits.Innovations.Orange.Title_2').then(function (translation) {
        $scope.Benefits_Innovations_Orange_Title_2 = translation;
      });
      $translate('Benefits.Innovations.Orange.Description_1').then(function (translation) {
        $scope.Benefits_Innovations_Orange_Description_1 = translation;
      });
      $translate('Benefits.Innovations.Orange.Description_2').then(function (translation) {
        $scope.Benefits_Innovations_Orange_Description_2 = translation;
      });

      $translate('Benefits.Innovations.White.Description_1').then(function (translation) {
        $scope.Benefits_Innovations_White_Description_1 = translation;
      });
      $translate('Benefits.Innovations.White.Description_2').then(function (translation) {
        $scope.Benefits_Innovations_White_Description_2 = translation;
      });
      $translate('Benefits.Innovations.White.li_1').then(function (translation) {
        $scope.Benefits_Innovations_White_li_1 = translation;
      });
      $translate('Benefits.Innovations.White.li_2').then(function (translation) {
        $scope.Benefits_Innovations_White_li_2 = translation;
      });
      $translate('Benefits.Innovations.White.li_3').then(function (translation) {
        $scope.Benefits_Innovations_White_li_3 = translation;
      });
      /////// standards /////////////
      $translate('Benefits.Standards.Blue.Title').then(function (translation) {
        $scope.Benefits_Standards_Blue_Title = translation;
      });
      $translate('Benefits.Standards.White.Title').then(function (translation) {
        $scope.Benefits_Standards_White_Title = translation;
      });
      $translate('Benefits.Standards.Blue.Description_1').then(function (translation) {
        $scope.Benefits_Standards_Blue_Description_1 = translation;
      });
      $translate('Benefits.Standards.Blue.Description_2').then(function (translation) {
        $scope.Benefits_Standards_Blue_Description_2 = translation;
      });
      $translate('Benefits.Standards.Blue.Description_3').then(function (translation) {
        $scope.Benefits_Standards_Blue_Description_3 = translation;
      });
      $translate('Benefits.Standards.Blue.btn_1').then(function (translation) {
        $scope.Benefits_Standards_Blue_btn_1 = translation;
      });
      $translate('Benefits.Standards.Orange.Title_1').then(function (translation) {
        $scope.Benefits_Standards_Orange_Title_1 = translation;
      });
      $translate('Benefits.Standards.Orange.Title_2').then(function (translation) {
        $scope.Benefits_Standards_Orange_Title_2 = translation;
      });
      $translate('Benefits.Standards.Orange.Description_1').then(function (translation) {
        $scope.Benefits_Standards_Orange_Description_1 = translation;
      });

      $translate('Benefits.Standards.White.Description_1').then(function (translation) {
        $scope.Benefits_Standards_White_Description_1 = translation;
      });
      $translate('Benefits.Standards.White.Description_2').then(function (translation) {
        $scope.Benefits_Standards_White_Description_2 = translation;
      });
      $translate('Benefits.Standards.White.Description_3').then(function (translation) {
        $scope.Benefits_Standards_White_Description_3 = translation;
      });
    });
    $translate.use($translate.proposedLanguage()).then(function () {});

    function iconActive() {
      var arr = $location.$$path.split('/');
      var n = arr.length-1;
      $scope.state = "."+arr[n];
    }

    iconActive();

    $rootScope.$on('$stateChangeSuccess',
      function(){
        iconActive();
      });




    $scope.Go = function (data) {
      $state.go('root.benefits'+data);
      $scope.state = data;
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


    $scope.openModal = function (data) {
      $uibModal.open({
        backdropClass: 'backdrop',
        backdrop: 'static',
        animation: false,
        size: 'dialog',
        templateUrl: 'views/modals/certificate.html',
        resolve: {
          dataModal: function () {
            return {
              data: data,
              lang: $translate.proposedLanguage()
            };
          }
        },
        controller: 'CertificateCtrl',
      });
    };
  }]);

