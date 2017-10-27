/**
 */
define([], function () {
    'use strict';
    function materialCtrlHandler ($scope,$state,materialServ) {


        //----------------------------查询------------------------------------------
        var JournalSearchDemand=function () {
            debugger
            $scope.condition.pageNum= $scope.paginationConf.currentPage;
            $scope.condition.pageSize=$scope.paginationConf.itemsPerPage;
            var conditionDto = $scope.condition;
            if(conditionDto == '' || conditionDto == null){
            }
            if($scope.describe == undefined){
                $scope.describe = "";
            }
            conditionDto.describe=$scope.describe;
            materialServ.materialServdata(conditionDto).then(
                function(answer){
                    // $scope.paginationConf.totalItems = answer.data.data.total;
                    // $scope.dataDictionaryListR=answer.data.data.list;
                    $scope.paginationConf.totalItems = answer.data.count;
                    $scope.metList=answer.data.items;
                },function(error){
                    //cconsole.log(JSON.stringify(error.data));
                }
            );
        };
        var rrrr = function(){
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
            $scope.$watch('paginationConf.currentPage + paginationConf.itemsPerPage',JournalSearchDemand);
        };
        rrrr();
        $scope.JournalSearch=function () {
            debugger;
            JournalSearchDemand();
        };


    };
    return materialCtrlHandler;
});