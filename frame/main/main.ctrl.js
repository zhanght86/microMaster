define(['app', 'config','uiRouter'
], function (app) {
    'use strict';
    app.controller('mainCtrl', ['$scope','$state','$interval','AuthHandler',
        function ($scope,$state,$interval,AuthHandler) {
            var pwdPattern=/^(?=.*[0-9].*)(?=.*[A-Z].*)(?=.*[a-z].*).{6,20}$/;
            //获取内容高度
            var minHeight = $(window).height();
            $(".contentsHeight").css("height", (minHeight - 70) + "px");
            //校验是否已登录
            if(!AuthHandler.isLogined){
                console.log("not logined");
                $state.go("login",{"msg":"请登录"});
            }else{
                $scope.user = AuthHandler.getUser();
            }
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
            //鼠标离开菜单区域隐藏菜单
            $scope.mouseleave = function () {
               $scope.leftFlag = true;
               $scope.rightFlag = true;
            };
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
            $scope.tips=false;
            $scope.con = {};
            $scope.sureModmima = function () {
                // debugger;
                if($scope.con.newPassWord == undefined){
                    $scope.con.newPassWord = '';
                }
                if($scope.con.surenewPassWord == undefined){
                    $scope.con.surenewPassWord = '';
                }
                if($scope.con.oldPassword == undefined){
                    $scope.con.oldPassword = '';
                }
                if($scope.con.oldPassword==''){
                    $scope.tips=true;
                    $scope.loginmessage ="请输入原密码！"
                    return;
                  // 需要取到原密码进行对比？？？
                }else if($scope.con.oldPassword != $scope.password){
                    $scope.tips=true;
                    $scope.loginmessage ="原密码不正确，请重新输入！"
                    return;
                };
                if($scope.con.newPassWord == ''){
                    $scope.tips=true;
                    $scope.loginmessage ="请输入新密码！"
                    return;
                }else if(!pwdPattern.test($scope.con.newPassWord)){
                    $scope.tips=true;
                    $scope.loginmessage ="新密码为6-20位英文字母、数字、下划线的组合！"
                    return;
                }else if($scope.con.surenewPassWord== ''){
                    $scope.tips=true;
                    $scope.loginmessage="请确认新密码！";
                    return;
                }else if($scope.con.newPassWord !=$scope.con.surenewPassWord){
                    $scope.tips=true;
                    $scope.loginmessage="确认新密码和新密码不一致,请重新输入！";
                    return;
                }else if($scope.con.newPassWord ==$scope.con.surenewPassWord){
                    $scope.tips=false;
                    $scope.loginmessage="";
                    return;
                }else{
                    // var conditionDto = {};
                    // conditionDto.userPwd = $scope.condition.userPwd;
                    // headerServ.changepwd(conditionDto).then(
                    //     function (answer) {
                    //         if (answer.data.status == 1) {
                    //             window.location.href = "/";
                    //
                    //         } else {
                    //             $scope.editPwdMess=answer.data.message;
                    //         }
                    //     }, function (error) {
                    //     }
                    // );
                };
            };



        }]);
});