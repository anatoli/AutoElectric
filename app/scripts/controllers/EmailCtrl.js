"use strict";
/**
 * Created by Anatoli on 23.09.2016.
 */
angular.module('siBelApp')
  .controller('EmailCtrl',[
    '$scope',
    '$uibModalInstance',
    'dataModal',
    '$rootScope',
    '$translate',
    '$http',
    'FileUploader',
    '$uibModal',
    function ($scope, $uibModalInstance, dataModal, $rootScope, $translate, $http, FileUploader, $uibModal) {
    $scope.m = '';
    $scope.href= undefined;
    $scope.user = {};
    $scope.PushEmail = function (data) {
      if ( $scope.form.$valid ) {
        $http({
          method: 'POST',
          url: data+'.php',
          data: {
            name:$scope.name,
            message: $scope.message,
            email:$scope.email,
            phone:$scope.phone,
            dateTime:$scope.dateTime,
            company:$scope.company,
            selectVok:$scope.selectVok,
            href:$scope.href,
            fileName:$scope.fileName,
            fileType:$scope.fileType
          },
          headers : {'Content-Type': 'application/x-www-form-urlencoded'}
        }).success(function( res ) {
          $scope.phone = '';
          $scope.name = '';
          $scope.message = '';
          $scope.email = '';

          $scope.dateTime = '';
          $scope.company = '';
          $scope.selectVok = '';
          // $scope.form.$setPristine();
          openModal(res);
          // alert('Сообщение отправлено');
          $scope.cancel();
        }).error(function(err){
          openModal(err.error);
        });
      }

      };
      function openModal (data) {
        $uibModal.open({
          backdropClass: 'backdrop',
          backdrop: 'static',
          animation: false,
          size: 'dialog',
          templateUrl: 'views/modals/emailPush.html',
          resolve: {
            dataModal: function () {
              return {
                data: data,
                lang: $translate.proposedLanguage()
              };
            }
          },
          controller: 'EmailPushCtrl'
        });
      }

    if(dataModal.data){
      $scope.mod = dataModal.data;
    }

    $scope.cancel = function () {
      $uibModalInstance.dismiss('cancel');
    };
    $rootScope.$on('$translateChangeSuccess', function () {
      $translate('Modal.Header.1').then(function (translation) {
        $scope.Modal_Header_1 = translation;
      });
      $translate('Modal.Header.2').then(function (translation) {
        $scope.Modal_Header_2 = translation;
      });
      $translate('Modal.Header.3').then(function (translation) {
        $scope.Modal_Header_3 = translation;
      });
      $translate('Modal.Header.4').then(function (translation) {
        $scope.Modal_Header_4 = translation;
      });
      $translate('Modal.Header.5').then(function (translation) {
        $scope.Modal_Header_5 = translation;
      });
      $translate('Modal.Title.11').then(function (translation) {
        $scope.Modal_Title_11 = translation;
      });
      $translate('Modal.Title.12').then(function (translation) {
        $scope.Modal_Title_12 = translation;
      });

      $translate('Modal.Title.21').then(function (translation) {
        $scope.Modal_Title_21 = translation;
      });
      $translate('Modal.Title.22').then(function (translation) {
        $scope.Modal_Title_22 = translation;
      });
      $translate('Modal.Title.23').then(function (translation) {
        $scope.Modal_Title_23 = translation;
      });
      $translate('Modal.Title.31').then(function (translation) {
        $scope.Modal_Title_31 = translation;
      });
      $translate('Modal.Title.32').then(function (translation) {
        $scope.Modal_Title_32 = translation;
      });
      $translate('Modal.Title.41').then(function (translation) {
        $scope.Modal_Title_41 = translation;
      });
      $translate('Modal.Title.42').then(function (translation) {
        $scope.Modal_Title_42 = translation;
      });
      $translate('Modal.Title.51').then(function (translation) {
        $scope.Modal_Title_51 = translation;
      });
      $translate('Modal.Title.52').then(function (translation) {
        $scope.Modal_Title_52 = translation;
      });

      $translate('Modal.Btn_file').then(function (translation) {
        $scope.Modal_Btn_file = translation;
      });
      $translate('Modal.Btn_push').then(function (translation) {
        $scope.Modal_Btn_push = translation;
      });
      $translate('Modal.Description_1').then(function (translation) {
        $scope.Modal_Description_1 = translation;
      });
      $translate('Modal.Description_2').then(function (translation) {
        $scope.Modal_Description_2 = translation;
      });
      $translate('Modal.Name_plh').then(function (translation) {
        $scope.Modal_Name_plh = translation;
      });
      $translate('Modal.Phone_plh').then(function (translation) {
        $scope.Modal_Phone_plh = translation;
      });
      $translate('Modal.Datetime_plh').then(function (translation) {
        $scope.Modal_Datetime_plh = translation;
      });
      $translate('Modal.Company_plh').then(function (translation) {
        $scope.Modal_Company_plh = translation;
      });
      $translate('Modal.Area_plh').then(function (translation) {
        $scope.Modal_Area_plh = translation;
      });
      $translate('Modal.Select.Title').then(function (translation) {
        $scope.Modal_Select_Title = translation;
      });
      $translate('Modal.Select.1').then(function (translation) {
        $scope.Modal_Select_1 = translation;
      });
      $translate('Modal.Select.2').then(function (translation) {
        $scope.Modal_Select_2 = translation;
      });
      $translate('Modal.UploaderBtn_1').then(function (translation) {
        $scope.Modal_UploaderBtn_1 = translation;
      });
      $translate('Modal.UploaderBtn_2').then(function (translation) {
        $scope.Modal_UploaderBtn_2 = translation;
      });
      $translate('Modal.TableHeader.Name').then(function (translation) {
        $scope.Modal_TableHeader_Name = translation;
      });
      $translate('Modal.TableHeader.Size').then(function (translation) {
        $scope.Modal_TableHeader_Size = translation;
      });
      $translate('Modal.TableHeader.Status').then(function (translation) {
        $scope.Modal_TableHeader_Status = translation;
      });
      $translate('Modal.TableHeader.Actions').then(function (translation) {
        $scope.Modal_TableHeader_Actions = translation;
      });
    });
    $translate.use(dataModal.lang).then(function () {});




////////////////////
      var uploader = $scope.uploader = new FileUploader({
        url: '/upload.php'
      });

      // FILTERS

      uploader.filters.push({
        name: 'customFilter',
        fn: function() {
          return this.queue.length < 10;
        }
      });

      // CALLBACKS

      uploader.onWhenAddingFileFailed = function(item /*{File|FileLikeObject}*/, filter, options) {
        console.info('onWhenAddingFileFailed', item, filter, options);
        console.log('item');
        console.log(item);

      };
      uploader.onAfterAddingFile = function(fileItem) {
        console.info('onAfterAddingFile', fileItem);

      };
      uploader.onAfterAddingAll = function(addedFileItems) {
        console.info('onAfterAddingAll', addedFileItems);
      };
      uploader.onBeforeUploadItem = function(item) {
        console.info('onBeforeUploadItem', item);
      };
      uploader.onProgressItem = function(fileItem, progress) {
        console.info('onProgressItem', fileItem, progress);
        $scope.bar = true;
      };
      uploader.onProgressAll = function(progress) {
        console.info('onProgressAll', progress);
      };
      uploader.onSuccessItem = function(fileItem, response, status, headers) {
        console.info('onSuccessItem', fileItem, response, status, headers);
      };
      uploader.onErrorItem = function(fileItem, response, status, headers) {
        console.info('onErrorItem', fileItem, response, status, headers);
        $scope.bar=false;
      };
      uploader.onCancelItem = function(fileItem, response, status, headers) {
        console.info('onCancelItem', fileItem, response, status, headers);
      };
      uploader.onCompleteItem = function(fileItem, response, status, headers) {
        console.info('onCompleteItem', fileItem, response, status, headers);
        console.log('response');
        console.log(response);
        $scope.href = response.href;
        $scope.fileName = response.name;
        $scope.fileType = response.type;
      };
      uploader.onCompleteAll = function() {
        console.info('onCompleteAll');
        $scope.bar=false;

      };

      console.info('upload', uploader);

////////////////////




  }]);
