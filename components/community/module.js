/**
 * Created by ZhangJiansen on 2016/9/19.
 * 共同体维护模块
 */
define([
    'angular'
],function (angular) {
    'use strict';
    console.log("load business.community module");
    /*共同体维护*/
    return angular.module('business.community', [])
        .config(['$stateProvider',
            function ($stateProvider) {
                $stateProvider
                    .state("main.community", {
                        url:"/community"
                    });
            }]);
});