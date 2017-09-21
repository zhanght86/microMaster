/**
 * Created by ZhangJiansen on 2016/9/19.
 * 单证模块
 */
define([
    'angular',
    'components/message/controller/message.ctrl',
    'components/message/service/message.serv',
],function (angular,
            messageCtrlHandler,
            messageServHandler) {
    'use strict';
    console.log("load business.message module");
    /*单证模块*/
    return angular.module('business.message', [])
        .config(['$stateProvider',
            function ($stateProvider) {
                $stateProvider
                    .state("main.message", {
                        url:"/message",
                        templateUrl: "components/message/tpl/message.html"
                    });
            }])
        .controller('messageCtrl',messageCtrlHandler)
        .service('messageServ',messageServHandler);
});