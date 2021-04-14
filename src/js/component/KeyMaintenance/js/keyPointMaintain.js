var webpath = 'http://10.93.16.18:8097/';
//var webpath = 'http://10.93.57.136:8201/';
var echartsArr = [];
//获取数据集
function getBanliliang(tabidx){
	//获取实时办理量统计5个页面 01 - 05
//	for(var tabidx = 1; tabidx < 6; tabidx++){
		$.ajax({
			url: webpath + 'stockBigScreen/realTimeHandle?areaId=-1&productClassId=0'+tabidx,
			dataType:"json",
			cache:false,
			success:function(data){
					var pageData = data.realTimeHandle;
					$('#dayHandleNumber'+tabidx).html(pageData.dayHandleNumber);
					$('#monthHandleNumber'+tabidx).html(pageData.monthHandleNumber);
					for(var i = 0; i< echartsArr.length; i++){
						if(echartsArr[i].divId == '#gauage_container'+tabidx){
							var optionobj = echartsArr[i].chartObj.getOption();
							optionobj.series[0].data[0].value = pageData.dayHandleNumber_tb;
							echartsArr[i].chartObj.setOption(optionobj)
						}
					}
			},
			error:function(data){
				alert(JSON.stringify(data));
			}
		}); 
//	}
}
function getWeiduCity(tabidx){
	//获取5个页面维度统计按地市 01 - 05
//	for(var tabidx = 1; tabidx < 6; tabidx++){
		$.ajax({
			url: webpath + 'stockBigScreen/areaNoDimension?areaId=-1&productClassId=0'+tabidx,
			dataType:"json",
			cache:false,
			success:function(data){
					var pageData = data.areaNoDimension;
					//柱状图赋值
					var maxData = 3000;
					for(var i=0; i<pageData.areaMonNumber_lj.length;i++){
						if(parseInt(pageData.areaMonNumber_lj[i].replace(/,/g,'')) > maxData){
							maxData = parseInt(pageData.areaMonNumber_lj[i].replace(/,/g,''));
							}
				  }
					for(var i = 0; i< echartsArr.length; i++){
						if(echartsArr[i].divId == '#rt_bar'+tabidx){
							var optionobj = echartsArr[i].chartObj.getOption();
							optionobj.series[0].data = pageData.areaDayNumber;//日办理量
							optionobj.series[1].data = pageData.areaMonNumber_lj;//本月累计办理量
							optionobj.series[2].data = pageData.areaNumber_tb;//同比
							optionobj.xAxis[0].data = pageData.areaDesc;//地市
							optionobj.yAxis[0].max = maxData;
							optionobj.yAxis[1].data = pageData.areaNumber_tb;
							optionobj.yAxis[1].max = Math.max.apply(null, pageData.areaNumber_tb);;
							echartsArr[i].chartObj.setOption(optionobj)
						}
					}
					//表格赋值
					var htmlStr = '';
					for(var i = 0; i<pageData.areaDesc.length; i++){
						htmlStr = htmlStr + '<tr><td>'+pageData.areaDesc[i]+'</td>';
						htmlStr = htmlStr + '<td>'+pageData.areaDayNumber[i]+'</td>';
						htmlStr = htmlStr + '<td>'+pageData.areaMonNumber_lj[i]+'</td>';
						if(pageData.areaNumber_tb[i] >= 0){
							htmlStr = htmlStr + '<td class="up-txt">'+pageData.areaNumber_tb[i]+'</td></tr>';
						}else{
							htmlStr = htmlStr + '<td class="down-txt">'+pageData.areaNumber_tb[i]+'</td></tr>';
						}
					}
					$('#rt_table'+tabidx+' tbody').html(htmlStr);
			},
			error:function(data){
				alert(JSON.stringify(data));
			}
		}); 
//	}
}

