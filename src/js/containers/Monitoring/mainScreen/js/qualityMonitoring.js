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
})

var radarDataNet;
var radarDataWb;

function radarSelect(type,date,product) {
    //type:移网或宽带，date:日或月,product：产品名称

    //按照：太原、临汾、吕梁、大同、阳泉、长治、晋城、朔州、晋中、运城、忻州  顺序
    var Data=[99,55,66,44,77,33,22,55,66,44,55]

    var rankData=[
        {
            name:"太原",
            data:"78%"
        },
        {
            name:"临汾",
            data:"76%"
        },
        {
            name:"吕梁",
            data:"75%"
        },
        {
            name:"大同",
            data:"74%"
        },
        {
            name:"阳泉",
            data:"73%"
        },
        {
            name:"长治",
            data:"72%"
        },
        {
            name:"晋城",
            data:"71%"
        },
        {
            name:"朔州",
            data:"70%"
        },
        {
            name:"晋中",
            data:"69%"
        },
        {
            name:"运城",
            data:"68%"
        },
        {
            name:"忻州",
            data:"67%"
        },
    ]
    if(type=="移网"){
        radarRenderDataNet(Data,rankData)
    }else if(type=="宽带"){
        radarRenderDataWb(Data,rankData)
    }
}

function radarRenderDataNet(y,rankData) {
    for (var i=0;i<rankData.length;i++){
        $('#rankName'+(i+1)).html(rankData[i].name)
        $('#rankValue'+(i+1)).html(rankData[i].data)
    }
    if(!radarDataNet){
        return;
    }

    //更新数据
    var option = radarDataNet.getOption();
    option.series[0].data[0].value = y;
    radarDataNet.setOption(option);
}

function radarRenderDataWb(y,rankData) {

    for (var i=0;i<rankData.length;i++){
        $('#rankNameWb'+(i+1)).html(rankData[i].name)
        $('#rankValueWb'+(i+1)).html(rankData[i].data)
    }
    if(!radarDataWb){
        return;
    }

    //更新数据
    var option = radarDataWb.getOption();
    option.series[0].data[0].value = y;
    radarDataWb.setOption(option);
}

function firstShow() {
    //融合生效用户质量监控下
    var barNameDown1 = '用户收入变化';
    var lineColorDown1 = '#EBB434';
    var barColorDown1 = ['#0F8FF0','#0F8FF0'];
    var categoryDown1 = ['太原测试字数需要长达十个字','大同测试字数需要长达十个字','阳泉测试字数需要长达十个字','长治测试字数需要长达十个字','晋城测试字数需要长达十个字','朔州测试字数需要长达十个字','忻州测试字数需要长达十个字','晋中测试字数需要长达十个字','吕梁测试字数需要长达十个字','临汾测试字数需要长达十个字','运城测试字数需要长达十个字'];
    var barDataDown1 = [589,567,235,458,361,567,235,458,361,567,235];
    lineBarDay('dailyNet',barNameDown1,lineColorDown1,barColorDown1,categoryDown1,barDataDown1);


    var lineNameDown2 = '降收用户比';
    var barNameDown2 = '用户收入变化';
    var lineColorDown2 = '#F5429D';
    var barColorDown2 = ['#22D9F2','#22D9F2'];
    var categoryDown2 = ['太原测试字数需要长达十个字','大同测试字数需要长达十个字','阳泉测试字数需要长达十个字','长治测试字数需要长达十个字','晋城测试字数需要长达十个字','朔州测试字数需要长达十个字','忻州测试字数需要长达十个字','晋中测试字数需要长达十个字','吕梁测试字数需要长达十个字','临汾测试字数需要长达十个字','运城测试字数需要长达十个字'];
    var lineDataDown2 = [14,45,75,86,58,45,75,86,58,45,75];//百分比的数字，不带%
    var barDataDown2 = [589,567,235,458,361,567,235,458,361,567,235];
    lineBar('monthNet',lineNameDown2,barNameDown2,lineColorDown2,barColorDown2,categoryDown2,lineDataDown2,barDataDown2);


    var barNameDown3 = '用户收入变化';
    var lineColorDown3 = '#EC4220';
    var barColorDown3 = ['#00D4BD','#00D4BD'];
    var categoryDown3 = ['太原测试字数需要长达十个字','大同测试字数需要长达十个字','阳泉测试字数需要长达十个字','长治测试字数需要长达十个字','晋城测试字数需要长达十个字','朔州测试字数需要长达十个字','忻州测试字数需要长达十个字','晋中测试字数需要长达十个字','吕梁测试字数需要长达十个字','临汾测试字数需要长达十个字','运城测试字数需要长达十个字'];
    var barDataDown3 = [589,567,235,458,361,567,235,458,361,567,235];
    lineBarDay('dailyWb',barNameDown3,lineColorDown3,barColorDown3,categoryDown3,barDataDown3);


    var lineNameDown4 = '降收用户比';
    var barNameDown4 = '用户收入变化';
    var lineColorDown4 = '#21D9F1';
    var barColorDown4 = ['#EEB436','#EEB436'];
    var categoryDown4 = ['太原测试字数需要长达十个字','大同测试字数需要长达十个字','阳泉测试字数需要长达十个字','长治测试字数需要长达十个字','晋城测试字数需要长达十个字','朔州测试字数需要长达十个字','忻州测试字数需要长达十个字','晋中测试字数需要长达十个字','吕梁测试字数需要长达十个字','临汾测试字数需要长达十个字','运城测试字数需要长达十个字'];
    var lineDataDown4 = [14,45,75,86,58,45,75,86,58,45,75];//百分比的数字，不带%
    var barDataDown4 = [589,567,235,458,361,567,235,458,361,567,235];
    lineBar('monthWb',lineNameDown4,barNameDown4,lineColorDown4,barColorDown4,categoryDown4,lineDataDown4,barDataDown4);

    var areaColorNet = 'rgba(52,171,216, 0.5)';
    var lineColorNet = 'rgba(52,171,216, 1)';
    var mdataNet = [43, 10, 28, 35, 50, 19, 10, 28, 35, 50, 19];
    radarChart('rateNetChart',areaColorNet,lineColorNet,mdataNet);

    var areaColorWb = 'rgba(26,175,117, 0.5)';
    var lineColorWb = 'rgba(26,175,117, 1)';
    var mdataWb = [43, 10, 28, 35, 50, 19, 10, 28, 35, 50, 19];
    radarChart2('rateWbChart',areaColorWb,lineColorWb,mdataWb);
}

