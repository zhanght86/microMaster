/**
 * Created by ZhangJiansen on 2016/9/19.
 * 首页入口控制器
 */
define([], function () {
    'use strict';
    function addRoleCtrlHandler($scope,$state) {
        $scope.showMainNagiv = false;
        //返回
        $scope.addRole_back=function () {
            $state.go("main.focusManage");
        }
        
    };
    return addRoleCtrlHandler;
});