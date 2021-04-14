$(function () {
    firstShow();
})

var typeNum=0;

var map1 = new BMap.Map(document.getElementById('hotMap'));          // 创建地图实例
var map2 = new BMap.Map(document.getElementById('hotMap2'));          // 创建地图实例

function underLineShow() {
    var barNameDown1 = '发展量';
    var barColorDown1 = ['#00D4BD','#00D4BD'];
    var categoryDown1 = ['太原','大同','阳泉','长治','晋城','朔州','忻州','晋中','吕梁','临汾','运城'];
    var barDataDown1 = [189,167,135,158,361,567,235,458,361,567,235];
    lineBarDay('delBar1',barNameDown1,barColorDown1,categoryDown1,barDataDown1);

    var barNameDown1 = '发展量';
    var barColorDown1 = ['#FCB53F','#FCB53F'];
    var categoryDown1 = ['渠道1','渠道2','渠道3','渠道4','渠道5','渠道6','渠道7','渠道8','渠道9','渠道10','渠道11'];
    var barDataDown1 = [589,567,235,458,361,567,235,458,361,567,235];
    lineBarDay('delBar2',barNameDown1,barColorDown1,categoryDown1,barDataDown1);

    //热力图
    var mapData=[{"lng":116.425867,"lat":39.918989,"count":8}];
    baiduHot(mapData,map2);

    //重点指标占比
    var percentData=[
        {
            name: '激活率',
            value: 16
        },
        {
            name: '异网率',
            value: 16
        },
        {
            name: '30首充率',
            value: 16
        },
        {
            name: '50首充率',
            value: 16
        }
    ]

    for(var i=0;i<percentData.length;i++){
        percentPie('percentPie'+(i+5),percentData[i].name,percentData[i].value);
    }
}

