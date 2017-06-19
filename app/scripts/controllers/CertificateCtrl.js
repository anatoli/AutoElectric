/**
 * Created by Anatoliy Arinovich on 18.11.2016.
 */
'use strict';
angular.module('siBelApp')
  .controller('CertificateCtrl',[ '$scope', '$uibModalInstance', 'dataModal', function ($scope, $uibModalInstance, dataModal) {
    if(dataModal.lang === 'by'|| dataModal.lang ==='ru'){
      $scope.name_src = 'images/certificate_ru.png';
    }else{
      $scope.name_src = 'images/certificate_en.png';
    }
    $scope.cancel = function () {
      $uibModalInstance.dismiss('cancel');
    };
  }]);
