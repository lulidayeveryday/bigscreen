$(function () {

    //漫出热力图
    var url = decodeURI(window.location.href);

    var argsIndex = url .split("?name=");
    var arg = argsIndex[1];

    $('#mapTitle').html(arg)
    $('#listTitle').html(arg)
    worldMap(arg);

    //性别比例
    var sexData=[
        {
            name:'男性',
            y:158,
            percent:'79%'
        },
        {
            name:'女性',
            y:42,
            percent:'21%'
        }
    ]
    barEcharts(sexData);

    //首页状态 0:全屏 1：四分之三   2：二分之一
    changeDiv(1)

    //年龄比例
    var ageData=[
        {
            name: '<16',
            data: '19%'
        },
        {
            name: '16-20',
            data: '29%'
        },
        {
            name: '21-25',
            data: '39%'
        },
        {
            name: '26-30',
            data: '49%'
        },
        {
            name: '31-35',
            data: '59%'
        },
        {
            name: '36-40',
            data: '69%'
        },
        {
            name: '41-50',
            data: '79%'
        },
        {
            name: '>50',
            data: '89%'
        },
    ]

    ageBar(ageData)


    //漫出列表
    var listData=[
        {
            type:'A',
            listData:[
                {
                    countryName: '国家1',
                    data:3698,
                    percent: '94%',
                    rank:1
                },
                {
                    countryName: '国家2',
                    data:3698,
                    percent: '44%',
                    rank:21
                },
                {
                    countryName: '国家3',
                    data:3698,
                    percent: '34%',
                    rank:31
                },
                {
                    countryName: '国家4',
                    data:3698,
                    percent: '24%',
                    rank:41
                },
                {
                    countryName: '国家5',
                    data:3698,
                    percent: '54%',
                    rank:51
                },
            ]
        },
        {
            type:'B',
            listData:[
                {
                    countryName: '国家1',
                    data:3698,
                    percent: '94%',
                    rank:6
                },
                {
                    countryName: '国家2',
                    data:3698,
                    percent: '44%',
                    rank:17
                }
            ]
        },
        {
            type:'C',
            listData:[
                {
                    countryName: '国家1',
                    data:3698,
                    percent: '94%',
                    rank:1
                },
                {
                    countryName: '国家2',
                    data:3698,
                    percent: '44%',
                    rank:21
                },
                {
                    countryName: '国家3',
                    data:3698,
                    percent: '34%',
                    rank:31
                },
                {
                    countryName: '国家4',
                    data:3698,
                    percent: '24%',
                    rank:41
                },
                {
                    countryName: '国家5',
                    data:3698,
                    percent: '54%',
                    rank:51
                },
            ]
        },
        {
            type:'W',
            listData:[
                {
                    countryName: '国家1',
                    data:3698,
                    percent: '94%',
                    rank:6
                },
                {
                    countryName: '国家2',
                    data:3698,
                    percent: '44%',
                    rank:17
                }
            ]
        },
        {
            type:'E',
            listData:[
                {
                    countryName: '国家1',
                    data:3698,
                    percent: '94%',
                    rank:1
                },
                {
                    countryName: '国家2',
                    data:3698,
                    percent: '44%',
                    rank:21
                },
                {
                    countryName: '国家3',
                    data:3698,
                    percent: '34%',
                    rank:31
                },
                {
                    countryName: '国家4',
                    data:3698,
                    percent: '24%',
                    rank:41
                },
                {
                    countryName: '国家5',
                    data:3698,
                    percent: '54%',
                    rank:51
                },
            ]
        },
        {
            type:'R',
            listData:[
                {
                    countryName: '国家1',
                    data:3698,
                    percent: '94%',
                    rank:6
                },
                {
                    countryName: '国家2',
                    data:3698,
                    percent: '44%',
                    rank:17
                }
            ]
        },
        {
            type:'T',
            listData:[
                {
                    countryName: '国家1',
                    data:3698,
                    percent: '94%',
                    rank:1
                },
                {
                    countryName: '国家2',
                    data:3698,
                    percent: '44%',
                    rank:21
                },
                {
                    countryName: '国家3',
                    data:3698,
                    percent: '34%',
                    rank:31
                },
                {
                    countryName: '国家4',
                    data:3698,
                    percent: '24%',
                    rank:41
                },
                {
                    countryName: '国家5',
                    data:3698,
                    percent: '54%',
                    rank:51
                },
            ]
        },
        {
            type:'Y',
            listData:[
                {
                    countryName: '国家1',
                    data:3698,
                    percent: '94%',
                    rank:6
                },
                {
                    countryName: '国家2',
                    data:3698,
                    percent: '44%',
                    rank:17
                }
            ]
        },
        {
            type:'U',
            listData:[
                {
                    countryName: '国家1',
                    data:3698,
                    percent: '94%',
                    rank:1
                },
                {
                    countryName: '国家2',
                    data:3698,
                    percent: '44%',
                    rank:21
                },
                {
                    countryName: '国家3',
                    data:3698,
                    percent: '34%',
                    rank:31
                },
                {
                    countryName: '国家4',
                    data:3698,
                    percent: '24%',
                    rank:41
                },
                {
                    countryName: '国家5',
                    data:3698,
                    percent: '54%',
                    rank:51
                },
            ]
        },
        {
            type:'I',
            listData:[
                {
                    countryName: '国家1',
                    data:3698,
                    percent: '94%',
                    rank:6
                },
                {
                    countryName: '国家2',
                    data:3698,
                    percent: '44%',
                    rank:17
                }
            ]
        },
    ]

    worldList(listData);


    $('#listContent').niceScroll('#listContentContent',{
        cursorcolor: "#41557B",//#CC0071 光标颜色
        cursoropacitymax: 1, //改变不透明度非常光标处于活动状态（scrollabar“可见”状态），范围从1到0
        touchbehavior: false, //使光标拖动滚动像在台式电脑触摸设备
        cursorwidth: "5px", //像素光标的宽度
        cursorborder: "0", // 游标边框css定义
        cursorborderradius: "5px",//以像素为光标边界半径
        autohidemode: false, //是否隐藏滚动条
        background: '#132F5F',
        boxzoom:false,
    });

})

