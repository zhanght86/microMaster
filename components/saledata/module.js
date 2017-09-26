/**
 * Created by ZhangJiansen on 2016/9/18.
 * 投保模块定义
 */
define([
    'angular',
    'components/saledata/controller/saledata.ctrl',
    'components/saledata/service/saledata.serv'
],function (angular,saledataCtrlHandler,saledataServHandler) {
    'use strict';
    console.log("load business.saledata module");
    /*销售数据管理（订单保单查询）*/
    return angular.module('business.saledata', [])
        .config(['$stateProvider',
            function ($stateProvider) {
                $stateProvider
                    .state("main.saledata", {
                        url:"/saledata",
                        templateUrl: "components/saledata/tpl/saledata.html",
                        controller: "saledataCtrl"
                    })
                    .state("main.saledata.order",{
                        url:"/ordinary",
                        templateUrl: "components/saledata/tpl/saledata.order.html"
                    })
                    .state("main.saledata.policy",{
                        url:"/proposal",
                        templateUrl: "components/saledata/tpl/saledata.policy.html"
                    });
            }])
        .controller('saledataCtrl',saledataCtrlHandler)
        .service('saledataServ',saledataServHandler);
});

