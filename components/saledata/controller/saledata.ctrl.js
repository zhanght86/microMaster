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

        //===================================普通用户管理部分=====================================
        //账户名(会员详细信息)
        $scope.userMess=function () {
            $scope.layer_Policy=true;
        };
        //承包笔数(保单详情)
        $scope.nums=function () {
            $scope.layer_customer=true;
        };
        //人员属性(车商渠道详情)
        $scope.attribute=function () {
            $scope.layer_carChannel=true;
        };
        //===================================展业人员管理部分=====================================
        //账户名(业务员详细信息)
        $scope.enUserMess=function () {
            $scope.layer_enPolicy=true;
        };
        //承包笔数(月，总)
        $scope.enThisnum=function () {
            $scope.layer_encustomer=true;
        };
        $scope.enTotalnum=function () {
            $scope.layer_entotalcustomer=true;
        };
        //绩效(月，总)
        $scope.enThisMoney=function () {
            $scope.layer_performance=true;
        };
        $scope.enTotalMoney=function () {
            $scope.layer_totalperformance=true;
        };
        //关闭
        $scope.addRole_back=function () {
            $scope.layer_Policy=false;
            $scope.layer_customer=false;
            $scope.layer_carChannel=false;
            $scope.layer_enPolicy=false;
            $scope.layer_encustomer=false;
            $scope.layer_entotalcustomer=false;
            $scope.layer_performance=false;
            $scope.layer_totalperformance=false;
        };

    };
    return saledataCtrlHandler;
});
