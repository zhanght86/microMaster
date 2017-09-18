/**
 * Created by ZhangJiansen on 2016/9/10.
 * Controller层只处理视图数据绑定，后端交互在service处理
 */
define([], function () {
    'use strict';
    function applicationCtrlHandler($scope,$state,applicationServ,InsuredServ) {
        //客户姓名-会员详细信息
        $scope.downCustomer=function () {
            $scope.layer_Policy=true;
        };
        //承包笔数-保单详情
        $scope.downPolicy=function () {
            $scope.layer_customer=true;
        };
        //弹层关闭
        $scope.addRole_back=function () {
            $scope.layer_Policy=false;
            $scope.layer_customer=false;
        };


    };
    return applicationCtrlHandler;
});