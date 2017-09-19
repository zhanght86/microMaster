/**
 * Created by ZhangJiansen on 2016/9/18.
 * 业务模块总入口
 * 增加新业务模块请在此文件中增加依赖
 */

/*引入依赖模块的定义文件*/
define([
    'angular',
    'components/index/module',
    'components/power/module',
    'components/application/module',
    'components/endorse/module',
    'components/suspend/module',
    'components/charge/module',
    'components/report/module',
    'components/document/module',
    'components/material/module',
    'components/community/module'
],function (angular) {
    'use strict';
    console.log("load business module");

    /*增加模块依赖*/
    return angular.module('business',
        [   'business.index',
             'business.power',
            'business.application',
            'business.endorse',
            'business.suspend',
            'business.charge',
            'business.report',
            'business.document',
            'business.material',
            'business.community'
        ]);
});