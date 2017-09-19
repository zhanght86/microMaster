/**
 * Created by ZhangJiansen on 2016/9/18.
 * 投保模块定义
 */
define([
    'angular',
    'components/power/controller/focusManage.ctrl',
    'components/power/controller/regionManage.ctrl',
    'components/power/controller/serManage.ctrl',
    'components/power/controller/addRole.ctrl',
    'components/power/service/focusManage.serv',
    'components/power/service/regionManage.serv',
    'components/power/service/serManage.serv',
    'components/power/service/addRole.serv',
],function (angular,
            focusManageCtrlHandler,
            regionManageCtrlHandler,
            serManageCtrlHandler,
            addRoleCtrlHandler,
            focusManageServHandler,
            regionManageServHandler,
            serManageServHandler,
            addRoleServHandler) {
    'use strict';
    console.log("load business.power module");
    /*首页-统计图表*/
    return angular.module('business.power', [])
        .config(['$stateProvider',
            function ($stateProvider) {
                $stateProvider
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
                });
            }])
        .controller('focusManageCtrl',focusManageCtrlHandler)
        .controller('regionManageCtrl',regionManageCtrlHandler)
        .controller('serManageCtrl',serManageCtrlHandler)
        .controller('addRoleCtrl',addRoleCtrlHandler)
        .service('focusManageServ',focusManageServHandler)
        .service('regionManageServ',regionManageServHandler)
        .service('serManageServ',serManageServHandler)
        .service('addRoleServ',addRoleServHandler);
});