//重点产品办理统计数据获取
function getImportantProducts(tabidx,productidx){
//	for(var tabidx = 1; tabidx < 6; tabidx++){
//		for(var productidx = 1; productidx < 5; productidx++){ 
			//获取重点产品的办理量
			$.ajax({
				url: webpath + '/stockBigScreen/majorProductsProces?productClassId=0'+tabidx+'&productClassifyId='+productidx,
				dataType:"json",
				cache:false,
				success:function(data){
						var pageData = data.majorProductsProces;
						$('#dNum'+tabidx+'Product'+productidx).html(pageData.dayHandleNumber);
						$('#mNum'+tabidx+'Product'+productidx).html(pageData.monthHandleNumber);
						$('#tbNum'+tabidx+'Product'+productidx).html(pageData.dayHandleNumber_tb);
						if(pageData.dayHandleNumber_tb >= 0){
							$('#tbNum'+tabidx+'Product'+productidx).removeClass('upup downdown').addClass('upup');
						}else{
							$('#tbNum'+tabidx+'Product'+productidx).removeClass('upup downdown').addClass('downdown');
						}
				},
				error:function(data){
					alert(JSON.stringify(data));
				}
			}); 
			
			//获取重点产品的前三表格
			$.ajax({
				url: webpath + '/stockBigScreen/majorProductsTopThree?productClassId=0'+tabidx+'&productClassifyId='+productidx,
				dataType:"json",
				cache:false,
				success:function(data){
						var pageData = data.getMajorProductsTopThree;
						var htmlStr = '';
						for(var pnamec = 0; pnamec < pageData.productName.length; pnamec++){
							htmlStr = htmlStr + '<tr><td class="top'+(pnamec+1)+'"></td>';
							htmlStr = htmlStr + '<td>'+pageData.productName[pnamec]+'</td>';
                            htmlStr = htmlStr + '<td>'+pageData.productDayNumber[pnamec]+'</td>';
                            htmlStr = htmlStr + '<td>'+pageData.productMonthNumber[pnamec]+'</td>';
                            if(pageData.productDayNumber_tb[pnamec] >= 0){
                            	htmlStr = htmlStr + '<td class="up-txt">'+pageData.productDayNumber_tb[pnamec]+'</td></tr>';
                            }else{
                            	htmlStr = htmlStr + '<td class="down-txt">'+pageData.productDayNumber_tb[pnamec]+'</td></tr>';
                            }
						}
						$('#page'+tabidx+'Product'+productidx + ' tbody').html(htmlStr);
				},
				error:function(data){
					alert(JSON.stringify(data));
				}
			}); 
//		}
//	}
}

//根据渠道获取数据
function getChannelData(tabidx){
    debugger
	//for(var tabidx = 1; tabidx < 6; tabidx++){
		$.ajax({
			url: webpath + 'stockBigScreen/channelDimension?areaId=-1&productClassId=0'+tabidx,
			dataType:"json",
			cache:false,
			success:function(data){
                debugger
					var pageData = data.channelDimension;
					//柱状图赋值
					var maxData = 3000;
					for(var i=0; i<pageData.channelMonNumberLj.length;i++){
						if(parseInt(pageData.channelMonNumberLj[i].replace(/,/g,'')) > maxData){
							maxData = parseInt(pageData.channelMonNumberLj[i].replace(/,/g,''));
							}
				  }
				   
				   var maxDatad = 3000;
					for(var i=0; i<pageData.channelDayNumber.length;i++){
						if(parseInt(pageData.channelDayNumber[i].replace(/,/g,'')) > maxData){
							maxDatad = parseInt(pageData.channelDayNumber[i].replace(/,/g,''));
							}
				  }
					for(var i = 0; i< echartsArr.length; i++){
						if(echartsArr[i].divId == '#rb_bar'+tabidx){							
							var optionobj = echartsArr[i].chartObj.getOption();
							optionobj.series[0].data = pageData.channelDayNumber;//日办理量
							optionobj.series[1].data = pageData.channelMonNumberLj;//本月累计办理量
							optionobj.series[2].data = pageData.channelNumberTb;//同比
							optionobj.xAxis[0].data = pageData.channelTypeName;//地市
							optionobj.yAxis[0].max = maxData;
							optionobj.yAxis[1].data = pageData.channelNumberTb;
							optionobj.yAxis[1].max = Math.max.apply(null, pageData.channelNumberTb);;
							echartsArr[i].chartObj.setOption(optionobj) 
							
						}
					}
					//表格赋值
					var htmlStr = '';
					for(var pnamec = 0; pnamec < pageData.channelTypeName.length; pnamec++){
						htmlStr = htmlStr + '<tr><td>'+pageData.channelTypeName[pnamec]+'</td>';
                        htmlStr = htmlStr + '<td>'+pageData.channelDayNumber[pnamec]+'</td>';
                        htmlStr = htmlStr + '<td>'+pageData.channelMonNumberLj[pnamec]+'</td>';
                        if(pageData.channelNumberTb[pnamec] >= 0){
                        	htmlStr = htmlStr + '<td class="up-txt">'+pageData.channelNumberTb[pnamec]+'</td></tr>';
                        }else{
                        	htmlStr = htmlStr + '<td class="down-txt">'+pageData.channelNumberTb[pnamec]+'</td></tr>';
                        }
					}
					$('#rb_table'+tabidx+' tbody').html(htmlStr);
					
			},
			error:function(data){
                debugger
				alert(JSON.stringify(data));
			}
		}); 
//	}
}

