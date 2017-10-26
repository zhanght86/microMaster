/**
 * Controller层只处理视图数据绑定，后端交互在service处理
 */
define([], function () {
    'use strict';
    function messageCtrlHandler($scope,$state) {
        //创建
        $scope.foundnew=function () {
            $scope.layer_found=true;
        };
        //修改
        $scope.modify=function () {
            $scope.layer_modfound=true;
        };
        //删除
        $scope.cancle=function () {
            $scope.layer_cancle=true;
            $scope.tipMessage="您确认删除吗！";
        };
        $scope.addRole_back=function () {
            $scope.layer_found=false;
            $scope.layer_modfound=false;
            $scope.layer_cancle=false;
        };
        /*是否*/
        $scope.yesClick1 = function () {
            debugger
            $scope.yesflag = true;
            $scope.noflag = true;
        };
        $scope.noClick1 = function () {
            $scope.yesflag = false;
            $scope.noflag = false;
        };


    };
    return messageCtrlHandler;
});