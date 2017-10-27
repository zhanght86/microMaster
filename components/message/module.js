/**
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
    /*消息管理模块*/
    return angular.module('business.message', [])
        .config(['$stateProvider',
            function ($stateProvider) {
                $stateProvider
                    .state("main.message", {
                        url:"/message",
                        templateUrl: "components/message/tpl/message.html",
                        controller: "messageCtrl"
                    });
            }])
        .controller('messageCtrl',messageCtrlHandler)
        .service('messageServ',messageServHandler);
});