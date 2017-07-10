"use strict";
/**
 * Created by Anatoli on 19.09.2016.
 */
/**
 * Created by Anatoli on 16.09.2016.
 */
angular.module('siBelApp')
  .controller('CompanyReviewsCtrl', ['$scope', '$uibModal', '$http', '$state',
    function ($scope, $uibModal, $http, $state) {



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
                data: data
              };
            }
          },
          controller: 'EmailCtrl'
        });
      };

      $http({
        method: 'GET',
        url: '/cars_all_brands.json'
      }).then(function successCallback(res) {
        $scope.autos = res.data;
      }, function errorCallback(res) {
        console.log(res);
      });

      $scope.ClickCars = function (data) {
        $scope.description = data.desc;
        $scope.src = data.src;
      }


  }]);
