/**
 */
define([
    'angular',
    'components/organization/controller/organization.ctrl',
    'components/organization/service/organization.serv',
],function (angular,organizationCtrlHandler,
                    organizationServHandler) {
    'use strict';
    console.log("load business.organization module");
    return angular.module('business.organization', [])
        .config(['$stateProvider',
            function ($stateProvider) {
                $stateProvider
                    .state("main.organization", {
                        url:"/organization",
                        templateUrl: "components/organization/tpl/organization.html",
                        controller: "organizationCtrl"
                    })
            }])
        .controller('organizationCtrl',organizationCtrlHandler)
        .service('organizationServ',organizationServHandler);
});

