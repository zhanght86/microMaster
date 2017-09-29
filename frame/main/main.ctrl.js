define(['app', 'config','uiRouter'
], function (app) {
    'use strict';
    app.controller('mainCtrl', ['$scope','$state','$interval','AuthHandler',
        function ($scope,$state,$interval,AuthHandler) {
            //校验是否已登录
            if(!AuthHandler.isLogined){
                console.log("not logined");
                $state.go("login",{"msg":"请登录"});
            }else{
                $scope.user = AuthHandler.getUser();
            }

            //显示导航栏
            $scope.showMainNagiv = true;

            //登录注销响应
            $scope.logout = function(){
                AuthHandler.logout();
                $state.go("login",{"msg":"注销成功"});
                //$location.path("/login?msg=注销成功");
            };

            //鼠标进入菜单区域显示菜单
            $scope.mouseenter = function () {
               $scope.leftFlag = false;
               $scope.rightFlag = false;
            };
            // //鼠标离开菜单区域隐藏菜单
            // $scope.mouseleave = function () {
            //    $scope.leftFlag = true;
            //    $scope.rightFlag = true;
            //
            // };

            //当前的日期
            $interval(function () {
                $scope.currentData = new Date();
            });
            //点击下拉
            $scope.funListShow = function () {
                $scope.headerFunList = true;
                $scope.topTriangle = true;
            };
            $scope.contentBoxLeave = function () {
                $scope.headerFunList = false;
                $scope.topTriangle = false;
            };
            //修改密码
            $scope.changePassword = function () {
                $scope.layer_modpassword = true;
            };
            $scope.close = function () {
                $scope.layer_modpassword = false;
            };



        }]);
});