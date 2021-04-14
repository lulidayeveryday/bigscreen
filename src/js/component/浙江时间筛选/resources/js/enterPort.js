$(function() {
    //初始化左侧列表
    getLeftList(dataList.leftList.data);
    //初始化右上数据
    getcountryItem(dataList.rightTop.data);
    //初始化右下数据
    getPortItem(dataList.rightDown.data);
    //设置地球仪部分的宽高展示
    //alert($(".middleMap").width());
    $(".middleMap").height($(".middleMap").width());
    $("#main").height($("#main").width());
    $("#main>div").height($("#main").width());

    $(".countryList").height($(".enterPortsList>ul").height());
    //初始调用生成地图数据
    getData();
    //设置左侧栏轮播
    var i=1;
    //定时器函数
    var onHover=function(){
        $(".enterPortsList ul>li").removeClass('onHover');
        $(".enterPortsList ul>li:nth-child("+i+")").addClass('onHover');
        //联动地球航线
        getData();
        //联动口岸国家top5
        var txt=$(".enterPortsList ul>li:nth-child("+i+") .portName").html();
        $(".countryItem .subheadP .doc").html(txt)
        getcountryItem(dataList.rightTop.data);
        i++;
        if(i>10){i=1}
        //设置国家口岸联动
        $(".portsItem .subheadP .doc").html($(".top5Country li:first-child .countryName").html());
        getPortItem(dataList.rightDown.data);
    };
     //onHover();
    // var liLoop=setInterval(onHover,5000);
    //鼠标移入左侧轮播
    $(".enterPortsList ul>li").mouseover(function(){
        // clearInterval(liLoop);//关闭轮播
        $(".enterPortsList ul>li").removeClass('onHover');
        //联动地球航线
        getData();
        //联动口岸国家top
        var txt=$(this).find(".portName").html()
        //console.log(txt)
        $(".countryItem .subheadP .doc").html(txt);
        getcountryItem(dataList.rightTop.data);
        //设置国家口岸联动
        $(".portsItem .subheadP .doc").html($(".top5Country li:first-child .countryName").attr("title"));
        getPortItem(dataList.rightDown.data);

    })
    // //鼠标移出左侧轮播
    // $(".enterPortsList ul>li").mouseout(function(){
    //     liLoop=setInterval(onHover,5000);//继续轮播
    // });
    //设置口岸联动国家
    $("ul.top5Country").on('click','li',function(){
        console.log("343434");
        $(".portsItem .subheadP .doc").html($(this).find(".countryName").attr("title"));
        getPortItem(dataList.rightDown.data);
    })
    //设置小屏兼容

    var heightBody=document.documentElement.clientHeight;
    console.log(heightBody);
    if(heightBody<=768){
        $('body').addClass("w1024");
    }
    //调整样式兼容
    setSize();
    $(document).keydown(function(e){

        if(e.keyCode==122) {
            setSize();
        }
    });


})

var getData=function() {//获取航线数据的方法
    var myChart = echarts.init(document.getElementById('main'));
//$.getJSON('flights.json', function(data) {
    var data = dataJson
    var airports = data.airports.map(function (item) {
        return {
            coord: [item[3], item[4]]
        }
    });
    //console.log(airports);


    function getAirportCoord(idx) {
        return [data.airports[idx][3], data.airports[idx][4]];
    }

    // Route: [airlineIndex, sourceAirportIndex, destinationAirportIndex]
    var routesGroupByAirline = {};
    data.routes.forEach(function (route) {
        var airline = data.airlines[route[0]];
        var airlineName = airline[0];
        if (!routesGroupByAirline[airlineName]) {
            routesGroupByAirline[airlineName] = [];
        }
        routesGroupByAirline[airlineName].push(route);
    });

    var pointsData = [];
    data.routes.forEach(function (airline) {
        pointsData.push(getAirportCoord(airline[1]));
        pointsData.push(getAirportCoord(airline[2]));

    });

    var series = data.airlines.map(function (airline) {
        var airlineName = airline[0];
        var routes = routesGroupByAirline[airlineName];

        if (!routes) {
            return null;
        }
        return {
            type: 'lines3D',
            name: airlineName,

            lineStyle: {
                width: 1,
                color: '#29cbcc',
                // color: 'rgb(118, 233, 241)',
                opacity: 0.1
            },
            blendMode: 'lighter',

            data: routes.map(function (item) {
                return [airports[item[1]].coord, airports[item[2]].coord];
            })
        };
    }).filter(function (series) {
        return !!series;
    });
    series.push({
        type: 'scatter3D',
        coordinateSystem: 'globe',
        blendMode: 'source-over',
        symbolSize: 5,
        symbol: 'circle',
        label: {
            show: false,
        },
        itemStyle: {
            color: '#28ffff',
            opacity: 0.2,
//                        borderWidth:100,
//                        borderColor:"#04969d",
        },
        data: pointsData
    });
    //console.log(series);

    myChart.setOption({
        backgroundColor: 'transparent',
        globe: {
            baseTexture: '../resources/images/enterPorts/3Dearth.png',//此处是html文件相对于图片的位置
            heightTexture: '../resources/images/enterPorts/3Dearth.png',//此处是html文件相对于图片的位置
            globeRadius: 75,
            shading: 'color',
            displacementScale: 0.1,
            displacementQuality: 'high',

            realisticMaterial: {
                roughness: 0.2,
                metalness: 0
            },

            postEffect: {
                enable: true,
                depthOfField: {
                    enable: false,
                    focalDistance: 150
                }
            },
            temporalSuperSampling: {
                enable: true
            },
            light: {
                ambient: {
                    intensity: 0
                },
                main: {
                    intensity: 0.1,
                    shadow: false
                },

            },
            viewControl: {
                autoRotate: false
            },
            silent: true
        },
        series: series
    });
//})

}

