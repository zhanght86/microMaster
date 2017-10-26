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
            materialCtrlHandler,
            materialServHandler,
            timingtaskCtrlHandler,
            timingtaskServHandler,
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
                        templateUrl: "components/material/tpl/material.html",
                        controller: "materialCtrl"
                    })
                    .state("main.interfacemonitor", {
                        url:"/interfacemonitor",
                        templateUrl: "components/material/tpl/interfacemonitor.html",
                        controller: "interfacemonitorCtrl"
                    })
                    .state("main.timingtask", {
                        url:"/timingtask",
                        templateUrl: "components/material/tpl/timingtask.html",
                        controller: "timingtaskCtrl"
                    });
            }])
        .controller('interfacemonitorCtrl',interfacemonitorCtrlHandler)
        .controller('timingtaskCtrl',timingtaskCtrlHandler)
        .controller('materialCtrl',materialCtrlHandler)
        .service('interfacemonitorServ',interfacemonitorservHandler)
        .service('timingtaskServ',timingtaskServHandler)
        .service('materialServ',materialServHandler);
});