function firstShow() {
    //热力图
    var mapData=[
        {"lng":116.418261,"lat":39.921984,"count":50},
        {"lng":116.423332,"lat":39.916532,"count":51},
        {"lng":116.419787,"lat":39.930658,"count":15},
        {"lng":116.418455,"lat":39.920921,"count":40},
        {"lng":116.418843,"lat":39.915516,"count":100},
        {"lng":116.42546,"lat":39.918503,"count":6},
        {"lng":116.423289,"lat":39.919989,"count":18},
        {"lng":116.418162,"lat":39.915051,"count":80},
        {"lng":116.422039,"lat":39.91782,"count":11},
        {"lng":116.41387,"lat":39.917253,"count":7},
        {"lng":116.41773,"lat":39.919426,"count":42},
        {"lng":116.421107,"lat":39.916445,"count":4},
        {"lng":116.417521,"lat":39.917943,"count":27},
        {"lng":116.419812,"lat":39.920836,"count":23},
        {"lng":116.420682,"lat":39.91463,"count":60},
        {"lng":116.415424,"lat":39.924675,"count":8},
        {"lng":116.419242,"lat":39.914509,"count":15},
        {"lng":116.422766,"lat":39.921408,"count":25},
        {"lng":116.421674,"lat":39.924396,"count":21},
        {"lng":116.427268,"lat":39.92267,"count":1},
        {"lng":116.417721,"lat":39.920034,"count":51},
        {"lng":116.412456,"lat":39.92667,"count":7},
        {"lng":116.420432,"lat":39.919114,"count":11},
        {"lng":116.425013,"lat":39.921611,"count":35},
        {"lng":116.418733,"lat":39.931037,"count":22},
        {"lng":116.419336,"lat":39.931134,"count":4},
        {"lng":116.413557,"lat":39.923254,"count":5},
        {"lng":116.418367,"lat":39.92943,"count":3},
        {"lng":116.424312,"lat":39.919621,"count":100},
        {"lng":116.423874,"lat":39.919447,"count":87},
        {"lng":116.424225,"lat":39.923091,"count":32},
        {"lng":116.417801,"lat":39.921854,"count":44},
        {"lng":116.417129,"lat":39.928227,"count":21},
        {"lng":116.426426,"lat":39.922286,"count":80},
        {"lng":116.421597,"lat":39.91948,"count":32},
        {"lng":116.423895,"lat":39.920787,"count":26},
        {"lng":116.423563,"lat":39.921197,"count":17},
        {"lng":116.417982,"lat":39.922547,"count":17},
        {"lng":116.426126,"lat":39.921938,"count":25},
        {"lng":116.42326,"lat":39.915782,"count":100},
        {"lng":116.419239,"lat":39.916759,"count":39},
        {"lng":116.417185,"lat":39.929123,"count":11},
        {"lng":116.417237,"lat":39.927518,"count":9},
        {"lng":116.417784,"lat":39.915754,"count":47},
        {"lng":116.420193,"lat":39.917061,"count":52},
        {"lng":116.422735,"lat":39.915619,"count":100},
        {"lng":116.418495,"lat":39.915958,"count":46},
        {"lng":116.416292,"lat":39.931166,"count":9},
        {"lng":116.419916,"lat":39.924055,"count":8},
        {"lng":116.42189,"lat":39.921308,"count":11},
        {"lng":116.413765,"lat":39.929376,"count":3},
        {"lng":116.418232,"lat":39.920348,"count":50},
        {"lng":116.417554,"lat":39.930511,"count":15},
        {"lng":116.418568,"lat":39.918161,"count":23},
        {"lng":116.413461,"lat":39.926306,"count":3},
        {"lng":116.42232,"lat":39.92161,"count":13},
        {"lng":116.4174,"lat":39.928616,"count":6},
        {"lng":116.424679,"lat":39.915499,"count":21},
        {"lng":116.42171,"lat":39.915738,"count":29},
        {"lng":116.417836,"lat":39.916998,"count":99},
        {"lng":116.420755,"lat":39.928001,"count":10},
        {"lng":116.414077,"lat":39.930655,"count":14},
        {"lng":116.426092,"lat":39.922995,"count":16},
        {"lng":116.41535,"lat":39.931054,"count":15},
        {"lng":116.413022,"lat":39.921895,"count":13},
        {"lng":116.415551,"lat":39.913373,"count":17},
        {"lng":116.421191,"lat":39.926572,"count":1},
        {"lng":116.419612,"lat":39.917119,"count":9},
        {"lng":116.418237,"lat":39.921337,"count":54},
        {"lng":116.423776,"lat":39.921919,"count":26},
        {"lng":116.417694,"lat":39.92536,"count":17},
        {"lng":116.415377,"lat":39.914137,"count":19},
        {"lng":116.417434,"lat":39.914394,"count":43},
        {"lng":116.42588,"lat":39.922622,"count":27},
        {"lng":116.418345,"lat":39.919467,"count":8},
        {"lng":116.426883,"lat":39.917171,"count":3},
        {"lng":116.423877,"lat":39.916659,"count":34},
        {"lng":116.415712,"lat":39.915613,"count":14},
        {"lng":116.419869,"lat":39.931416,"count":12},
        {"lng":116.416956,"lat":39.925377,"count":11},
        {"lng":116.42066,"lat":39.925017,"count":38},
        {"lng":116.416244,"lat":39.920215,"count":91},
        {"lng":116.41929,"lat":39.915908,"count":54},
        {"lng":116.422116,"lat":39.919658,"count":21},
        {"lng":116.4183,"lat":39.925015,"count":15},
        {"lng":116.421969,"lat":39.913527,"count":3},
        {"lng":116.422936,"lat":39.921854,"count":24},
        {"lng":116.41905,"lat":39.929217,"count":12},
        {"lng":116.424579,"lat":39.914987,"count":57},
        {"lng":116.42076,"lat":39.915251,"count":70},
        {"lng":116.425867,"lat":39.918989,"count":8}];
    baiduHot(mapData,map1);

    //top5产品
    var rankData={
        'dd':[8, 15, 10,15,60],//订单排名，倒序
        'jh':[8, 17, 26,40,50],//激活倒序
        'sc':[8, 17, 26,39,40]//首充倒序
    }
    rankProduct(rankData);

    //重点指标占比
    var percentData=[
        {
            name: '激活率',
            value: 36
        },
        {
            name: '异网率',
            value: 66
        },
        {
            name: '30首充率',
            value: 96
        },
        {
            name: '50首充率',
            value: 76
        }
    ]

    for(var i=0;i<percentData.length;i++){
        percentPie('percentPie'+(i+1),percentData[i].name,percentData[i].value);
    }
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
                top: '20%',
                left: '15%',
                right: '5%',
                bottom: '22%'
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
    $('#onDiv').css('display','block');
    $('#downDiv').css('display','none');
    $('#mapOn').css('display','block');
    $('#mapUnder').css('display','none');
    $('#percentOn').css('display','block');
    $('#percentUnder').css('display','none');
}

