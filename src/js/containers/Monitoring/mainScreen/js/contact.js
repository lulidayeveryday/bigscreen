$(function () {
    firstShow();
})

var myChartMap;
var xieBarChart;
var doubleLineChart;
var doubleBarChart;
var pieChart;
//点击柱状图
function chanelTop(type,selected){
    alert(type+'---------'+selected)
}

function showData(city) {
    //山西地图
    var cityData = [
        {
            "name": "大同市",
            "value": 1.2
        }, {
            "name": "朔州市",
            "value": 1.0
        }, {
            "name": "忻州市",
            "value": 1.8
        }, {
            "name": "吕梁市",
            "value": 1.0
        }, {
            "name": "太原市",
            "value": 2.1
        }, {
            "name": "阳泉市",
            "value": 2.5
        }, {
            "name": "晋中市",
            "value": 33.6
        }, {
            "name": "长治市",
            "value": 1.9
        }, {
            "name": "临汾市",
            "value": 4.6
        }, {
            "name": "晋城市",
            "value": 4.4
        }, {
            "name": "运城市",
            "value": 2.9
        }];
    refreshMapData(cityData);

    //柱状图
    var dayBarX=['线下轻触点', '线上电渠', '线上本地','线下传统'];
    var dayBarY=[50,412, 420, 35];
    refreshData(dayBarX,dayBarY);

    //月柱状图
    var monthBarX=['线下轻触点', '线上电渠', '线上本地','线下传统'];
    var monthBarY=[40,40, 40, 40];
    var lastMonthBarY=[50,50, 50, 50];
    refreshMonthData(monthBarX,monthBarY,lastMonthBarY)

    //三折线图
    var upElectricLine=[1.0, 74.9, 701, 11.2, 105.6, 86.7, 55.6];
    var upBdLine=[21.0, 41.9, 71.0, 213.2, 25.6, 76.7, 135.6];
    var downCtLine=[12.0, 4.9, 7, 51.2, 15.6, 61.7, 15.6];
    var downQcdLine=[12.0, 4.9, 7, 51.2, 15.6, 61.7, 15.6];
    var dataLineX=['一','二','三','四','五','六','日'];
    refreshDataLine(upElectricLine,upBdLine,downCtLine,downQcdLine,dataLineX);

    //当日占比
    var pieData = [{
        "name": "线上电渠",
        "value": 50
    }, {
        "name": "线上本地",
        "value": 50
    }, {
        "name": "线下传统",
        "value": 50
    }, {
        "name": "线下轻触点",
        "value": 50
    } ]
    refreshDataPie(pieData);

    //当月占比
    var pieMonthData = [{
        "name": "线上电渠",
        "value": '3%'
    }, {
        "name": "线上本地",
        "value": '3%'
    }, {
        "name": "线下传统",
        "value": '2%'
    }, {
        "name": "线下轻触点",
        "value": '1%'
    } ]
    chanelMonth(pieMonthData);
}

function refreshDataPie(data) {
    if(!pieChart){
        return;
    }

    //更新数据
    var option = pieChart.getOption();
    option.series[0].data = data;
    pieChart.setOption(option);
}

function refreshData(x,y){
    if(!xieBarChart){
        return;
    }

    //更新数据
    var option = xieBarChart.getOption();
    option.series[0].data = y;
    option.xAxis[0].data = x;
    xieBarChart.setOption(option);
}

function refreshMonthData(x,y,ly){
    if(!doubleBarChart){
        return;
    }

    //更新数据
    var option = doubleBarChart.getOption();
    option.series[0].data = y;
    option.series[1].data = ly;
    option.xAxis[0].data = x;
    doubleBarChart.setOption(option);
}

function refreshMapData(cityData) {
    if(!myChartMap){
        return;
    }

    //更新数据
    var option = myChartMap.getOption();
    option.series[0].data = cityData;
    myChartMap.setOption(option);
}

function refreshDataLine(upElectricLine,upBdLine,downCtLine,downQcdLine,dataLineX){
    if(!doubleLineChart){
        return;
    }

    //更新数据
    var option = doubleLineChart.getOption();
    option.xAxis[0].data = dataLineX;
    option.series[0].data = upElectricLine;
    option.series[1].data = upBdLine;
    option.series[2].data = downCtLine;
    option.series[3].data = downQcdLine;
    doubleLineChart.setOption(option);
}

