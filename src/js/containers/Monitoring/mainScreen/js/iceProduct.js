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

var icePie1;
var icePie2;
var iceBar1;
var iceBar2;
var popEchart=0;

function firstShow() {
    var pie1Id='iceProductPie1'
    var pie1Title='政企-0折日累计异网';
    var pie1ColorTitle='#2CD3EF';
    var pie1Color1 = '#05B9E4';
    var pie1Color2 = '#854EDB';
    var pie1Color3 = '#2864B5';


 /*   var pie1Value=58;//只需传这个
    echartPie(pie1Id,pie1Title,pie1Value,pie1ColorTitle,pie1Color1,pie1Color2,pie1Color3)

    var pie2Id='iceProductPie2';
    var pie2Title='政企-0折月累计异网';
    var pie2ColorTitle='#B34BD5';
    var pie2Color1 = '#E08C6D';
    var pie2Color2 = '#8A51D7';
    var pie2Color3 = '#5E308D';


    var pie2Value=50;//只需传这个
    echartPie(pie2Id,pie2Title,pie2Value,pie2ColorTitle,pie2Color1,pie2Color2,pie2Color3)*/

    var barName1 = '地市发展量';
    var barColor1 = ['#058DED','#05B6E9'];
    var category1 = ['太原','大同','阳泉','长治','晋城','朔州','忻州','晋中','吕梁','临汾','运城'];
    var barData1 = [589,567,235,458,361,567,235,458,361,567,235];

    lineBarDay('iceProductBar1',barName1,barColor1,category1,barData1);

    var barName2 = 'BU发展量';
    var barColor2 = ['#DD1281','#E062A6'];
    var category2 = ['太原','大同','阳泉','长治','晋城','朔州','忻州','晋中','吕梁','临汾','运城'];
    var barData2 = [589,567,235,458,361,567,235,458,361,567,235];

    lineBarDay('iceProductBar2',barName2,barColor2,category2,barData2);

    var doubleLineX=['喀什市',
        '疏附县',
        '疏勒县',
        '英吉沙县',
        '泽普县',
        '岳普湖县',
        '巴楚县',
        '伽师县',
        '叶城县',
        '莎车县 ',
    ];
    var doubleLineNew=[50, 70, 60, 61, 75, 87, 60, 62, 86, 46];
    var doubleLineAll=[150, 70, 60, 61, 75, 87, 60, 62, 86, 46];
    doubleBar(doubleLineX,doubleLineNew,doubleLineAll);

    var lineTitle1 = '地市';
    var lineName1 = '地市发展量';
    var lineColor1 = '#00AEFD';
    var categoryLine1 = ['太原','大同','阳泉','长治','晋城','朔州','忻州','晋中','吕梁','临汾','运城'];
    var lineData1 = [589,567,235,458,361,567,235,458,361,567,235];

    echartsLine('iceProductLine1',lineName1,lineColor1,categoryLine1,lineData1,lineTitle1);

    var lineTitle2 = 'BU';
    var lineName2 = 'BU发展量';
    var lineColor2 = '#D8579E';
    var categoryLine2 = ['太原','大同','阳泉','长治','晋城','朔州','忻州','晋中','吕梁','临汾','运城'];
    var lineData2 = [589,567,235,458,361,567,235,458,361,567,235];

    echartsLine('iceProductLine2',lineName2,lineColor2,categoryLine2,lineData2,lineTitle2);
}

iceProductBar1

function popClickType(mid,type) {
    $('td').removeClass('pop-td-select');
    $(mid).addClass('pop-td-select');
    $('#icePopType').html(type);
}

