$(function () {
    firstShow();
})

function firstShow() {
    //宽带发展占比
    var delPercentData='58%';
    var delZbData=[{
        value: 2154,
        name: '融合',
        arpu: 53
    }, {
        value: 3854,
        name: '单宽',
        arpu: 53
    }]
    developmentZb('developmentZb',delPercentData,delZbData)

    //融合生效占比
    var effectPercentData='90%';
    var effectZbData= [
        {
        value: 123,
        name: '冰融',
        arpu: 53
        }, {
            value: 38,
            name: '福晋',
            arpu: 53
        }, {
            value: 120,
            name: '王卡',
            arpu: 53
        }, {
            value: 20,
            name: '乐享',
            arpu: 53
        }, {
            value: 40,
            name: '其他',
            arpu: 53
        }
    ]
    developmentZb('effectZb',effectPercentData,effectZbData)

    //宽带发展质量监控
    var lineName = '200M占比';
    var barName = 'ARPU预估';
    var lineColor = '#D0AF62';
    var barColor = ['#0097FE','#00C5FB']
    var category = ['太原','大同','阳泉','长治','晋城','朔州','忻州','晋中','吕梁','临汾','运城'];
    var lineData = [14,45,75,86,58,45,75,86,58,45,75];//百分比的数字，不带%
    var barData = [589,567,235,458,361,567,235,458,361,567,235];
    lineBar('broadDel',lineName,barName,lineColor,barColor,category,lineData,barData);

    //融合生效用户质量监控上
    var lineNameUp = '新增移网异网率';
    var barNameUp = '新增移网用户数';
    var lineColorUp = '#8348D1';
    var barColorUp = ['#EDB435','#ECB335']
    var categoryUp = ['太原','大同','阳泉','长治','晋城','朔州','忻州','晋中','吕梁','临汾','运城'];
    var lineDataUp = [14,45,75,86,58,45,75,86,58,45,75];//百分比的数字，不带%
    var barDataUp = [589,567,235,458,361,567,235,458,361,567,235];
    lineBar('addYwUser',lineNameUp,barNameUp,lineColorUp,barColorUp,categoryUp,lineDataUp,barDataUp);

    //融合生效用户质量监控下
    var lineNameDown = '降收用户比';
    var barNameDown = '用户收入变化';
    var lineColorDown = '#02C0AD';
    var barColorDown = ['#F30C84','#F765AD'];
    var categoryDown = ['太原','大同','阳泉','长治','晋城','朔州','忻州','晋中','吕梁','临汾','运城'];
    var lineDataDown = [14,45,75,86,58,45,75,86,58,45,75];//百分比的数字，不带%
    var barDataDown = [589,567,235,458,361,567,235,458,361,567,235];
    lineBar('userIncome',lineNameDown,barNameDown,lineColorDown,barColorDown,categoryDown,lineDataDown,barDataDown);

    //融合产品生效迁转路径
    effectMove('goIntoEffect','#B0EA41');

    //融合产品生效迁转路径
    effectMove('loseEffect','#F42C2A')

}

