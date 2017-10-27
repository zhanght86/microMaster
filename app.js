/**
 * Created by ZhangJiansen on 2016/9/10.
 * Angular入口模块
 */
define([
    'angular',
    'ngCookies',
    'ngAnimate',
    'ngStorage',
    'uiRouter',
    'ocLazyLoad',
    'business',
    'angular-jeDate',
    'angular-ui-tree',
    'fueluxTree',
    ],
    function (angular) {
        'use  strict';
        var app = angular.module('prpins', [
           // 'uiBootstrap',
            'ngCookies',
            'ngAnimate',
            'ngStorage',
            'tm.pagination',
            'ui.router',
            'ui.router.state',
            'business',
            'angular-jedate',
            'ui.tree',
        ]);

        app.config([
            '$controllerProvider',
            '$compileProvider',
            '$filterProvider',
            '$provide',
            function ($controllerProvider, $compileProvider, $filterProvider, $provide) {
                app.register = {
                    controller: $controllerProvider.register,
                    directive: $compileProvider.directive,
                    filter: $filterProvider.register,
                    factory: $provide.factory,
                    service: $provide.service
                };
            }]);

        app.config(function($httpProvider){
            $httpProvider.interceptors.push(['$q', '$location', '$localStorage',function($q, $location, $localStorage){
                return {
                    'request': function (config) {
                        config.headers = config.headers || {};
                        if ($localStorage.token) {
                            config.headers.Authorization = 'Bearer ' + $localStorage.token;
                        }
                        return config;
                    },
                    'responseError': function(response) {
                        if(response.status === 401 || response.status === 403) {
                            $location.path('/login');
                        }
                        return $q.reject(response);
                    }
                };
            }]);
        });

        app.run(['$state', '$stateParams', '$rootScope',
            function ($state, $stateParams, $rootScope) {
                $rootScope.$state = $state;
                $rootScope.$stateParams = $stateParams;

                $rootScope.$on('$locationChangeSuccess',
                    function(event, toState, toParams, fromState, fromParams){
                        console.log("location change!");
                    });
            }
        ]);

        console.log('app process over');
        return app;
    }
);