function worldList(countryData) {
    var html=''
    for(var i=0;i<countryData.length;i++){
        html+='<div class="list-content-div">'
        html+='<div class="list-content-div1" id="content' + countryData[i].type + '">'
        html+='<div class="list-content-div1-content">' + countryData[i].type + '</div>'
        html+='</div>'
        html+='<div class="list-content-div2"> '

        var contentData=countryData[i].listData;
        for(var j=0;j<contentData.length;j++){
            html+='<div class="content-div2-title">';
            html+=contentData[j].countryName+'<br>';
            html+='<div class="content-div2-bar">';
            if(contentData[j].rank<6){
                html+='<div class="content-div2-bar-color-top"'
            }else {
                html+='<div class="content-div2-bar-color"'
            }
            html+='style="width: '+contentData[j].percent+'"></div>';
            html+='</div>';
            html+=contentData[j].data;
            html+='</div>';
        }

        html+='</div>'
        html+='</div>'
    }

    $('#listContentContent').html(html);
}

function ageBar(datas) {
    var html='';
    for(var i=0;i<datas.length;i++){
        html+='<tr>'
        html+='<td class="table-td1">'+ datas[i].name +'</td>'
        html+='<td class="table-td2">'
        html+='<div class="table-td2-bar">'
        html+='<div class="td2-bar-content" style="width: ' + datas[i].data + '"></div>'
        html+='</div>'
        html+='</td>'
        html+='<td class="table-td3">' + datas[i].data + '</td>'
        html+='</tr>'
    }

    $('#ageData').html(html)
}

function tempAZ(temp) {
    var name=$(temp).html();
    $("#listContent").scrollTop($("#content"+name).position().top)
}

