/**
 * Created by ZhangJiansen on 2016/9/18.
 * 投保模块定义
 */
define([
    'angular',
    'components/suspend/controller/suspend.ctrl',
    'components/suspend/service/suspend.serv'
],function (angular,suspendCtrlHandler,suspendServHandler) {
    'use strict';
    console.log("load business.suspend module");
    /*待处理投保、批改*/
    return angular.module('business.suspend', [])
        .config(['$stateProvider',
            function ($stateProvider) {
                $stateProvider
                    .state("main.suspend", {
                        url:"/suspend",
                        templateUrl: "components/suspend/tpl/suspend.html",
                        controller: "suspendCtrl"
                    })
                    .state("main.suspend.ordinary",{
                        url:"/ordinary",
                        templateUrl: "components/suspend/tpl/suspend.ordinary.html"
                    })
                    .state("main.suspend.proposal",{
                        url:"/proposal",
                        templateUrl: "components/suspend/tpl/suspend.proposal.html"
                    });
            }])
        .controller('suspendCtrl',suspendCtrlHandler)
        .service('suspendServ',suspendServHandler);
});

