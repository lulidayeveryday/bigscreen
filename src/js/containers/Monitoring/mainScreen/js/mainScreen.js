$(function () {
    showDatas('山西');
})

var myChartMap;
var xieBarChart;
var doubleLineChart;
var LineBarChart;

function showData(getData) {
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
 /*   var allDate=['山西','太原市','大同市','阳泉市','长治市','晋城市','朔州市','忻州市','晋中市','吕梁市','临汾市','运城市'];
    var type=$.inArray(getData, allDate);
    if(type!=-1){
        worldMap(cityData,getData);
    }*/
    $('#developmentTotal').html(getData)

    //柱状图
    var cityBarX=['太原1', '忻州1', '运城1','晋中1','朔州1','晋城1','长治1'];
    var cityBarY=[5,42, 40, 15, 34, 32, 20];
    var cityBarTitle=getData+'发展量排名';
    refreshData(cityBarX,cityBarY,cityBarTitle);
    /*xieBar('cityBar',cityBarTitle,cityBarX,cityBarY,times);*/

    //双折线图
    var upLine=[21.0, 4.9, 7.0, 23.2, 251.6, 76.7, 135.6];
    var downLine=[121.0, 54.9, 70, 51.2, 15.6, 6.7, 15.6];
    var dataLineX=['周一1','周二1','周三1','周四1','周五1','周六1','周日1'];
    refreshDataLine(upLine,downLine,dataLineX);

    //折线柱图

    var category = ["自有营业厅1","城市综合营服中心1",'农村综合营服中心1','社会渠道营服中心1','集客基层责任中心1'];
    var lineData = [11,32,79,4,6];
    var barData = [58,56,23,458,36];
    refreshDataLineBar(lineData,barData,category);
}

function showDatas(getData) {
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
        worldMap(cityData,getData);
    $('#developmentTotal').html(getData);

    //柱状图
    var cityBarX=['太原', '忻州', '运城','晋中','朔州','晋城','长治','阳泉'];
    var cityBarY=[45,42, 40, 35, 34, 32, 30, 29];
    var cityBarTitle=getData+'发展量排名';
    xieBar('cityBar',cityBarTitle,cityBarX,cityBarY,times);

    //双折线图
    var upLine=[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6];
    var downLine=[12.0, 54.9, 70, 5.2, 15.6, 6.7, 15.6];
    var dataLineX=['周一','周二','周三','周四','周五','周六','周日'];
    echartsLine(upLine,downLine,dataLineX,times);

    //折线柱图

    var category = ["自有营业厅","城市综合营服中心",'农村综合营服中心','社会渠道营服中心','集客基层责任中心'];
    var lineData = [111,322,793,4,65];
    var barData = [589,567,235,458,361];
    lineBar(category,lineData,barData,times);
}

function menuHide() {
    var type=$('#showMenu').attr('onshow');
    if(type=='yes'){
        $('.mainScreen-menu').css('left','-7.5%');
        $('#showMenu').attr('onshow','no')
    }else {
        $('.mainScreen-menu').css('left','4%');
        $('#showMenu').attr('onshow','yes')
    }
}

//点击菜单
function selectMenu(mid){
    var tid=$(mid)[0].id;
    $('.table-td').removeClass('table-td-sel');
    $('#'+tid).addClass('table-td-sel')
}

