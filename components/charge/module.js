/**
 * Created by ZhangJiansen on 2016/9/18.
 * 投保模块定义
 */
define([
    'angular',
    'components/charge/controller/onLineCharge.ctrl',
    'components/charge/controller/offLineCharge.ctrl',
    'components/charge/service/offLineCharge.serv'
],function (angular,onLineChargeCtrlHandler,offLineChargeCtrlHandler,offLineChargeServHandler) {
    'use strict';
    console.log("load business.charge module");
    /*收费模块*/
    return angular.module('business.charge', [])
        .config(['$stateProvider',
            function ($stateProvider) {
                $stateProvider
                    .state("main.offLineCharge", {
                        url:"/offLineCharge",
                        templateUrl: "components/charge/tpl/offLineCharge.html",
                        controller: "offLineChargeCtrl"
                    })
                    .state("main.offLineChargeConfirm", {
                        url:"/offLineChargeConfirm",
                        templateUrl: "components/charge/tpl/offLineChargeConfirm.html.html"
                    })
                    .state("main.onLineCharge", {
                        url:"/onLineCharge",
                        templateUrl: "components/charge/tpl/onLineCharge.html",
                        controller: "onLineChargeCtrl"
                    });
            }])
        .controller('onLineChargeCtrl',onLineChargeCtrlHandler)
        .controller('offLineChargeCtrl',offLineChargeCtrlHandler)
        .service('offLineChargeServ',offLineChargeServHandler);
});