function radarChart(mid,areaColor,lineColor,mdata) {
    var option = {
        tooltip: {
            "show": true,
            "trigger": "item",
            position: function(point, params, dom, rect, size){
                //其中point为当前鼠标的位置，size中有两个属性：viewSize和contentSize，分别为外层div和tooltip提示框的大小
                var x = point[0];//
                var y = point[1];
                var viewWidth = size.viewSize[0];
                var viewHeight = size.viewSize[1];
                var boxWidth = size.contentSize[0];
                var boxHeight = size.contentSize[1];
                var posX = 0;//x坐标位置
                var posY = 0;//y坐标位置

                if(x<boxWidth){//左边放不开
                    posX = 5;
                }else{//左边放的下
                    posX = x-boxWidth;
                }

                if(y<boxHeight){//上边放不开
                    posY = 5;
                }else{//上边放得下
                    posY = y-boxHeight;
                }

                return [posX,posY];
            }
        },
        radar: {
            // shape: 'circle',
            name: {
                textStyle: {
                    color: '#fff'
                }
            },
            radius: 90,
            splitArea: {
                areaStyle: {
                    color: ['rgba(36,67,112,0.1)',
                        'rgba(36,67,112, 0.3)', 'rgba(36,67,112,0.5)',
                        'rgba(36,67,112,0.7)', 'rgba(36,67,112,0.9)']
                }
            },
            indicator: [
                { name: '太原', max: 100},
                { name: '忻州', max: 100},
                { name: '运城', max: 100},
                { name: '晋中', max: 100},
                { name: '朔州', max: 100},
                { name: '晋城', max: 100},
                { name: '长治', max: 100},
                { name: '阳泉', max: 100},
                { name: '大同', max: 100},
                { name: '吕梁', max: 100},
                { name: '临汾', max: 100}
            ],
            splitLine: {
                lineStyle: {
                    color: [
                        'rgba(0,0,0,0.1)', 'rgba(0,0,0,0.2)',
                        'rgba(0,0,0,0.4)', 'rgba(0,0,0,0.6)',
                        'rgba(0,0,0,0.8)', 'rgba(0,0,0,1)'
                    ].reverse()
                }
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(0,0,0,0.3)'
                }
            }
        },
        series: [{
            name: '离网率',
            type: 'radar',
            // areaStyle: {normal: {}},
            data : [
                {
                    value : mdata,
                    name : '离网率',
                    areaStyle: {
                        normal: {
                            color: areaColor
                        }
                    },
                    lineStyle: {
                        normal: {
                            color: lineColor
                        }
                    },
                    itemStyle:{
                        color: lineColor
                    }
                }
            ]
        }]
    };


    var chart = echarts.init(document.getElementById(mid));
    chart.on("click", function(param) {
        $('.contact-pop').css('display','block')
    })
    radarDataNet = chart;
    chart.setOption(option);
    $(window).resize(function() {
        chart.resize();
    });
}

