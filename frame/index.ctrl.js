/**
 * Created by ZhangJiansen on 2016/9/16.
 * 首页控制
 */
define(['app', 'config'
], function (app) {
    'use strict';
    app.controller('IndexCtrl', ['$scope','$location','AuthHandler',
        function ($scope,$location,AuthHandler) {
            console.log("AuthHandler");
            if(AuthHandler.isLogined()){
                console.log("已登录");
                $location.path("/main");
            }else{
                console.log("未登录");
                $location.path("/login");
            }
        }]);
});