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

    //任务流程全部
    /**
     * name:任务名称
     * desc:状态 成功：1  运行中：2  失败：3  未运行：4
     * value：desc=2时，数组里有两个数，[成功数，任务总数]
     * symbol desc=1是，返回'image://../img/taskGreen.png'
     *          desc=2是，返回'image://../img/taskWhite.png'
     *          desc=3是，返回'image://../img/taskRed.png'
     *          desc=4是，返回'image://../img/taskBlue.png'
     * flow:没有子节点会有flow属性，内容对应的是流程名称
     */
    var data=[
        {
            name: '信令',
            desc:3,
            value: [2],
            symbol: 'image://../img/taskRed.png',
            children: [
                {
                    name: '信令',
                    desc:2,
                    value:[5,10],
                    symbol: 'image://../img/taskWhite.png',
                    children: [
                        {
                            name: '某某节点',
                            desc:3,
                            flow:'AA流程',
                            value: [36],
                            symbol: 'image://../img/taskRed.png',
                        },
                        {
                            name: '某某节点',
                            desc:3,
                            flow:'BB流程',
                            value: [36],
                            symbol: 'image://../img/taskRed.png',
                        },
                        {
                            name: '某某节点',
                            desc:4,
                            flow:'CC流程',
                            value: [25],
                            symbol: 'image://../img/taskBlue.png',
                        }
                    ]
                },
                {
                    name: '信令',
                    desc:4,
                    value: [61],
                    symbol: 'image://../img/taskBlue.png',
                    children: [
                        {
                            name: '某某节点',
                            desc:3,
                            flow:'AA流程',
                            value: [36],
                            symbol: 'image://../img/taskRed.png',
                        },
                        {
                            name: '某某节点',
                            desc:3,
                            flow:'BB流程',
                            value: [36],
                            symbol: 'image://../img/taskRed.png',
                        },
                        {
                            name: '某某节点',
                            desc:4,
                            flow:'CC流程',
                            value: [25],
                            symbol: 'image://../img/taskBlue.png',
                        }
                    ]
                },
                {
                    name: '信令',
                    flow:'EE流程',
                    desc:1,
                    value: [36],
                    symbol: 'image://../img/taskGreen.png',
                }
            ]
        }
    ]
    flowTree(data);

    //数据总流程
    var dataFlowData=[
        [142,4174],//数据源:完成数，任务数
        [154,987],//基础数据加工:完成数，任务数
        [39,98],//模型处理:完成数，任务数
        [9825,25630]//应用汇总:完成数，任务数
    ]
    dataFlow(dataFlowData);

    //任务流程

    /**
     * name:任务名称
     * desc:状态 成功：1  运行中：2  失败：3  未运行：4
     * value：desc=2时，数组里有两个数，[成功数，任务总数]
     */
    var taskFlowData=[
        {
            name: '信令',
            desc:4,
            value: [36],
        },
        {
            name: '信令',
            desc:3,
            value: [36],
        },
        {
            name: '信令',
            desc:2,
            value: [36,69],
        },
        {
            name: '信令',
            desc:1,
            value: [36],
        },
        {
            name: '信令',
            desc:4,
            value: [36],
        },
        {
            name: '信令',
            desc:3,
            value: [36],
        },
        {
            name: '信令',
            desc:2,
            value: [36,69],
        },
        {
            name: '信令',
            desc:1,
            value: [36],
        },
        {
            name: '信令',
            desc:4,
            value: [36],
        },
        {
            name: '信令',
            desc:3,
            value: [36],
        },
        {
            name: '信令',
            desc:2,
            value: [36,69],
        },
    ]
    taskFlow(taskFlowData);

    //任务监控数据

      //数据源（本地+公司）
    var taskMonitorDataA=[99,88,77];
    taskMonitorA(taskMonitorDataA)

      //实时流程
    var taskMonitorDataB=[99,88]
    taskMonitorB(taskMonitorDataB);

      //天流程
    var taskMonitorDataC=[99,88]
    taskMonitorC(taskMonitorDataC);

      //月流程
    var taskMonitorDataD=[99,88]
    taskMonitorD(taskMonitorDataD);

    //任务异常
    var taskExceptionData=[
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
    taskException(taskExceptionData,staff);


    var taskExceptionMoreData=[
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
    taskExceptionMore(taskExceptionMoreData,staff);
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

function taskException(datas,staff) {
    var html='<tr class="table-th"><td>任务名</td><td>时长</td><td>平均时长</td></tr>'
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
    $('#taskException').html(html)
}

function taskMonitorD(datas) {
    $('#taskMonitorD1').html(datas[0])
    $('#taskMonitorD2').html(datas[1])
}

function taskMonitorC(datas) {
    $('#taskMonitorC1').html(datas[0])
    $('#taskMonitorC2').html(datas[1])
}

function taskMonitorB(datas) {
    $('#taskMonitorB1').html(datas[0])
    $('#taskMonitorB2').html(datas[1])
}

function taskMonitorA(datas) {
    $('#taskMonitorA1').html(datas[0])
    $('#taskMonitorA2').html(datas[1])
    $('#taskMonitorA3').html(datas[2])
}

function taskFlow(datas) {
    var html='';
    for(var i=0;i<datas.length;i++){
        if(i!=0||i!=7){
            html+='<div class="taskFlow-line'+(i+1)+' ';
            if(datas[i].desc==1){
                html+= 'line-green"></div>'
            }else if(datas[i].desc==2){
                html+= 'line-white"></div>'
            }else if(datas[i].desc==3){
                html+= 'line-red"></div>'
            }else if(datas[i].desc==4){
                html+= 'line-blue"></div>'
            }
        }

        if(datas[i].desc==1){
            if(i==3){
                html+='<div class="taskMonitor-taskFlow-point taskFlow-point'+(i+1)+'">'
                html+='<div class="taskFlow-point-borders border-green">'
                html+='<table>'
                html+='<tbody>'
                html+='<tr>'
                html+='<td colspan="2" class="border-title">'+datas[i].name+'</td>'
                html+='</tr>'
                html+='<tr>'
                html+='<td>成功数</td>'
                html+='<td class="font-green">'+datas[i].value[0]+'</td>'
                html+='</tr>'
                html+='</tbody>'
                html+='</table>'
                html+='</div>'
                html+='<img src="../img/pointGreen.png" class="taskFlow-point-imgs">'
                html+='</div>'
            }else {
                html+='<div class="taskMonitor-taskFlow-point taskFlow-point'+(i+1)+'">'
                html+='<img src="../img/pointGreen.png" class="taskFlow-point-img">'
                html+='<div class="taskFlow-point-border border-green">'
                html+='<table>'
                html+='<tbody>'
                html+='<tr>'
                html+='<td colspan="2" class="border-title">'+datas[i].name+'</td>'
                html+='</tr>'
                html+='<tr>'
                html+='<td>成功数</td>'
                html+='<td class="font-green">'+datas[i].value[0]+'</td>'
                html+='</tr>'
                html+='</tbody>'
                html+='</table>'
                html+='</div>'
                html+='</div>'
            }
        }else if(datas[i].desc==2){
            if(i==3){
                html+='<div class="taskMonitor-taskFlow-point taskFlow-point'+(i+1)+'">'
                html+='<div class="taskFlow-point-borders border-white">'
                html+='<table>'
                html+='<tbody>'
                html+='<tr>'
                html+='<td colspan="2" class="border-title">'+datas[i].name+'</td>'
                html+='</tr>'
                html+='<tr>'
                html+='<td class="font-green">'+datas[i].value[0]+'</td>'
                html+='<td class="font-blue">'+datas[i].value[1]+'</td>'
                html+='</tr>'
                html+='<tr>'
                html+='<td>成功数</td>'
                html+='<td>任务数</td>'
                html+='</tr>'
                html+='</tbody>'
                html+='</table>'
                html+='</div>'
                html+='<img src="../img/pointWhite.png" class="taskFlow-point-imgs">'
                html+='</div>'
            }else {
                html+='<div class="taskMonitor-taskFlow-point taskFlow-point'+(i+1)+'">'
                html+='<img src="../img/pointWhite.png" class="taskFlow-point-img">'
                html+='<div class="taskFlow-point-border border-white">'
                html+='<table>'
                html+='<tbody>'
                html+='<tr>'
                html+='<td colspan="2" class="border-title">'+datas[i].name+'</td>'
                html+='</tr>'
                html+='<tr>'
                html+='<td class="font-green">'+datas[i].value[0]+'</td>'
                html+='<td class="font-blue">'+datas[i].value[1]+'</td>'
                html+='</tr>'
                html+='<tr>'
                html+='<td>成功数</td>'
                html+='<td>任务数</td>'
                html+='</tr>'
                html+='</tbody>'
                html+='</table>'
                html+='</div>'
                html+='</div>'
            }
        }else if(datas[i].desc==3){
            if(i==3){
                html+='<div class="taskMonitor-taskFlow-point taskFlow-point'+(i+1)+'">'
                html+='<div class="taskFlow-point-borders border-red">'
                html+='<table>'
                html+='<tbody>'
                html+='<tr>'
                html+='<td colspan="2" class="border-title">'+datas[i].name+'</td>'
                html+='</tr>'
                html+='<tr>'
                html+='<td>失败数</td>'
                html+='<td class="font-red">'+datas[i].value[0]+'</td>'
                html+='</tr>'
                html+='</tbody>'
                html+='</table>'
                html+='</div>'
                html+='<img src="../img/pointRed.png" class="taskFlow-point-imgs">'
                html+='</div>'
            }else {
                html+='<div class="taskMonitor-taskFlow-point taskFlow-point'+(i+1)+'">'
                html+='<img src="../img/pointRed.png" class="taskFlow-point-img">'
                html+='<div class="taskFlow-point-border border-red">'
                html+='<table>'
                html+='<tbody>'
                html+='<tr>'
                html+='<td colspan="2" class="border-title">'+datas[i].name+'</td>'
                html+='</tr>'
                html+='<tr>'
                html+='<td>失败数</td>'
                html+='<td class="font-red">'+datas[i].value[0]+'</td>'
                html+='</tr>'
                html+='</tbody>'
                html+='</table>'
                html+='</div>'
                html+='</div>'
            }
        }else if(datas[i].desc==4){
            if(i==3){
                html+='<div class="taskMonitor-taskFlow-point taskFlow-point'+(i+1)+'">'
                html+='<div class="taskFlow-point-borders border-blue">'
                html+='<table>'
                html+='<tbody>'
                html+='<tr>'
                html+='<td colspan="2" class="border-title">'+datas[i].name+'</td>'
                html+='</tr>'
                html+='<tr>'
                html+='<td>任务数</td>'
                html+='<td class="font-blue">'+datas[i].value[0]+'</td>'
                html+='</tr>'
                html+='</tbody>'
                html+='</table>'
                html+='</div>'
                html+='<img src="../img/pointBlue.png" class="taskFlow-point-imgs">'
                html+='</div>'
            }else {
                html+='<div class="taskMonitor-taskFlow-point taskFlow-point'+(i+1)+'">'
                html+='<img src="../img/pointBlue.png" class="taskFlow-point-img">'
                html+='<div class="taskFlow-point-border border-blue">'
                html+='<table>'
                html+='<tbody>'
                html+='<tr>'
                html+='<td colspan="2" class="border-title">'+datas[i].name+'</td>'
                html+='</tr>'
                html+='<tr>'
                html+='<td>任务数</td>'
                html+='<td class="font-blue">'+datas[i].value[0]+'</td>'
                html+='</tr>'
                html+='</tbody>'
                html+='</table>'
                html+='</div>'
                html+='</div>'
            }
        }
    }

    $('#taskFlowContent').html(html);
}

function dataFlow(datas) {
    $('#dataFlowA1').html(datas[0][0]);
    $('#dataFlowA2').html(datas[0][1]);
    $('#dataFlowB1').html(datas[1][0]);
    $('#dataFlowB2').html(datas[1][1]);
    $('#dataFlowC1').html(datas[2][0]);
    $('#dataFlowC2').html(datas[2][1]);
    $('#dataFlowD1').html(datas[3][0]);
    $('#dataFlowD2').html(datas[3][1]);
}

function flowTree(data) {
    var myChart = echarts.init(document.getElementById('flowTree'));


    var option = {
        tooltip: {
            trigger: 'item',
            triggerOn: 'mousemove',
            formatter: function(params) {
                if (params.data.desc==1) {
                    return `成功数: <span style="color: #28FCA1;font-weight: bold">` + `${params.data.value[0]}`+`</span>`
                }else if (params.data.desc==2) {
                    return `成功数: <span style="color: #28FCA1;font-weight: bold">` + `${params.data.value[0]}`+`</span>` + `   任务总数: <span style="color: #34DCFF;font-weight: bold">` + `${params.data.value[1]}`+`</span>`
                }else if (params.data.desc==3) {
                    return `失败数: <span style="color: #FA2160;font-weight: bold">` + `${params.data.value[0]}`+`</span>`
                }else if (params.data.desc==4) {
                    return `任务总数: <span style="color: #34DCFF;font-weight: bold">` + `${params.data.value[0]}`+`</span>`
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
                    borderRadius:5
                }
            }
        },

        series : [
            {
                name:'树图',
                type:'tree',
                symbolSize: 20,
                left:'5%',
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
                                borderRadius:5
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

function taskFlowShow() {
    $('.taskMonitor-flowMore').css('display','block')
}

function taskFlowHidden() {
    $('.taskMonitor-flowMore').css('display','none')
}
