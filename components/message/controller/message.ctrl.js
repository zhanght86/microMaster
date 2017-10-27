/**
 * Controller层只处理视图数据绑定，后端交互在service处理
 */
define([], function () {
    'use strict';
    function messageCtrlHandler($scope,$state,messageServ) {
        //===========================查询=========================================
        var mesSearchDemand=function () {
            $scope.condition.pageNum= $scope.mespaginationConf.currentPage;
            $scope.condition.pageSize=$scope.mespaginationConf.itemsPerPage;
            var conditionDto = $scope.condition;
            if(conditionDto == '' || conditionDto == null){
            }
            if($scope.roleName == undefined){
                $scope.roleName = "";
            }
            conditionDto.roleName=$scope.roleName;
            messageServ.mesSearchserv(conditionDto).then(
                function(answer){
                    // $scope.mespaginationConf.totalItems = answer.data.data.total;
                    // $scope.dataDictionaryListR=answer.data.data.list;
                    $scope.mespaginationConf.totalItems = answer.data.count;
                    $scope.messageList=answer.data.items;
                },function(error){
                    //cconsole.log(JSON.stringify(error.data));
                }
            );
        };
        var initPage = function(){
            $scope.mespaginationConf = {
                currentPage: 1,
                totalItems: 0,
                itemsPerPage: 5,
                pagesLength: 5,
                perPageOptions: [5, 10, 15,20]
            };
            $scope.condition = {
                pageNum: $scope.mespaginationConf.currentPage,
                pageSize: $scope.mespaginationConf.itemsPerPage
            };
            $scope.$watch('mespaginationConf.currentPage + mespaginationConf.itemsPerPage',mesSearchDemand);
        };
        initPage();
        $scope.mesSearch=function () {
            mesSearchDemand();
        };
        //创建
        $scope.foundnew=function () {
            $scope.layer_found=true;
        };
        //修改
        $scope.modify=function () {
            $scope.layer_modfound=true;
        };
        //删除
        $scope.cancle=function () {
            $scope.layer_cancle=true;
            $scope.tipMessage="您确认删除吗！";
        };
        $scope.addRole_back=function () {
            $scope.layer_found=false;
            $scope.layer_modfound=false;
            $scope.layer_cancle=false;
        };
        /*是否*/
        $scope.yesClick1 = function () {
            $scope.yesflag = true;
            $scope.noflag = true;
        };
        $scope.noClick1 = function () {
            $scope.yesflag = false;
            $scope.noflag = false;
        };


    };
    return messageCtrlHandler;
});