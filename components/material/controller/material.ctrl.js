/**
 * Created by ZhangJiansen on 2016/9/18.
 * 投保成功控制器
 */
define([], function () {
    'use strict';
    function materialCtrl ($scope,$state,$stateParams) {
        $scope.riskName = $stateParams.riskName; //城乡居民住宅地震巨灾保险
        $scope.policyNo = $stateParams.policyNo; //P201600E000001
    };

    return materialCtrl;
});