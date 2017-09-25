/**
 * Created by ZhangJiansen on 2016/9/18.
 * 投保成功控制器
 */
define([], function () {
    'use strict';
    function serviCtrlHandler ($scope,$state,$stateParams) {
        $scope.openClick=function () {
            $scope.list_date=true;
        };
    };
    return serviCtrlHandler;
});