function firstShow() {
    var widths=$(window).width();
    var times=1;
    if(widths<=1920&&widths>1366){
        times=1
    }else if(widths>1920){
        times=2;
    }else{
        times=0.9;
    }

    //山西地图
    var cityData = [
        {
            "name": "大同市",
            "value": 7.2
        }, {
            "name": "朔州市",
            "value": 7.0
        }, {
            "name": "忻州市",
            "value": 15.8
        }, {
            "name": "吕梁市",
            "value": 12.0
        }, {
            "name": "太原市",
            "value": 25.1
        }, {
            "name": "阳泉市",
            "value": 22.5
        }, {
            "name": "晋中市",
            "value": 33.6
        }, {
            "name": "长治市",
            "value": 31.9
        }, {
            "name": "临汾市",
            "value": 45.6
        }, {
            "name": "晋城市",
            "value": 42.4
        }, {
            "name": "运城市",
            "value": 52.9
        }];
    worldMap(cityData,'山西');

    //柱状图
    var dayBarX=['线下轻触点', '线上电渠', '线上本地','线下传统'];
    var dayBarY=[45,42, 40, 35];
    xieBar('dayBar',dayBarX,dayBarY,times);

    //月柱状图
    var monthBarX=['线下轻触点', '线上电渠', '线上本地','线下传统'];
    var monthBarY=[45,42, 40, 35];
    var lastMonthBarY=[75,52, 20, 15];
    doubleBar('monthBar',monthBarX,monthBarY,lastMonthBarY,times)

    //三折线图
    var upElectricLine=[1.0, 74.9, 701, 11.2, 105.6, 86.7, 55.6];
    var upBdLine=[21.0, 41.9, 71.0, 213.2, 25.6, 76.7, 135.6];
    var downCtLine=[12.0, 4.9, 7, 51.2, 15.6, 61.7, 15.6];
    var downQcdLine=[12.0, 4.9, 7, 51.2, 15.6, 61.7, 15.6];
    var dataLineX=['一','二','三','四','五','六','日'];
    echartsLine(upElectricLine,upBdLine,downCtLine,downQcdLine,dataLineX,times);

    //当日占比
    var pieData = [{
        "name": "线上电渠",
        "value": 34
    }, {
        "name": "线上本地",
        "value": 50
    }, {
        "name": "线下传统",
        "value": 79
    }, {
        "name": "线下轻触点",
        "value": 125
    } ]
    chanelBar(pieData);

    //当月占比
    var pieMonthData = [{
        "name": "线上电渠",
        "value": '34%'
    }, {
        "name": "线上本地",
        "value": '30%'
    }, {
        "name": "线下传统",
        "value": '29%'
    }, {
        "name": "线下轻触点",
        "value": '15%'
    } ]
    chanelMonth(pieMonthData);
}

function chanelMonth(data) {
    for (var i=0;i<data.length;i++){
        $('#monthContact'+(i+1)).html(data[i].name);
        $('#monthContactPercent'+(i+1)).html(data[i].value);
    }
}

