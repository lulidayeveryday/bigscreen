$(function () {
    firstShow()
})

function firstShow() {
    percentChart("indicatorChart1",'#78C9FF',"完成率",33)
    percentChart("indicatorChart2",'#F9B56A',"已使用占比",33)
    percentChart("indicatorChart3",'#48C2A9',"完成率",33)

    var lineName2 = '出账收入';
    var lineColor2 = '#D8579E';
    var categoryLine2 = ['太原','大同','阳泉','长治','晋城','朔州','忻州','晋中','吕梁','临汾','运城'];
    var lineData2 = [589,567,235,458,361,567,235,458,361,567,235];

    echartsLine('littleCeoLine',lineName2,lineColor2,categoryLine2,lineData2);
}

function percentChart(mid,colors,mtitle,mvalue) {
    var placeHolderStyle = {
        normal: {
            label: {
                show: false
            },
            labelLine: {
                show: false
            },
            color: "rgba(0,0,0,0)",
            borderWidth: 0
        },
        emphasis: {
            color: "rgba(0,0,0,0)",
            borderWidth: 0
        }
    };


    var option = {
        title: [
            {
                text: mtitle,
                left: 'center',
                top: '70%',
                textStyle: {
                    fontWeight: 'normal',
                    fontSize: 12,
                    color: '#666',
                },
            },{
                text: mvalue+"%",
                left: 'center',
                top: '43%',
                textStyle: {
                    fontWeight: 'bold',
                    fontSize: 18,
                    color: colors,
                },
            }],
        series: [{
            type: 'pie',
            hoverAnimation: false, //鼠标经过的特效
            radius: ['80%', '90%'],
            center: ['50%', '63%'],
            startAngle: 198,
            labelLine: {
                normal: {
                    show: false
                }
            },
            zlevel: 99,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                }
            },
            data: [{
                value: mvalue*0.6,
                itemStyle: {
                    normal: {
                        color: colors,
                    }
                },
            }, {
                value: 100-mvalue*0.6,
                itemStyle: placeHolderStyle,
            },

            ]
        },

            //外圈的边框
            {
                // name: '总人数',
                type: 'pie',
                hoverAnimation: false, //鼠标经过的特效
                radius: ['80%', '90%'],
                center: ['50%', '63%'],
                startAngle: 198,
                zlevel: 9,
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                label: {
                    normal: {
                        position: 'center'
                    }
                },
                data: [{
                    value: 60,
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#eee'
                            }, {
                                offset: 1,
                                color: '#eee'
                            }]),
                        }
                    },
                }, {
                    value: 40,
                    itemStyle: placeHolderStyle,
                },

                ]
            },
        ]
    };

    var chart = echarts.init(document.getElementById(mid));
    chart.setOption(option);
    $(window).resize(function() {
        chart.resize();
    });
}

function echartsLine(mid,barName,barColor,category,barData) {
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
                top: '22%',
                left: '15%',
                right: '5%',
                bottom: '5%'
            },
        ],
        legend: {
            show:false,
            "top": 8+"px",
            right: 8+'px',
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
                alignWithLabel: false,
            },
            //横坐标名称
            axisLabel: {
                show: false,
                textStyle: {
                    color: '#fff',
                    fontSize: 10
                },
                rotate:45,
                interval: 0
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
                show: false,
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
                alignWithLabel: false,
            },
            axisLine: {
                show: false,
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
                show: false,
                formatter: '{value}',
                textStyle: {
                    color: '#01B4E8',
                    fontSize: 12
                }
            }
        }],
        series: [{
            name: barName,
            type: 'line',
            smooth: true,
            showAllSymbol: true,
            symbol: 'emptyCircle',
            symbolSize: 5,
            itemStyle: {
                normal: {
                    color: barColor
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