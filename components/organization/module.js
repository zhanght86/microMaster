/**
 * Created by ZhangJiansen on 2016/9/18.
 * 投保模块定义
 */
define([
    'angular',
    'components/organization/controller/organization.ctrl'
],function (angular,organizationCtrlHandler) {
    'use strict';
    console.log("load business.organization module");
    return angular.module('business.organization', [])
        .config(['$stateProvider',
            function ($stateProvider) {
                $stateProvider
                    .state("main.organization", {
                        url:"/organization",
                        templateUrl: "components/organization/tpl/organization.html",
                    })
                    // .state("main.geneEndorse", {
                    //     url:"/geneEndorse",
                    //     templateUrl: "components/organization/tpl/Correct_treatment.html",
                    //     controller: "endorseCtrl"
                    // });
            }])
        .controller('organizationCtrl',organizationCtrlHandler);
});

