/**
 */
define([
    'angular',
    'components/banner/controller/banner.ctrl',
    'components/banner/service/banner.serv',
],function (angular,
            bannerCtrlHandler,
            bannerServHandler) {
    'use strict';
    console.log("load business.banner module");
    /*文件资料维护*/
    return angular.module('business.banner', [])
        .config(['$stateProvider',
            function ($stateProvider) {
                $stateProvider
                    .state("main.banner", {
                        url:"/banenr",
                        templateUrl: "components/banner/tpl/banner.html",
                        controller: "bannerCtrl"
                    });
            }])
        .controller('bannerCtrl',bannerCtrlHandler)
        .service('bannerServ',bannerServHandler);
});

