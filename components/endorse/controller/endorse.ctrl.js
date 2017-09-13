/**
 * Created by ZhangJiansen on 2016/9/10.
 * 批改模块控制器
 */
define([], function () {
    'use strict';
    function endorseCtrlHandler($scope,$state) {

        $scope.goIndex=function(){

        }

        $scope.goPath = function(){
            $state.go('application');
        };

        $scope.goIndex = function(){
            $state.go('application');
        };


        $scope.correction = [
            {label:'保单号码：',classes:'',require:'',inputVal:'',placeholder:''},
            {label:'投保人名称：',classes:'',require:'*',inputVal:'',placeholder:''},
            {label:'投保人证件类型：',classes:'',require:'*',inputVal:'',placeholder:''},
            {label:'投保人证件号码：',classes:'',require:'',inputVal:'',placeholder:''},
            {label:'批改录入人员姓名：',classes:'',require:'',inputVal:'',placeholder:''},
            {label:'批改申请号码：',classes:'',require:'',inputVal:'',placeholder:''},
            {label:'批改申请日（开始）：',classes:'',require:'',inputVal:'',placeholder:''},
            {label:'批改申请日（结束）：',classes:'',require:'',inputVal:'',placeholder:''},
            {label:'批改生效日（开始）：',classes:'',require:'',inputVal:'',placeholder:''},
            {label:'批改生效日（结束）：',classes:'',require:'',inputVal:'',placeholder:''},
            {label:'销售人员代码：',classes:'',require:'',inputVal:'',placeholder:''},
            {label:'销售人员姓名/名称：',classes:'',require:'',inputVal:'',placeholder:''},
            {label:'批单录入人员代码：',classes:'',require:'',inputVal:'',placeholder:''}
        ];

        $scope.col = 'name';
        $scope.desc = 0;
        $scope.data = [
            {name: '赵老汉',idente:'232321199301081222',adress:'黑龙江省大庆市让胡路区创业城3号楼',amount:'5万',premium:'5000元'},
            {name: '赵老汉',idente:'232321199301081333',adress:'黑龙江省大庆市让胡路区创业城3号楼',amount:'5万',premium:'5000元'},
            {name: '赵老汉',idente:'232321199301081111',adress:'黑龙江省大庆市让胡路区创业城3号楼',amount:'5万',premium:'5000元'},
            {name: '赵老汉',idente:'232321199301081444',adress:'黑龙江省大庆市让胡路区创业城3号楼',amount:'5万',premium:'5000元'},
            {name: '赵老汉',idente:'232321199301081666',adress:'黑龙江省大庆市让胡路区创业城3号楼',amount:'5万',premium:'5000元'}
        ];
        $scope.pendingdata = [
            {name: '赵老汉',idente:'TE20160010000000001',startDate:'2016-07-18',insurDate:'2016-07-18',premium:'50.00'},
            {name: '中科软科技股份有限公司',idente:'TE20160010000000001',startDate:'2016-07-18',insurDate:'2016-07-18',premium:'200.00'}
        ];
        $scope.correctiondata = [
            {state:'批改中',name: '赵老汉',idente:'TE20160010000000001',checkNum:'TE20160010000000001',startDate:'2016-07-18',premium:'50.00'},
            {state:'批改中',name: '中科软科技股份有限公司',idente:'TE20160010000000001',checkNum:'TE20160010000000001',startDate:'2016-07-18',premium:'200.00'}
        ];
    };

    return endorseCtrlHandler;
});