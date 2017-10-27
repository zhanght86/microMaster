/**
 */
define([], function () {
    'use strict';
    function feedbackCtrlHandler ($scope,$state,feedbackServ) {
        //----------------------------查询------------------------------------------
        var feedSearchDemand=function () {
            $scope.condition.pageNum= $scope.paginationConf.currentPage;
            $scope.condition.pageSize=$scope.paginationConf.itemsPerPage;
            var conditionDto = $scope.condition;
            if(conditionDto == '' || conditionDto == null){
            }
            if($scope.roleName == undefined){
                $scope.roleName = "";
            }
            conditionDto.roleName=$scope.roleName;
            feedbackServ.feedSearchserv(conditionDto).then(
                function(answer){
                    // $scope.paginationConf.totalItems = answer.data.data.total;
                    // $scope.dataDictionaryListR=answer.data.data.list;
                    $scope.paginationConf.totalItems = answer.data.count;
                    $scope.feedbackList=answer.data.items;
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
            $scope.$watch('paginationConf.currentPage + paginationConf.itemsPerPage',feedSearchDemand);
        };
        initPage();
        $scope.feedSearch=function () {
            feedSearchDemand();
        };
        //查看详情
        $scope.bigDescribe=function () {
            $scope.layer_detailText=true;
        };
        // 弹层关闭
        $scope.addralation_sure=function () {
            $scope.layer_detailText=false;
        };
    };

    return feedbackCtrlHandler;
});