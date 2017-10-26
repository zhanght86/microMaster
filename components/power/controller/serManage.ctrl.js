/**
 */
define([], function () {
    'use strict';
    function serManageCtrlHandler($scope,$state,serManageServ) {
        //----------------------------查询------------------------------------------
        var rySearchDemand=function () {
            $scope.condition.pageNum= $scope.paginationConf.currentPage;
            $scope.condition.pageSize=$scope.paginationConf.itemsPerPage;
            var conditionDto = $scope.condition;
            if(conditionDto == '' || conditionDto == null){
            }
            if($scope.ygCode == undefined){
                $scope.ygCode = "";
            }
            if($scope.ygName == undefined){
                $scope.ygName = "";
            }
            conditionDto.ygCode=$scope.ygCode;
            conditionDto.ygName=$scope.ygName;
            serManageServ.ygSearchserv(conditionDto).then(
                function(answer){
                    // $scope.paginationConf.totalItems = answer.data.data.total;
                    // $scope.dataDictionaryListR=answer.data.data.list;
                    $scope.paginationConf.totalItems = answer.data.count;
                    $scope.peopleDatalist=answer.data.items;
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
            $scope.$watch('paginationConf.currentPage + paginationConf.itemsPerPage',rySearchDemand);
        };
        initPage();
        $scope.rySearch=function () {
            rySearchDemand();
        };
        //增加
        $scope.addRoleConfig=function () {
            $state.go("main.addStaf");
        }
        //删除
        $scope.canale=function () {
            $scope.layer_cancle=true;
            $scope.tipMessage="您确认删除吗！";
        };
        //弹层关闭
        $scope.addRole_back=function () {
            $scope.layer_cancle=false;
        };

    };
    return serManageCtrlHandler;
});