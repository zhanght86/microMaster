/**
 * Created by ZhangJiansen on 2016/9/18.
 * 文件资料维护模块定义
 */
define([
    'angular',
    'components/feedback/controller/feedback.ctrl',
    'components/feedback/service/feedback.serv',
],function (angular,
            feedbackCtrlHandler,
            feedbackServHandler) {
    'use strict';
    console.log("load business.feedback module");
    /*文件资料维护*/
    return angular.module('business.feedback', [])
        .config(['$stateProvider',
            function ($stateProvider) {
                $stateProvider
                    .state("main.feedback", {
                        url:"/feedback",
                        templateUrl: "components/feedback/tpl/feedback.html",
                        controller: "feedbackCtrl"
                    });
            }])
        .controller('feedbackCtrl',feedbackCtrlHandler)
        .service('feedbackServ',feedbackServHandler);
});

