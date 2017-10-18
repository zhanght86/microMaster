/**
 * Created by ZhangJiansen on 2016/9/10.
 * requireJS入口文件
 */
require.config({
    baseUrl: '/microMaster',
    urlArgs: 'v=' + (new Date()).getTime() + Math.random() * 10000,
    paths: {
        /*第三方库文件*/
        'domReady': 'lib/requirejs-domReady/domReady',
        'jquery': 'lib/jquery/jquery.min',
        'angular': 'lib/angular/angular.min',
        'uiRouter': 'lib/angular-ui-router/angular-ui-router-0.2.10',
        'ocLazyLoad': 'lib/ocLazyLoad/ocLazyLoad.require.min',
        'ngCookies': 'lib/angular-cookies/angular-cookies',
        'ngStorage': 'lib/angular-storage/ngStorage.min',
        'bootstrap': 'lib/bootstrap/bootstrap.min',
        'uiBootstrap': 'lib/ui-bootstrap/ui-bootstrap-0.9.0',
        'ngAnimate': 'lib/angular-animate/angular-animate',
        'tmPagination': 'lib/angular-tm-pagination/tm.pagination.min',
        'dateTimePicker':'lib/angularjs-datetime-picker.min',
        'jquery-keypad':'lib/jquery.keypad/jquery.keypad.min',
        'jedate': 'lib/angular-jedate/jedate',
        'angular-jeDate': 'lib/angular-jedate/angular-jedate',
        /*业务模块入口文件*/
        'business': 'components/business.mod'
    },
    shim: {
        'angular': {
            'exports': 'angular'
        },
        'uiRouter': {
            'exports': 'uiRouter',
            deps: ['angular']
        },
        'ocLazyLoad': ['angular'],
        'ngAnimate': {
            'exports': 'ngAnimate',
            deps: ['angular']
        },
        'ngCookies': {
            'exports': 'ngCookies',
            deps: ['angular']
        },
        'ngStorage': {
            'exports': 'ngStorage',
            deps: ['angular']
        },
        'tmPagination': {
            'exports': 'tmPagination',
            deps: ['angular']
        },
        'uiBootstrap': {
            'exports': 'uiBootstrap'
        },
        'business': {
            'exports': 'business',
            deps: ['angular']
        }
    },
    priority: [
        'jquery',
        'angular',
        'uiRouter',
        'bootstrap',
        'business'
    ],
    waitSeconds: 10
});

require([
        'jquery', /*jquery要在前面*/
        'angular',
        'uiRouter',
        'ngCookies',
        'ngAnimate',
        'ngStorage',
        'tmPagination',
        'business',
        'app',
        'route'
    ],
    function ($, angular) {
        angular.element(document).ready(function () {
            //手工装配Angular APP
            angular.bootstrap(document, ['prpins']);
            //关闭启动画面
            //$('.splash-window').remove();
        });
    }
);
