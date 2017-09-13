/**
 * Created by ZhangJiansen on 2016/9/18.
 * 文件资料维护模块定义
 */
define([
    'angular'
],function (angular) {
    'use strict';
    console.log("load business.material module");
    /*文件资料维护*/
    return angular.module('business.material', [])
        .config(['$stateProvider',
            function ($stateProvider) {
                $stateProvider
                    .state("main.material", {
                        url:"/material"
                        //templateUrl: "components/report/tpl/",
                        //controller: ""
                    });
            }]);
});

