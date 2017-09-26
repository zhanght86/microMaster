/**
 * Created by ZhangJiansen on 2016/9/19.
 * 首页入口控制器
 */
define([], function () {
    'use strict';
    function focusManageCtrlHandler($scope,$state) {
        $scope.showMainNagiv = false;
        //增加按钮跳转
        $scope.addRoleConfig=function () {
            $state.go("main.addRole");
        };
        //删除
        $scope.rolecanale=function () {
            $scope.layer_cancle=true;
            $scope.tipMessage="您确认删除吗！";
        };
        //弹层关闭
        $scope.addRole_back=function () {
            $scope.layer_cancle=false;
        };
        
    };
    return focusManageCtrlHandler;
});