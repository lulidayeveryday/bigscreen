$(function () {
    firstShow();
    $("#scrollInner").niceScroll({
        touchbehavior:true,
        cursorcolor:"#398F70",
        cursoropacitymax:1,
        cursorwidth:5,
        cursorborder:"none",
        cursorborderradius:"4px",
        background:"#2F7758",
        autohidemode:true
    });
    $("#scrollInner1").niceScroll({
        touchbehavior:true,
        cursorcolor:"#398F70",
        cursoropacitymax:1,
        cursorwidth:5,
        cursorborder:"none",
        cursorborderradius:"4px",
        background:"#2F7758",
        autohidemode:true
    });
})


function popClickType(mid) {
    $('td').removeClass('pop-td-select');
    $(mid).addClass('pop-td-select');
}


function firstShow() {
    var pieData = [{
        "name": "城市",
        "value": 34
    }, {
        "name": "农村",
        "value": 50
    }, {
        "name": "实体",
        "value": 79
    }, {
        "name": "校园",
        "value": 125
    } ]
    chanelBar(pieData,'pieChart1')


    var pieData2 = [{
        "name": "线上电渠",
        "value": 34
    }, {
        "name": "线上本地",
        "value": 50
    }, {
        "name": "线下传统",
        "value": 79
    }]
    chanelBar(pieData2,'pieChart2')

    //重点指标占比
    var percentData=[
        {
            name: '标准产品占比',
            value: 16
        },
        {
            name: '包打产品占比',
            value: 96
        },
        {
            name: '融合产品占比',
            value: 36
        }
    ]

    for(var i=0;i<percentData.length;i++){
        percentPie('percentPie'+(i+1),percentData[i].name,percentData[i].value);
    }

    //发展监控柱状图
    var y_data = ['产品1', '产品2', '产品3', '产品4', '产品5', '产品6'];
    var _data1 = [10,15,10,13,15,11];//太原
    var _data2 = [19,5,40,33,15,51];//忻州
    var _data3 = [21,55,10,13,35,11];//运城
    var _data4 = [21,55,10,13,35,11];//晋中
    var _data5 = [10,15,10,13,15,11];//朔州
    var _data6 = [19,5,40,33,15,51];//晋城
    var _data7 = [21,55,10,13,35,11];//长治
    var _data8 = [21,55,10,13,35,11];//阳泉
    var _data9 = [10,15,10,13,15,11];//大同
    var _data10 = [19,5,40,33,15,51];//吕梁
    var _data11 = [21,55,10,13,35,11];//临汾
    telDel(y_data,_data1,_data2,_data3,_data4,_data5,_data6,_data7,_data8,_data9,_data10,_data11);

}
function percentPie(mid,mname,mvalue) {
    var option = {
        series: [{
            name: '刻度',
            type: 'gauge',
            radius: '77%',
            center: ['50%', '60%'],
            min:0,//最小刻度
            max:16,//最大刻度
            splitNumber: 4, //刻度数量
            startAngle: 225,
            endAngle: -45,
            axisLine: {
                show: true,
                lineStyle: {
                    width: 1,
                    color: [[1,'rgba(0,0,0,0)']]
                }
            },//仪表盘轴线
            axisLabel: {
                show: true,

                textStyle: {
                    color: '#03b7c9',
                    fontSize: "12",
                    fontWeight: "500"
                },
                distance:-13,
                formatter:function(v){
                    switch (v + '') {
                        case '0' : return '0';
                        case '4' : return '25%';
                        case '8' : return '50%';
                        case '12' : return '75%';
                        case '16' : return '100%';
                    }
                }
            },
            axisTick: {
                show: true,
                splitNumber: 7,
                lineStyle: {
                    // color: '#fff',
                    width: 1,
                },
                length: -4
            },//刻度样式
            splitLine: {
                show: true,
                length: -10,
                lineStyle: {
                    color: '#fff'
                }
            },//分隔线样式
            detail: {
                show: false
            },
            pointer: {
                show: false
            }
        },
            {
                type: 'gauge',
                radius: '70%',
                center: ['50%', '60%'],

                splitNumber: 0, //刻度数量
                startAngle: 225,
                endAngle: -45,
                axisLine: {
                    show: true,
                    lineStyle: {
                        width: 7,
                        color: [
                            [
                                mvalue/100, new echarts.graphic.LinearGradient(
                                0, 0, 1, 0, [{
                                    offset: 0,
                                    color: '#5c53de'
                                },
                                    {
                                        offset: 1,
                                        color: '#18c8ff'
                                    }
                                ]
                            )
                            ],
                            [
                                1, '#413e54'
                            ]
                        ]
                    }
                },
                //分隔线样式。
                splitLine: {
                    show: false,
                },
                axisLabel: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                pointer: {
                    show: false
                },
                title: {
                    show: true,
                    offsetCenter: [0, '-26%'], // x, y，单位px
                    textStyle: {
                        color: '#fff',
                        fontSize: 15
                    }
                },
                //仪表盘详情，用于显示数据。
                detail: {
                    show: true,
                    offsetCenter: [0, '36%'],
                    color: '#ffffff',
                    formatter: function(params) {
                        return params+'%'
                    },
                    textStyle: {
                        fontSize: 18,
                        color: '#66F5F4'
                    }
                },
                data: [{
                    name: mname,
                    value: mvalue
                }]
            }
        ]
    };
    var myChart = echarts.init(document.getElementById(mid));
    myChart.setOption(option);
    $(window).resize(function(){
        myChart.resize();
    })
}

