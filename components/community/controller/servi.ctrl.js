/**
 * Created by ZhangJiansen on 2016/9/18.
 * 投保成功控制器
 */
define([], function () {
    'use strict';
    function serviCtrlHandler ($scope,$state) {
        $scope.openClick=function () {
            $scope.list_date=true;
        };
        $scope.open_phrase=function () {
            $scope.phrase_box=true;
        };
        $scope.close_phrase=function () {
            $scope.phrase_box=false;
        };
    };
    return serviCtrlHandler;
});