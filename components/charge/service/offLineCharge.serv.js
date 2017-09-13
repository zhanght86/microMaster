/**
 * Created by COCO on 2016/9/18.
 */
define([], function () {
    'use strict';
    function offLineChargeServHandler($http,$q){
        return {
            /*初始化*/
            initEdit:function (proposalNo){
                var urlInit = "data/offlineCharge.json"; //prpins-web/query
                var deferred = $q.defer();
                var promise  = $http({
                    method:'GET',
                    url:urlInit,
                    //url:'/prpins-web/proposal/queryOffLinePayInfo',
                    data:{"proposalNo":proposalNo}
                });
                promise.then(
                    //通讯成功
                    function(answer){
                        answer.status = true;
                        deferred.resolve(answer);
                    },
                    //通讯失败
                    function(error){
                        error.status = false;
                        deferred.reject(error);
                    });
                //返回promise对象，交由Controller继续处理
                return deferred.promise;
            }
        }
    };

    return offLineChargeServHandler;
})