//格式化数字数据
function toThousands(num) {
    var result = [ ], counter = 0;
    num = (num || 0).toString().split('');
    for (var i = num.length - 1; i >= 0; i--) {
        counter++;
        result.unshift(num[i]);
        if (!(counter % 3) && i != 0) { result.unshift(','); }
    }
    return result.join('');
}
//生成仪表盘
function generateGauge(obj){
    //仪表盘都用这个函数生成
    var myChart = echarts.init($(obj.divId)[0]);
    var screenObj = {splitNumber:5,detailFont:'30'};
    if($(document).width() < 1920){
        //屏幕宽度小于1920时候图形变换
        screenObj.splitNumber = 3;
        screenObj.detailFont = 16;
    }
    var option = {
	grid:{
	    bottom:'2%',
	    left:'1%'
	},
        title:{
            text: obj.title,
            textStyle:{
                color:'#afc3da',
                fontSize:12,
                fontWeight:'normal'
            },
            textAlign:'center',

            left:'48%',
            bottom:'13%'
        },
        series: [
            {
                center : ['50%', '70%'],
                radius: '90%',
                startAngle: 180,
                endAngle:0,
                type: 'gauge',
                axisLabel:{show:false},
                splitLine:{show:false},
                axisTick:{
                    length:15,
                    splitNumber:screenObj.splitNumber,
                    lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                        color: 'auto'
                    }
                },
                axisLine: {
                    lineStyle: {       // 属性lineStyle控制线条样式
                        color: [[0, '#4d48ed'],[0.25, '#219eff'],[0.6, '#15c6fe'],[0.8, '#1de4a9'],[1, '#fad00f']],
                        width: 0
                    }
                },
                pointer:{
                    width:6,
                    length:'65%',
                },
                itemStyle:{color:'#4958bb'},
                title:{show:false},
                detail:{
                    color:'#15c6ff',
                    fontSize: screenObj.detailFont,
                    fontFamily:'LetsgodigitalRegular',
                    formatter:'{value}%',
                    offsetCenter:['0%','45%']
                },
                data: [{value: obj.val, name: '累计同比'}]
            }
        ]
    };
    myChart.setOption(option, true);
    echartsArr.push({'divId':obj.divId,'chartObj':myChart});
}
//生成柱状-折线图
function initBarLine(obj){
    var option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                crossStyle: {
                    color: '#999'
                }
            }
        },
        grid:{
            left:'10%',
            right:'10%',
            bottom:'20%'
        },
        legend: {
            data:['日办理量','本月累计办理量','累计同比'],
            right:150,
            itemWidth:20,
            itemHeight:10,
	    itemGap:56,
            textStyle:{
                color:'#afc3da',
                fontSize:'13%'
            }
        },
        xAxis: [
            {
                type: 'category',
                data: obj.areaArr,
                axisLabel:{
                    fontSize:10,
                    show:true, 
                    rotate:-30
                }, 
                axisPointer: {
                    type: 'shadow'
                },
                axisLine:{
                    lineStyle:{
                        color:'#afc3da'
                    }
                },
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: '数据',
                min: 0,
                max:2500,
                show:true,
                axisLabel: {
                    formatter: '{value}',
                    color:'#afc3da',
                    fontSize:'12%'
                },
                axisLine:{
                    lineStyle:{
                        color:'#335c9c'
                    }
                },

                splitLine:{
                    show:false
                }
            },
            {
                type: 'value',
                show:true,
                name: '累计同比',
                min: -100,
                max:100,
                interval:20,
                axisTrick:{
                    show:false
                },
                axisLine:{
                    lineStyle:{
                        color:'#335c9c'
                    }
                },
                axisLabel: {
                    formatter: '{value} %',
                    color:'#afc3da',
                    fontSize:'12%'
                },
                splitLine:{
                    show:false
                }
            }
        ],
        series: [
            {
                name:'日办理量',
                type:'bar',
                barWidth:8,
                itemStyle:{
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
                        color: '#5251ca'
                    }, {
                        offset:0.5,
                        color:'#0571f2'
                    },{
                        offset: 1,
                        color: '#00bcff'
                    }]),
                    barBorderRadius:[10,10,0,0],
                },
                data:obj.rbll
            },
            {
                name:'本月累计办理量',
                type:'bar',
                barWidth:8,
                itemStyle:{
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#018bc9'
                    }, {
                        offset:0.5,
                        color:'#01a5b8'
                    },{
                        offset: 1,
                        color: '#02ad72'
                    }]),
                    barBorderRadius:[10,10,0,0],

                },
                data:obj.bylj
            },
            {
                name:'累计同比',
                type:'line',
                yAxisIndex: 1,
                itemStyle:{
                    color:'#ff605d'
                },
                data:obj.ljtb
            }
        ]
    };
    var targetDom = echarts.init($(obj.divId)[0]);
    targetDom.setOption(option)
	echartsArr.push({"divId":obj.divId,"chartObj":targetDom});
}
//生成右下柱状图
function initBar(obj){
    var option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                crossStyle: {
                    color: '#999'
                }
            }
        },
        grid:{
            left:'15%',
            right:'15%',
            bottom:'16%'
        },
        legend: {
            data:['日办理量','本月累计办理量'],
            right:150,
            itemWidth:20,
            itemHeight:8,
	    itemGap:56,
            textStyle:{
                color:'#afc3da',
                fontSize:10
            }
        },
        xAxis: [
            {
                type: 'category',
                data: obj.typeName,
                axisLabel:{
                    fontSize:10,
                    show:true, 
                    rotate:-30
                },
                axisPointer: {
                    type: 'shadow'
                },
                axisLine:{
                    lineStyle:{
                        color:'#afc3da'
                    }
                },
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: '',
                min: 0,
                max:2500,
                show:true,
                axisLabel: {
                    formatter: '{value}',
                    color:'#afc3da',
                    fontSize:'12%'
                },
                axisLine:{
                    lineStyle:{
                        color:'#335c9c'
                    }
                },
                splitLine:{
                    show:false
                }
            },
            {
                type: 'value',
                name: '',
                min: 0,
                max:2500,
                show:true,
                axisLabel: {
                    formatter: '{value}',
                    color:'#afc3da',
                    fontSize:'12%'
                },
                axisLine:{
                    lineStyle:{
                        color:'#335c9c'
                    }
                },
                splitLine:{
                    show:false
                }
            }
        ],
        series: [
            {
                name:'日办理量',
                type:'bar',
                barWidth:5,
                barGap:2,
                itemStyle:{
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#4f53cc'
                    }, {
                        offset:0.5,
                        color:'#076ff1'
                    },{
                        offset: 1,
                        color: '#00b9ff'
                    }]),
                    barBorderRadius:[10,10,0,0],
                },
                //data:[200, 490, 700, 2320]
                data:obj.rbll
            },
            {
                name:'本月累计办理量',
                type:'bar',
                barWidth:5,
								yAxisIndex:1,
                itemStyle:{
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#ff605d'
                    }, {
                        offset:0.5,
                        color:'#ff625b'
                    },{
                        offset: 1,
                        color: '#ff9d07'
                    }]),
                    barBorderRadius:[10,10,0,0],

                },

                //data:[260, 509, 900, 2064]
                data:obj.bylj
            }

        ]
    };
    //var targetDom = echarts.init($('#rb_bar')[0]);
    var targetDom = echarts.init($(obj.divId)[0]);
    targetDom.setOption(option);
    echartsArr.push({"divId":obj.divId,"chartObj":targetDom});
}


