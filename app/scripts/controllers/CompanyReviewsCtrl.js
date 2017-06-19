"use strict";
/**
 * Created by Anatoli on 19.09.2016.
 */
/**
 * Created by Anatoli on 16.09.2016.
 */
angular.module('siBelApp')
  .controller('CompanyReviewsCtrl', ['$scope', '$uibModal', '$state', '$translate', '$rootScope',
    function ($scope, $uibModal, $state, $translate, $rootScope) {



    $scope.Go = function (data) {
      $state.go('root.company'+data);
      $scope.state = data;
    };

     $scope.DetailsOpen = function (data) {
       $scope.first= false;
       $scope.second= false;
       $scope.third = false;
       $scope.fourth = false;
       if(data==='first'){
         $scope.first= !$scope.first;
       }else if(data==='second'){
         $scope.second= !$scope.second;
       }else if(data==='third') {
         $scope.third = !$scope.third;
       }else if(data==='fourth') {
         $scope.fourth = !$scope.fourth;
       }
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

    $rootScope.$on('$translateChangeSuccess', function () {
      $translate('SecondPage.Comments.Global_Title').then(function (translation) {
        $scope.SecondPage_Comments_Global_Title = translation;
      });
      $translate('SecondPage.Comments.Global_description_1').then(function (translation) {
        $scope.SecondPage_Comments_Global_description_1 = translation;
      });
      // $translate('SecondPage.Comments.Global_description_2').then(function (translation) {
      //   $scope.SecondPage_Comments_Global_description_2 = translation;
      // });
      $translate('SecondPage.Slider.Btn_1').then(function (translation) {
        $scope.SecondPage_Slider_Btn_1 = translation;
      });
      $translate('SecondPage.Slider.Btn_2').then(function (translation) {
        $scope.SecondPage_Slider_Btn_2 = translation;
      });

      $translate('SecondPage.Icons.Title').then(function (translation) {
        $scope.SecondPage_Icons_Title = translation;
      });
      $translate('SecondPage.Icons.Header_ICO_1').then(function (translation) {
        $scope.SecondPage_Icons_Header_ICO_1 = translation;
      });
      $translate('SecondPage.Icons.Header_ICO_2').then(function (translation) {
        $scope.SecondPage_Icons_Header_ICO_2 = translation;
      });
      $translate('SecondPage.Icons.Header_ICO_3').then(function (translation) {
        $scope.SecondPage_Icons_Header_ICO_3 = translation;
      });
      $translate('SecondPage.Icons.Text_ICO_1').then(function (translation) {
        $scope.SecondPage_Icons_Text_ICO_1 = translation;
      });
      $translate('SecondPage.Icons.Text_ICO_2').then(function (translation) {
        $scope.SecondPage_Icons_Text_ICO_2 = translation;
      });
      $translate('SecondPage.Icons.Text_ICO_3').then(function (translation) {
        $scope.SecondPage_Icons_Text_ICO_3 = translation;
      });
      $translate('SecondPage.Icons.Btn_ICO_1').then(function (translation) {
        $scope.SecondPage_Icons_Btn_ICO_1 = translation;
      });
      $translate('SecondPage.Icons.Btn_ICO_2').then(function (translation) {
        $scope.SecondPage_Icons_Btn_ICO_2 = translation;
      });
      $translate('SecondPage.Icons.Btn_ICO_3').then(function (translation) {
        $scope.SecondPage_Icons_Btn_ICO_3 = translation;
      });
      $translate('SecondPage.Comments.Title').then(function (translation) {
        $scope.SecondPage_Comments_Title = translation;
      });
      $translate('SecondPage.Comments.Descriptions_11').then(function (translation) {
        $scope.SecondPage_Comments_Descriptions_11 = translation;
      });
      $translate('SecondPage.Comments.Descriptions_12').then(function (translation) {
        $scope.SecondPage_Comments_Descriptions_12 = translation;
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
      $translate('SecondPage.Comments.Title_4').then(function (translation) {
        $scope.SecondPage_Comments_Title_4 = translation;
      });
      $translate('SecondPage.Comments.Descriptions_41').then(function (translation) {
        $scope.SecondPage_Comments_Descriptions_41 = translation;
      });
      $translate('SecondPage.Comments.Descriptions_42').then(function (translation) {
        $scope.SecondPage_Comments_Descriptions_42 = translation;
      });
      $translate('SecondPage.Comments.Text_41').then(function (translation) {
        $scope.SecondPage_Comments_Text_41 = translation;
      });
      $translate('SecondPage.Comments.Text_42').then(function (translation) {
        $scope.SecondPage_Comments_Text_42 = translation;
      });
      $translate('SecondPage.Comments.Text_43').then(function (translation) {
        $scope.SecondPage_Comments_Text_43 = translation;
      });$translate('SecondPage.Comments.Text_44').then(function (translation) {
        $scope.SecondPage_Comments_Text_44 = translation;
      });
      $translate('SecondPage.Comments.Btn_1').then(function (translation) {
        $scope.SecondPage_Comments_Btn_1 = translation;
      });
      $translate('SecondPage.Comments.Btn_2').then(function (translation) {
        $scope.SecondPage_Comments_Btn_2 = translation;
      });

    });

    $translate.use($translate.proposedLanguage()).then(function () {});


  }]);
