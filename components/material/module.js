/**
 * Created by ZhangJiansen on 2016/9/18.
 * 文件资料维护模块定义
 */
define([
    'angular',
    'components/material/controller/material.ctrl',
    'components/material/service/material.serv',
],function (angular,
            materialCtrlHandler,
            materialServHandler) {
    'use strict';
    console.log("load business.material module");
    /*文件资料维护*/
    return angular.module('business.material', [])
        .config(['$stateProvider',
            function ($stateProvider) {
                $stateProvider
                    .state("main.material", {
                        url:"/material",
                        templateUrl: "components/material/tpl/material.html"
                        //controller: ""
                    });
            }])
        .controller('materialCtrl',materialCtrlHandler)
        .service('materialServ',materialServHandler);
});

