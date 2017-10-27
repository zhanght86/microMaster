/**
 */
define([], function () {
    'use strict';
    function messageServHandler($http,$q){
        return {
            //查询
            mesSearchserv:function (conditionDto){
            var deferred = $q.defer();
            var promise  = $http({
                method:'POST',
                url:'data/messageData.json',
                data:conditionDto
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
    return messageServHandler;
});