function lineBarDay(mid,barName,barColor,category,barData) {
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
                top: '18%',
                left: '15%',
                right: '5%',
                bottom: '25%'
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
                alignWithLabel: true,
            },
            //横坐标名称
            axisLabel: {
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
                lineStyle: {
                    color: 'rgba(16,99,164)'
                }
            },
        },
        yAxis: [{
            name: '发展量',
            nameTextStyle: {
                color: "#fff"
            },
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
        }],
        series: [{
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
    if(mid=='iceProductBar1'){
        iceBar1 = chart;
    }else {
        iceBar2 = chart;
    }
    $(window).resize(function() {
        chart.resize();
    });
}

function echartsLine(mid,barName,barColor,category,barData,barTitle) {
    var chart = echarts.init(document.getElementById(mid));
// option
    var option = {
        title:{
            text: barTitle,
            x: 'center',
            y: '0%',
            textStyle: {
                color: '#11DAEF',
                fontSize: 16,
                fontWeight: 'normal'
            }
        },
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
                bottom: '25%'
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
                alignWithLabel: true,
            },
            //横坐标名称
            axisLabel: {
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
                lineStyle: {
                    color: 'rgba(16,99,164)'
                }
            },
        },
        yAxis: [{
            name: '发展量',
            nameTextStyle: {
                color: "#fff"
            },
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

function doubleBar(datax,dataNew,dataAll) {
    var option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            data: ['新发展', '累计值'],
            align: 'right',
            right: 10,
            top: 10,
            textStyle: {
                color: "#fff"
            },
            itemWidth: 20,
            itemHeight: 10,
            itemGap: 35
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            top: '20%',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            data: datax,
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
        }],
        yAxis: [{
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
                    fontSize: 12
                }
            }
        }],
        series: [{
            name: '新发展',
            type: 'bar',
            data: dataNew,
            barWidth: 10, //柱子宽度
            barGap: 1, //柱子之间间距
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#05B6E9'
                    }, {
                        offset: 1,
                        color: '#058DED'
                    }]),
                    opacity: 1,
                    barBorderRadius: 5,
                }
            }
        }, {
            name: '累计值',
            type: 'bar',
            data: dataAll,
            barWidth: 10,
            barGap: 1,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#E062A6'
                    }, {
                        offset: 1,
                        color: '#DD1281'
                    }]),
                    opacity: 1,
                    barBorderRadius: 5,
                }
            }
        }]
    };
    var chart = echarts.init(document.getElementById('doubleBar'));
    chart.setOption(option);
    $(window).resize(function() {
        chart.resize();
    });
}

function iceTableType(title,color) {
    $('#iceZkTableType').html(title);
    $('#iceProductTable').css('color',color);
}

function renderData(ref) {
    var type=$('#iceZkTableType')[0].innerHTML;//政企或公众
    var data=ref.innerHTML;//折扣

    var piedata1=15;
    var pieTitle1=type+"-"+data+"日累计异网"
    refreshDataPie1(piedata1,pieTitle1);

    var piedata2=35;
    var pieTitle2=type+"-"+data+"月累计异网"
    refreshDataPie2(piedata2,pieTitle2);

    var barX1=['1','2','3'];
    var barY1=[22,33,44];
    refreshDataBar1(barX1,barY1);

    var barX2=['12','22','23'];
    var barY2=[222,323,424];
    refreshDataBar2(barX2,barY2);
}

function fkPop() {
    $('.contact-pop').css('display','block');
}

function fkPop1() {
    $('.contact-pop1').css('display','block');

    if (popEchart==0){
        var barName1 = '地市发展量';
        var barColor1 = ['#EDB335','#EDB335'];
        var category1 = ['太原','大同','阳泉','长治','晋城','朔州','忻州','晋中','吕梁','临汾','运城'];
        var barData1 = [589,567,235,458,361,567,235,458,361,567,235];

        lineBarDay('popEchart1',barName1,barColor1,category1,barData1);

        var barName2 = 'BU发展量';
        var barColor2 = ['#6BD470','#6BD470'];
        var category2 = ['太原','大同','阳泉','长治','晋城','朔州','忻州','晋中','吕梁','临汾','运城'];
        var barData2 = [589,567,235,458,361,567,235,458,361,567,235];

        lineBarDay('popEchart2',barName2,barColor2,category2,barData2);
    }

}

function refreshDataPie1(data,title){
    if(!icePie1){
        return;
    }
    //更新数据
    var option = icePie1.getOption();
    option.title[0].text = data+"%";
    option.title[1].text = title;
    option.series[0].data[0].value = data;
    option.series[0].data[1].value = 100-data;
    option.series[1].data[0].value = data;
    option.series[1].data[1].value = 100-data;
    icePie1.setOption(option);
}

function refreshDataPie2(data,title){
    if(!icePie2){
        return;
    }
    //更新数据
    var option = icePie2.getOption();
    option.title[0].text = data+"%";
    option.title[1].text = title;
    option.series[0].data[0].value = data;
    option.series[0].data[1].value = 100-data;
    option.series[1].data[0].value = data;
    option.series[1].data[1].value = 100-data;
    icePie2.setOption(option);
}

function refreshDataBar1(x,y){
    if(!iceBar1){
        return;
    }

    //更新数据
    var option = iceBar1.getOption();
    option.series[0].data = y;
    option.xAxis[0].data = x;
    iceBar1.setOption(option);
}

function refreshDataBar2(x,y){
    if(!iceBar2){
        return;
    }

    //更新数据
    var option = iceBar2.getOption();
    option.series[0].data = y;
    option.xAxis[0].data = x;
    iceBar2.setOption(option);
}
