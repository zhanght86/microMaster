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
    'components/organization/module',
    'components/suspend/module',
    'components/charge/module',
    'components/region/module',
    'components/message/module',
    'components/material/module',
    'components/community/module',
    'components/feedback/module',
    'components/banner/module',
    'components/weChatemplate/module'
],function (angular) {
    'use strict';
    console.log("load business module");

    /*增加模块依赖*/
    return angular.module('business',
        [   'business.index',
            'business.power',
            'business.application',
            'business.organization',
            'business.suspend',
            'business.charge',
            'business.region',
            'business.message',
            'business.material',
            'business.community',
            'business.banner',
            'business.feedback',
            'business.weChatemplate'
        ]);
});