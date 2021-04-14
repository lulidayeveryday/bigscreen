$(function () {
    $('.more-content-middle').niceScroll({
        cursorcolor: "#132235",//#CC0071 光标颜色
        cursoropacitymax: 0, //改变不透明度非常光标处于活动状态（scrollabar“可见”状态），范围从1到0
        touchbehavior: false, //使光标拖动滚动像在台式电脑触摸设备
        cursorwidth: "5px", //像素光标的宽度
        cursorborder: "0", // 游标边框css定义
        cursorborderradius: "5px",//以像素为光标边界半径
        autohidemode: false //是否隐藏滚动条
    });
    var height=$('body').css('height');
    var width=$('body').css('width');
    $('.taskMonitor-flowMore-tree').css('height',parseInt(height)*0.71)
    $('.taskMonitor-flowMore-tree').css('width',parseInt(width)*0.895)


    var data=[
        {
            name: '标签分类',
            value: [3682],
            children: [
                {
                    name: '客户级',
                    value: [46],
                    children: [
                        {
                            name: '基础标签',
                            value: [46],
                            children: [
                                {
                                    name: '电信业务',
                                    value:[12],
                                    children: [
                                        {
                                            name: '基本信息',
                                            flow:'标签个数：2',
                                            value: [2],
                                        },
                                        {
                                            name: '客户信息',
                                            flow:'标签个数：10',
                                            value: [10]
                                        }
                                    ]
                                },
                                {
                                    name: '人口属性',
                                    value: [34],
                                    children: [
                                        {
                                            name: '基本信息',
                                            flow:'标签个数：26',
                                            value: [26],
                                        },
                                        {
                                            name: '联系信息',
                                            flow:'标签个数：8',
                                            value: [8],
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    name: '用户级',
                    value: [3636],
                    children: [
                        {
                            name: '画像标签',
                            value: [304],
                            children: [
                                {
                                    name: '行为偏好',
                                    value:[50],
                                    children: [
                                        {
                                            name: 'APP使用偏好',
                                            flow:'标签个数：8',
                                            value: [8],
                                        },
                                        {
                                            name: '流量使用偏好',
                                            flow:'标签个数：13',
                                            value: [13]
                                        },
                                        {
                                            name: '收入偏好',
                                            flow:'标签个数：3',
                                            value: [3]
                                        },
                                        {
                                            name: '通话偏好',
                                            flow:'标签个数：23',
                                            value: [23]
                                        },
                                        {
                                            name: '接触渠道',
                                            flow:'标签个数：3',
                                            value: [3]
                                        }
                                    ]
                                },
                                {
                                    name: '基站活跃',
                                    value: [6],
                                    children: [
                                        {
                                            name: '物联网卡',
                                            flow:'标签个数：6',
                                            value: [6],
                                        }
                                    ]
                                },
                                {
                                    name: '社会交往',
                                    value: [44],
                                    children: [
                                        {
                                            name: '交往圈信息',
                                            flow:'标签个数：44',
                                            value: [44],
                                        }
                                    ]
                                },
                                {
                                    name: '生命周期',
                                    value: [74],
                                    children: [
                                        {
                                            name: '量收轨迹',
                                            flow:'标签个数：36',
                                            value: [36],
                                        },
                                        {
                                            name: '终端轨迹',
                                            flow:'标签个数：38',
                                            value: [38],
                                        }
                                    ]
                                },
                                {
                                    name: '位置偏好',
                                    value: [63],
                                    children: [
                                        {
                                            name: '高端场所',
                                            flow:'标签个数：6',
                                            value: [6],
                                        },
                                        {
                                            name: '工作场所',
                                            flow:'标签个数：6',
                                            value: [6],
                                        },
                                        {
                                            name: '交通场所',
                                            flow:'标签个数：5',
                                            value: [5],
                                        },
                                        {
                                            name: '居住场所',
                                            flow:'标签个数：8',
                                            value: [8],
                                        },
                                        {
                                            name: '科教文化',
                                            flow:'标签个数：8',
                                            value: [8],
                                        },
                                        {
                                            name: '旅游',
                                            flow:'标签个数：3',
                                            value: [3],
                                        },
                                        {
                                            name: '其他场所',
                                            flow:'标签个数：4',
                                            value: [4],
                                        },
                                        {
                                            name: '商业场所',
                                            flow:'标签个数：4',
                                            value: [4],
                                        },
                                        {
                                            name: '生活服务',
                                            flow:'标签个数：5',
                                            value: [5],
                                        },
                                        {
                                            name: '医疗场所',
                                            flow:'标签个数：4',
                                            value: [4],
                                        },
                                        {
                                            name: '娱乐场所',
                                            flow:'标签个数：10',
                                            value: [10],
                                        }
                                    ]
                                },
                                {
                                    name: '生活轨迹',
                                    value: [59],
                                    children: [
                                        {
                                            name: '第一居住地',
                                            flow:'标签个数：3',
                                            value: [3],
                                        },
                                        {
                                            name: '第二居住地',
                                            flow:'标签个数：4',
                                            value: [4],
                                        },
                                        {
                                            name: '工作日白天',
                                            flow:'标签个数：9',
                                            value: [9],
                                        },
                                        {
                                            name: '工作日夜间',
                                            flow:'标签个数：9',
                                            value: [9],
                                        },
                                        {
                                            name: '休息日白天',
                                            flow:'标签个数：14',
                                            value: [14],
                                        },
                                        {
                                            name: '休息日夜间',
                                            flow:'标签个数：14',
                                            value: [14],
                                        },
                                        {
                                            name: '渠道',
                                            flow:'标签个数：6',
                                            value: [6],
                                        }
                                    ]
                                },
                                {
                                    name: '帐号识别',
                                    value: [8],
                                    children: [
                                        {
                                            name: '电信帐号',
                                            flow:'标签个数：3',
                                            value: [3],
                                        },
                                        {
                                            name: '互联网帐号',
                                            flow:'标签个数：5',
                                            value: [5],
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            name: '基础标签',
                            value: [3332],
                            children: [
                                {
                                    name: '电信业务',
                                    value:[259],
                                    children: [
                                        {
                                            name: '产品信息',
                                            flow:'标签个数：36',
                                            value: [36],
                                        },
                                        {
                                            name: '成本信息',
                                            flow:'标签个数：36',
                                            value: [36]
                                        },
                                        {
                                            name: '合约信息',
                                            flow:'标签个数：25',
                                            value: [25]
                                        },
                                        {
                                            name: '基本信息',
                                            flow:'标签个数：36',
                                            value: [36]
                                        },
                                        {
                                            name: '缴费信息',
                                            flow:'标签个数：25',
                                            value: [25]
                                        },
                                        {
                                            name: '欠费行为',
                                            flow:'标签个数：36',
                                            value: [36]
                                        },
                                        {
                                            name: '上网流量',
                                            flow:'标签个数：43',
                                            value: [43]
                                        },
                                        {
                                            name: '通信行为',
                                            flow:'标签个数：12',
                                            value: [12]
                                        },
                                        {
                                            name: '网内网间结算',
                                            flow:'标签个数：25',
                                            value: [25]
                                        },
                                        {
                                            name: '消费行为',
                                            flow:'标签个数：15',
                                            value: [15]
                                        },
                                        {
                                            name: '用户标签信息',
                                            flow:'标签个数：42',
                                            value: [42]
                                        },
                                        {
                                            name: '投诉咨询',
                                            flow:'标签个数：12',
                                            value: [12]
                                        },
                                        {
                                            name: '终端信息',
                                            flow:'标签个数：9',
                                            value: [9]
                                        }
                                    ]
                                },
                                {
                                    name: '互联网行为',
                                    value: [3073],
                                    children: [
                                        {
                                            name: '使用行为',
                                            flow:'标签个数：3073',
                                            value: [3073],
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
    flowTree(data);


    /*var taskExceptionMoreData=[
        {
            name:'筛选实时用户',
            time:120,
            aver:20
        },
        {
            name:'建立实时位置轨迹模型',
            time:180,
            aver:20
        },
        {
            name:'驻足游客',
            time:120,
            aver:20
        },
        {
            name:'常住剔除',
            time:190,
            aver:20
        },
        {
            name:'筛选实时用户',
            time:120,
            aver:20
        },
        {
            name:'建立实时位置轨迹模型',
            time:180,
            aver:20
        },
        {
            name:'驻足游客',
            time:120,
            aver:20
        },
        {
            name:'常住剔除',
            time:190,
            aver:20
        },
        {
            name:'筛选实时用户',
            time:120,
            aver:20
        },
        {
            name:'建立实时位置轨迹模型',
            time:180,
            aver:20
        },
        {
            name:'驻足游客',
            time:120,
            aver:20
        },
        {
            name:'常住剔除',
            time:190,
            aver:20
        },
        {
            name:'筛选实时用户',
            time:120,
            aver:20
        },
        {
            name:'建立实时位置轨迹模型',
            time:180,
            aver:20
        },
        {
            name:'驻足游客',
            time:120,
            aver:20
        },
        {
            name:'常住剔除',
            time:190,
            aver:20
        },
        {
            name:'筛选实时用户',
            time:120,
            aver:20
        },
        {
            name:'建立实时位置轨迹模型',
            time:180,
            aver:20
        },
        {
            name:'驻足游客',
            time:120,
            aver:20
        },
        {
            name:'常住剔除',
            time:190,
            aver:20
        },
    ];
    var staff=150;
    taskExceptionMore(taskExceptionMoreData,staff);*/
})

function taskExceptionMore(datas,staff){
    var html=''
    for (var i=0;i<datas.length;i++){
        html+='<tr>'
        html+='<td>'
        html+=datas[i].name ;
        html+='</td>'
        html+='<td>'
        if(datas[i].time>staff){
            html+='<span class="font-red">'+datas[i].time+'</span>ms'
        }else {
            html+='<span class="font-green">'+datas[i].time+'</span>ms'
        }
        html+='</td>'
        html+='<td>'
        html+='<span class="font-blue">'+datas[i].aver+'</span>ms'
        html+='</td>'
        html+='</tr>'
    }
    $('#taskExceptionMore').html(html)
}

function flowTree(data) {
    var myChart = echarts.init(document.getElementById('flowTree'));


    var option = {
        tooltip: {
            trigger: 'item',
            triggerOn: 'mousemove',
            rich: {
                a: {
                    color: '#fff',
                    fontSize: 12,
                    fontWeight: 'bolder',
                    align: 'center',
                    backgroundColor:'#1F596F',
                    padding:7,
                    borderRadius:5
                }
            }
        },

        series : [
            {
                name:'树图',
                type:'tree',
                symbolSize: 15,
                left:'5%',
                top:'1%',
                bottom:'1%',
                initialTreeDepth: 3,//节点层级
                itemStyle: {
                    normal: {
                        label: {
                            show: true,
                            position: 'inside',
                            textStyle: {
                                color: '#fff',
                                fontSize: 12,
                                fontWeight:  'bolder'
                            }
                        },
                        lineStyle: {
                            color: 'rgba(255,255,255,0.5)',
                            width: 1,
                            type: 'solid' // 'curve'|'broken'|'solid'|'dotted'|'dashed'
                        }
                    },
                    emphasis: {
                        label: {
                            show: true
                        }
                    }
                },

                label: {
                    normal: {
                        position: 'left',
                        verticalAlign: 'middle',
                        align: 'right',
                        formatter: function(params) {
                            if (params.data.flow) {
                                return `${params.data.name}`+`    `+'{a|'+`${params.data.flow}`+'} '
                            } else {
                                return `${params.data.name}`
                            }

                        },
                        rich: {
                            a: {
                                color: '#fff',
                                fontSize: 12,
                                fontWeight: 'bolder',
                                align: 'center',
                                backgroundColor:'#1F596F',
                                padding:7,
                                borderRadius:5,
                            }
                        }
                    }
                },

                leaves: {
                    label: {
                        normal: {
                            position: 'right',
                            verticalAlign: 'middle',
                            align: 'left'
                        }
                    }
                },

                data: data
            }
        ]
    };




    myChart.setOption(option);
    myChart.on('click', function eConsole(param) {

        debugger;
        if (param.data.flow) {
            taskExceptionShow();
        }
//这个params可以获取参数
    });
    $(window).resize(function() {
        myChart.resize();
    });
}

function taskExceptionShow() {
    $('.taskMonitor-more').css('display','block')
}

function taskExceptionHidden() {
    $('.taskMonitor-more').css('display','none')
}