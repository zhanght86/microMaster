/**
 */
define([
    'angular',
    'components/power/controller/Functions.ctrl',
    'components/power/controller/focusManage.ctrl',
    'components/power/controller/regionManage.ctrl',
    'components/power/controller/serManage.ctrl',
    'components/power/controller/addRole.ctrl',
    'components/power/controller/addStaf.ctrl',
    'components/power/service/Functions.serv',
    'components/power/service/focusManage.serv',
    'components/power/service/regionManage.serv',
    'components/power/service/serManage.serv',
    'components/power/service/addRole.serv',
    'components/power/service/addStaf.serv',
],function (angular,
            FunctionsCtrlHandler,
            focusManageCtrlHandler,
            regionManageCtrlHandler,
            serManageCtrlHandler,
            addRoleCtrlHandler,
            addStafCtrlHandler,
            FunctionsServHandler,
            focusManageServHandler,
            regionManageServHandler,
            serManageServHandler,
            addRoleServHandler,
            addStafServHandler) {
    'use strict';
    console.log("load business.power module");
    /*首页-权限管理*/
    return angular.module('business.power', [])
        .config(['$stateProvider',
            function ($stateProvider) {
                $stateProvider
                .state("main.Functions", {
                        url:"/Functions",
                        templateUrl: "components/power/tpl/Functions.html",
                        controller: "FunctionsCtrl"
                })
                .state("main.focusManage", {
                    url:"/focusManage",
                    templateUrl: "components/power/tpl/focusManage.html",
                    controller: "focusManageCtrl"
                })
                .state("main.regionManage", {
                        url:"/regionManage",
                        templateUrl: "components/power/tpl/regionManage.html",
                        controller: "regionManageCtrl"
                 })
                .state("main.serManage", {
                        url:"/serManage",
                        templateUrl: "components/power/tpl/serManage.html",
                        controller: "serManageCtrl"
                })
                .state("main.addRole", {
                    url:"/addRole",
                    templateUrl: "components/power/tpl/addRole.html",
                    controller: "addRoleCtrl"
                })
                .state("main.addStaf", {
                url:"/addStaf",
                templateUrl: "components/power/tpl/addStaf.html",
                controller: "addStafCtrl"
                });
            }])
        .controller('FunctionsCtrl',FunctionsCtrlHandler)
        .controller('focusManageCtrl',focusManageCtrlHandler)
        .controller('regionManageCtrl',regionManageCtrlHandler)
        .controller('serManageCtrl',serManageCtrlHandler)
        .controller('addRoleCtrl',addRoleCtrlHandler)
        .controller('addStafCtrl',addStafCtrlHandler)
        .service('FunctionsServ',FunctionsServHandler)
        .service('focusManageServ',focusManageServHandler)
        .service('regionManageServ',regionManageServHandler)
        .service('serManageServ',serManageServHandler)
        .service('addRoleServ',addRoleServHandler)
        .service('addStafServ',addStafServHandler);
});

