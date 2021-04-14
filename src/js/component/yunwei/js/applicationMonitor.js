$(function () {
    //接口服务监控 0为天数据  1为实时数据
    interfaceService(0);
    //应用页面展示数据监控
    appData();
})

function appData() {
    var time='2018-08-26 17:32:21';
    var data={
        module:254, //页面模块数
        survival:369, //存活数
        app:52, //应用访问
        service:258 //对外服务
    }
    $('#appTime').html(time);
    $('#module').html(data['module']);
    $('#survival').html(data['survival']);
    $('#app').html(data['app']);
    $('#service').html(data['service']);
}

function interfaceService(type) {
    var data=[
        {
            name:'杭分节假日',
            type:'良好',
            lose:15,//失败
            unenforced:20,//未执行
            execute:2,//执行
            success:30//成功
        },
        {
            name:'省局节假日',
            type:'良好',
            lose:15,//失败
            unenforced:2,//未执行
            execute:0,//执行
            success:3//成功
        },
        {
            name:'杭分旅委',
            type:'良好',
            lose:18,//失败
            unenforced:0,//未执行
            execute:2,//执行
            success:0//成功
        },
        {
            name:'绍兴旅委',
            type:'中断',
            lose:5,//失败
            unenforced:2,//未执行
            execute:25,//执行
            success:0//成功
        },
        {
            name:'杭州商圈',
            type:'中断',
            lose:1,//失败
            unenforced:0,//未执行
            execute:21,//执行
            success:30//成功
        },
        {
            name:'省旅游局',
            type:'良好',
            lose:5,//失败
            unenforced:0,//未执行
            execute:2,//执行
            success:3//成功
        },
        {
            name:'上传总部',
            type:'良好',
            lose:1,//失败
            unenforced:2,//未执行
            execute:2,//执行
            success:0//成功
        },
    ]
    $('span').removeClass('server-left-button-active')
    if (type==0){
         $('#daySpan').addClass('server-left-button-active')
    }else if (type==1){
        $('#realSpan').addClass('server-left-button-active')
    }
    echartsBar(data)
}

