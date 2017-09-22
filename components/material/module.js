/**
 * Created by ZhangJiansen on 2016/9/18.
 * 文件资料维护模块定义
 */
define([
    'angular',
    'components/material/controller/interfacemonitor.ctrl',
    'components/material/controller/material.ctrl',
    'components/material/controller/timingtask.ctrl',
    'components/material/service/interfacemonitor.serv',
    'components/material/service/material.serv',
    'components/material/service/timingtask.serv',
],function (angular,
            materialCtrlHandler,
            materialServHandler,
            timingtaskServHandler,
            timingtaskCtrlHandler,
            interfacemonitorCtrlHandler,
            interfacemonitorservHandler
            ) {
    'use strict';
    console.log("load business.material module");
    /*文件资料维护*/
    return angular.module('business.material', [])
        .config(['$stateProvider',
            function ($stateProvider) {
                $stateProvider
                    .state("main.material", {
                        url:"/material",
                        templateUrl: "components/material/tpl/material.html"
                        //controller: ""
                    });
                $stateProvider
                    .state("main.interfacemonitor", {
                        url:"/interfacemonitor",
                        templateUrl: "components/material/tpl/interfacemonitor.html"
                        //controller: ""
                    });
                $stateProvider
                    .state("main.timingtask", {
                        url:"/timingtask",
                        templateUrl: "components/material/tpl/timingtask.html"
                        //controller: ""
                    });
            }])
        .controller('interfacemonitorCtrl',interfacemonitorCtrlHandler)
        .controller('timingtaskCtrl',timingtaskCtrlHandler)
        .controller('materialCtrl',materialCtrlHandler)
        .service('interfacemonitorServ',interfacemonitorservHandler)
        .service('timingtaskServ',timingtaskServHandler)
        .service('materialServ',materialServHandler);
});