function echartsLine(upElectricLine,upBdLine,downCtLine,downQcdLine,dataLineX,times) {
    var colors = ['#5793f3', '#d14a61', '#675bba'];

    var option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                lineStyle: {
                    color: '#fff'
                }
            }
        },
        color: colors,
        grid: [
            {
                y: 40*times+'px',
                x: 80*times+'px',
                y2: 50*times+'px'
            },
        ],
        legend: {
            data: [
                {
                    name: "线上电渠",
                    textStyle: {
                        "color": "#fff",
                        fontSize: 12*times
                    }
                },
                {
                    name: "线上本地",
                    textStyle: {
                        "color": "#fff",
                        fontSize: 12*times
                    }
                },
                {
                    name: "线下传统",
                    textStyle: {
                        "color": "#fff",
                        fontSize: 12*times
                    }
                },
                {
                    name: "线下轻触点",
                    textStyle: {
                        "color": "#fff",
                        fontSize: 12*times
                    }
                }
            ],
            "top": 25+"px",
            right: 20*times+'px',
            itemGap:30,
            "textStyle": {
                fontSize: 10
            }
        },
        xAxis: [
            {
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
                        fontSize: 12*times
                    }
                },
                splitLine: { //网格线
                    show: true,
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
                data: dataLineX
            }
        ],
        yAxis: [
            {
                type: 'value',
                name:'发展量',
                nameTextStyle: {
                    color: "#fff"
                },
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
                    show: true,
                    lineStyle: {
                        color: ['rgba(16,99,164,0.5)'],
                        type: 'dotted'
                    }
                },
                axisLabel: {
                    formatter: '{value}',
                    textStyle: {
                        color: '#01B4E8',
                        fontSize: 12*times
                    }
                }
            }
        ],
        series: [
            {
                name:'线上电渠',
                type:'line',
                smooth:true,
                stack:'总量',
                data:upElectricLine,
                symbol:'none',
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                            offset: 1,
                            color: 'rgba(1,142,238,0.3)' // 100% 处的颜色
                        }, {
                            offset: 0,
                            color: 'rgba(1,194,247,0.3)' // 0% 处的颜色
                        }], false),
                        shadowColor: 'rgba(0, 0, 0, 0.1)',
                        shadowBlur: 10
                    }
                },
                itemStyle : {
                    normal : {
                        lineStyle:{
                            width:1,//折线宽度
                        },
                        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                            offset: 1,
                            color: 'rgba(1,142,238,1)' // 100% 处的颜色
                        }, {
                            offset: 0,
                            color: 'rgba(1,194,247,1)' // 0% 处的颜色
                        }], false),
                        opacity: 0.4
                    }
                }
            },
            {
                name:'线上本地',
                type:'line',
                smooth:true,
                data:upBdLine,
                symbol:'none',
                stack:'总量',
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                            offset: 1,
                            color: 'rgba(247,12,133,0.3)' // 100% 处的颜色
                        }, {
                            offset: 0,
                            color: 'rgba(248,104,174,0.3)' // 0% 处的颜色
                        }], false),
                        shadowColor: 'rgba(0, 0, 0, 0.1)',
                        shadowBlur: 10
                    }
                },
                itemStyle : {
                    normal : {
                        lineStyle:{
                            width:1,//折线宽度
                        },
                        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                            offset: 1,
                            color: 'rgba(247,12,133,1)' // 100% 处的颜色
                        }, {
                            offset: 0,
                            color: 'rgba(248,104,174,1)' // 0% 处的颜色
                        }], false),
                        opacity: 0.4
                    }
                }
            },
            {
                name:'线下传统',
                type:'line',
                smooth:true,
                data:downCtLine,
                symbol:'none',
                stack:'总量',
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                            offset: 1,
                            color: 'rgba(138,186,69,0.3)' // 100% 处的颜色
                        }, {
                            offset: 0,
                            color: 'rgba(174,220,95,0.3)' // 0% 处的颜色
                        }], false),
                        shadowColor: 'rgba(0, 0, 0, 0.1)',
                        shadowBlur: 10
                    }
                },
                itemStyle : {
                    normal : {
                        lineStyle:{
                            width:1,//折线宽度
                        },
                        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                            offset: 1,
                            color: 'rgba(138,186,69,1)' // 100% 处的颜色
                        }, {
                            offset: 0,
                            color: 'rgba(174,220,95,1)' // 0% 处的颜色
                        }], false),
                        opacity: 0.4
                    }
                }
            },
            {
                name:'线下轻触点',
                type:'line',
                smooth:true,
                data:downQcdLine,
                symbol:'none',
                stack:'总量',
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                            offset: 1,
                            color: 'rgba(252,127,107,0.3)' // 100% 处的颜色
                        }, {
                            offset: 0,
                            color: 'rgba(252,127,107,0.3)' // 0% 处的颜色
                        }], false),
                        shadowColor: 'rgba(0, 0, 0, 0.1)',
                        shadowBlur: 10
                    }
                },
                itemStyle : {
                    normal : {
                        lineStyle:{
                            width:1,//折线宽度
                        },
                        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                            offset: 1,
                            color: 'rgba(252,127,107,1)' // 100% 处的颜色
                        }, {
                            offset: 0,
                            color: 'rgba(252,127,107,1)' // 0% 处的颜色
                        }], false),
                        opacity: 0.4
                    }
                }
            }
        ]
    };
    var chart = echarts.init(document.getElementById('channelLine'));
    doubleLineChart = chart;
    chart.setOption(option);
    $(window).resize(function() {
        chart.resize();
    });
}

