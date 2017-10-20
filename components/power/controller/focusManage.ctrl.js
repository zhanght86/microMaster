/**
 * Created by ZhangJiansen on 2016/9/19.
 * 首页入口控制器
 */
define([], function () {
    'use strict';
    function focusManageCtrlHandler($scope,$state,focusManageServ) {
        //----------------------------查询------------------------------------------
        var roleSearchDemand=function () {
            $scope.condition.pageNum= $scope.paginationConf.currentPage;
            $scope.condition.pageSize=$scope.paginationConf.itemsPerPage;
            var conditionDto = $scope.condition;
            if(conditionDto == '' || conditionDto == null){
            }
            if($scope.roleName == undefined){
                $scope.roleName = "";
            }
            conditionDto.roleName=$scope.roleName;
            focusManageServ.roleSearchserv(conditionDto).then(
                function(answer){
                    // $scope.paginationConf.totalItems = answer.data.data.total;
                    // $scope.dataDictionaryListR=answer.data.data.list;
                    $scope.selectRightRadio="";
                },function(error){
                    //cconsole.log(JSON.stringify(error.data));
                }
            );
        };
        var initPage = function(){
            $scope.paginationConf = {
                currentPage: 1,
                totalItems: 0,
                itemsPerPage: 5,
                pagesLength: 5,
                perPageOptions: [5, 10, 15,20]
            };
            $scope.condition = {
                pageNum: $scope.paginationConf.currentPage,
                pageSize: $scope.paginationConf.itemsPerPage
            };
            $scope.$watch('paginationConf.currentPage + paginationConf.itemsPerPage',roleSearchDemand);
        };
        initPage();
        $scope.roleSearch=function () {
            roleSearchDemand();
        };
        //----------------------------重置------------------------------------------
        $scope.roleReset=function () {
            $scope.roleName = "";
        };
        //增加按钮跳转
        $scope.addRoleConfig=function () {
            $state.go("main.addRole");
        };
        //删除
        $scope.rolecanale=function () {
            $scope.layer_cancle=true;
            $scope.tipMessage="您确认删除吗！";
        };
        //弹层关闭
        $scope.addRole_back=function () {
            $scope.layer_cancle=false;
        };
        
    };
    return focusManageCtrlHandler;
});