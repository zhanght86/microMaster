/**
 * Created by ZhangJiansen on 2016/9/18.
 * 投保模块定义
 */
define([
    'angular',
    'components/region/controller/region.ctrl',
    // 'components/index/controller/focusManage.ctrl',
    // 'components/index/controller/regionManage.ctrl',
    // 'components/index/controller/serManage.ctrl',
    // 'components/index/controller/addRole.ctrl',
    'components/region/service/region.serv',
    // 'components/index/service/focusManage.serv',
    // 'components/index/service/regionManage.serv',
    // 'components/index/service/serManage.serv',
    // 'components/index/service/addRole.serv',
],function (angular,
            regionCtrlHandler,
            // focusManageCtrlHandler,
            // regionManageCtrlHandler,
            // serManageCtrlHandler,
            // addRoleCtrlHandler,
            regionServHandler){
            // focusManageServHandler,
            // regionManageServHandler,
            // serManageServHandler,
            // addRoleServHandler ) {
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
                // .state("main.focusManage", {
                //         url:"/focusManage",
                //         templateUrl: "components/index/tpl/focusManage.html",
                //         controller: "focusManageCtrl"
                // })
                // .state("main.regionManage", {
                //         url:"/regionManage",
                //         templateUrl: "components/index/tpl/regionManage.html",
                //         controller: "regionManageCtrl"
                //  })
                // .state("main.serManage", {
                //         url:"/serManage",
                //         templateUrl: "components/index/tpl/serManage.html",
                //         controller: "serManageCtrl"
                // })
                // .state("main.addRole", {
                //     url:"/addRole",
                //     templateUrl: "components/index/tpl/addRole.html",
                //     controller: "addRoleCtrl"
                // });
            }])
        .controller('regionCtrl',regionCtrlHandler)
        // .controller('focusManageCtrl',focusManageCtrlHandler)
        // .controller('regionManageCtrl',regionManageCtrlHandler)
        // .controller('serManageCtrl',serManageCtrlHandler)
        // .controller('addRoleCtrl',addRoleCtrlHandler)
        .service('regionServ',regionServHandler);
        // .service('focusManageServ',focusManageServHandler)
        // .service('regionManageServ',regionManageServHandler)
        // .service('serManageServ',serManageServHandler)
        // .service('addRoleServ',addRoleServHandler);
});