function citySel() {
    $('.qualityMonitoring-type').addClass('city-select');
    $('#downDiv').css('display','block');
    $('#onDiv').css('display','none');
    $('#mapOn').css('display','none');
    $('#mapUnder').css('display','block');
    $('#percentOn').css('display','none');
    $('#percentUnder').css('display','block');
    if (typeNum==0){
        typeNum=1;
        underLineShow();
    }
}
//热力图
function baiduHot(mapData,map){
    var style1=[
        {
            "featureType": "water",
            "elementType": "all",
            "stylers": {
                "color": "#021019"
            }
        },
        {
            "featureType": "highway",
            "elementType": "geometry.fill",
            "stylers": {
                "color": "#08304bff"
            }
        },
        {
            "featureType": "highway",
            "elementType": "geometry.stroke",
            "stylers": {
                "color": "#147a92"
            }
        },
        {
            "featureType": "arterial",
            "elementType": "geometry.fill",
            "stylers": {
                "color": "#000000"
            }
        },
        {
            "featureType": "arterial",
            "elementType": "geometry.stroke",
            "stylers": {
                "color": "#0b3d51"
            }
        },
        {
            "featureType": "local",
            "elementType": "geometry",
            "stylers": {
                "color": "#000000"
            }
        },
        {
            "featureType": "land",
            "elementType": "all",
            "stylers": {
                "color": "#08304b"
            }
        },
        {
            "featureType": "railway",
            "elementType": "geometry.fill",
            "stylers": {
                "color": "#000000"
            }
        },
        {
            "featureType": "railway",
            "elementType": "geometry.stroke",
            "stylers": {
                "color": "#08304b"
            }
        },
        {
            "featureType": "subway",
            "elementType": "geometry",
            "stylers": {
                "lightness": -70
            }
        },
        {
            "featureType": "building",
            "elementType": "geometry.fill",
            "stylers": {
                "color": "#000000"
            }
        },
        {
            "featureType": "all",
            "elementType": "labels.text.fill",
            "stylers": {
                "color": "#857f7f"
            }
        },
        {
            "featureType": "all",
            "elementType": "labels.text.stroke",
            "stylers": {
                "color": "#000000"
            }
        },
        {
            "featureType": "building",
            "elementType": "geometry",
            "stylers": {
                "color": "#022338"
            }
        },
        {
            "featureType": "green",
            "elementType": "geometry",
            "stylers": {
                "color": "#062032"
            }
        },
        {
            "featureType": "boundary",
            "elementType": "all",
            "stylers": {
                "color": "#ffffffff"
            }
        },
        {
            "featureType": "manmade",
            "elementType": "geometry",
            "stylers": {
                "color": "#022338"
            }
        },
        {
            "featureType": "poi",
            "elementType": "all",
            "stylers": {
                "visibility": "off"
            }
        },
        {
            "featureType": "all",
            "elementType": "labels.icon",
            "stylers": {
                "visibility": "off"
            }
        },
        {
            "featureType": "all",
            "elementType": "labels.text.fill",
            "stylers": {
                "color": "#2da0c6",
                "visibility": "on"
            }
        }
    ];
    map.setMapStyle({
        styleJson:style1
    });
    var point = new BMap.Point(112.56658, 37.74068);

    map.centerAndZoom(point, 10);             // 初始化地图，设置中心点坐标和地图级别
    /*map.addControl(new BMap.NavigationControl());*/

    map.enableScrollWheelZoom(); // 允许滚轮缩放



    //给地市添加边框
    var bdary = new BMap.Boundary();
    // var name = document.getElementById("districtName").value;
    var name = "山西省"
    bdary.get(name, function(rs){       //获取行政区域
        /*map.clearOverlays();  */      //清除地图覆盖物
        var count = rs.boundaries.length; //行政区域的点有多少个
        for(var i = 0; i < count; i++){
            var ply = new BMap.Polygon(rs.boundaries[i],
                {strokeWeight: 2, //设置多边形边线线粗

                    strokeOpacity: 1, //设置多边形边线透明度0-1
                    StrokeStyle: "solid", //设置多边形边线样式为实线或虚线，取值 solid 或 dashed

                    strokeColor: "#2DDEFD", //设置多边形边线颜色
                    fillColor: "#00ffff", //设置多边形填充颜色
                    fillOpacity:0.01 //设置多边形填充颜色透明度0-1

                }); //建立多边形覆盖物
            map.addOverlay(ply);  //添加覆盖物
            map.setViewport(ply.getPath());    //调整视野
        }
    });

    //midnight   normal
    /*map.setMapStyle({style:'midnight'});*/
    var points =mapData;

    var pointBaidu=[];
    //gps坐标转为百度坐标
    /*points.map(function (i_data,i_index) {
     var pointChange = new BMap.Point(i_data.lng, i_data.lat);
     BMap.Convertor.translate(pointChange,0,translateCallback);

     function translateCallback(point){
     pointBaidu.push({lng:point.lng,lat:point.lat,count:points[i_index].counts})
     }
     })*/
    if(!isSupportCanvas()){
        alert('热力图目前只支持有canvas支持的浏览器,您所使用的浏览器不能使用热力图功能~')
    }
    var heatmapOverlay = new BMapLib.HeatmapOverlay({"radius":20});
    map.addOverlay(heatmapOverlay);
    heatmapOverlay.setDataSet({data:points,max:100});
    //是否显示热力图
    heatmapOverlay.show();

    /*//标注样式
     var icon = new BMap.Icon('/src/js/containers/BaiduHot/img/coord1.png', new BMap.Size(18, 18), {      //20，30是图片大小
     anchor: new BMap.Size(10, 0)      //这个是信息窗口位置（可以改改看看效果）
     });

     // 向地图添加标注
     var point1 = new BMap.Point(112.5918,37.86116);
     var marker = new BMap.Marker(point1,{
     icon:icon
     });
     map.addOverlay(marker);



     //文字标注
     var label = new BMap.Label("工作在三墙路",{offset:new BMap.Size(20,-10)});
     label.setStyle({
     backgroundColor : "rgba(49,70,89,0.7)",
     borderRadius:"5px",
     color:"#ffffff",
     borderColor:"rgba(49,70,89,0.5)",
     fontSize : "8px",
     height : "20px",
     paddingLeft:"10px",
     paddingRight:"10px",
     lineHeight : "20px",
     fontFamily:"微软雅黑"
     });
     marker.setLabel(label);*/

    /*closeHeatmap();*/
    function setGradient(){
        /*格式如下所示:
         {
         0:'rgb(102, 255, 0)',
         .5:'rgb(255, 170, 0)',
         1:'rgb(255, 0, 0)'
         }*/
        var gradient = {};
        var colors = document.querySelectorAll("input[type='color']");
        colors = [].slice.call(colors,0);
        colors.forEach(function(ele){
            gradient[ele.getAttribute("data-key")] = ele.value;
        });
        heatmapOverlay.setOptions({"gradient":gradient});
    }
    //判断浏览区是否支持canvas
    function isSupportCanvas(){
        var elem = document.createElement('canvas');
        return !!(elem.getContext && elem.getContext('2d'));
    }
}