function effectMove(mid,lineColor) {
    var pointData=[
        {
            name:'产品1',
            value:2789,
            rank:1,
        },{
            name:'产品2',
            value:2789,
            rank:11,
        },{
            name:'产品3',
            value:2789,
            rank:12,
        },{
            name:'产品4',
            value:2789,
            rank:13,
        },{
            name:'产品5',
            value:2789,
            rank:2,
        },{
            name:'产品6',
            value:2789,
            rank:14,
        },{
            name:'产品7',
            value:2789,
            rank:15,
        },{
            name:'产品8',
            value:2789,
            rank:3,
        },{
            name:'产品9',
            value:2789,
            rank:16,
        },{
            name:'产品10',
            value:2789,
            rank:17,
        },{
            name:'产品11',
            value:2789,
            rank:4,
        },{
            name:'产品12',
            value:2789,
            rank:5,
        },{
            name:'产品13',
            value:2789,
            rank:18,
        },{
            name:'产品14',
            value:2789,
            rank:19,
        },{
            name:'产品15',
            value:2789,
            rank:20,
        },{
            name:'产品16',
            value:2789,
            rank:6,
        },{
            name:'产品17',
            value:2789,
            rank:7,
        },{
            name:'产品18',
            value:2789,
            rank:8,
        },{
            name:'产品19',
            value:2789,
            rank:9,
        },{
            name:'产品20',
            value:2789,
            rank:10,
        },
    ]
    var data=[];
    for(var i=0;i<pointData.length;i++){
        var color;
        var size;
        if (pointData[i].rank==1){
            color = '#F05724';
            size = 20;
        }else if (pointData[i].rank==2){
            color = '#13B7FA';
            size = 17;
        }else if (pointData[i].rank==3){
            color = '#0DC79E';
            size = 14;
        }else {
            color = '#6E9FA6';
            size = 5;
        }
        data.push({
            name: pointData[i].name,
            symbolSize: size,
            value: pointData[i].value,
            itemStyle: {
                normal: {
                    color: color
                }
            }
        })
    }

    var linkData=[
        {
            source: '产品2',
            target: '产品15',
            value: 3,
            rank: 1
        },{
            source: '产品20',
            target: '产品15',
            value: 258,
            rank: 2
        },{
            source: '产品4',
            target: '产品5',
            value: 258,
            rank: 3
        },{
            source: '产品7',
            target: '产品13',
            value: 258,
            rank: 4
        },{
            source: '产品19',
            target: '产品4',
            value: 258,
            rank: 5
        },{
            source: '产品7',
            target: '产品17',
            value: 258,
            rank: 6
        },{
            source: '产品19',
            target: '产品4',
            value: 258,
            rank: 7
        },{
            source: '产品1',
            target: '产品15',
            value: 258,
            rank: 8
        },{
            source: '产品9',
            target: '产品2',
            value: 258,
            rank: 9
        },{
            source: '产品1',
            target: '产品7',
            value: 258,
            rank: 10
        },
    ];

    var links=[];
    for (var i=0;i<linkData.length;i++){
        var width=1;
        if (linkData[i].rank==1){
            width = 4
        }else if (linkData[i].rank==2){
            width = 3
        }else if (linkData[i].rank==2){
            width = 2
        }else {
            width = 1
        }
        links.push({
            source: linkData[i].source,
            target: linkData[i].target,
            value: linkData[i].value,
            lineStyle: {
                normal: {
                    width: width,
                    color: lineColor
                }
            }
        })
    }

    var option = {
        grid: {
            left: '3%',
            bottom: '3%'

        },
        tooltip: {},
        animationDurationUpdate: 150,
        animationEasingUpdate: 'quinticInOut',
        series: [{
            type: 'graph',
            layout: 'circular', //图的布局
            symbolSize: 1,
            itemStyle: {
                normal: {
                    color: '#02feff',
                    shadowColor: '#fff',
                    shadowBlur: 8,
                }
            },
            circular: {
                rotateLabel: false
            },
            edgeSymbol: ['circle', 'arrow'],
            focusNodeAdjacency: true,
            edgeSymbolSize: [5, 10],
            /*label: {
             normal: {
             show:true,
             position: 'inside',
             offset:[0,-10],
             formatter:'{b}',
             textStyle: {
             color: '#02feff'
             }
             }
             },*/label: {
                position: 'right',
                formatter: '{b}'
            },
            force: {
                repulsion: 100
            },
            emphasis: {},

            lineStyle: {
                normal: {
                    opacity: 0.9,
                    width: 2,
                    curveness: 0.4,
                    color: '#01ffff'
                }
            },
            data: data,
            links: links
        }]
}
    var chart = echarts.init(document.getElementById(mid));
    chart.setOption(option);
    $(window).resize(function() {
        chart.resize();
    });
}


