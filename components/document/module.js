/**
 * Created by ZhangJiansen on 2016/9/19.
 * 单证模块
 */
define([
    'angular'
],function (angular) {
    'use strict';
    console.log("load business.document module");
    /*单证模块*/
    return angular.module('business.document', [])
        .config(['$stateProvider',
            function ($stateProvider) {
                $stateProvider
                    .state("main.document", {
                        url:"/document"
                    });
            }]);
});