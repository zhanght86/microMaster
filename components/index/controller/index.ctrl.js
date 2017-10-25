/**
 * Created by ZhangJiansen on 2016/9/19.
 * 首页入口控制器
 */
define([], function () {
    'use strict';
    function indexCtrlHandler($scope,$state,indexServ) {
        $scope.region=function () {
            $state.go("main.region");
        }
        $scope.suspends=function () {
            $state.go("main.suspend.ordinary");
        }
        $scope.applications=function () {
            $state.go("main.application");
        }
        $scope.messages=function () {
            $state.go("main.message");
        }
        $scope.saledatas=function () {
            $state.go("main.saledata.order");
        }
        $scope.feedbacks=function () {
            $state.go("main.feedback");
        }

       //最近访问
        var recentWay=function () {
            var conditionDto={};
            indexServ.dataindexServ(conditionDto).then(
                function (answer) {
                    if (answer.data.status == 1) {
                        $scope.recentNameList = answer.data.data.list;
                        return;
                    };
                },
                function (error) {
                }
            );
        }
        recentWay();


    };
    return indexCtrlHandler;
});