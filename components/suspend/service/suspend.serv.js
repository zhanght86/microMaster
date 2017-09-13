/**
 * Created by COCO on 2016/9/17.
 */
define([], function () {
    'use strict';
    function suspendServHandler($http,$q) {
        return {
            /**/
            ProqueryByPage: function (currentPage, itemsPerPage) {

                var urlStr = 'data/insuredDatas.json';
                var deferred = $q.defer();
                var promise = $http({
                    method: 'GET',
                    url: urlStr,
                    params: {curPage: currentPage, itePerPage: itemsPerPage}
                });
                promise.then(
                    //通讯成功
                    function (answer) {
                        answer.status = true;
                        deferred.resolve(answer);
                    },
                    //通讯失败
                    function (error) {
                        error.status = false;
                        deferred.reject(error);
                    }
                );

                return deferred.promise;
            }
        }
    };

    return suspendServHandler;
});


