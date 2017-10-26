/**
 */
define([], function () {
    'use strict';
    function applicationServHandler($http,$q){
        return {
            /*..*/
            getData:function (params){
                var deferred = $q.defer();
                var urlGetData = "data/application.json"; //prpins-web/query
                var promise  = $http({
                    method:'GET',
                    url:urlGetData,
                    params:params
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
            },

        }
    };

    return applicationServHandler;
});
