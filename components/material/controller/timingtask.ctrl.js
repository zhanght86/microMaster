/**
 * Created by ZhangJiansen on 2016/9/18.
 * 投保成功控制器
 */
define([], function () {
    'use strict';
    function timingtaskCtrlHandler ($scope,$state,timingtaskServ) {
        var timeSrarchFun = function () {
            debugger;
            $scope.condition.pageNum= $scope.paginationConf.currentPage;
            $scope.condition.pageSize=$scope.paginationConf.itemsPerPage;
            var conditionDto = $scope.condition;
            if(conditionDto == '' || conditionDto == null){
            }
            if($scope.xxxx == undefined){
                $scope.xxxx = "";
            }
            conditionDto.xxxx=$scope.xxxx;
            timingtaskServ.timeSearchdata(conditionDto).then(
                function(answer){
                    // $scope.paginationConf.totalItems = answer.data.data.total;
                    // $scope.dataDictionaryListR=answer.data.data.list;
                },function(error){
                    //cconsole.log(JSON.stringify(error.data));
                }
            );
        };
        var timeInitPage = function(){
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
            $scope.$watch('paginationConf.currentPage + paginationConf.itemsPerPage',timeSrarchFun);
        };
        timeInitPage();
        $scope.timeSrarch = function () {
            // debugger;
            timeSrarchFun();
        };
    };

    return timingtaskCtrlHandler;
});