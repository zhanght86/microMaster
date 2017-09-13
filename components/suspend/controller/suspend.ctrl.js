/**
 * Created by COCO on 2016/9/17.
 */
define([], function () {
    'use strict';
    function suspendCtrlHandler($scope,$state,suspendServ) {
        console.log("suspendCtrlHandler enter");
        /*查询被保人清单*/
        var getInsuredList = function(){
            var pageIndex = $scope.paginationConf.currentPage;
            var pageSize = $scope.paginationConf.itemsPerPage;

            suspendServ.ProqueryByPage(pageIndex,pageSize).then(
                function(answer){
                    //console.log(JSON.stringify(answer.data));
                    console.log("count="+answer.data.count);
                    $scope.paginationConf.totalItems = answer.data.count;
                    $scope.insureDatas = answer.data.items;
                },function(error){
                    console.log(JSON.stringify(error.data));
                }
            );
        };

        //初始化界面
        var initFunc = function(){
            console.log("suspendCtrlHandler begin init");
            //初始化分页
            $scope.paginationConf = {
                currentPage: 1,     //当前所在的页
                totalItems: 1,      //总共有多少条记录
                itemsPerPage: 15,   //每页展示的数据条数
                pagesLength: 15,    //分页条目的长度（如果设置建议设置为奇数）
                perPageOptions: [10, 20, 30, 40, 50]   // 可选择显示条数的数组
            };
            $scope.$watch('paginationConf.currentPage + paginationConf.itemsPerPage', getInsuredList);

            /!*tab切换响应方法*!/
            //批改奖励调整
            $scope.applicationTab = function(){
                $scope.curActive='appli';
                $state.go("main.suspend.proposal");
            };
            //批改结果查询
            $scope.endorseTab=function(){
                $scope.curActive='endor';
                $state.go("main.suspend.endorse");
            };
            $scope.curActive='appli';
            $state.go("main.suspend.proposal");

            console.log("suspendCtrlHandler end init");
        };
        initFunc();

    };

    return suspendCtrlHandler;
});