function chanelBar(data,mid) {



    var option = {

        color: ['#01C6FD', '#0DC79E', '#FC7F6B', '#B3ED41', '#585247', '#7F6AAD', '#009D85', "rgba(250,250,250,0.3)"],


        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)",

        },
        series: [
            // 主要展示层的
            {
                radius: ['25%', '61%'],
                center: ['50%', '50%'],
                type: 'pie',
                label: {
                    normal: {
                        show: true,
                        formatter: '{d}%\n{b}',
                        textStyle: {
                            fontSize: 12,
                            align:'center'
                        },
                        position: 'outside'
                    },
                    emphasis: {
                        show: true
                    }
                },
                labelLine: {
                    normal: {
                        show: true,
                    },
                    emphasis: {
                        show: true
                    }
                },
                name: "当日占比",
                data: data,

            },
            // 边框的设置
            {
                radius: ['25%', '28%'],
                center: ['50%', '50%'],
                type: 'pie',
                label: {
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: false
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: false
                    }
                },
                animation: false,
                tooltip: {
                    show: false
                },
                data: [{
                    value: 1,
                    itemStyle: {
                        color: "rgba(250,250,250,0.3)",
                    },
                }],
            }, {
                name: '外边框',
                type: 'pie',
                clockWise: false, //顺时加载
                hoverAnimation: false, //鼠标移入变大
                center: ['50%', '50%'],
                radius: ['65%', '65%'],
                label: {
                    normal: {
                        show: false
                    }
                },
                data: [{
                    value: 9,
                    name: '',
                    itemStyle: {
                        normal: {
                            borderWidth: 2,
                            borderColor: '#0b5263'
                        }
                    }
                }]
            },
        ]
    };
    var chart = echarts.init(document.getElementById(mid));
    pieChart = chart;
    chart.setOption(option);
    $(window).resize(function() {
        chart.resize();
    });
}

