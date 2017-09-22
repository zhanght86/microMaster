/**
 * Created by ZhangJiansen on 2016/9/18.
 * 文件资料维护模块定义
 */
define([
    'angular',
    'components/weChatemplate/controller/weChatemplate.ctrl',
    'components/weChatemplate/service/weChatemplate.serv',
],function (angular,
            weChatemplateCtrlHandler,
            weChatemplateServHandler) {
    'use strict';
    console.log("load business.weChatemplate module");
    /*文件资料维护*/
    return angular.module('business.weChatemplate', [])
        .config(['$stateProvider',
            function ($stateProvider) {
                $stateProvider
                    .state("main.weChatemplate", {
                        url:"/weChatemplate",
                        templateUrl: "components/weChatemplate/tpl/weChatemplate.html",
                        controller: "weChatemplateCtrl"
                    });
            }])
        .controller('weChatemplateCtrl',weChatemplateCtrlHandler)
        .service('weChatemplateServ',weChatemplateServHandler);
});

