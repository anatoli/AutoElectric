/**
 * Created by Anatoliy Arinovich on 18.11.2016.
 */
'use strict';
angular.module('siBelApp')
  .controller('GuaranteesCtrl',[ '$scope', '$rootScope', '$translate', '$uibModal', function ($scope, $rootScope, $translate, $uibModal) {
    $rootScope.$on('$translateChangeSuccess', function () {
      $translate('Ideas.Btn_1').then(function (translation) {
        $scope.Ideas_Btn_1 = translation;
      });
      //// slider ///////
      $translate('Guarantees.Slider.Title').then(function (translation) {
        $scope.Guarantees_Slider_Title = translation;
      });
      $translate('Guarantees.Slider.Description').then(function (translation) {
        $scope.Guarantees_Slider_Description = translation;
      });

      ////// Guarantee_1///////
      $translate('Guarantees.Guarantee_1.Title_1').then(function (translation) {
        $scope.Guarantees_Guarantee_1_Title_1 = translation;
      });
      $translate('Guarantees.Guarantee_1.Title_2').then(function (translation) {
        $scope.Guarantees_Guarantee_1_Title_2 = translation;
      });
      $translate('Guarantees.Guarantee_1.Description').then(function (translation) {
        $scope.Guarantees_Guarantee_1_Description = translation;
      });
      $translate('Guarantees.Guarantee_1.li_1').then(function (translation) {
        $scope.Guarantees_Guarantee_1_li_1 = translation;
      });
      $translate('Guarantees.Guarantee_1.li_2').then(function (translation) {
        $scope.Guarantees_Guarantee_1_li_2 = translation;
      })
      ;$translate('Guarantees.Guarantee_1.li_3').then(function (translation) {
        $scope.Guarantees_Guarantee_1_li_3 = translation;
      });
      $translate('Guarantees.Guarantee_1.li_4').then(function (translation) {
        $scope.Guarantees_Guarantee_1_li_4 = translation;
      });
      $translate('Guarantees.Guarantee_1.li_5').then(function (translation) {
        $scope.Guarantees_Guarantee_1_li_5 = translation;
      });
      $translate('Guarantees.Guarantee_1.li_6').then(function (translation) {
        $scope.Guarantees_Guarantee_1_li_6 = translation;
      });
      $translate('Guarantees.Guarantee_1.li_7').then(function (translation) {
        $scope.Guarantees_Guarantee_1_li_7 = translation;
      });

      ////// Guarantee_2///////
      $translate('Guarantees.Guarantee_2.Title_1').then(function (translation) {
        $scope.Guarantees_Guarantee_2_Title_1 = translation;
      });
      $translate('Guarantees.Guarantee_2.Description_1').then(function (translation) {
        $scope.Guarantees_Guarantee_2_Description_1 = translation;
      });
      $translate('Guarantees.Guarantee_2.Description_2').then(function (translation) {
        $scope.Guarantees_Guarantee_2_Description_2 = translation;
      });
      $translate('Guarantees.Guarantee_2.Description_3').then(function (translation) {
        $scope.Guarantees_Guarantee_2_Description_3 = translation;
      });

      ////// Guarantee_3///////
      $translate('Guarantees.Guarantee_3.Title_1').then(function (translation) {
        $scope.Guarantees_Guarantee_3_Title_1 = translation;
      });
      $translate('Guarantees.Guarantee_3.Description_1').then(function (translation) {
        $scope.Guarantees_Guarantee_3_Description_1 = translation;
      });

      ////// Guarantee_4///////
      $translate('Guarantees.Guarantee_4.Title_1').then(function (translation) {
        $scope.Guarantees_Guarantee_4_Title_1 = translation;
      });
      $translate('Guarantees.Guarantee_4.Description_1').then(function (translation) {
        $scope.Guarantees_Guarantee_4_Description_1 = translation;
      });
      $translate('Guarantees.Guarantee_4.Description_2').then(function (translation) {
        $scope.Guarantees_Guarantee_4_Description_2 = translation;
      });
      $translate('Guarantees.Guarantee_4.Description_3').then(function (translation) {
        $scope.Guarantees_Guarantee_4_Description_3 = translation;
      });
      $translate('Guarantees.Guarantee_4.Description_4_1').then(function (translation) {
        $scope.Guarantees_Guarantee_4_Description_4_1 = translation;
      });
      $translate('Guarantees.Guarantee_4.Description_4_2').then(function (translation) {
        $scope.Guarantees_Guarantee_4_Description_4_2 = translation;
      });
      $translate('Guarantees.Guarantee_4.Description_5').then(function (translation) {
        $scope.Guarantees_Guarantee_4_Description_5 = translation;
      });
      $translate('Guarantees.Guarantee_4.Description_6').then(function (translation) {
        $scope.Guarantees_Guarantee_4_Description_6 = translation;
      });



    });
    $translate.use($translate.proposedLanguage()).then(function () {});

    $scope.state = 'all';

    $scope.Filter = function (data) {
      if( $scope.state === data){
        $scope.state = 'all';
      }else{
        $scope.state = data;
      }
    };

    $scope.DetailsOpen = function (data) {
      $scope.first= false;
      $scope.second= false;
      $scope.third = false;
      $scope.fourth = false;
      $scope.fifth = false;
      $scope.sixth = false;
      $scope.seventh = false;
      $scope.eighth = false;
      $scope.ninth = false;
      if(data==='first'){
        $scope.first= !$scope.first;
      }else if(data==='second'){
        $scope.second= !$scope.second;
      }else if(data==='third') {
        $scope.third = !$scope.third;
      }else if(data==='fourth') {
        $scope.fourth = !$scope.fourth;
      }else if(data==='fifth') {
        $scope.fifth = !$scope.fifth;
      }else if(data==='sixth') {
        $scope.sixth = !$scope.sixth;
      }else if(data==='seventh') {
        $scope.seventh = !$scope.seventh;
      }else if(data==='eighth') {
        $scope.eighth = !$scope.eighth;
      }else if(data==='ninth') {
        $scope.ninth = !$scope.ninth;
      }
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
