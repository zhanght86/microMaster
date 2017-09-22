/**
 * Created by ZhangJiansen on 2016/9/18.
 * 投保成功控制器
 */
define([], function () {
    'use strict';
    function feedbackCtrlHandler ($scope,$state) {
        //查看详情
        $scope.openLay=function () {
            $scope.layer_viewText=true;
        };
        // 弹层关闭
        $scope.closeLay=function () {
            $scope.layer_viewText=false;
        };
        //新建模板
        $scope.openNew=function () {
            $scope.layer_NewText=true;
        };
        //取消创建
        $scope.closeNew=function () {
            $scope.layer_NewText=false;
        };
    };

    return feedbackCtrlHandler;
});