/**
 * Created by COCO on 2016/9/17.
 */
define([], function () {
    'use strict';
    function saledataCtrlHandler($scope,$state,saledataServ) {
            /!*tab切换响应方法*!/
            //普通用户管理
            $scope.orderTab = function(){
                $scope.curActive='appli';
                $state.go("main.saledata.order");
            };
            //展业人员管理
            $scope.policyTab=function(){
                $scope.curActive='endor';
                $state.go("main.saledata.policy");
            };
            $scope.curActive='appli';
            $state.go("main.saledata.order");

        //===================================订单查询部分=====================================

        //===================================保单查询部分=====================================


    };
    return saledataCtrlHandler;
});
