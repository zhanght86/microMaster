/**
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
                if($scope.curTitle=="权限管理"){
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
                }else if($scope.curTitle=="监控管理"){
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
                    $scope.lefttwoMenu=false;
                    console.log("此菜单暂无二级菜单！");
                };
            };
            $scope.activeMenutwo=function(mes){
                $scope.curTitle2 = mes.title2;
                $scope.curTitle3 = mes.title3;
            };

        }]);
});