define(['app'], function (app) {
    'use strict';
    app.controller('LoginCtrl', ['$scope','$location','$stateParams','AuthHandler',
        function ($scope,$location,$stateParams,AuthHandler) {
            var boxRight=document.getElementById("boxRight");
            var Pattern=/^(?![\d]+$)(?![a-zA-Z]+$)(?![^\da-zA-Z]+$).{6,20}$/  //能匹配的组合为：数字+字母，数字+特殊字符，字母+特殊字符，数字+字母+特殊字符组合，而且不能是纯数字，纯字母，纯特殊字符
            // $scope.loginmessage = $stateParams.msg;
            $scope.tips=false;
            //系统登录
            $scope.login = function(){
                try{
                    var authUser= {};
                    authUser.usercode = $scope.usercode;
                    authUser.password = $scope.password;
                    if (authUser == '' || authUser == null) {
                    }
                    if (authUser.usercode == undefined) {
                        $scope.tips=true;
                        $scope.loginmessage ="请输入您的用户名";
                        return;
                    }else if(authUser.password == undefined) {
                        $scope.tips=true;
                        $scope.loginmessage ="请输入您的密码"
                        return;
                    }else if(!Pattern.test($scope.password)){
                        $scope.tips=true;
                        $scope.loginmessage ="密码必须为6-20位英文字母、数字、下划线"
                        return;
                    }
                    AuthHandler.login(authUser).then(
                        function(answer){
                            if(answer.status){
                                console.log("login success");
                                $location.path('/main/index');
                            }else{
                                console.log("login fail");
                                $scope.loginmessage = answer.statusText
                            }
                        },
                        function(error){
                            $scope.loginmessage = "系统登录异常";
                            console.log(JSON.stringify(error));
                        }
                    );
                }catch(e){
                    console.log(e);
                    $scope.loginmessage = "系统异常,请联系管理员";
                }
            };
            //忘记密码
            $scope.forgetPassword=function () {
                $scope.tips=true;
                $scope.loginmessage = "如您忘记密码，请联系管理员！";
            }
            // //记住我
            // $scope.memoryMes=function () {
            //     boxRight.style.backgroundPositionY="-25px";
            // }
        }]);
    //编写指令，用于页面repeatFinish渲染完成
//    app.directive('repeatFinish', function () {
//        return {
//            link: function (scope, element, attr) {
//                console.log(scope.$index)
//                if (scope.$last == true) {
//                    scope.$eval(attr.repeatFinish)
//                }
//            }
//        }
//    });
});