"use strict";
/**
 * Created by Anatoli on 19.09.2016.
 */
/**
 * Created by Anatoli on 16.09.2016.
 */
angular.module('siBelApp')
  .controller('ContactsCtrl', ['$scope', '$uibModal', '$state',
    function ($scope, $uibModal, $state) {

    $scope.Go = function (data) {
      $state.go('root.company'+data);
      $scope.state = data;
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
                // lang: $translate.proposedLanguage()
              };
            }
          },
          controller: 'EmailCtrl'
        });
      };

      var templateMarker = {
        sibel_icon:{
          iconUrl: '../images/icons/marker_b100.png',
          iconSize:     [136, 70],
          iconAnchor:   [54, 74],

        }
      };

      var mainMarker = {
        lat: 53.905902508833165,
        lng: 27.456910014152527,
        focus: false,
        draggable: false,
        icon:templateMarker.sibel_icon
      };

      angular.extend($scope, {
        center: {
          lat:53.905902508833165,
          lng:27.456910014152527,
          zoom:15
        },
        markers: {
          mainMarker: angular.copy(mainMarker)
        },
        events: { // or just {} //all events
          markers:{
            enable: [ 'dragend' ]
            //logic: 'emit'
          }
        },
        controls: {
          custom: new L.Control.Fullscreen()
        },
        tiles: {
          name: 'Mapbox Comic',
        },
      });

      $scope.mapVisible = function () {
        $scope.map=!$scope.map;
      };

    // $rootScope.$on('$translateChangeSuccess', function () {
    //
    //   $translate('Error.Address_1').then(function (translation) {
    //     $scope.Error_Address_1 = translation;
    //   });
    //   $translate('Error.Address_2').then(function (translation) {
    //     $scope.Error_Address_2 = translation;
    //   });
    //
    //   $translate('Contacts.Title').then(function (translation) {
    //     $scope.Contacts_Title = translation;
    //   });
    //   $translate('Contacts.Btn_1').then(function (translation) {
    //     $scope.Contacts_Btn_1 = translation;
    //   });
    //   $translate('Contacts.Btn_2').then(function (translation) {
    //     $scope.Contacts_Btn_2 = translation;
    //   });
    //   $translate('Contacts.Back').then(function (translation) {
    //     $scope.Contacts_Back = translation;
    //   });
    //   $translate('Contacts.Tooltip').then(function (translation) {
    //     $scope.Contacts_Tooltip = translation;
    //   });
    //
    // });
    //
    // $translate.use($translate.proposedLanguage()).then(function () {});


  }]);
