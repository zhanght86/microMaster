/**
 * Created by ZhangJiansen on 2016/9/11.
 */
define([], function () {
    'use strict';
    function applicationServHandler($http,$q){
        return {
            /*投保单查询*/
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
            /*投保单暂存*/
            savePause:function (proposal){
                console.log(proposal);
                var urlSavePolicy = "data/application.json"; //prpins-web/save
                var deferred = $q.defer();
                var promise  = $http({
                    //method:'POST',
                    method:'POST',
                    //url:urlSavePolicy,
                    url:'/prpins-web/proposal/save',
                    //data:policy
                    data:proposal
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
            /*投保单提交*/
            savePolicy:function (policy){
                var urlSavePolicy = "data/application.json"; //prpins-web/save
                var deferred = $q.defer();
                var promise  = $http({
                    //method:'POST',
                    method:'GET',
                    url:urlSavePolicy,
                    //url:'/prpins-web/save',
                    //data:policy
                    data:policy
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
            /*投保单页面初始化*/
            initProposal:function (policy){
                console.log(policy);
                var urlInit = "data/application.json"; //prpins-web/query
                var deferred = $q.defer();
                var promise  = $http({
                    //method:'POST',
                    method:'GET',
                    url:urlInit,
                    //url:'/prpins-web/proposal/initEdit',
                    data:policy
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

    return applicationServHandler;
});
