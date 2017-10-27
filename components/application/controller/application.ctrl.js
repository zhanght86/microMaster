/**
 * Controller层只处理视图数据绑定，后端交互在service处理
 */
define([], function () {
    'use strict';
    function applicationCtrlHandler($scope,$state,applicationServ) {
        //----------------------------查询------------------------------------------
        var appSearchDemand=function () {
            $scope.condition.pageNum= $scope.paginationConf.currentPage;
            $scope.condition.pageSize=$scope.paginationConf.itemsPerPage;
            var conditionDto = $scope.condition;
            if(conditionDto == '' || conditionDto == null){
            }
            if($scope.roleName == undefined){
                $scope.roleName = "";
            }
            conditionDto.roleName=$scope.roleName;
            applicationServ.APPSearchserv(conditionDto).then(
                function(answer){
                    // $scope.paginationConf.totalItems = answer.data.data.total;
                    // $scope.dataDictionaryListR=answer.data.data.list;
                    $scope.paginationConf.totalItems = answer.data.count;
                    $scope.appDataList=answer.data.items;
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
            $scope.$watch('paginationConf.currentPage + paginationConf.itemsPerPage',appSearchDemand);
        };
        initPage();
        $scope.appSearch=function () {
            appSearchDemand();
        };
        //客户姓名-会员详细信息
        $scope.downCustomer=function () {
            $scope.layer_Policy=true;
        };
        //承包笔数-保单详情
        $scope.downPolicy=function () {
            $scope.layer_customer=true;
        };
        //弹层关闭
        $scope.addRole_back=function () {
            $scope.layer_Policy=false;
            $scope.layer_customer=false;
        };


    };
    return applicationCtrlHandler;
});