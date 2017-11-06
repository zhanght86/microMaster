/**
 * 菜单获取服务
 */
define(['app'], function (app) {
    'use strict';
    app.service('menuServ',['$http','$q',function($http,$q){
        return {
            /*一级菜单*/
            getData:function (params){
                var deferred = $q.defer();
                var urlGetData = "data/menu.json";
                var promise  = $http({
                    method:'GET',
                    url:urlGetData,
                    params:params
                });
                promise.then(
                    //通讯成功
                    function(answer){
                        console.log("获取菜单成功");
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
            /*二级菜单*/
            getTWOData:function (params){
                var deferred = $q.defer();
                var urlGetData = "data/secondMenu.json";
                var promise  = $http({
                    method:'GET',
                    url:urlGetData,
                    params:params
                });
                promise.then(
                    //通讯成功
                    function(answer){
                        console.log("获取二级菜单成功");
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
    }]);
});