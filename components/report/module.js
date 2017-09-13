/**
 * Created by ZhangJiansen on 2016/9/18.
 * 保单综合查询模块定义
 */
define([
    'angular'
],function (angular) {
    'use strict';
    console.log("load business.report module");
    /*保单综合查询*/
    return angular.module('business.report', [])
        .config(['$stateProvider',
            function ($stateProvider) {
                $stateProvider
                    .state("main.report", {
                        url:"/report"
                        //templateUrl: "components/report/tpl/",
                        //controller: ""
                    });
            }]);
});