function radarChart2(mid,areaColor,lineColor,mdata) {
    var option = {
        tooltip: {
            "show": true,
            "trigger": "item",
            position: function(point, params, dom, rect, size){
                //其中point为当前鼠标的位置，size中有两个属性：viewSize和contentSize，分别为外层div和tooltip提示框的大小
                var x = point[0];//
                var y = point[1];
                var viewWidth = size.viewSize[0];
                var viewHeight = size.viewSize[1];
                var boxWidth = size.contentSize[0];
                var boxHeight = size.contentSize[1];
                var posX = 0;//x坐标位置
                var posY = 0;//y坐标位置

                if(x<boxWidth){//左边放不开
                    posX = 5;
                }else{//左边放的下
                    posX = x-boxWidth;
                }

                if(y<boxHeight){//上边放不开
                    posY = 5;
                }else{//上边放得下
                    posY = y-boxHeight;
                }

                return [posX,posY];
            }
        },
        radar: {
            // shape: 'circle',
            name: {
                textStyle: {
                    color: '#fff'
                }
            },
            radius: 90,
            splitArea: {
                areaStyle: {
                    color: ['rgba(36,67,112,0.1)',
                        'rgba(36,67,112, 0.3)', 'rgba(36,67,112,0.5)',
                        'rgba(36,67,112,0.7)', 'rgba(36,67,112,0.9)']
                }
            },
            indicator: [
                { name: '太原', max: 100},
                { name: '忻州', max: 100},
                { name: '运城', max: 100},
                { name: '晋中', max: 100},
                { name: '朔州', max: 100},
                { name: '晋城', max: 100},
                { name: '长治', max: 100},
                { name: '阳泉', max: 100},
                { name: '大同', max: 100},
                { name: '吕梁', max: 100},
                { name: '临汾', max: 100}
            ],
            splitLine: {
                lineStyle: {
                    color: [
                        'rgba(0,0,0,0.1)', 'rgba(0,0,0,0.2)',
                        'rgba(0,0,0,0.4)', 'rgba(0,0,0,0.6)',
                        'rgba(0,0,0,0.8)', 'rgba(0,0,0,1)'
                    ].reverse()
                }
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(0,0,0,0.3)'
                }
            }
        },
        series: [{
            name: '离网率',
            type: 'radar',
            // areaStyle: {normal: {}},
            data : [
                {
                    value : mdata,
                    name : '离网率',
                    areaStyle: {
                        normal: {
                            color: areaColor
                        }
                    },
                    lineStyle: {
                        normal: {
                            color: lineColor
                        }
                    },
                    itemStyle:{
                        color: lineColor
                    }
                }
            ]
        }]
    };


    var chart = echarts.init(document.getElementById(mid));
    chart.on("click", function(param) {
        $('.contact-pop').css('display','block')
    })
    chart.setOption(option);
    radarDataWb = chart;
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
                top: '15%',
                left: '15%',
                right: '15%',
                bottom: '45%'
            },
        ],
        legend: {
            show:false,
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
                rotate:60,
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
            name: '离网率',
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
        },{
            name: '环比',
            nameTextStyle: {
                color: "#fff"
            },
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
    chart.on("click", function(param) {
        if (mid=="monthNet"){
            radarSelect("移网","月",param.name);
        }else if (mid=="monthWb"){
            radarSelect("宽带","月",param.name);
        }
    })
    chart.setOption(option);
    $(window).resize(function() {
        chart.resize();
    });
}

function lineBarDay(mid,barName,lineColor,barColor,category,barData) {
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
                top: '15%',
                left: '15%',
                right: '5%',
                bottom: '45%'
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
                rotate:60,
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
            name: '离网率',
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

    chart.on("click", function(param) {
        if (mid=="dailyNet"){
            radarSelect("移网","日",param.name);
        }else if (mid=="dailyWb"){
            radarSelect("宽带","日",param.name);
        }
    })
    chart.setOption(option);
    $(window).resize(function() {
        chart.resize();
    });
}

function provinceSel() {
    $('.qualityMonitoring-type').removeClass('city-select');
}

function citySel() {
    $('.qualityMonitoring-type').addClass('city-select');
}