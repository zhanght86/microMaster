/**
 * Created by ZhangJiansen on 2016/9/18.
 * 投保模块定义
 */
define([
    'angular',
    'components/region/controller/region.ctrl',
    'components/region/service/region.serv',
],function (angular,
            regionCtrlHandler,
            regionServHandler){
    'use strict';
    console.log("load business.region module");
    /*首页-统计图表*/
    return angular.module('business.region', [])
        .config(['$stateProvider',
            function ($stateProvider) {
                $stateProvider
                    .state("main.region", {
                       url:"/region",
                       templateUrl: "components/region/tpl/region.html",
                       controller: "regionCtrl"
                    });
            }])
        .controller('regionCtrl',regionCtrlHandler)
        .service('regionServ',regionServHandler);
});

