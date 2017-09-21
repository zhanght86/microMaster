/**
 * Created by ZhangJiansen on 2016/9/18.
 * 投保成功控制器
 */
define([], function () {
    'use strict';
    function feedbackCtrlHandler ($scope,$state) {
        //查看详情
        $scope.addsssssss=function () {
            $scope.layer_detailText=true;
        };
        // 弹层关闭
        $scope.addralation_sure=function () {
            $scope.layer_detailText=false;
        };
    };

    return feedbackCtrlHandler;
});