$(function(){
 /*var url = sessionStorage.roleId;
if(url == null){
window.location.href = "./login.html";
}*/
    //swiper初始化
    var mySwiper = new Swiper('.swiper_main', {
        autoplay:false,
        autoplay:{//可选选项，自动滑动
        	delay: 120000, //120s两分钟一滑动
    		disableOnInteraction:true
  		},
        speed:500,
        pagination: {
            el: '.main-pagination',
            clickable:true
        },
    });
    //左下角轮播
    var mySwiper2 = new Swiper('.lb_swiper', {
        autoplay:false,
		autoplay:{//可选选项，自动滑动
    		delay: 10000, //10s一滑动
    		disableOnInteraction:true
  		},
        speed:2000,
        pagination: {
            el: '.swiper-pagination2',
            clickable:true
        }
    });
    
    //仪表盘数据以及生成
    var gaugeObj = {"divId":"", "val":"0","title":"累计同比"};
    for(var i = 1; i < 6; i++){
    	gaugeObj.divId = '#gauage_container' + i;
    	generateGauge(gaugeObj);
    }
    
    //按地市柱状折线图
    var barlineObj={
        "divId":'',
        "ljtb":[0, 0,0, 0, 0, 0, 0, 0, 0, 0],
        "bylj":[0, 0,0, 0, 0, 0, 0, 0, 0, 0],
        "rbll":[0, 0,0, 0, 0, 0, 0, 0, 0, 0],
        "areaArr":['西安市','宝鸡市','咸阳市','渭南市','铜川市','延安市','榆林市','安康市','汉中市','商洛市']
    }
    for(var i = 1; i < 6; i++){
    	barlineObj.divId = '#rt_bar' + i;
    	initBarLine(barlineObj);
    }

    //按渠道柱状图
    var barObj={
        "divId":'',
        "bylj":[0, 0, 0, 0,  0],
        "rbll":[0, 0, 0, 0,0],
         "ljtb":[0, 0,0, 0,  0],
        "areaArr":["电话渠道",
            "电子渠道",
            "实体渠道",
            "政企渠道",
            "其他"]
    }
    for(var i = 1; i < 6; i++){
    	barObj.divId = '#rb_bar' + i;
    	initBarLine(barObj);
    }

    
  //动态获取数据 按页面循环获取
	for(var tabidx = 1; tabidx < 6; tabidx++){
		getBanliliang(tabidx);
		getWeiduCity(tabidx);
	    getChannelData(tabidx);
		var proNum = [
						 {"proId":["001","002","003","004","018"]},
						 {"proId":["005","006","017","019","023","024"]},
						 {"proId":["007","016"]},
						 {"proId":["011","009","020","008"]},
						 {"proId":["012","022","015","013","014","021"]}
					 ];  		
		//for(var productidx = 1; productidx < 5; productidx++){
		//	getImportantProducts(tabidx,productidx);
		//}
		for(var productidx = 0; productidx < proNum[tabidx-1].proId.length; productidx++){
				//alert(proNum[tabidx].proId[productidx]); 
				getImportantProducts(tabidx,proNum[tabidx-1].proId[productidx]); 	
		}
	}
	
	//十分钟重新获取数据
  var xh = setInterval(function(){ 
	   	for(var tabidx = 1; tabidx < 6; tabidx++){ 
			getBanliliang(tabidx);
			getWeiduCity(tabidx);
		    getChannelData(tabidx);
			var proNum = [
						 {"proId":["001","002","003","004","018"]},
						 {"proId":["005","006","017","019","023",,"024"]},
						 {"proId":["007","016"]},
						 {"proId":["011","009","020","008"]},
						 {"proId":["012","022","015","013","014","021"]}
					 ];  		
			//for(var productidx = 1; productidx < 5; productidx++){
			//	getImportantProducts(tabidx,productidx);
			//}
			for(var productidx = 0; productidx < proNum[tabidx-1].proId.length; productidx++){
					//alert(proNum[tabidx].proId[productidx]); 
					getImportantProducts(tabidx,proNum[tabidx-1].proId[productidx]); 	
			}
		}
  },600000);

});