function worldMap(data,city) {
    // var provinces = '../js/data-1482909909703-SyCA_JbSg.json';
    var cityDy={
        '山西':'../js/shan1xi.json',
        '太原市':'../js/ty.json',
        '忻州市':'../js/xz.json',
        '运城市':'../js/yc.json',
        '晋中市':'../js/jz.json',
        '大同市':'../js/dt.json',
        '阳泉市':'../js/yq.json',
        '晋城市':'../js/jc.json',
        '吕梁市':'../js/ll.json',
        '临汾市':'../js/lf.json',
        '长治市':'../js/cz.json',
        '朔州市':'../js/sz.json'
    }
    var provinces=cityDy[city];
    var zoomDate = 1.15
    var leftDate = '20%'
    if(city=="大同市"){
        zoomDate = 0.85;
        leftDate = '32%';
    }else if(city=="忻州市"){
        zoomDate = 0.65;
        leftDate = '20%';
    }else if(city=="吕梁市"){
        zoomDate = 0.8;
        leftDate = '35%';
    }else if(city=="晋中市"){
        zoomDate = 0.65;
        leftDate = '20%';
    }else if(city=="晋城市"){
        zoomDate = 0.6;
        leftDate = '18%';
    }else if(city=="阳泉市"){
        zoomDate = 0.75;
        leftDate = '30%';
    }else if(city!="山西"){
        zoomDate = 0.7;
        leftDate = '30%';
    }
    // var provinces="../js/cz.json"
    var myChart = echarts.init(document.getElementById('xxMap'));
    myChartMap=myChart

    var option = {
        textStyle: {
            color: '#fff'
        },
        tooltip : {
            show:true,
            trigger: 'item',
            formatter: function (params) {
                return '<div style="min-width: 100px;font-weight: bold">'+'<span style="color:#2EE3FD;">'+params.name+
                    '</span><br>'+params.value;
            },
        },
        visualMap: {
            type: 'piecewise', //分段型。
            splitNumber: 5,
            inverse: true,
            // color:['rgba(38,115,154,0.6)','rgba(29,192,232,0.6)','rgba(40,111,226,0.6)','rgba(137,17,215,0.6)','rgba(250,0,152,0.6)'],
            pieces: [{
                min: 0,
                max: 15,
                color: 'rgba(250,0,152,0.8)'
            }, {
                min: 15,
                max: 30,
                color: 'rgba(137,17,215,0.8)'
            }, {
                min: 30,
                max: 45,
                color: 'rgba(40,111,226,0.8)'
            }, {
                min: 45,
                max: 60,
                color: 'rgba(29,192,232,0.8)'
            }, {
                min: 60,
                // max: 30000,
                color: 'rgba(38,115,154,0.8)'
            }],
            right: 10,
            bottom: 10,
            itemWidth: 10,
            itemHeight: 10,
            textStyle: {
                color: '#fff',
                fontSize: 12
            },
            /*min: 0,
             max: 40000,*/
            //text:['High','Low'],
            //realtime: true,
            //calculable: true,
            //color: ['red','orange','lightgreen']
        },
        geo: {
            show: true,
            map: 'city',
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false,
                }
            },
            roam: false,
            zoom: zoomDate,
            left: leftDate,
            itemStyle: {
                normal: {
                    areaColor: 'rgba(0,0,0,0.5)',
                    borderWidth: 0,//设置外层边框
                    borderColor:'rgba(0,0,0,0.5)',
                    shadowColor: 'rgba(255,255,255, 1)',
                    shadowBlur: 150
                }
            }
        },
        series : [
            {
                name: '数据',
                type: 'map',
                map: 'city', // 自定义扩展图表类型
                roam : false,
                zoom: zoomDate,
                left: leftDate,
                itemStyle:{
                    normal:{
                        /*borderWidth: 1,//设置外层边框
                         borderColor:'#9ffcff',
                         shadowColor: 'rgba(255,255,255, 0.1)',
                         shadowBlur: 100,*/
                        borderColor:'#c4f8ff',
                        label:{
                            show:false,
                            textStyle:{
                                color:'#727882'
                            }
                        }
                    },
                    emphasis:{
                        label:{show:false,
                            textStyle:{
                                color:'#fff'
                            }},
                        areaColor: '#A4DA44',
                    }
                },
                data:data,

                // 文本位置修正
                textFixed : {
                    'Yau Tsim Mong' : [-10, 0]
                },

            }
        ]
    };






    $.getJSON(provinces, function (datass) {
        echarts.registerMap('city', datass);
        myChart.setOption(option);
        myChart.on("click", function(param) {
            var selectedProvince = param.name;
            showData(selectedProvince);
        })

        var count = 0;
        var timeTicket = null;
        var dataLength = option.series[0].data.length;
        timeTicket && clearInterval(timeTicket);
        timeTicket = setInterval(function() {
            myChart.dispatchAction({
                type: 'downplay',
                seriesIndex: 0,
            });
            myChart.dispatchAction({
                type: 'highlight',
                seriesIndex: 0,
                dataIndex: (count) % dataLength
            });
            myChart.dispatchAction({
                type: 'showTip',
                seriesIndex: 0,
                dataIndex: (count) % dataLength
            });
            count++;
        }, 3000);

        myChart.on('mouseover', function(params) {
            clearInterval(timeTicket);
            myChart.dispatchAction({
                type: 'downplay',
                seriesIndex: 0
            });
            myChart.dispatchAction({
                type: 'highlight',
                seriesIndex: 0,
                dataIndex: params.dataIndex
            });
            myChart.dispatchAction({
                type: 'showTip',
                seriesIndex: 0,
                dataIndex: params.dataIndex,
            });
        });
        myChart.on('mouseout', function(params) {
            timeTicket && clearInterval(timeTicket);
            timeTicket = setInterval(function() {
                myChart.dispatchAction({
                    type: 'downplay',
                    seriesIndex: 0,
                });
                myChart.dispatchAction({
                    type: 'highlight',
                    seriesIndex: 0,
                    dataIndex: (count) % dataLength
                });
                myChart.dispatchAction({
                    type: 'showTip',
                    seriesIndex: 0,
                    dataIndex: (count) % dataLength
                });
                count++;
            }, 3000);
        });
    });


    $(window).resize(function(){
        myChart.resize();
    })
}

