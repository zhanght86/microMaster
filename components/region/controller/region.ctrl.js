/**
 * Created by ZhangJiansen on 2016/9/19.
 * 首页入口控制器
 */
define([], function () {
    'use strict';
    function regionCtrlHandler($scope,$state,regionServ) {
        //----------------------------查询------------------------------------------
        var reSearchDemand=function () {
            $scope.condition.pageNum= $scope.paginationConf.currentPage;
            $scope.condition.pageSize=$scope.paginationConf.itemsPerPage;
            var conditionDto = $scope.condition;
            if(conditionDto == '' || conditionDto == null){
            }
            if($scope.XXX == undefined){
                $scope.XXX = "";
            }
            conditionDto.XX=$scope.XXX;
            regionServ.regionSearchserv(conditionDto).then(
                function(answer){
                    // $scope.paginationConf.totalItems = answer.data.data.total;
                    // $scope.dataDictionaryListR=answer.data.data.list;
                    $scope.paginationConf.totalItems = answer.data.count;
                    $scope.regionDatalist=answer.data.items;
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
            $scope.$watch('paginationConf.currentPage + paginationConf.itemsPerPage',reSearchDemand);
        };
        initPage();
        $scope.reSearch=function () {
            reSearchDemand();
        };
        // 添加关联机构
        $scope.addRelation=function () {
            $scope.layer_addRalation=true;
        };
        // 弹层关闭
        $scope.addralation_sure=function () {
            $scope.layer_addRalation=false;
        };
        // 修改关联机构
        $scope.modify=function () {
            $scope.layer_modRalation=true;
        };
        // 弹层关闭
        $scope.modralation_sure=function () {
            $scope.layer_modRalation=false;
        };
        //停用
        $scope.Disable=function () {
            $scope.layer_Disable=true;
            $scope.tipMessage="您确定停用吗？";
        };
        $scope.rescind=function () {
            $scope.layer_Disable=false;
        };

    };
    return regionCtrlHandler;
});