function getBoundary(){
    var bdary = new BMap.Boundary();
    var name = document.getElementById("districtName").value;
    bdary.get(name, function(rs){       //获取行政区域
        map.clearOverlays();        //清除地图覆盖物
        var count = rs.boundaries.length; //行政区域的点有多少个
        for(var i = 0; i < count; i++){
            var ply = new BMap.Polygon(rs.boundaries[i],
                {strokeWeight: 2, //设置多边形边线线粗

                    strokeOpacity: 1, //设置多边形边线透明度0-1
                    StrokeStyle: "solid", //设置多边形边线样式为实线或虚线，取值 solid 或 dashed

                    strokeColor: "#ff0000", //设置多边形边线颜色

                }); //建立多边形覆盖物
            map.addOverlay(ply);  //添加覆盖物
            map.setViewport(ply.getPath());    //调整视野
        }
    });
}

//Top5产品
function rankProduct(rankData) {
   var option = {
       // title: {

       //     textStyle: {
       //         color: '#00FFFF',
       //         fontSize: 24
       //     }
       // },
       legend: {
           top: 20,
           textStyle: {
               color: '#fff',
           },
           data: ['订单', '激活', '首充']
       },
       grid: {
           left: '3%',
           right: '4%',
           bottom: '5%',
           containLabel: true
       },

       tooltip: {
           show: "true",
       },
       yAxis: [{
           type: 'category',
           axisTick: {
               show: false
           },
           axisLine: {
               show: true,
               lineStyle: {
                   color: '#363e83',
               }
           },
           splitLine: {
               show: true,
               lineStyle: {
                   color: '#363e83 ',
               }
           },
           axisLabel: {
               textStyle: {
                   color: '#fff',
                   fontWeight: 'normal',
                   fontSize: '12',
               },
           },
           data: ['TOP5', 'TOP4', 'TOP3', 'TOP2', 'TOP1']
       }, {
           type: 'category',
           axisLine: {
               show: false
           },
           axisTick: {
               show: false
           },
           axisLabel: {
               show: false
           },
           splitArea: {
               show: false
           },
           splitLine: {
               show: false
           },
           data: ['TOP5', 'TOP4', 'TOP3', 'TOP2', 'TOP1']
       },],
       xAxis: [{
           type: 'value',
           axisTick: {
               show: false
           },
           axisLine: {
               show: false,
               lineStyle: {
                   color: '#363e83',
               }
           },
           splitLine: {
               show: false,
               lineStyle: {
                   color: '#363e83 ',
               }
           },
           axisLabel: {
               inside: false,
               textStyle: {
                   color: '#fff',
                   fontWeight: 'normal',
                   fontSize: '12',
               },
               // formatter:function(val){
               //     return val.split("").join("\n")
               // },
           },
       }

       ],
       series: [{
           name: '订单',
           type: 'bar',
           itemStyle: {
               normal: {
                   show: true,
                   color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                       offset: 0,
                       color: '#f7734e'
                   }, {
                       offset: 1,
                       color: '#e12945'
                   }]),
                   barBorderRadius: 50,
                   borderWidth: 0,
               }
           },
           zlevel: 2,
           barWidth: '10%',
           data: rankData.dd
       }, {
           name: '激活',
           type: 'bar',
           barWidth: '10%',
           itemStyle: {
               normal: {
                   show: true,
                   color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                       offset: 0,
                       color: '#96d668'
                   }, {
                       offset: 1,
                       color: '#01babc'
                   }]),
                   barBorderRadius: 50,
                   borderWidth: 0,
               }
           },
           zlevel: 2,
           barGap: '100%',
           data: rankData.jh
       }, {
           name: '首充',
           type: 'bar',
           barWidth: '10%',
           itemStyle: {
               normal: {
                   show: true,
                   color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                       offset: 0,
                       color: '#1a98f8'
                   }, {
                       offset: 1,
                       color: '#7049f0'
                   }]),
                   barBorderRadius: 50,
                   borderWidth: 0,
               }
           },
           zlevel: 2,
           barGap: '100%',
           data: rankData.sc
       }

       ]
   };
    var myChart = echarts.init(document.getElementById('rankBar'));
    myChart.setOption(option);
    $(window).resize(function(){
        myChart.resize();
    })
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