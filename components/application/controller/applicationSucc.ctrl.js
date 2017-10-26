/**
 */
define([], function () {
    'use strict';
    function applicationSuccCtrlHandler ($scope,$state,$stateParams) {
        $scope.riskName = $stateParams.riskName; //城乡居民住宅地震巨灾保险
        $scope.policyNo = $stateParams.policyNo; //P201600E000001
    };

    return applicationSuccCtrlHandler;
});