/**
 * Created by ZhangJiansen on 2016/9/11.
 */
define([], function () {
    'use strict';
    function indexServHandler($http,$q){
        return {
            //最近访问
            dataindexServ:function (conditionDto){
            var deferred = $q.defer();
            var promise  = $http({
                method:'POST',
                // method:'GET',
                url:'data/RecentVisit.json',
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

            // dataindexServ:function (params){
            //     var deferred = $q.defer();
            //     var urlGetData = "data/RecentVisit.json";
            //     var promise  = $http({
            //         method:'GET',
            //         url:urlGetData,
            //         params:params
            //     });
            //     promise.then(
            //         //通讯成功
            //         function(answer){
            //             console.log("获取二级菜单成功");
            //             answer.status = true;
            //             deferred.resolve(answer);
            //         },
            //         //通讯失败
            //         function(error){
            //             error.status = false;
            //             deferred.reject(error);
            //         });
            //     //返回promise对象，交由Controller继续处理
            //     return deferred.promise;
            // }


        }
    };

    return indexServHandler;
});
