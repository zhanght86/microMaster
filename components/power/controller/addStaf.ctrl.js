/**
 * Created by ZhangJiansen on 2016/9/19.
 * 首页入口控制器
 */
define([], function () {
    'use strict';
    function addStafCtrlHandler($scope,$state) {
        $scope.showMainNagiv = false;
        //返回
        $scope.save=function () {
            $state.go("main.serManage");
        }

    };
    return addStafCtrlHandler;
});