function lineBar(category,lineData,barData,times) {


// option
    var option = {
        title:[
            {text:"BU发展量",
                x: '5.5%',
                y: '20px',
                textStyle:{
                    color:"#FFF",
                    fontSize:15*times
                }
            }
        ],
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
                y: 80*times+'px',
            },
        ],
        legend: {
            data: [
                {
                    name: "期望值",
                    textStyle: {
                        "color": "#fff",
                        fontSize: 12*times
                    }
                },
                {
                    name: "发展量",
                    textStyle: {
                        "color": "#fff",
                        fontSize: 12*times
                    }
                }
            ],
            "top": 45+"px",
            right: 20*times+'px',
            itemGap:30,
            "textStyle": {
                fontSize: 10
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
                    fontSize: 10*times
                },
                rotate:28,
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
                lineStyle: {
                    color: 'rgba(16,99,164)'
                }
            },
        },
        yAxis: {
            type: 'value',
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
                    fontSize: 12*times
                }
            }
        },
        series: [{
            name: '期望值',
            type: 'line',
            smooth: true,
            showAllSymbol: true,
            symbol: 'emptyCircle',
            symbolSize: 5,
            data: lineData
        }, {
            name: '发展量',
            type: 'bar',
            barWidth: 8,
            itemStyle: {
                normal: {
                    barBorderRadius: 5,
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 0, color: '#14c8d4'},
                            {offset: 1, color: '#43eec6'}
                        ]
                    )
                }
            },
            data: barData
        }, {
            name: 'line',
            type: 'bar',
            tooltip:{
                show:false
            },
            barGap: '-100%',
            barWidth: 8,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 0, color: 'rgba(20,200,212,0.5)'},
                            {offset: 0.2, color: 'rgba(20,200,212,0.2)'},
                            {offset: 1, color: 'rgba(20,200,212,0)'}
                        ]
                    )
                }
            },
            z: -12,
            data: lineData
        }, {
            name: 'dotted',
            type: 'pictorialBar',
            tooltip:{
                show:false
            },
            symbol: 'rect',
            itemStyle: {
                normal: {
                    color: '#1A283F'
                }
            },
            symbolRepeat: true,
            symbolSize: [12, 4],
            symbolMargin: 1,
            z: -10,
            data: lineData
        }]
    };

    var chart = echarts.init(document.getElementById('barLine'));
    LineBarChart = chart;
    chart.setOption(option);
    $(window).resize(function() {
        chart.resize();
    });
}

function echartsLine(thisWeek,lastWeek,dataX,times) {
    var colors = ['#5793f3', '#d14a61', '#675bba'];

    var option = {
        title:[
            {text:"触点发展量",
                x: '5.5%',
                y: '20px',
                textStyle:{
                    color:"#FFF",
                    fontSize:15*times
                }
            }
        ],
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
                y: 80*times+'px',
                x: 80*times+'px',
                y2: 50*times+'px'
            },
        ],
        legend: {
            data: [
                {
                    name: "线上",
                    textStyle: {
                        "color": "#fff",
                        fontSize: 12*times
                    }
                },
                {
                    name: "线下",
                    textStyle: {
                        "color": "#fff",
                        fontSize: 12*times
                    }
                }
            ],
            "top": 45+"px",
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
                data: dataX
            }
        ],
        yAxis: [
            {
                type: 'value',
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
                name:'线上',
                type:'line',
                smooth:true,
                data:thisWeek,
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
                            color: 'rgba(1,142,238,0.9)' // 100% 处的颜色
                        }, {
                            offset: 0,
                            color: 'rgba(1,194,247,0.9)' // 0% 处的颜色
                        }], false),
                        opacity: 0.4
                    }
                }
            },
            {
                name:'线下',
                type:'line',
                smooth:true,
                data:lastWeek,
                symbol:'none',
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
                            color: 'rgba(247,12,133,0.9)' // 100% 处的颜色
                        }, {
                            offset: 0,
                            color: 'rgba(248,104,174,0.9)' // 0% 处的颜色
                        }], false),
                        opacity: 0.4
                    }
                }
            }
        ]
    };
    var chart = echarts.init(document.getElementById('doubleLine'));
    doubleLineChart = chart;
    chart.setOption(option);
    $(window).resize(function() {
        chart.resize();
    });
}

function xieBar(id,title,xdata,ydata,times) {
    var option = {
        title:[
            {text:'',
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
            bottom:40
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
                    rotate:30,
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
                    }
                },
            }
        ]
    };
    var chart = echarts.init(document.getElementById(id));
    xieBarChart = chart;
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
    var leftDate = '40%'
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
    var myChart = echarts.init(document.getElementById('mainMap'));
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
                        areaColor: '#F1139C',
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
            debugger;
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

function refreshData(x,y,data){
    if(!xieBarChart){
        return;
    }

    //更新数据
    var option = xieBarChart.getOption();
    option.title[0].text = data;
    option.series[0].data = y;
    option.xAxis[0].data = x;
    xieBarChart.setOption(option);
}

function refreshDataLine(up,down,data){
    if(!doubleLineChart){
        return;
    }

    //更新数据
    var option = doubleLineChart.getOption();
    option.xAxis[0].data = data;
    option.series[0].data = up;
    option.series[1].data = down;
    doubleLineChart.setOption(option);
}

function refreshDataLineBar(line,bar,data){
    if(!LineBarChart){
        return;
    }

    //更新数据
    var option = LineBarChart.getOption();
    option.xAxis[0].data = data;
    option.series[0].data = line;
    option.series[1].data = bar;
    option.series[2].data = line;
    option.series[3].data = line;
    LineBarChart.setOption(option);
}