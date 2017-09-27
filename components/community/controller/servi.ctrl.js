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
        // 删除
        $scope.cancle=function () {
            $scope.layer_cancle=true;
            $scope.tipMessage="您确认删除吗！";
        };
        $scope.addRole_back=function () {
            $scope.layer_found=false;
            $scope.layer_modfound=false;
            $scope.layer_cancle=false;
        };
    };
    return serviCtrlHandler;
});