function lineBar(mid,lineName,barName,lineColor,barColor,category,lineData,barData) {
    var chart = echarts.init(document.getElementById(mid));
// option
    var option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow',
                label: {
                    show: true,
                }
            }
        },
        grid: [
            {
                y: '40px',
            },
        ],
        legend: {
            "top": 8+"px",
            right: 20+'px',
            itemGap:30,
            itemHeight: 7,
            "textStyle": {
                fontSize: 10,
                "color": "#fff",
            }
        },
        xAxis: {
            data: category,
            type: 'category',
            //横坐标线下点
            axisTick: {
                show: false,
                alignWithLabel: true,
            },
            //横坐标名称
            axisLabel: {
                textStyle: {
                    color: '#fff',
                    fontSize: 10
                },
                /*rotate:28,*/
                /*interval: 0*/
            },
            splitLine: { //网格线
                show: false,
                lineStyle: {
                    color: ['rgba(16,99,164,0.5)'],
                    type: 'dotted'
                }
            },
            //横坐标
            axisLine: {
                lineStyle: {
                    color: 'rgba(16,99,164)'
                }
            },
        },
        yAxis: [{
            type: 'value',
            position: 'left',
            axisTick: {
                show: false,
                alignWithLabel: true,
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(16,99,164)'
                }
            },
            splitLine: { //网格线
                show: false,
                lineStyle: {
                    color: ['rgba(16,99,164,0.5)'],
                    type: 'dotted'
                }
            },
            axisLabel: {
                formatter: '{value}',
                textStyle: {
                    color: '#01B4E8',
                    fontSize: 12
                }
            }
        },{
            type: 'value',
            position: 'right',
            axisTick: {
                show: false,
                alignWithLabel: true,
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(16,99,164)'
                }
            },
            splitLine: { //网格线
                show: false,
                lineStyle: {
                    color: ['rgba(16,99,164,0.5)'],
                    type: 'dotted'
                }
            },
            axisLabel: {
                formatter: '{value} %',
                textStyle: {
                    color: '#01B4E8',
                    fontSize: 12
                }
            }
        }],
        series: [{
            name: lineName,
            type: 'line',
            yAxisIndex: 1,
            smooth: true,
            showAllSymbol: true,
            symbol: 'emptyCircle',
            symbolSize: 5,
            data: lineData,
            itemStyle: {
                normal: {
                    color: lineColor
                }
            }
        }, {
            name: barName,
            type: 'bar',
            barWidth: 8,
            itemStyle: {
                normal: {
                    barBorderRadius: 5,
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 0, color: barColor[1]},
                            {offset: 1, color: barColor[0]}
                        ]
                    )
                }
            },
            data: barData
        }]
    };

    chart.setOption(option);
    $(window).resize(function() {
        chart.resize();
    });
}

function developmentZb(mid,delPercentData,delZbData){
    var myChart = echarts.init(document.getElementById(mid));
    var scale = 1;
    var echartData = delZbData;
    var rich = {
        yellow: {
            color: "#ffc72b",
            fontSize: 12 * scale,
            padding: [5, 4],
            align: 'center'
        },
        total: {
            color: "#ffc72b",
            fontSize: 12 * scale,
            align: 'center'
        },
        white: {
            color: "#fff",
            align: 'center',
            fontSize: 12 * scale,
            padding: [7, 0]
        },
        blue: {
            color: '#49dff0',
            fontSize: 12 * scale,
            align: 'center'
        },
        hr: {
            borderColor: '#0b5263',
            width: '100%',
            borderWidth: 1,
            height: 0,
        }
    }
    var option = {
        title: {
            text: delPercentData,
            subtext: '完成情况',
            textStyle: {
                color: '#f2f2f2',
                fontSize: 25,
                fontWight: 500
                // align: 'center'
            },
            subtextStyle: {
                fontSize: 14,
                color: ['#01C9F0']
            },
            x: 'center',
            y: 'center',
        },
        series: [{
            name: '占比',
            type: 'pie',
            radius: ['50%', '58%'],
            hoverAnimation: false,
            color: ['#F05724', '#13B7FA', '#B2EC3F', '#924DE9', '#0DC79E', '#00ffb4'],
            label: {
                normal: {
                    formatter: function(params, ticket, callback) {
                        return '{white|' + params.name + ': ' + params.value + '}\n{hr|}\n{white|' + 'ARPU:  ' + params.data.arpu + '}';
                    },
                    rich: rich
                },
            },
            labelLine: {
                normal: {
                    length: 35* scale,
                    length2: 0,
                    lineStyle: {
                        color: '#0b5263'
                    }
                }
            },
            data: echartData
        }]
    };
    myChart.setOption(option);
    $(window).resize(function(){
        myChart.resize();
    })
}