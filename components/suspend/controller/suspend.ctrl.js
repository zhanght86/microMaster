/**
 */
define([], function () {
    'use strict';
    function suspendCtrlHandler($scope,$state,suspendServ) {
            /!*tab切换响应方法*!/
            //普通用户管理
            $scope.applicationTab = function(){
                $scope.curActive='appli';
                $state.go("main.suspend.ordinary");
            };
            //展业人员管理
            $scope.endorseTab=function(){
                $scope.curActive='endor';
                $state.go("main.suspend.proposal");
            };
            $scope.curActive='appli';
            $state.go("main.suspend.ordinary");

            console.log("suspendCtrlHandler end init");

        //===================================普通用户管理部分=====================================
        var getInsuredList = function(){
            $scope.condition.pageNum= $scope.paginationConf.currentPage;
            $scope.condition.pageSize=$scope.paginationConf.itemsPerPage;
            var conditionDto = $scope.condition;
            if(conditionDto == '' || conditionDto == null){
            }
            if($scope.accountName == undefined){
                $scope.accountName = "";
            }
            conditionDto.accountName=$scope.accountName;
            suspendServ.ordinarySearchserv(conditionDto).then(
                function(answer){
                    // $scope.paginationConf.totalItems = answer.data.data.total;
                    // $scope.dataDictionaryListR=answer.data.data.list;
                    $scope.paginationConf.totalItems = answer.data.count;
                    $scope.ordinaryList=answer.data.items;
                },function(error){
                    //cconsole.log(JSON.stringify(error.data));
                }
            );
        };
        //初始化界面
        var initFunc = function(){
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
            $scope.$watch('paginationConf.currentPage + paginationConf.itemsPerPage',getInsuredList);
        };
        initFunc();
        $scope.ptSearch=function () {
            getInsuredList();
        };
        //账户名(会员详细信息)
        $scope.userMess=function () {
            $scope.layer_Policy=true;
        };
        //承包笔数(保单详情)
        $scope.nums=function () {
            $scope.layer_customer=true;
        };
        //人员属性(车商渠道详情)
        $scope.attribute=function () {
            $scope.layer_carChannel=true;
        };
        //===================================展业人员管理部分=====================================
        var getInsuredListuu = function(){
            $scope.condition.pageNum= $scope.paginationConfzy.currentPage;
            $scope.condition.pageSize=$scope.paginationConfzy.itemsPerPage;
            var conditionDto = $scope.condition;
            if(conditionDto == '' || conditionDto == null){
            }
            if($scope.accountName == undefined){
                $scope.accountName = "";
            }
            conditionDto.accountName=$scope.accountName;
            suspendServ.proposalSearchserv(conditionDto).then(
                function(answer){
                    // $scope.paginationConfzy.totalItems = answer.data.data.total;
                    // $scope.dataDictionaryListR=answer.data.data.list;
                    $scope.paginationConfzy.totalItems = answer.data.count;
                    $scope.proposalList=answer.data.items;
                },function(error){
                    //cconsole.log(JSON.stringify(error.data));
                }
            );
        };
        var initFunc = function(){
            $scope.paginationConfzy = {
                currentPage: 1,
                totalItems: 0,
                itemsPerPage: 5,
                pagesLength: 5,
                perPageOptions: [5, 10, 15,20]
            };
            $scope.condition = {
                pageNum: $scope.paginationConfzy.currentPage,
                pageSize: $scope.paginationConfzy.itemsPerPage
            };
            $scope.$watch('paginationConfzy.currentPage + paginationConfzy.itemsPerPage',getInsuredListuu);
        };
        initFunc();
        $scope.zySearch=function () {
            getInsuredListuu();
        };
        //账户名(业务员详细信息)
        $scope.enUserMess=function () {
            $scope.layer_enPolicy=true;
        };
        //承包笔数(月，总)
        $scope.enThisnum=function () {
            $scope.layer_encustomer=true;
        };
        $scope.enTotalnum=function () {
            $scope.layer_entotalcustomer=true;
        };
        //绩效(月，总)
        $scope.enThisMoney=function () {
            $scope.layer_performance=true;
        };
        $scope.enTotalMoney=function () {
            $scope.layer_totalperformance=true;
        };
        //关闭
        $scope.addRole_back=function () {
            $scope.layer_Policy=false;
            $scope.layer_customer=false;
            $scope.layer_carChannel=false;
            $scope.layer_enPolicy=false;
            $scope.layer_encustomer=false;
            $scope.layer_entotalcustomer=false;
            $scope.layer_performance=false;
            $scope.layer_totalperformance=false;
        };

    };
    return suspendCtrlHandler;
});
