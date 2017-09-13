/**
 * Created by ZhangJiansen on 2016/9/10.
 * Controller层只处理视图数据绑定，后端交互在service处理
 */
define([], function () {
    'use strict';
    function applicationCtrlHandler($scope,$state,applicationServ,InsuredServ) {

        applicationServ.getData().then(
            function(answer){
                //console.log(answer.status);
                //console.log(answer.statusText);
                //console.log(JSON.stringify(answer.data));
                //refreshData($scope, answer.data);
            },function(error){
                console.log(JSON.stringify(error));
            }
        );
        /*投保单提交*/
        $scope.onSubmit = function(){console.log($scope.form);
            var data = $scope.policy;
            //获取到表单是否验证通过
            if($scope.form.$valid){
                alert('通过验证可以提交表单');
            }else{
                alert('表单没有通过验证');
            }
            applicationServ.savePolicy(data).then(
                function(answer){
                    //alert(JSON.stringify(answer.data));
                    //$state.go("main.offLineCharge",{"proposalNo":"TEAC2016091701"});
                    //跳转到收费页面
                    /*if($scope.policy.prpTmain.payMode == "0"){
                     $state.go("main.onLineCharge");
                     }else{
                     //$state.go("main.offLineCharge");
                     $state.go("main.offLineCharge",{"proposalNo":policyCodeMap.proposalDto.prpTmain.proposalNo});
                     }*/
                },function(error){
                    console.log(JSON.stringify(error.data));
                }
            );
        };
        /*暂存*/
        $scope.savePause = function(){
            var data = $scope.policy;
            data.prpTmain.proposalNo=this.policyCodeMap.proposalDto.prpTmain.proposalNo;
            //console.log(data.prpTmain.proposalNo);
            console.log(JSON.stringify(data));
            applicationServ.savePause(data).then(
                function(answer){
                    //alert(JSON.stringify(answer.data));
                    //$state.go("main.offLineCharge",{"proposalNo":"TEAC2016091701"});
                    //跳转到收费页面
                    /*if($scope.policy.prpTmain.chargeType == "0"){
                     $state.go("main.onLineCharge");
                     }else{
                     $state.go("main.offLineCharge");
                     }*/
                },function(error){
                    console.log(JSON.stringify(error.data));
                }
            );
        };
        /*查询被保人清单*/
        var getInsuredList = function(){
            var pageIndex = $scope.paginationConf.currentPage;
            var pageSize = $scope.paginationConf.itemsPerPage;

            InsuredServ.queryByPage(pageIndex,pageSize).then(
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
            //初始化分页
            $scope.paginationConf = {
                currentPage: 1,     //当前所在的页
                totalItems: 1,      //总共有多少条记录
                itemsPerPage: 15,   //每页展示的数据条数
                pagesLength: 15,    //分页条目的长度（如果设置建议设置为奇数）
                perPageOptions: [10, 20, 30, 40, 50]   // 可选择显示条数的数组
                //onChange: getInsuredList
            };
            $scope.$watch('paginationConf.currentPage + paginationConf.itemsPerPage', getInsuredList);


            applicationServ.initProposal().then(
                function(answer){
                    //console.log(JSON.stringify(answer.data));
                    $scope.policyCodeMap = answer.data;
                },function(error){
                    console.log(JSON.stringify(error.data));
                }
            );

            /*var prptmain = new Object();
             prptmain.riskCode = '0101';
             prptmain.proposalNo = '';
             var proposalDTO = {"prpTmain":prptmain};
             applicationServ.initProposal(proposalDTO).then(
             function(answer){
             //console.log(JSON.stringify(answer.data));
             $scope.policyCodeMap = answer.data;
             },function(error){
             console.log(JSON.stringify(error.data));
             }
             );*/
        };
        initFunc();

        /*删除投保*/
        $scope.deleteLayer = true;
        $scope.deleteshowInsure = function(){
            $scope.deleteLayer = false;
        };
        $scope.deletehideInsure = function(){
            $scope.deleteLayer = true;
        };
        /*添加被保险人*/
        $scope.addLayer = true;
        $scope.addshowInsure = function(){
            $scope.addLayer = false;
            InsuredServ.initInsured().then(
                function(answer){
                    //console.log(JSON.stringify(answer.data));
                    $scope.insuredCodeMap = answer.data;
                    //console.log($scope.insuredCodeMap.AreaCodeP);
                    //$location.path("/Page3"); //页面跳转
                },function(error){
                    console.log(JSON.stringify(error.data));
                }
            );
            /*三级联动-市*/
            $scope.insuresProvince = function(){
                var upperAreaCode=$scope.adress_province;
                var map={"upperAreaCode":upperAreaCode};
                InsuredServ.getLowerAreaCode(map).then(
                    function(answer){
                        $scope.cityCodeMap = answer.data;
                        console.log($scope.cityCodeMap);

                        //console.log($scope.insuredCodeMap.AreaCodeP);
                        //$location.path("/Page3"); //页面跳转
                    },function(error){
                        console.log(JSON.stringify(error.data));
                    }
                );
            };
            /*三级联动-区*/
            $scope.insuresCity = function(){
                var upperAreaCode=$scope.adress_city;
                var map={"upperAreaCode":upperAreaCode};
                InsuredServ.getLowerAreaCode(map).then(
                    function(answer){
                        $scope.townCodeMap = answer.data;
                        console.log($scope.townCodeMap);
                        //console.log($scope.insuredCodeMap.AreaCodeP);
                        //$location.path("/Page3"); //页面跳转
                    },function(error){
                        console.log(JSON.stringify(error.data));
                    }
                );
            };
        };
        $scope.addhideInsure = function(){
            $scope.addLayer = true;
        };
        /*添加被保险人-确定*/
        $scope.InsuredOk = function(){
            var data = $scope.insure;
            InsuredServ.initOk().then(
                function(answer){
                    console.log(JSON.stringify(answer.data));
                    //$scope.insuredCodeMap = answer.data;
                    //console.log($scope.insuredCodeMap.AreaCodeP);
                    //$location.path("/Page3"); //页面跳转
                    $scope.insureDatas=data;
                    $scope.addLayer = true;
                },function(error){
                    console.log(JSON.stringify(error.data));
                }
            );
        };

        /*文件上传*/
        $scope.FileLayer = true;
        $scope.FileshowInsure = function(){
            $scope.FileLayer = false;
        };
        $scope.FilehideInsure = function(){
            $scope.FileLayer = true;
        };
        /*批量导入*/
        $scope.BatchImport = true;
        $scope.showBatchImport = function(){
            $scope.BatchImport = false;
        };
        $scope.hideBatchImport = function(){
            $scope.BatchImport = true;
        };
        /*被保险人及标的*/
        $scope.toggle = true;
        $scope.samePolicy=function(){
            $scope.toggle = !$scope.toggle;
            if($scope.toggle==true){
                $scope.insure = null;
            }else{
                //var data=$scope.policy.prpTinsured;
                // console.log(data.applyName);
                //$scope.insure.insuredName=data.applyName;
                //console.log($scope.insure);
            }
        };


        $scope.insTypeLeft = true;
        $scope.insTypeRight = true;
        $scope.SexManFlag = true;
        $scope.SexWomanFlag = true;
        $scope.stuFlag = true;
        $scope.stuZFlag = true;
        $scope.onlineFlag = true;
        $scope.lineFlag = true;
        $scope.show=false;
        $scope.hide=true;

        /*radio-个人组织*/
        $scope.radioClick = function () {
            $scope.insTypeLeft = true;
            $scope.insTypeRight = true;
            $scope.show=false;
            $scope.hide=true;
        };
        $scope.radioClick1 = function () {
            $scope.insTypeLeft = false;
            $scope.insTypeRight = false;
            $scope.show=true;
            $scope.hide=false;
        };
        /*男女*/
        $scope.radioSexClick = function () {
            $scope.SexManFlag = true;
            $scope.SexWomanFlag = true;
        };
        $scope.radioSexClick1 = function () {
            $scope.SexManFlag = false;
            $scope.SexWomanFlag = false;
        };
        /*诉讼仲裁*/
        $scope.stuClick = function () {
            $scope.stuFlag = true;
            $scope.stuZFlag = true;
        };
        $scope.stuClick1 = function () {
            $scope.stuFlag = false;
            $scope.stuZFlag = false;
        };
        /*线上支付-线下支付*/
        $scope.onlineClick = function () {
            $scope.onlineFlag = true;
            $scope.lineFlag = true;
        };
        $scope.lineClick = function () {
            $scope.onlineFlag = false;
            $scope.lineFlag = false;
        };

        /*线下收费待确认*/
        $scope.pendingdata = [
            {name: '赵老汉',idente:'TE20160010000000001',startDate:'2016-07-18',insurDate:'2016-07-18',premium:'50.00'},
            {name: '中科软科技股份有限公司',idente:'TE20160010000000001',startDate:'2016-07-18',insurDate:'2016-07-18',premium:'200.00'}
        ];

    };

    return applicationCtrlHandler;
});