/**
 */
define([
    'angular',
    'components/application/controller/application.ctrl',
    'components/application/service/application.serv',
],function (angular,
            applicationCtrlHandler,
            applicationServHandler) {
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
            }])
        .controller('applicationCtrl',applicationCtrlHandler)
        .service('applicationServ',applicationServHandler);
});

