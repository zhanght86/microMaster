/**
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
                    $scope.paginationConf.totalItems = answer.data.count;
                    $scope.roleDataList=answer.data.items;
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
        var deleteUser = function(){
            debugger;
            var conditionDto={};
            conditionDto.Id=$scope.Id;
            focusManageServ.roleCancleserv(conditionDto).then(
                function(answer){
                    if(answer.data.status==1){
                        roleSearchDemand();
                        $scope.tipMessage="恭喜你，删除成功！";
                        $scope.layer_tipMessage=true;
                        return;
                    }else if(answer.data.status==0){
                        $scope.tipMessage="对不起，删除失败！";
                        $scope.layer_tipMessage=true;
                        return;
                    }
                },
                function(error){
                    //console.log(JSON.stringify(error.data));
                }
            );
        };
        $scope.roleCancleSure=function () {
            deleteUser();
        }
        //弹层关闭
        $scope.addRole_back=function () {
            $scope.layer_cancle=false;
        };
        
    };
    return focusManageCtrlHandler;
});