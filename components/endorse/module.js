/**
 * Created by ZhangJiansen on 2016/9/18.
 * 投保模块定义
 */
define([
    'angular',
    'components/endorse/controller/endorse.ctrl'
],function (angular,endorseCtrlHandler) {
    'use strict';
    console.log("load business.endorse module");
    return angular.module('business.endorse', [])
        .config(['$stateProvider',
            function ($stateProvider) {
                $stateProvider
                    .state("main.endorse", {
                        url:"/endorse",
                        templateUrl: "components/endorse/tpl/endorse.html",
                    })
                    .state("main.geneEndorse", {
                        url:"/geneEndorse",
                        templateUrl: "components/endorse/tpl/Correct_treatment.html",
                        controller: "endorseCtrl"
                    });
            }])
        .controller('endorseCtrl',endorseCtrlHandler);
});