function echartsBar(datas) {
    var myChart = echarts.init(document.getElementById('echartBar'));

    var myData = [];
    var lose = []
    var unenforced = []
    var execute = []
    var success = []
    var htmls = '';

    var secs=0;

    for(var i=0;i<datas.length;i++){
        myData.push(datas[i].name);
        lose.push(datas[i].lose);
        unenforced.push(datas[i].unenforced);
        execute.push(datas[i].execute);
        success.push(datas[i].success);


        htmls+='<tr>'
        htmls+='<td>'
        htmls+=datas[i].name + '<br>'
        if (datas[i].type=="良好"){
            htmls+='<img src="../img/normal.png" style="width: 3.6rem">'
            secs++
        }else {
            htmls+='<img src="../img/break.png" style="width: 3.6rem">'
        }
        htmls+='</td>'
        htmls+='</tr>'
    }
    $('#serverContent').html(htmls);
    $('#allNum1').html(datas.length);
    $('#allNum2').html(datas.length);
    $('#connect').html(secs);

    var option = {
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend:{
            show:true,
            top:5,
            data:['失败','未执行','运行','成功'],
            textStyle: {
                color: '#FFF',
                fontSize: 12,
            },
        },


            grid: [{
                show: false,
                left: '4%',
                top: 60,
                bottom: 0,
                containLabel: false,
                width: '46%',
            }, {
                show: false,
                left: '50.5%',
                top: 80,
                bottom: 60,
                width: '0%',
            }, {
                show: false,
                right: '4%',
                top: 60,
                bottom: 0,
                containLabel: false,
                width: '46%',
            }, ],

            xAxis: [
                {
                    type: 'value',
                    inverse: true,
                    axisLine: {
                        show: false,
                    },
                    axisTick: {
                        show: false,
                    },
                    position: 'top',
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#FFF',
                            fontSize: 12,
                        },
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: 'rgba(113,149,209,0.5)',
                            width: 1,
                            type: 'dashed',
                        },
                    },
                }, {
                    gridIndex: 1,
                    show: false,
                }, {
                    gridIndex: 2,
                    type: 'value',
                    axisLine: {
                        show: false,
                    },
                    axisTick: {
                        show: false,
                    },
                    position: 'top',
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#FFF',
                            fontSize: 12,
                        },
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: 'rgba(113,149,209,0.5)',
                            width: 1,
                            type: 'dashed',
                        },
                    },
                }, ],
            yAxis: [{
                type: 'category',
                inverse: true,
                position: 'right',
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: false,
                    margin: 8,
                    textStyle: {
                        color: '#9D9EA0',
                        fontSize: 12,
                    },

                },
                data: myData,
            }, {
                gridIndex: 1,
                type: 'category',
                inverse: true,
                position: 'left',
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: false,
                    textStyle: {
                        color: '#9D9EA0',
                        fontSize: 12,
                    },

                },
                data: myData.map(function(value) {
                    return {
                        value: value,
                        textStyle: {
                            align: 'center',
                        }
                    }
                }),
            }, {
                gridIndex: 2,
                type: 'category',
                inverse: true,
                position: 'left',
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: false,
                    textStyle: {
                        color: '#9D9EA0',
                        fontSize: 12,
                    },

                },
                data: myData,
            }, ],
            series: [{
                name: '运行',
                type: 'bar',
                stack: '总量',
                barGap: 30,
                barWidth: 30,
                label: {
                    normal: {
                        show: true,
                        position: 'insideLeft',
                        offset: [0, 0],
                        formatter:function (params) {
                            if(params.data==0){
                                return ''
                            }else {
                                return params.data;
                            }
                        },
                        textStyle: {
                            color: '#fff',
                            fontSize: 14,
                        },
                    },
                },
                itemStyle: {
                    normal: {
                        color: {
                            "type": "linear",
                            "x": 0,
                            "y": 0,
                            "x2": 1,
                            "y2": 0,
                            "colorStops": [
                                {
                                    "offset": 0,
                                    "color": "rgba(15,255,255,1)"
                                },
                                {
                                    "offset": 0.1,
                                    "color": "rgba(15,255,255,0.5)"
                                },
                                {
                                    "offset": 1,
                                    "color": "rgba(15,255,255,0.2)"
                                }
                            ],
                            "globalCoord": true
                        },
                    },
                },
                data: execute,
            },
                {
                    name: '未执行',
                    type: 'bar',
                    stack: '总量',
                    barGap: 30,
                    barWidth: 30,
                    label: {
                        normal: {
                            show: true,
                            position: 'insideLeft',
                            offset: [0, 0],
                            formatter:function (params) {
                                if(params.data==0){
                                    return ''
                                }else {
                                    return params.data;
                                }
                            },
                            textStyle: {
                                color: '#fff',
                                fontSize: 14,
                            },
                        },
                    },
                    itemStyle: {
                        normal: {
                            color: {
                                "type": "linear",
                                "x": 0,
                                "y": 0,
                                "x2": 1,
                                "y2": 0,
                                "colorStops": [
                                    {
                                        "offset": 0,
                                        "color": "rgba(48,143,224,1)"
                                    },
                                    {
                                        "offset": 0.1,
                                        "color": "rgba(48,143,224,0.5)"
                                    },
                                    {
                                        "offset": 1,
                                        "color": "rgba(48,143,224,0.2)"
                                    }
                                ],
                                "globalCoord": true
                            },
                        },
                    },
                    data: unenforced,
                },
                {
                    name: '失败',
                    type: 'bar',
                    stack: '总量',
                    barGap: 30,
                    barWidth: 30,
                    label: {
                        normal: {
                            show: true,
                            position: 'left',
                            offset: [0, 0],
                            textStyle: {
                                color: '#fff',
                                fontSize: 14,
                            },
                        },
                    },
                    itemStyle: {
                        normal: {
                            color: {
                                "type": "linear",
                                "x": 0,
                                "y": 0,
                                "x2": 1,
                                "y2": 0,
                                "colorStops": [
                                    {
                                        "offset": 0,
                                        "color": "rgba(251,47,103,1)"
                                    },
                                    {
                                        "offset": 0.1,
                                        "color": "rgba(251,47,103,0.5)"
                                    },
                                    {
                                        "offset": 1,
                                        "color": "rgba(251,47,103,0.2)"
                                    }
                                ],
                                "globalCoord": true
                            },
                        },
                    },
                    data: lose,
                },


                {
                    name: '成功',
                    type: 'bar',
                    barGap: 30,
                    barWidth: 30,
                    xAxisIndex: 2,
                    yAxisIndex: 2,
                    label: {
                        normal: {
                            show: true,
                            position: 'right',
                            offset: [0, 0],
                            textStyle: {
                                color: '#fff',
                                fontSize: 14,
                            },
                        },
                    },
                    itemStyle: {
                        normal: {
                            color: {
                                "type": "linear",
                                "x": 1,
                                "y": 0,
                                "x2": 0,
                                "y2": 0,
                                "colorStops": [
                                    {
                                        "offset": 0,
                                        "color": "rgba(59,251,168,1)"
                                    },
                                    {
                                        "offset": 0.1,
                                        "color": "rgba(59,251,168,0.5)"
                                    },
                                    {
                                        "offset": 1,
                                        "color": "rgba(59,251,168,0.2)"
                                    }
                                ],
                                "globalCoord": true
                            },
                        },
                    },
                    data: success,
                }
            ]


    };

    myChart.setOption(option);
    $(window).resize(function(){
        myChart.resize();
    })
}