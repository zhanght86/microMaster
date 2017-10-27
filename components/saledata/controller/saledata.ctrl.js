/**
 */
define([], function () {
    'use strict';
    function saledataCtrlHandler($scope,$state,saledataServ) {
            /!*tab切换响应方法*!/
            //普通用户管理
            $scope.orderTab = function(){
                $scope.curActive='appli';
                $state.go("main.saledata.order");
            };
            //展业人员管理
            $scope.policyTab=function(){
                $scope.curActive='endor';
                $state.go("main.saledata.policy");
            };
            $scope.curActive='appli';
            $state.go("main.saledata.order");

        //===================================订单查询部分=====================================

        //===================================保单查询部分=====================================
        var policySearchDemand=function () {
            $scope.condition.pageNum= $scope.bdpaginationConf.currentPage;
            $scope.condition.pageSize=$scope.bdpaginationConf.itemsPerPage;
            var conditionDto = $scope.condition;
            if(conditionDto == '' || conditionDto == null){
            }
            if($scope.roleName == undefined){
                $scope.roleName = "";
            }
            conditionDto.roleName=$scope.roleName;
            saledataServ.policySearchserv(conditionDto).then(
                function(answer){
                    // $scope.bdpaginationConf.totalItems = answer.data.data.total;
                    // $scope.dataDictionaryListR=answer.data.data.list;
                    $scope.bdpaginationConf.totalItems = answer.data.count;
                    $scope.policyList=answer.data.items;
                },function(error){
                    //cconsole.log(JSON.stringify(error.data));
                }
            );
        };
        var initPage = function(){
            $scope.bdpaginationConf = {
                currentPage: 1,
                totalItems: 0,
                itemsPerPage: 5,
                pagesLength: 5,
                perPageOptions: [5, 10, 15,20]
            };
            $scope.condition = {
                pageNum: $scope.bdpaginationConf.currentPage,
                pageSize: $scope.bdpaginationConf.itemsPerPage
            };
            $scope.$watch('bdpaginationConf.currentPage + bdpaginationConf.itemsPerPage',policySearchDemand);
        };
        initPage();
        $scope.policySearch=function () {
            policySearchDemand();
        };


    };
    return saledataCtrlHandler;
});
