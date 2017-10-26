/**
 */
define([
    'angular',
    'components/index/controller/index.ctrl',
    'components/index/service/index.serv',
],function (angular,
            indexCtrlHandler,
            indexServHandler){
    'use strict';
    console.log("load business.index module");
    /*首页-统计图表*/
    return angular.module('business.index', [])
        .config(['$stateProvider',
            function ($stateProvider) {
                $stateProvider
                    .state("main.index", {
                       url:"/index",
                       templateUrl: "components/index/tpl/index.html",
                       controller: "indexCtrl"
                    });
            }])
        .controller('indexCtrl',indexCtrlHandler)
        .service('indexServ',indexServHandler);
});

