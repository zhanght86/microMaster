/**
 * Created by ZhangJiansen on 2016/9/10.
 * 菜单页面控制器
 */
define(['app','uiRouter',
        'frame/menu/menu.serv'], function (app) {
    'use strict';
    app.controller('MenuCtrl', ['$scope','$state','menuServ','AuthHandler',
        function($scope, $state, menuServ,AuthHandler) {
            var user = AuthHandler.getUser();
            if(user){
                menuServ.getData(user.userCode).then(
                    function(answer){
                        $scope.leftMenu = answer.data;
                    },function(error){
                        console.log("获取菜单错误");
                        console.log(JSON.stringify(error));
                        $state.go("login",{"msg":"获取菜单错误"});
                    }
                );
            }else{
                console.log("未登录");
                $state.go("login",{"msg":"请登录"});
            }






            //选中菜单高亮显示
            $scope.activeMenu=function(message){
                $scope.curTitle = message.title;
                if($scope.curTitle=="微店管理页面配置"||"装修模板管理"){
                    //$scope.tabMenu = !$scope.tabMenu;
                    menuServ.getTWOData(user.userCode).then(
                        function(answer){
                            $scope.lefttwoMenu = answer.data;
                        },function(error){
                            console.log("获取菜单错误");
                            console.log(JSON.stringify(error));
                            $state.go("login",{"msg":"获取菜单错误"});
                        }
                    );
                }else{
                    console.log("此菜单暂无二级菜单！");
                }
            };
            $scope.activeMenutwo=function(mes){
                $scope.curTitle = mes.title2;
            };

        }]);
});