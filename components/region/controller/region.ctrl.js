/**
 * Created by ZhangJiansen on 2016/9/19.
 * 首页入口控制器
 */
define([], function () {
    'use strict';
    function regionCtrlHandler($scope,$state) {
        // 添加关联机构
        $scope.addRelation=function () {
            $scope.layer_addRalation=true;
        };
        // 弹层关闭
        $scope.addralation_sure=function () {
            $scope.layer_addRalation=false;
        };
        // 修改关联机构
        $scope.modify=function () {
            $scope.layer_modRalation=true;
        };
        // 弹层关闭
        $scope.modralation_sure=function () {
            $scope.layer_modRalation=false;
        };
        //停用
        $scope.Disable=function () {
            $scope.layer_Disable=true;
            $scope.tipMessage="您确定停用吗？";
        };
        $scope.rescind=function () {
            $scope.layer_Disable=false;
        };

    };
    return regionCtrlHandler;
});