//初始化左侧排行数据
var getLeftList=function(data){
    var str=''
    for(var i=0;i<data.length;i++){
        var size=''
            if(i==0||i==9){
                size='xl'
            }else if(i==1||i==8){
                size='l'
            }else if(i==2||i==7){
                size='m'
            }else if(i==3||i==6){
                size="s"
            }else if(i==4||i==5){
                size="xs"
            }
        str+='<li class="'+size+'">'+
            '<b>NO.'+(i+1)+'</b>'+
            '<span class="portName">'+data[i].name+'</span>'+
            '<span class="portNum">'+data[i].num+'</span>'+
            '</li>';
    }
    $(".enterPortsList ul").html(str);

}
var getcountryItem=function(data){//更新口岸国家top5数据
    var str='';
    for(var i=0;i<data.length;i++){
        str+= '<li>'+
              '<div>'+
              '<span>NO.'+(i+1)+'</span>'+
              '<progress max="'+data[0].num+'" value="'+data[i].num+'">'+
              '</progress>'+
              '<span class="countryName" title="'+data[i].name+'">'+
                data[i].name+
            '</span>'+
            '<span class="top5Num">'+
            data[i].num+
            '</span>'+
            '</div>'+
            '</li>';
    }
    $(".top5Country").html(str);
    setEllipss();
}
var getPortItem=function(data){//更新国家口岸数据
    var str='';
    for(var i=0;i<data.length;i++){
        str+= '<li>'+
            '<div>'+
            '<span>NO.'+(i+1)+'</span>'+
            '<progress max="'+data[0].num+'" value="'+data[i].num+'">'+
            '</progress>'+
            '<span class="countryName" title="'+data[i].name+'">'+
            data[i].name+
            '</span>'+
            '<span class="top5Num">'+
            data[i].num+
            '</span>'+
            '</div>'+
            '</li>';

    }
    $(".top5Port").html(str);
    setEllipss();
}

var setEllipss=function(){// //设置超过字数显示省略号
    $(".countryName").each(function(){
        var str = $(this).html();
        var subStr = str.substring(0,7);
        //alert(subStr);
        $(this).html(subStr + (str.length > 7 ? '...': ''));
    });
}
var setSize=function(){

    $(".enterPortsList ul li").css('line-height',$(".enterPortsList ul li").height()+'px');
    $(".enterPortsList ul li b").css('line-height',$(".enterPortsList ul li").height()+'px');
    $(".enterPortsList ul li span").css('line-height',$(".enterPortsList ul li").height()+'px');

    //地球
    $(".main").height($(".main").width());
    //右侧
    $(".top5").css('line-height',$(".top5").height()+'px');
    $(".subheadP").css('line-height',$(".subheadP").height()+'px');
    $(".top5Country>li").css('line-height',$(".top5Country>li").height()+'px');
    $(".top5Port>li").css('line-height',$(".top5Port>li").height()+'px');


}
var dataList={
        "leftList":{
            "data":[
                {
                    "name":'北京航站楼',
                    "num":'32950'
                },
                {
                    "name":'北京航站楼',
                    "num":'32950'
                },
                {
                    "name":'北京航站楼',
                    "num":'32950'
                },
                {
                    "name":'北京航站楼',
                    "num":'32950'
                },
                {
                    "name":'北京航站楼',
                    "num":'32950'
                },
                {
                    "name":'北京航站楼',
                    "num":'32950'
                },
                {
                    "name":'北京航站楼',
                    "num":'32950'
                },
                {
                    "name":'上海虹桥2号航站楼',
                    "num":'32950'
                },
                {
                    "name":'北京航站楼',
                    "num":'32950'
                },
                {
                    "name":'上海虹桥2号航站楼',
                    "num":'32950'
                }
           ]
        },
        "rightTop":{
            "data":[
                {
                    "name":"印度尼西亚你只不是",
                    "num":'15255',

                },
                {
                    "name":"美国1",
                    "num":'5255',

                },
                {
                    "name":"美国1",
                    "num":'3255',

                },
                {
                    "name":"美国1",
                    "num":'8255',

                },

                {
                    "name":"美国1",
                    "num":'255',

                }
            ]
        },
        "rightDown":{
            "data":[
                {
                    "name":"美国1",
                    "num":'15255',

                },
                {
                    "name":"印度尼西亚你只不是",
                    "num":'5255',

                },
                {
                    "name":"美国1",
                    "num":'3255',

                },
                {
                    "name":"美国1",
                    "num":'8255',

                },

                {
                    "name":"美国1",
                    "num":'255',

                }
            ]
        }
    }

