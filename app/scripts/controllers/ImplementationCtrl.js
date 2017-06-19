/**
 * Created by Anatoliy Arinovich on 30.11.2016.
 */
/**
 * Created by Anatoliy Arinovich on 18.11.2016.
 */
'use strict';
angular.module('siBelApp')
  .controller('ImplementationCtrl',[
    '$scope',
    '$uibModal',
    '$state',
    '$translate',
    '$rootScope',
    '$location',
    '$anchorScroll',
    function ($scope, $uibModal, $state, $translate, $rootScope, $location, $anchorScroll) {
      $rootScope.$on('$translateChangeSuccess', function () {
        /////// slider //////////
        $translate('Implementation.Slider.Title').then(function (translation) {
          $scope.Implementation_Slider_Title = translation;
        });
        $translate('Implementation.Slider.Description').then(function (translation) {
          $scope.Implementation_Slider_Description = translation;
        });
        $translate('SLIDER.BTN_2').then(function (translation) {
          $scope.SLIDER_BTN_2 = translation;
        });

        /////// filter  //////////////
        $translate('Implementation.Filter_btn_1').then(function (translation) {
          $scope.Implementation_Filter_btn_1 = translation;
        });
        $translate('Implementation.Filter_btn_2').then(function (translation) {
          $scope.Implementation_Filter_btn_2 = translation;
        });
        $translate('Implementation.Filter_btn_3').then(function (translation) {
          $scope.Implementation_Filter_btn_3 = translation;
        });


        ////// All  ////////////////

        $translate('Ideas.Btn_1').then(function (translation) {
          $scope.Ideas_Btn_1 = translation;
        });
        $translate('Implementation.All.Title_1').then(function (translation) {
          $scope.Implementation_All_Title_1 = translation;
        });
        $translate('Implementation.All.Title_2').then(function (translation) {
          $scope.Implementation_All_Title_2 = translation;
        });
        $translate('Implementation.All.Title_3_1').then(function (translation) {
          $scope.Implementation_All_Title_3_1 = translation;
        });
        $translate('Implementation.All.Title_3_2').then(function (translation) {
          $scope.Implementation_All_Title_3_2 = translation;
        });
        $translate('Implementation.All.Title_4').then(function (translation) {
          $scope.Implementation_All_Title_4 = translation;
        });
        $translate('Implementation.All.Title_5').then(function (translation) {
          $scope.Implementation_All_Title_5 = translation;
        });

        //////// Project_1 ///////
        $translate('Implementation.Project_1.Title_1').then(function (translation) {
          $scope.Implementation_Project_1_Title_1 = translation;
        });
        $translate('Implementation.Project_1.Client').then(function (translation) {
          $scope.Implementation_Project_1_Client = translation;
        });
        $translate('Implementation.Project_1.Description_1').then(function (translation) {
          $scope.Implementation_Project_1_Description_1 = translation;
        });
        $translate('Implementation.Project_1.Description_2').then(function (translation) {
          $scope.Implementation_Project_1_Description_2 = translation;
        });
        $translate('Implementation.Project_1.Description_3').then(function (translation) {
          $scope.Implementation_Project_1_Description_3 = translation;
        });
        $translate('Implementation.Project_1.Description_4').then(function (translation) {
          $scope.Implementation_Project_1_Description_4 = translation;
        });
        $translate('Implementation.Project_1.li_1').then(function (translation) {
          $scope.Implementation_Project_1_li_1 = translation;
        });
        $translate('Implementation.Project_1.li_2').then(function (translation) {
          $scope.Implementation_Project_1_li_2 = translation;
        });
        $translate('Implementation.Project_1.li_3').then(function (translation) {
          $scope.Implementation_Project_1_li_3 = translation;
        });
        $translate('Implementation.Project_1.li_4').then(function (translation) {
          $scope.Implementation_Project_1_li_4 = translation;
        });
        $translate('Implementation.Project_1.li_5').then(function (translation) {
          $scope.Implementation_Project_1_li_5 = translation;
        });
        //////// Project_2 ///////
        $translate('Implementation.Project_2.Title_1').then(function (translation) {
          $scope.Implementation_Project_2_Title_1 = translation;
        });
        $translate('Implementation.Project_2.Client').then(function (translation) {
          $scope.Implementation_Project_2_Client = translation;
        });
        $translate('Implementation.Project_2.Description_1').then(function (translation) {
          $scope.Implementation_Project_2_Description_1 = translation;
        });
        $translate('Implementation.Project_2.Description_2').then(function (translation) {
          $scope.Implementation_Project_2_Description_2 = translation;
        });
        $translate('Implementation.Project_2.Description_3').then(function (translation) {
          $scope.Implementation_Project_2_Description_3 = translation;
        });
        $translate('Implementation.Project_2.Description_4').then(function (translation) {
          $scope.Implementation_Project_2_Description_4 = translation;
        });
        $translate('Implementation.Project_2.li_1').then(function (translation) {
          $scope.Implementation_Project_2_li_1 = translation;
        });
        $translate('Implementation.Project_2.li_2').then(function (translation) {
          $scope.Implementation_Project_2_li_2 = translation;
        });
        $translate('Implementation.Project_2.li_3').then(function (translation) {
          $scope.Implementation_Project_2_li_3 = translation;
        });
        $translate('Implementation.Project_2.li_4').then(function (translation) {
          $scope.Implementation_Project_2_li_4 = translation;
        });
        $translate('Implementation.Project_2.li_5').then(function (translation) {
          $scope.Implementation_Project_2_li_5 = translation;
        });
        $translate('Implementation.Project_2.li_6').then(function (translation) {
          $scope.Implementation_Project_2_li_6 = translation;
        });

        //////// Project_3 ///////
        $translate('Implementation.Project_3.Title_1').then(function (translation) {
          $scope.Implementation_Project_3_Title_1 = translation;
        });
        $translate('Implementation.Project_3.Client').then(function (translation) {
          $scope.Implementation_Project_3_Client = translation;
        });
        $translate('Implementation.Project_3.Description_1').then(function (translation) {
          $scope.Implementation_Project_3_Description_1 = translation;
        });
        $translate('Implementation.Project_2.Description_2').then(function (translation) {
          $scope.Implementation_Project_3_Description_2 = translation;
        });
        $translate('Implementation.Project_3.Description_3').then(function (translation) {
          $scope.Implementation_Project_3_Description_3 = translation;
        });
        $translate('Implementation.Project_3.Description_4').then(function (translation) {
          $scope.Implementation_Project_3_Description_4 = translation;
        });
        $translate('Implementation.Project_3.li_1').then(function (translation) {
          $scope.Implementation_Project_3_li_1 = translation;
        });
        $translate('Implementation.Project_3.li_2').then(function (translation) {
          $scope.Implementation_Project_3_li_2 = translation;
        });
        $translate('Implementation.Project_3.li_2_1').then(function (translation) {
          $scope.Implementation_Project_3_li_2_1 = translation;
        });
        $translate('Implementation.Project_3.li_2_2').then(function (translation) {
          $scope.Implementation_Project_3_li_2_2 = translation;
        });
        $translate('Implementation.Project_3.li_2_3').then(function (translation) {
          $scope.Implementation_Project_3_li_2_3 = translation;
        });
        $translate('Implementation.Project_3.li_2_4').then(function (translation) {
          $scope.Implementation_Project_3_li_2_4 = translation;
        });
        $translate('Implementation.Project_3.li_2_5').then(function (translation) {
          $scope.Implementation_Project_3_li_2_5 = translation;
        });
        $translate('Implementation.Project_3.li_2_6').then(function (translation) {
          $scope.Implementation_Project_3_li_2_6 = translation;
        });

        //////// Project_4 ///////
        $translate('Implementation.Project_4.Title_1').then(function (translation) {
          $scope.Implementation_Project_4_Title_1 = translation;
        });
        $translate('Implementation.Project_4.Client').then(function (translation) {
          $scope.Implementation_Project_4_Client = translation;
        });
        $translate('Implementation.Project_4.Description_1').then(function (translation) {
          $scope.Implementation_Project_4_Description_1 = translation;
        });
        $translate('Implementation.Project_4.Description_2').then(function (translation) {
          $scope.Implementation_Project_4_Description_2 = translation;
        });
        $translate('Implementation.Project_4.Description_3_li_1').then(function (translation) {
          $scope.Implementation_Project_4_Description_3_li_1 = translation;
        });
        $translate('Implementation.Project_4.Description_3_li_2').then(function (translation) {
          $scope.Implementation_Project_4_Description_3_li_2 = translation;
        });
        $translate('Implementation.Project_4.Description_4').then(function (translation) {
          $scope.Implementation_Project_4_Description_4 = translation;
        });
        $translate('Implementation.Project_4.li_1').then(function (translation) {
          $scope.Implementation_Project_4_li_1 = translation;
        });
        $translate('Implementation.Project_4.li_2').then(function (translation) {
          $scope.Implementation_Project_4_li_2 = translation;
        });
        $translate('Implementation.Project_4.li_3').then(function (translation) {
          $scope.Implementation_Project_4_li_3 = translation;
        });
        $translate('Implementation.Project_4.li_4').then(function (translation) {
          $scope.Implementation_Project_4_li_4 = translation;
        });

        //////// Project_5 ///////
        $translate('Implementation.Project_5.Title_1').then(function (translation) {
          $scope.Implementation_Project_5_Title_1 = translation;
        });
        $translate('Implementation.Project_5.Client').then(function (translation) {
          $scope.Implementation_Project_5_Client = translation;
        });
        $translate('Implementation.Project_5.Description_1').then(function (translation) {
          $scope.Implementation_Project_5_Description_1 = translation;
        });
        $translate('Implementation.Project_5.Description_2').then(function (translation) {
          $scope.Implementation_Project_5_Description_2 = translation;
        });
        $translate('Implementation.Project_5.Description_3').then(function (translation) {
          $scope.Implementation_Project_5_Description_3 = translation;
        });
        $translate('Implementation.Project_5.Description_4').then(function (translation) {
          $scope.Implementation_Project_5_Description_4 = translation;
        });
        $translate('Implementation.Project_5.li_1').then(function (translation) {
          $scope.Implementation_Project_5_li_1 = translation;
        });
        $translate('Implementation.Project_5.li_2').then(function (translation) {
          $scope.Implementation_Project_5_li_2 = translation;
        });
        $translate('Implementation.Project_5.li_3').then(function (translation) {
          $scope.Implementation_Project_5_li_3 = translation;
        });
        $translate('Implementation.Project_5.li_4').then(function (translation) {
          $scope.Implementation_Project_5_li_4 = translation;
        });

        //////// Project_6 ///////
        $translate('Implementation.Project_6.Title_1').then(function (translation) {
          $scope.Implementation_Project_6_Title_1 = translation;
        });
        $translate('Implementation.Project_6.Client').then(function (translation) {
          $scope.Implementation_Project_6_Client = translation;
        });
        $translate('Implementation.Project_6.Description_1').then(function (translation) {
          $scope.Implementation_Project_6_Description_1 = translation;
        });
        $translate('Implementation.Project_6.Description_2').then(function (translation) {
          $scope.Implementation_Project_6_Description_2 = translation;
        });
        $translate('Implementation.Project_6.Description_3').then(function (translation) {
          $scope.Implementation_Project_6_Description_3 = translation;
        });
        $translate('Implementation.Project_6.Description_4').then(function (translation) {
          $scope.Implementation_Project_6_Description_4 = translation;
        });
        $translate('Implementation.Project_6.li_1').then(function (translation) {
          $scope.Implementation_Project_6_li_1 = translation;
        });
        $translate('Implementation.Project_6.li_2').then(function (translation) {
          $scope.Implementation_Project_6_li_2 = translation;
        });
        $translate('Implementation.Project_6.li_3').then(function (translation) {
          $scope.Implementation_Project_6_li_3 = translation;
        });
        $translate('Implementation.Project_6.li_4').then(function (translation) {
          $scope.Implementation_Project_6_li_4 = translation;
        });
        $translate('Implementation.Project_6.li_5').then(function (translation) {
          $scope.Implementation_Project_6_li_5 = translation;
        });

        //////// Project_7 ///////
        $translate('Implementation.Project_7.Title_1').then(function (translation) {
          $scope.Implementation_Project_7_Title_1 = translation;
        });
        $translate('Implementation.Project_7.Client').then(function (translation) {
          $scope.Implementation_Project_7_Client = translation;
        });
        $translate('Implementation.Project_7.Description_1').then(function (translation) {
          $scope.Implementation_Project_7_Description_1 = translation;
        });
        $translate('Implementation.Project_7.Description_2').then(function (translation) {
          $scope.Implementation_Project_7_Description_2 = translation;
        });
        $translate('Implementation.Project_7.Description_3').then(function (translation) {
          $scope.Implementation_Project_7_Description_3 = translation;
        });
        $translate('Implementation.Project_7.Description_4').then(function (translation) {
          $scope.Implementation_Project_7_Description_4 = translation;
        });
        $translate('Implementation.Project_7.li_1').then(function (translation) {
          $scope.Implementation_Project_7_li_1 = translation;
        });
        $translate('Implementation.Project_7.li_2').then(function (translation) {
          $scope.Implementation_Project_7_li_2 = translation;
        });
        $translate('Implementation.Project_7.li_3').then(function (translation) {
          $scope.Implementation_Project_7_li_3 = translation;
        });
        $translate('Implementation.Project_7.li_4').then(function (translation) {
          $scope.Implementation_Project_7_li_4 = translation;
        });
        //////// Project_8 ///////
        $translate('Implementation.Project_8.Title_1').then(function (translation) {
          $scope.Implementation_Project_8_Title_1 = translation;
        });
        $translate('Implementation.Project_8.Client').then(function (translation) {
          $scope.Implementation_Project_8_Client = translation;
        });
        $translate('Implementation.Project_8.Description_1').then(function (translation) {
          $scope.Implementation_Project_8_Description_1 = translation;
        });
        $translate('Implementation.Project_8.Description_2').then(function (translation) {
          $scope.Implementation_Project_8_Description_2 = translation;
        });
        $translate('Implementation.Project_8.Description_3').then(function (translation) {
          $scope.Implementation_Project_8_Description_3 = translation;
        });
        $translate('Implementation.Project_8.Description_4').then(function (translation) {
          $scope.Implementation_Project_8_Description_4 = translation;
        });

        //////// Project_9 ///////
        $translate('Implementation.Project_9.Title_1').then(function (translation) {
          $scope.Implementation_Project_9_Title_1 = translation;
        });
        $translate('Implementation.Project_9.Client').then(function (translation) {
          $scope.Implementation_Project_9_Client = translation;
        });
        $translate('Implementation.Project_9.Description_1').then(function (translation) {
          $scope.Implementation_Project_9_Description_1 = translation;
        });
        $translate('Implementation.Project_9.Description_2').then(function (translation) {
          $scope.Implementation_Project_9_Description_2 = translation;
        });
        $translate('Implementation.Project_9.Description_3').then(function (translation) {
          $scope.Implementation_Project_9_Description_3 = translation;
        });
        $translate('Implementation.Project_9.Description_4_li_1').then(function (translation) {
          $scope.Implementation_Project_9_Description_4_li_1 = translation;
        });
        $translate('Implementation.Project_9.Description_4_li_2').then(function (translation) {
          $scope.Implementation_Project_9_Description_4_li_2 = translation;
        });
        $translate('Implementation.Project_9.Description_4_li_3').then(function (translation) {
          $scope.Implementation_Project_9_Description_4_li_3 = translation;
        });
        $translate('Implementation.Project_9.li_1').then(function (translation) {
          $scope.Implementation_Project_9_li_1 = translation;
        });
        $translate('Implementation.Project_9.li_2').then(function (translation) {
          $scope.Implementation_Project_9_li_2 = translation;
        });
        $translate('Implementation.Project_9.li_3').then(function (translation) {
          $scope.Implementation_Project_9_li_3 = translation;
        });
        $translate('Implementation.Project_9.li_4').then(function (translation) {
          $scope.Implementation_Project_9_li_4 = translation;
        });
        $translate('Implementation.Project_9.li_5').then(function (translation) {
          $scope.Implementation_Project_9_li_5 = translation;
        });
        $translate('Implementation.Project_9.li_6').then(function (translation) {
          $scope.Implementation_Project_9_li_6 = translation;
        });
        $translate('Implementation.Project_9.li_7').then(function (translation) {
          $scope.Implementation_Project_9_li_7 = translation;
        });
        $translate('Implementation.Project_9.li_8').then(function (translation) {
          $scope.Implementation_Project_9_li_8 = translation;
        });
        $translate('Implementation.Project_9.li_9').then(function (translation) {
          $scope.Implementation_Project_9_li_9 = translation;
        });
      });
      $translate.use($translate.proposedLanguage()).then(function () {});

      // function iconActive() {
      //   var arr = $location.$$path.split('/');
      //   var n = arr.length-1;
      //   // if(arr[n]=== 'it'){
      //   //   $state.go('root.service.it.audit');
      //   //   $scope.state='.audit';
      //   // }else {
      //   $scope.state = "."+arr[n];
      //   // }
      // }



      // iconActive();

      // $rootScope.$on('$stateChangeSuccess',
      //   function(){
      //     iconActive();
      //   });

      $scope.Go = function (data) {
        $state.go('root.service'+data);

      };
      $scope.state = 'all';



      $scope.Filter = function (data) {
        if( $scope.state === data){
          $scope.state = 'all';
        }else{
          $scope.state = data;
        }
      };

      var param = $state.params.param;
      if(param === 'business'){
        $scope.Filter(param);
        $location.hash('eis');
        $anchorScroll();
      }

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