function xieBar(id,xdata,ydata,times) {
    var option = {
        title:[
            {text:'',
                show: false,
                x: '3%',
                y: '14px',
                textStyle:{
                    color:"#FFF",
                    fontSize:17*times
                }
            }
        ],
        grid:{
            x:10,
            x2:5,
            bottom:25,
            top:25,
        },
        tooltip: { //提示框组件
            trigger: 'axis',
        },
        xAxis: [
            {
                type: 'category',
                //	boundaryGap: true,//坐标轴两边留白
                data: xdata,
                axisLabel: { //坐标轴刻度标签的相关设置。
                    //		interval: 0,//设置为 1，表示『隔一个标签显示一个标签』
                    //	margin:15,
                    textStyle: {
                        color: '#fff',
                        fontStyle: 'normal',
                        fontFamily: '微软雅黑',
                        fontSize: 12*times,
                    },
                    /*rotate:30,*/
                    interval: 0
                },
                axisTick:{//坐标轴刻度相关设置。
                    show: false,
                },
                axisLine:{//坐标轴轴线相关设置
                    show:false,
                },
                splitLine: { //坐标轴在 grid 区域中的分隔线。
                    show: false,
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                show:false,
                splitNumber: 5,
                axisLabel: {
                    textStyle: {
                        color: '#fff',
                        fontStyle: 'normal',
                        fontFamily: '微软雅黑',
                        fontSize: 12,
                    }
                },
                axisLine:{
                    show: false
                },
                axisTick:{
                    show: false
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: ['#fff'],
                        opacity:0.06
                    }
                }

            }
        ],
        series : [
            {
                name:'总数量',
                type:'bar',
                data:ydata,
                barWidth: 8,
                barGap:0,//柱间距离
                label: {//图形上的文本标签
                    normal: {
                        show: true,
                        position: 'top',
                        textStyle: {
                            color: '#fff',
                            fontStyle: 'normal',
                            fontFamily: '微软雅黑',
                            fontSize: 12,
                        },
                    },
                },
                itemStyle: {
                    normal: {
                        show: true,
                        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                            offset: 0,
                            color: '#2DDAFF'
                        }, {
                            offset: 1,
                            color: '#277ECB'
                        }]),
                        borderWidth: 0,
                        barBorderRadius: [5,5,0,0],
                    }
                },
            }
        ]
    };
    var chart = echarts.init(document.getElementById(id));
    xieBarChart = chart;

    chart.on("click", function(param) {
        var selected = param.name;
        chanelTop('day',selected);
    })
    chart.setOption(option);
    $(window).resize(function() {
        chart.resize();
    });
}

