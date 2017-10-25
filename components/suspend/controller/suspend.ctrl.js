/**
 * Created by COCO on 2016/9/17.
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
        /*查询被保人清单*/
        var getInsuredList = function(){
            var pageIndex = $scope.paginationConfp.currentPage;
            var pageSize = $scope.paginationConfp.itemsPerPage;
            suspendServ.ProqueryByPage(pageIndex,pageSize).then(
                function(answer){
                    // console.log("count="+answer.data.count);
                    $scope.paginationConfp.totalItems = answer.data.count;
                    $scope.insureDatas = answer.data.items;
                },function(error){
                    console.log(JSON.stringify(error.data));
                }
            );
        };

        //初始化界面
        var initFunc = function(){
            //初始化分页
            $scope.paginationConfp = {
                currentPage: 1,     //当前所在的页
                totalItems: 1,      //总共有多少条记录
                itemsPerPage: 15,   //每页展示的数据条数
                pagesLength: 15,    //分页条目的长度（如果设置建议设置为奇数）
                perPageOptions: [10, 20, 30, 40, 50]   // 可选择显示条数的数组
            };
            $scope.$watch('paginationConfp.currentPage + paginationConfp.itemsPerPage', getInsuredList);
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
