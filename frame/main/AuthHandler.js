/**
 * Created by ZhangJiansen on 2016/9/15.
 * 授权服务
 */
define(['app'
], function (app) {
   'use strict';
    app.factory('AuthHandler', ['$http','$q','$localStorage',function($http,$q,$localStorage) {
        function urlBase64Decode(str) {
            var output = str.replace('-', '+').replace('_', '/');
            switch (output.length % 4) {
                case 0:
                    break;
                case 2:
                    output += '==';
                    break;
                case 3:
                    output += '=';
                    break;
                default:
                    throw 'Illegal base64url string!';
            }
            return window.atob(output);
        }
        return {
            //判断是否登录
            isLogined: function(){
                return ($localStorage.token != null);
            },
            //登录
            login: function(authUser){
                console.log(authUser.usercode);
                console.log(authUser.password);
                var url = "data/login.json";
                var deferred = $q.defer();
                var promise = $http({
                    method:'GET',
                    url:url,
                    data:{"topName":authUser.topName}
                });
                promise.then(
                    //通讯成功
                    function(answer){
                        var data = answer.data;
                        if(data.success){
                            answer.status = true;
                            /*if($localStorage.user){
                                delete $localStorage.user;
                            }
                            if($localStorage.token){
                                delete $localStorage.token;
                            }*/
                            $localStorage.$reset();
                            $localStorage.user = data.user;
                            $localStorage.token = data.token;
                        }else{
                            answer.status = false;
                            answer.statusText = data.msg;
                        }
                        deferred.resolve(answer);
                    },
                    //通讯失败
                    function(error){
                        error.status = false;
                        deferred.reject(error);
                    }
                );

                return deferred.promise;
            },
            //登出
            logout: function(){
                console.log("logout");
                //$localStorage.token = null;
                $localStorage.$reset();
                if($localStorage.user){
                    delete $localStorage.user;
                }
                if($localStorage.token){
                    delete $localStorage.token;
                }
            },
            //获取本地用户信息
            getUser: function(){
                /*var token = $localStorage.token;
                var user = {};
                if (typeof token !== 'undefined') {
                    var encoded = token.split('.')[1];
                    user = JSON.parse(urlBase64Decode(encoded));
                }
                return user;*/
                return $localStorage.user;
            },
            responseError: function (rejection) {
                console.log("responseError");
               /* var ui = $injector.get('ui');
                // 如果服务器返回了401 unauthorized，那么就表示需要登录
                if (rejection.status === 401) {
                    return ui.promptPassword('请输入密码：').then(function (password) {
                        var Login = $injector.get('Login');
                        var $http = $injector.get('$http');
                        return Login.save({
                            username: 'xuelang',
                            password: password
                        }).$promise.then(function () {
                            return $http(rejection.config);
                        });
                    }, function () {
                        return $q.reject(rejection);
                    });
                } else {
                    // 其它错误不用管，留给其它interceptor去处理
                    return $q.reject(rejection);
                }*/
            }
        };
    }]);
});
