/**
 * Created by ZhangJiansen on 2016/9/18.
 * 投保成功控制器
 */
define([], function () {
    'use strict';
    function bannerCtrl ($scope,$state,$stateParams) {
        $scope.open_alterimg=function () {
            $scope.layer_alterimg=true;
        };
        $scope.open_viewimg=function () {
            $scope.layer_viewimg=true;
        };
        // 弹层关闭
        $scope.close_alterimg=function () {
            $scope.layer_alterimg=false;
        };
        $scope.close_viewimg=function () {
            $scope.layer_viewimg=false;
        };
    };
    return bannerCtrl;
});