function AZClick() {
    var type = $('.countryOverflow-list-AZ-content').css('display');
    if (type=='none'){
        $('.countryOverflow-list-AZ-content').css('display','block');
        $('.countryOverflow-list-AZ').css('background','url("../image/AZ1.png") no-repeat');
        $('.countryOverflow-list-AZ').css('background-size','100% 100%');
    }else {
        $('.countryOverflow-list-AZ-content').css('display','none');
        $('.countryOverflow-list-AZ').css('background','url("../image/AZ0.png") no-repeat');
        $('.countryOverflow-list-AZ').css('background-size','100% 100%');
    }
}

function barEcharts(datas) {
    var chart = Highcharts.chart('barEcharts1', {
        chart: {
            backgroundColor: 'rgba(0,0,0,0)',
            type: 'pie',
            options3d: {
                enabled: true,
                alpha: 60,
                beta: 0
            }
        },
        colors: ['rgba(180,23,80,0.7)','rgba(23,142,185,0.7)'],
        title: {
            text: null
        },
        tooltip: {
            show:false
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                depth: 20,
                dataLabels: {
                    enabled: false,
                    format: '{point.name}',
                    backgroundColor:'rgba(0,0,0,0)',
                    borderColor:'#333333',
                    borderRadius:4,
                    borderWidth: 2,
                    fontSize:50
                }
            }
        },
        series: [{
            type: 'pie',
            name: '人数',
            size:'200%',
            data: datas
        }],
        credits: {
            enabled: false     //不显示LOGO
        }
    });

    for(var i=0;i<datas.length;i++){
        if(datas[i].name=="男性"){
            $('#manData').html(datas[i].percent)
        }else if(datas[i].name=="女性"){
            $('#womanData').html(datas[i].percent)
        }
    }
}

function barEcharts2() {
    var chart = Highcharts.chart('barEcharts2', {
        chart: {
            backgroundColor: 'rgba(0,0,0,0)',
            type: 'pie',
            options3d: {
                enabled: true,
                alpha: 60,
                beta: 0
            }
        },
        colors: ['rgba(183,173,77,0.6)','rgba(18,155,116,0.6)','rgba(180,23,80,0.6)','rgba(23,142,185,0.6)'],
        title: {
            text: null
        },
        tooltip: {
            show:false
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                depth: 20,
                dataLabels: {
                    enabled: false,
                    format: '{point.name}',
                    backgroundColor:'rgba(0,0,0,0)',
                    borderColor:'#333333',
                    borderRadius:4,
                    borderWidth: 2,
                    fontSize:50
                }
            }
        },
        series: [{
            type: 'pie',
            name: '年龄占比',
            size:'200%',
            data: [
                {
                    name:'0-20',
                    y: 26.8,
                },
                {
                    name: '20-40',
                    y: 12.8,
                },
                {
                    name:'40-60',
                    y: 26.8,
                },
                {
                    name: '>60',
                    y: 12.8,
                }
            ]
        }],
        credits: {
            enabled: false     //不显示LOGO
        }
    });
}

