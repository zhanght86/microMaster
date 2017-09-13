/**
 * Created by COCO on 2016/9/18.
 * 线下支付控制器
 */
define([], function () {
    'use strict';
    function offLineChargeCtrlHandler($scope,offLineChargeServ,$stateParams) {

        var proposalNo = $stateParams.proposalNo;
        if(proposalNo == null || proposalNo == ""){
            throw new Exception("投保单号不能为空");
        }
        //console.log($scope.proposalInfoDto.proposalNo);
        var initFunc = function(){
            offLineChargeServ.initEdit(proposalNo).then(
                function(answer){
                    console.log(JSON.stringify(answer.data));
                    $scope.proposalNo = proposalNo;
                    $scope.premium = answer.data.premium;
                    $scope.riskName =answer.data.riskName;
                    $scope.applicant = answer.data.applicant;
                },function(error){
                    console.log(JSON.stringify(error.data));
                }
            );
        };
        initFunc();
    };
    return offLineChargeCtrlHandler;
});


