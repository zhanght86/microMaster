/**
 * Created by ZhangJiansen on 2016/9/18.
 * 文件资料维护模块定义
 */
define([
    'angular',
    'components/community/controller/servi.ctrl',
    'components/community/service/servi.serv',
],function (angular,
            serviCtrlHandler,
            serviServHandler) {
    'use strict';
    console.log("load business.community module");
    /*文件资料维护*/
    return angular.module('business.community', [])
        .config(['$stateProvider',
            function ($stateProvider) {
                $stateProvider
                    .state("main.community", {
                        url:"/community",
                        templateUrl: "components/community/tpl/servi.html",
                        controller: "serviCtrl"
                    });
            }])
        .controller('serviCtrl',serviCtrlHandler)
        .service('serviServ',serviServHandler);
});

