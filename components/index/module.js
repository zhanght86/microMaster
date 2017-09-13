/**
 * Created by ZhangJiansen on 2016/9/18.
 * 投保模块定义
 */
define([
    'angular',
    //'components/index/controller/index.ctrl',
    'components/index/controller/focusManage.ctrl',
    'components/index/controller/regionManage.ctrl',
    'components/index/controller/serManage.ctrl',
    //'components/index/service/index.serv',
    'components/index/service/focusManage.serv',
    'components/index/service/regionManage.serv',
    'components/index/service/serManage.serv',
],function (angular,
            //indexCtrlHandler,
            focusManageCtrlHandler,
            regionManageCtrlHandler,
            serManageCtrlHandler,
            //indexServHandler,
            focusManageServHandler,
            regionManageServHandler,
            serManageServHandler) {
    'use strict';
    console.log("load business.index module");
    /*首页-统计图表*/
    return angular.module('business.index', [])
        .config(['$stateProvider',
            function ($stateProvider) {
                $stateProvider
                    //.state("main.index", {
                    //    url:"/index",
                    //    templateUrl: "components/index/tpl/index.html",
                    //    controller: "indexCtrl"
                    //})
                .state("main.focusManage", {
                        url:"/focusManage",
                        templateUrl: "components/index/tpl/focusManage.html",
                        controller: "focusManageCtrl"
                    })
                .state("main.regionManage", {
                        url:"/regionManage",
                        templateUrl: "components/index/tpl/regionManage.html",
                        controller: "regionManageCtrl"
                    })
                .state("main.serManage", {
                        url:"/serManage",
                        templateUrl: "components/index/tpl/serManage.html",
                        controller: "serManageCtrl"
                    });
            }])
        //.controller('indexCtrl',indexCtrlHandler)
        .controller('focusManageCtrl',focusManageCtrlHandler)
        .controller('regionManageCtrl',regionManageCtrlHandler)
        .controller('serManageCtrl',serManageCtrlHandler)
        //.service('indexServ',indexServHandler)
        .service('focusManageServ',focusManageServHandler)
        .service('regionManageServ',regionManageServHandler)
        .service('serManageServ',serManageServHandler);
});