function worldMap(city) {
    var provinces = {
        '上海': '../js/data-1482909900836-H1BC_1WHg.json',
        '河北': '../js/data-1482909799572-Hkgu_yWSg.json',
        '山西': '../js/data-1482909909703-SyCA_JbSg.json',
        '内蒙古': '../js/data-1482909841923-rkqqdyZSe.json',
        '辽宁': '../js/data-1482909836074-rJV9O1-Hg.json',
        '吉林': '../js/data-1482909832739-rJ-cdy-Hx.json',
        '黑龙江': '../js/data-1482909803892-Hy4__J-Sx.json',
        '江苏': '../js/data-1482909823260-HkDtOJZBx.json',
        '浙江': '../js/data-1482909960637-rkZMYkZBx.json',
        '安徽': '../js/data-1482909768458-HJlU_yWBe.json',
        '福建': '../js/data-1478782908884-B1H6yezWe.json',
        '江西': '../js/data-1482909827542-r12YOJWHe.json',
        '山东': '../js/data-1482909892121-BJ3auk-Se.json',
        '河南': '../js/data-1482909807135-SJPudkWre.json',
        '湖北': '../js/data-1482909813213-Hy6u_kbrl.json',
        '湖南': '../js/data-1482909818685-H17FOkZSl.json',
        '广东': '../js/data-1482909784051-BJgwuy-Sl.json',
        '广西': '../js/data-1482909787648-SyEPuJbSg.json',
        '海南': '../js/data-1482909796480-H12P_J-Bg.json',
        '四川': '../js/data-1482909931094-H17eKk-rg.json',
        '贵州': '../js/data-1482909791334-Bkwvd1bBe.json',
        '云南': '../js/data-1482909957601-HkA-FyWSx.json',
        '西藏': '../js/data-1482927407942-SkOV6Qbrl.json',
        '陕西': '../js/data-1482909918961-BJw1FyZHg.json',
        '甘肃': '../js/data-1482909780863-r1aIdyWHl.json',
        '青海': '../js/data-1482909853618-B1IiOyZSl.json',
        '宁夏': '../js/data-1482909848690-HJWiuy-Bg.json',
        '新疆': '../js/data-1482909952731-B1YZKkbBx.json',
        '北京': '../js/data-1482818963027-Hko9SKJrg.json',
        '天津': '../js/data-1482909944620-r1-WKyWHg.json',
        '重庆': '../js/data-1482909775470-HJDIdk-Se.json',
        '香港': '../js/data-1461584707906-r1hSmtsx.json',
        '澳门': '../js/data-1482909771696-ByVIdJWBx.json'
    };

    var myChart = echarts.init(document.getElementById('wordMap'));

    var data = [
        {
        "name": "成都市",
        "value": 7.2
    }, {
        "name": "绵阳市",
        "value": 7.0
    }, {
        "name": "自贡市",
        "value": 15.8
    }, {
        "name": "攀枝花市",
        "value": 12.0
    }, {
        "name": "泸州市",
        "value": 25.1
    }, {
        "name": "德阳市",
        "value": 22.5
    }, {
        "name": "广元市",
        "value": 33.6
    }, {
        "name": "遂宁市",
        "value": 31.9
    }, {
        "name": "内江市",
        "value": 45.6
    }, {
        "name": "乐山市",
        "value": 42.4
    }, {
        "name": "资阳市",
        "value": 52.9
    }, {
        "name": "宜宾市",
        "value": 57.6
    }, {
        "name": "南充市",
        "value": 69.9
    }, {
        "name": "达州市",
        "value": 72.5
    }, {
        "name": "雅安市",
        "value": 73.1
    }, {
        "name": "阿坝藏族羌族自治州",
        "value": 68.1
    }, {
        "name": "甘孜藏族自治州",
        "value": 53.7
    }, {
        "name": "凉山彝族自治州",
        "value": 60.4
    }, {
        "name": "广安市",
        "value": 68.6
    }, {
        "name": "巴中市",
        "value": 61.7
    }, {
        "name": "眉山市",
        "value": 67.5
    }];
    var option = {
        textStyle: {
            color: '#fff'
        },
        tooltip : {
            show:true,
            trigger: 'item',
            formatter: function (params) {
                return '<div style="min-width: 100px;font-weight: bold">'+'<span style="color:#2EE3FD;">'+params.name+
                    '</span><br>'+params.data.value;
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
                color: 'rgba(250,0,152,0.6)'
            }, {
                min: 15,
                max: 30,
                color: 'rgba(137,17,215,0.6)'
            }, {
                min: 30,
                max: 45,
                color: 'rgba(40,111,226,0.6)'
            }, {
                min: 45,
                max: 60,
                color: 'rgba(29,192,232,0.6)'
            }, {
                min: 60,
                // max: 30000,
                color: 'rgba(38,115,154,0.6)'
            }],
            left: 20,
            bottom: 20,
            itemWidth: 10,
            itemHeight: 10,
            textStyle: {
                color: '#fff'
            },
            /*min: 0,
             max: 40000,*/
            //text:['High','Low'],
            //realtime: true,
            //calculable: true,
            //color: ['red','orange','lightgreen']
        },

        series : [
            {
                name: '数据',
                type: 'map',
                map: 'city', // 自定义扩展图表类型
                roam : true,
                itemStyle:{
                    normal:{
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






    $.getJSON(provinces[city], function (datass) {
        echarts.registerMap('city', datass);
        myChart.setOption(option);


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
        $("#wordMap").resize(function(){
            myChart.resize();
        })
    });










    /*$.getJSON('./js/world.json', function (data) {
     echarts.registerMap('world', data);

     var myChart = echarts.init(document.getElementById('wordMap'));
     myChart.setOption(option);

     $(window).resize(function() {
     myChart.resize();
     });
     });*/
}

function changeDiv(type) {
    if(type==1){
        $('.countryOverflow-map').css('width','72%');
        $('.countryOverflow-list').css('left','75%');
        $('.countryOverflow-mapEchart').css('display','none');
        $('.countryOverflow-mapDiv-country').css({'width':'100%','left':'0'});
        $('.countryOverflow-button-left').attr('onClick','changeDiv(2)');
        $('.countryOverflow-button-right').attr('onClick','changeDiv(0)');
        $('.list-Dang').css('display','block')

        $('.countryOverflow-button-left').css('background','url("../image/buttonLeft.png") no-repeat');
        $('.countryOverflow-button-left').css('background-size','100% 100%');
        $('.countryOverflow-button-right').css('background','url("../image/buttonRight.png") no-repeat');
        $('.countryOverflow-button-right').css('background-size','100% 100%');
    }else if(type==0){
        $('.countryOverflow-map').css('width','94.5%');
        $('.countryOverflow-list').css('left','100%');
        $('.countryOverflow-mapEchart').css('display','block');
        $('.countryOverflow-mapDiv-country').css({'width':'86%','left':'14%'});
        $('.countryOverflow-button-left').attr('onClick','changeDiv(1)');
        $('.countryOverflow-button-right').removeAttr('onClick');
        $('.list-Dang').css('display','none')

        $('.countryOverflow-button-left').css('background','url("../image/buttonLeft.png") no-repeat');
        $('.countryOverflow-button-left').css('background-size','100% 100%');
        $('.countryOverflow-button-right').css('background','url("../image/buttonRight0.png") no-repeat');
        $('.countryOverflow-button-right').css('background-size','100% 100%');

    }else if(type==2){
        $('.countryOverflow-map').css('width','47%');
        $('.countryOverflow-list').css('left','50%');
        $('.countryOverflow-mapEchart').css('display','none');
        $('.countryOverflow-mapDiv-country').css({'width':'100%','left':'0'});
        $('.countryOverflow-button-left').removeAttr('onClick');
        $('.countryOverflow-button-right').attr('onClick','changeDiv(1)');
        $('.list-Dang').css('display','none')

        $('.countryOverflow-button-left').css('background','url("../image/buttonLeft0.png") no-repeat');
        $('.countryOverflow-button-left').css('background-size','100% 100%');
        $('.countryOverflow-button-right').css('background','url("../image/buttonRight.png") no-repeat');
        $('.countryOverflow-button-right').css('background-size','100% 100%');
    }
}

(function($,h,c){var a=$([]),e=$.resize=$.extend($.resize,{}),i,k="setTimeout",j="resize",d=j+"-special-event",b="delay",f="throttleWindow";e[b]=250;e[f]=true;$.event.special[j]={setup:function(){if(!e[f]&&this[k]){return false}var l=$(this);a=a.add(l);$.data(this,d,{w:l.width(),h:l.height()});if(a.length===1){g()}},teardown:function(){if(!e[f]&&this[k]){return false}var l=$(this);a=a.not(l);l.removeData(d);if(!a.length){clearTimeout(i)}},add:function(l){if(!e[f]&&this[k]){return false}var n;function m(s,o,p){var q=$(this),r=$.data(this,d);r.w=o!==c?o:q.width();r.h=p!==c?p:q.height();n.apply(this,arguments)}if($.isFunction(l)){n=l;return m}else{n=l.handler;l.handler=m}}};function g(){i=h[k](function(){a.each(function(){var n=$(this),m=n.width(),l=n.height(),o=$.data(this,d);if(m!==o.w||l!==o.h){n.trigger(j,[o.w=m,o.h=l])}});g()},e[b])}})(jQuery,this);