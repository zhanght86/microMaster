/**
 */
define([
    'angular',
    'components/application/controller/application.ctrl',
    'components/application/controller/applicationSucc.ctrl',
    'components/application/service/application.serv',
    'components/application/service/insured.serv'
],function (angular,
            applicationCtrlHandler,
            applicationSuccCtrlHandler,
            applicationServHandler,
            InsuredServHandler) {
    'use strict';
    console.log("load business.application module");
    return angular.module('business.application', [])
        .config(['$stateProvider',
            function ($stateProvider) {
                $stateProvider
                    .state("main.application", {
                        url:"/application",
                        templateUrl: "components/application/tpl/application.html",
                        controller: "applicationCtrl"
                    })
                    .state("main.applicationSuccess", {
                        url:"/applicationSuccess",
                        templateUrl: "components/application/tpl/applicationSuccess.html",
                        controller: "applicationSuccCtrl"
                    });
            }])
        .controller('applicationCtrl',applicationCtrlHandler)
        .controller('applicationSuccCtrl',applicationSuccCtrlHandler)
        .service('applicationServ',applicationServHandler)
        .factory('InsuredServ',InsuredServHandler);
});