function doubleBar(id,xdata,ydata,lastydata,times) {
    var option = {
        title:[
            {text:'',
                show: false,
                x: '3%',
                y: '14px',
                textStyle:{
                    color:"#FFF",
                    fontSize:17*times
                }
            }
        ],
        legend:{
            right:'2%',
            itemWidth: 12,
            itemHeight: 12,
            textStyle:{    //图例文字的样式
                fontSize:12,
                color:'#fff'
            }
        },
        grid:{
            x:10,
            x2:5,
            bottom:25,
            top:25,
        },
        tooltip: { //提示框组件
            trigger: 'axis',
        },
        xAxis: [
            {
                type: 'category',
                //	boundaryGap: true,//坐标轴两边留白
                data: xdata,
                axisLabel: { //坐标轴刻度标签的相关设置。
                    //		interval: 0,//设置为 1，表示『隔一个标签显示一个标签』
                    //	margin:15,
                    textStyle: {
                        color: '#fff',
                        fontStyle: 'normal',
                        fontFamily: '微软雅黑',
                        fontSize: 12*times,
                    },
                    /*rotate:30,*/
                    interval: 0
                },
                axisTick:{//坐标轴刻度相关设置。
                    show: false,
                },
                axisLine:{//坐标轴轴线相关设置
                    show:false,
                },
                splitLine: { //坐标轴在 grid 区域中的分隔线。
                    show: false,
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                show:false,
                splitNumber: 5,
                axisLabel: {
                    textStyle: {
                        color: '#fff',
                        fontStyle: 'normal',
                        fontFamily: '微软雅黑',
                        fontSize: 12,
                    }
                },
                axisLine:{
                    show: false
                },
                axisTick:{
                    show: false
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: ['#fff'],
                        opacity:0.06
                    }
                }

            }
        ],
        series : [
            {
                name:'本月',
                type:'bar',
                data:ydata,
                barWidth: 8,
                barGap:0,//柱间距离
                label: {//图形上的文本标签
                    normal: {
                        show: false,
                        position: 'top',
                        textStyle: {
                            color: '#fff',
                            fontStyle: 'normal',
                            fontFamily: '微软雅黑',
                            fontSize: 12,
                        },
                    },
                },
                itemStyle: {
                    normal: {
                        show: true,
                        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                            offset: 0,
                            color: '#2DDAFF'
                        }, {
                            offset: 1,
                            color: '#277ECB'
                        }]),
                        borderWidth: 0,
                        barBorderRadius: [5,5,0,0],
                    }
                },
            },
            {
                name:'上月同期',
                type:'bar',
                data:lastydata,
                barWidth: 8,
                barGap:0,//柱间距离
                label: {//图形上的文本标签
                    normal: {
                        show: false,
                        position: 'top',
                        textStyle: {
                            color: '#fff',
                            fontStyle: 'normal',
                            fontFamily: '微软雅黑',
                            fontSize: 12,
                        },
                    },
                },
                itemStyle: {
                    normal: {
                        show: true,
                        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                            offset: 0,
                            color: '#00D4BD'
                        }, {
                            offset: 1,
                            color: '#05C3B4'
                        }]),
                        borderWidth: 0,
                        barBorderRadius: [5,5,0,0],
                    }
                },
                barGap: '70%',
            }
        ]
    };
    var chart = echarts.init(document.getElementById(id));
    doubleBarChart = chart;
    chart.on("click", function(param) {
        var selected = param.name;
        chanelTop('month',selected);
    })
    chart.setOption(option);
    $(window).resize(function() {
        chart.resize();
    });
}

function chanelBar(data) {



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
    var chart = echarts.init(document.getElementById('pieChart'));
    pieChart = chart;
    chart.setOption(option);
    $(window).resize(function() {
        chart.resize();
    });
}

function selectTab(mid,tab) {
    $('span').removeClass('qs-tab-select')
    $(tab).addClass('qs-tab-select')


    //三折线图
    var upElectricLine=[1.0, 74.9, 701, 11.2, 105.6, 86.7, 55.6];
    var upBdLine=[21.0, 41.9, 71.0, 213.2, 25.6, 76.7, 135.6];
    var downCtLine=[12.0, 4.9, 7, 51.2, 15.6, 61.7, 15.6];
    var downQcdLine=[12.0, 4.9, 7, 51.2, 15.6, 61.7, 15.6];
    var dataLineX=['一','二','三','四','五','六','日'];
    refreshDataLine(upElectricLine,upBdLine,downCtLine,downQcdLine,dataLineX);
}