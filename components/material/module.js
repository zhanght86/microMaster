/**
 */
define([
    'angular',
    'components/material/controller/interfacemonitor.ctrl',
    'components/material/controller/material.ctrl',
    'components/material/controller/timingtask.ctrl',
    'components/material/service/interfacemonitor.serv',
    'components/material/service/material.serv',
    'components/material/service/timingtask.serv'
],function (angular,
            interfacemonitorCtrlHandler,
            materialCtrlHandler,
            timingtaskCtrlHandler,
            interfacemonitorservHandler,
            materialServHandler,
            timingtaskServHandler) {
    'use strict';
    console.log("load business.material module");
    /*监控管理*/
    return angular.module('business.material', [])
        .config(['$stateProvider',
            function ($stateProvider) {
                $stateProvider
                    .state("main.interfacemonitor", {
                        url:"/interfacemonitor",
                        templateUrl: "components/material/tpl/interfacemonitor.html",
                        controller: "interfacemonitorCtrl"
                    })
                    .state("main.material", {
                        url:"/material",
                        templateUrl: "components/material/tpl/material.html",
                        controller: "materialCtrl"
                    })
                    .state("main.timingtask", {
                        url:"/timingtask",
                        templateUrl: "components/material/tpl/timingtask.html",
                        controller: "timingtaskCtrl"
                    });
            }])
        .controller('interfacemonitorCtrl',interfacemonitorCtrlHandler)
        .controller('materialCtrl',materialCtrlHandler)
        .controller('timingtaskCtrl',timingtaskCtrlHandler)
        .service('interfacemonitorServ',interfacemonitorservHandler)
        .service('materialServ',materialServHandler)
        .service('timingtaskServ',timingtaskServHandler)
});

