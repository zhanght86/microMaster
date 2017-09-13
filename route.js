/**
 * Created by ZhangJiansen on 2016/9/10.
 * Angular 路由控制
 * 只有主框架的模块才可以在此文件中引入，业务模块请在components/business.mod中定义依赖
 */
define(['app',
    'frame/index.ctrl',
    'frame/main/main.ctrl',
    'frame/menu/menu.ctrl',
    'frame/login/login.ctrl',
    'frame/main/AuthHandler'
    ], function (app) {
    'use strict';

    return app.config(['$urlRouterProvider', '$stateProvider',
        function ($urlRouterProvider, $stateProvider) {
            $urlRouterProvider.when("","/index").otherwise('/index');
            $stateProvider
                /*登录页*/
                .state("login",{
                    url:"/login?msg",
                    templateUrl:"frame/login/login.tpl.html",
                    controller: "LoginCtrl"
                })
                /*登录后框架主页*/
                .state("main",{
                    url:"/main",
                    templateUrl:"frame/main/main.tpl.html",
                    controller: "mainCtrl"
                });
                //$locationProvider.html5Mode(true);
        }]);
});