function telDel(y_data,_data1,_data2,_data3,_data4,_data5,_data6,_data7,_data8,_data9,_data10,_data11) {
    var legendData = ['太原', '忻州', '运城','晋中', '朔州', '晋城','长治', '阳泉', '大同','吕梁','临汾'];
    // var color=["#4A246F","#009CD3","#003F97","#005284","#20AED6","#22AFC3","#19515E","#006962","#00AA83","#25B6AF","#63C0B5"]
    // var color=["#5F3D1A","#844522","#861F4E","#9D2437","#AE1A2A","#C9141D","#D35445","#EE6D46","#F28C4A","#F4981D","#FEF102"]
    // var color=["#A9CD05","#0EAB3B","#009EA7","#0269B6","#014CA1","#551A84","#A50081","#E30125","#ED6C00","#F29702","#FABE01"]
    var color=["#94018F","#6E00A0","#4800AC","#0400B1","#024DA0","#026D8D","#007666","#029600","#62B203","#8FB500","#A9B700"]
    var y_data = ['产品1', '产品2', '产品3', '产品4', '产品5', '产品6'];
    var _data1 = [10,15,10,13,15,11];
    var _data2 = [19,5,40,33,15,51];
    var _data3 = [21,55,10,13,35,11];
    var _data4 = [21,55,10,13,35,11];
    var _data5 = [10,15,10,13,15,11];
    var _data6 = [19,5,40,33,15,51];
    var _data7 = [21,55,10,13,35,11];
    var _data8 = [21,55,10,13,35,11];
    var _data9 = [10,15,10,13,15,11];
    var _data10 = [19,5,40,33,15,51];
    var _data11 = [21,55,10,13,35,11];
    var _label = {
        normal: {
            show: true,
            position: 'inside',
            textStyle: {
                color: '#fff',
                fontSize: 14
            }
        }
    };
    var option = {
        legend: {
            data: legendData,
            textStyle: {
                color: '#fff'
            }
        },
        grid: {
            containLabel: true,
            left: 10,
            right: 15,
            bottom: 30
        },
        tooltip: {
            show: true,
            backgroundColor: '#fff',
            borderColor: '#ddd',
            borderWidth: 1,
            textStyle: {
                color: '#3c3c3c',
                fontSize: 14
            },
            extraCssText: 'box-shadow: 0 0 5px rgba(0, 0, 0, 0.1)'
        },
        xAxis: {
            axisLabel: {
                show: false,
                /*formatter: function(v) {
                 var _v = (v / _max * 100).toFixed(0);
                 return _v == 0 ? _v : _v + '%';
                 }*/
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: false
            }

        },
        yAxis: [{
            data: y_data,
            axisLabel: {
                fontSize: 13,
                color: '#fff'

            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: false
            }
        }, {
            show: false,
            data: y_data,
            axisLine: {
                show: false
            }
        }],
        series: [{
            type: 'bar',
            name: '太原',
            stack: '2',
            label: _label,
            legendHoverLink: false,
            barWidth: 20,
            itemStyle: {
                normal: {
                    color: color[0]
                },
                emphasis: {
                    color: color[0]
                }
            },
            data: _data1
        }, {
            type: 'bar',
            name: '忻州',
            stack: '2',
            label: _label,
            legendHoverLink: false,
            barWidth: 20,
            itemStyle: {
                normal: {
                    color: color[1]
                },
                emphasis: {
                    color: color[1]
                }
            },
            data: _data2
        }, {
            type: 'bar',
            name: '运城',
            stack: '2',
            legendHoverLink: false,
            barWidth: 20,
            label: _label,
            itemStyle: {
                normal: {
                    color: color[2]
                },
                emphasis: {
                    color: color[2]
                }
            },
            data: _data3
        }, {
            type: 'bar',
            stack: '2',
            name: '晋中',
            legendHoverLink: false,
            barWidth: 20,
            label: _label,
            itemStyle: {
                normal: {
                    color: color[3]
                },
                emphasis: {
                    color: color[3]
                }
            },
            data: _data4
        }, {
            type: 'bar',
            name: '朔州',
            stack: '2',
            label: _label,
            legendHoverLink: false,
            barWidth: 20,
            itemStyle: {
                normal: {
                    color: color[4]
                },
                emphasis: {
                    color: color[4]
                }
            },
            data: _data5
        }, {
            type: 'bar',
            name: '晋城',
            stack: '2',
            legendHoverLink: false,
            barWidth: 20,
            label: _label,
            itemStyle: {
                normal: {
                    color: color[5]
                },
                emphasis: {
                    color: color[5]
                }
            },
            data: _data6
        }, {
            type: 'bar',
            stack: '2',
            name: '长治',
            legendHoverLink: false,
            barWidth: 20,
            label: _label,
            itemStyle: {
                normal: {
                    color: color[6]
                },
                emphasis: {
                    color: color[6]
                }
            },
            data: _data7
        }, {
            type: 'bar',
            name: '阳泉',
            stack: '2',
            label: _label,
            legendHoverLink: false,
            barWidth: 20,
            itemStyle: {
                normal: {
                    color: color[7]
                },
                emphasis: {
                    color: color[7]
                }
            },
            data: _data8
        }, {
            type: 'bar',
            name: '大同',
            stack: '2',
            legendHoverLink: false,
            barWidth: 20,
            label: _label,
            itemStyle: {
                normal: {
                    color: color[8]
                },
                emphasis: {
                    color: color[8]
                }
            },
            data: _data9
        }, {
            type: 'bar',
            stack: '2',
            name: '吕梁',
            legendHoverLink: false,
            barWidth: 20,
            label: _label,
            itemStyle: {
                normal: {
                    color: color[9]
                },
                emphasis: {
                    color: color[9]
                }
            },
            data: _data10
        }, {
            type: 'bar',
            stack: '2',
            name: '临汾',
            legendHoverLink: false,
            barWidth: 20,
            label: _label,
             itemStyle: {
             normal: {
             color: color[10]
             },
             emphasis: {
             color: color[10]
             }
             },
            data: _data11
        }]
    };


    var chart = echarts.init(document.getElementById("telMonitorDel"));
    chart.setOption(option);
    $(window).resize(function() {
        chart.resize();
    });
}

function gzPop() {
    $('.contact-pop').css('display','block');
}

function zqPop() {
    $('.contact-pop1').css('display','block');
}