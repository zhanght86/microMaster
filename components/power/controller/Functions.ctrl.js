/**
 */
define([], function () {
    'use strict';
    function FunctionsCtrlHandler($scope,$state,FunctionsServ) {

        //
        // var copyDataIdArr = [];
        //
        // function getCopyDataIdArr(copyData){
        //     if(! copyData) return;
        //     copyData.forEach(function (node) {
        //         copyDataIdArr.push(node.id);
        //         if(node.childList){
        //             getCopyDataIdArr(node.childList);
        //         }
        //     });
        // }
        //
        // //获取copyData 的id 數組
        // function checkNode(data,copyDataIdArr){
        //     if (! data || !copyDataIdArr ) return;
        //     data.forEach(function (node) {
        //         copyDataIdArr.forEach(function (copyNodeId) {
        //             if(node.id == copyNodeId){
        //                 node.checked = true;
        //             }else{
        //                 if(node.childList){
        //                     checkNode(node.childList,copyDataIdArr);
        //                 }
        //             }
        //         });
        //     });
        // }
        // // 组装 copydata 数据
        // function assembleNode(data){
        //     angular.forEach(data,function(childData){
        //         if(childData.checked){
        //             var checkedData=angular.copy(childData);
        //             $scope.copyData.push(checkedData)
        //         }else{
        //             if(childData.childList){
        //                 assembleNode(childData.childList);
        //             }
        //         }
        //
        //     });
        // }
        // //获取选中的节点
        // function getCheckedData(data){
        //
        //     angular.forEach(data,function(childData){
        //         if(childData.childList.length>0){
        //             getCheckedData(childData.childList);
        //         }
        //     });
        //     $timeout(function () {
        //         //    assembleData($scope.copyData);
        //     },1000);
        //
        //
        // }
        // function init(){
        //     copyDataIdArr = [];
        //     getCopyDataIdArr($scope.copyData);
        //     checkNode($scope.data,copyDataIdArr);
        // }
        // init();
        // //检查兄弟级的状态
        // function checkBrotherNodeStatus(nodeScope){
        //     //判断是否到达了顶级
        //     if(!nodeScope){
        //         return false;
        //     }
        //     //父节点的值
        //     var parentNodeValue=nodeScope.$modelValue;
        //     if (! parentNodeValue) return;
        //     //父节点上次的状态
        //     var lastStatus=parentNodeValue.checked ;
        //
        //     var checkedAll=true;
        //     angular.forEach(parentNodeValue.childList,function(brotherNode){
        //         if(!brotherNode.checked) {
        //             checkedAll = false;
        //             return false
        //         }
        //     });
        //     parentNodeValue.checked=checkedAll;
        //
        //     if(lastStatus==parentNodeValue.checked){
        //     }else{
        //         //如果状态改变了，则要继续向上延伸
        //         if(parentNodeValue.checked){
        //         }else{
        //         }
        //         checkBrotherNodeStatus(nodeScope.$parentNodeScope);
        //     }
        // }
        // function funMenu(){
        //     debugger;
        //     FunctionsServ.getAptitTree().then(
        //         function(answer){
        //             $scope.copyData = answer.data.data;
        //         },function(error){
        //         }
        //     );
        // }
        // funMenu();

        //删除节点
        var copyDataIdArr = [];
        $scope.remove = function (scope) {
            scope.remove();
            copyDataIdArr = [];
            getCopyDataIdArr($scope.copyData);
            checkNode($scope.data,copyDataIdArr);

        };
        //开关触发器
        $scope.toggle = function (scope) {
            scope.toggle();
        };

        //新建节点
        $scope.newSubItem = function (scope,node,parent,parentNode) {
            var name = window.prompt("请输入节点名称");
            var nodeData = scope.$modelValue;
            if(name==""||name==undefined){
                return;
            }
            if(nodeData.childList == null){
                nodeData.childList = [];
            }
            nodeData.childList.push({
                id: nodeData.id * 10 + nodeData.childList.length,
                functionName: name,/* + '.' + (nodeData.childList.length + 1)*/
                checked:false,
                childList: []
            });

            // $scope.changeNode(node,parent,parentNode);
        };

        //折叠所有节点
        $scope.collapseAll = function () {
            $scope.$broadcast('angular-ui-tree:collapse-all');
        };

        //打开所有节点
        $scope.expandAll = function () {
            $scope.$broadcast('angular-ui-tree:expand-all');
        };

        //当checked发生变化 执行本方法
        /*$scope.changeNode = function (node,parent,parentNode) {
         changeChildrenNodeStatus(node);
         checkBrotherNodeStatus(parentNode);
         getCheckedData($scope.data);
         };*/

        //改变兄弟级的状态
        function changeChildrenNodeStatus(node) {
            angular.forEach(node.childList,function(childrenNode){
                childrenNode.checked=node.checked;
                $scope.nodeData=childrenNode.functionName;
                //如果还有子集
                if(childrenNode.nodes.length>0){
                    changeChildrenNodeStatus(childrenNode);
                }
            });
        }
        //删除节点
        $scope.deleteNode = function(node,parent,parentNode){
            /*$scope.data.forEach(function (data) {
             checkedNode(data,node.id,parentNode);
             });*/
            angular.forEach(function (data) {
                checkedNode(data,node.id,parentNode);
            })
        };

        // 不勾选原始数据节点
        function checkedNode(node,checkedId,parentNode){
            if(checkedId == node.id){
                node.checked =false;
                changeChildrenNodeStatus(node);
                checkBrotherNodeStatus(parentNode);
                return;
            }else{
                if(node.childList){
                    node.childList.forEach(function (childNode) {
                        checkedNode(childNode,checkedId,node)
                    });
                }
            }
        }


        function getCopyDataIdArr(copyData){
            if(! copyData) return;
            copyData.forEach(function (node) {
                copyDataIdArr.push(node.id);
                if(node.childList){
                    getCopyDataIdArr(node.childList);
                }
            });
        }

        //获取copyData 的id 數組
        function checkNode(data,copyDataIdArr){
            if (! data || !copyDataIdArr ) return;
            data.forEach(function (node) {
                copyDataIdArr.forEach(function (copyNodeId) {
                    if(node.id == copyNodeId){
                        node.checked = true;
                    }else{
                        if(node.childList){
                            checkNode(node.childList,copyDataIdArr);
                        }
                    }
                });
            });
        }

        // 勾選Data與copyData公共節點
        $scope.editItem = function(scope,node){
            var nodeData = scope.$modelValue;
            $scope.NodeFlag = true;
            $scope.deleteNode = nodeData.functionName;
            $scope.deleteNodeOk = function(){
                $scope.NodeFlag = false;
                nodeData.functionName = this.deleteNode;
            }
        };
        // 删除复制数据中的节点
        function deleteCopyDataNode(node,delId,parentNode){
            if(delId == node.id){
                node = {};
                return;
            }else{
                if(node.childList){
                    node.childList.forEach(function (childNode) {
                        deleteCopyDataNode(childNode,delId,node)
                    });
                }
            }
        }

        // 组装 copydata 数据
        function assembleNode(data){
            angular.forEach(data,function(childData){
                if(childData.checked){
                    var checkedData=angular.copy(childData);
                    $scope.copyData.push(checkedData)
                }else{
                    if(childData.childList){
                        assembleNode(childData.childList);
                    }
                }

            });
        }
        //获取选中的节点
        function getCheckedData(data){

            angular.forEach(data,function(childData){
                if(childData.childList.length>0){
                    getCheckedData(childData.childList);
                }
            });
            $timeout(function () {
                //    assembleData($scope.copyData);
            },1000);


        }

        function init(){
            copyDataIdArr = [];
            getCopyDataIdArr($scope.copyData);
            checkNode($scope.data,copyDataIdArr);
        }
        init();


        //检查兄弟级的状态
        function checkBrotherNodeStatus(nodeScope){
            //判断是否到达了顶级
            if(!nodeScope){
                return false;
            }
            //父节点的值
            var parentNodeValue=nodeScope.$modelValue;
            if (! parentNodeValue) return;
            //父节点上次的状态
            var lastStatus=parentNodeValue.checked ;

            var checkedAll=true;
            angular.forEach(parentNodeValue.childList,function(brotherNode){
                if(!brotherNode.checked) {
                    checkedAll = false;
                    return false
                }
            });
            parentNodeValue.checked=checkedAll;

            if(lastStatus==parentNodeValue.checked){
            }else{
                //如果状态改变了，则要继续向上延伸
                if(parentNodeValue.checked){
                }else{
                }
                checkBrotherNodeStatus(nodeScope.$parentNodeScope);
            }
        }

        function funMenu(){
            debugger;
            FunctionsServ.getAptitTree().then(
                function(answer){
                    $scope.copyData = answer.data.data;
                    console.log(JSON.stringify($scope.copyData));
                },function(error){

                }
            );
        }
        funMenu();




    };
    return FunctionsCtrlHandler;
});