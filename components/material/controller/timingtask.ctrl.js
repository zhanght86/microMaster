/**
 */
define([], function () {
    'use strict';
    function timingtaskCtrlHandler ($scope,$state,timingtaskServ) {
        var timeSrarchFun = function () {
            $scope.condition.pageNum= $scope.paginationConf.currentPage;
            $scope.condition.pageSize=$scope.paginationConf.itemsPerPage;
            var conditionDto = $scope.condition;
            if(conditionDto == '' || conditionDto == null){
            }
            if($scope.executeDate == undefined){
                $scope.executeDate = "";
            }
            conditionDto.executeDate=$scope.executeDate;
            timingtaskServ.PPPPPP(conditionDto).then(
                function(answer){
                    // $scope.paginationConf.totalItems = answer.data.data.total;
                    // $scope.dataDictionaryListR=answer.data.data.list;
                    $scope.paginationConf.totalItems = answer.data.count;
                    $scope.timingList=answer.data.items;
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
            $scope.$watch('paginationConf.currentPage + paginationConf.itemsPerPage',timeSrarchFun);
        };
        initPage();
        $scope.timeSrarch=function () {
            timeSrarchFun();
        };

    };
    return timingtaskCtrlHandler;
});