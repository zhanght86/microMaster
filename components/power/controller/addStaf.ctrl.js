/**
 */
define([], function () {
    'use strict';
    function addStafCtrlHandler($scope,$state) {
        $scope.showMainNagiv = false;
        //返回
        $scope.save=function () {
            $state.go("main.serManage");
        }

    };
    return addStafCtrlHandler;
});