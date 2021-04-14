var routeTopData = [
  ['中上陵', '紫金山天文台', '长江大桥', '玄武湖', '秦淮河父子庙'],
  ['中上陵', '紫金山天文台', '长江大桥', '玄武湖', '秦淮河父子庙'],
  ['中上陵', '紫金山天文台', '长江大桥', '玄武湖', '秦淮河父子庙'],
  ['中上陵', '紫金山天文台', '长江大桥', '玄武湖', '秦淮河父子庙'],
  ['中上陵', '紫金山天文台', '长江大桥', '玄武湖', '秦淮河父子庙'],
]
var renderFunc = {
  renderRouteTop: function(data){
    var htmlStr = '';
    data.forEach(function(item){
      htmlStr += `<div class="route-column">`;
      item.forEach(function(i){
        htmlStr += `<div class="route-item"><span>${i}</span></div>`
      })
      htmlStr += `</div>`;
    })
  $('.route-content').html(htmlStr);
  }
}
var global = {
  contributeChart: null,
  stayChart: null
}
var analysis = {
  init: function(){
    //热门线路top5
    renderFunc.renderRouteTop(routeTopData);
    //旅游贡献TOP5
    global.contributeChart =  this.setBarChart('contribute-chart');
    global.stayChart = this.setBarChart('stay-chart');
    var that = this;
    // setTimeout(function(){
    //   that.updateBarChart(global.contributeChart);
    //   that.updateBarChart(global.stayChart)
    // },3000)
    //旅游资源
    this.setMapChart();
    this.setRelationChart();
    this.bindEvent();

  },
  bindEvent: function() {
    var _this = this;
    $('.mode-icon').click(function(){
      if(this.clicked){
        $('.bottom-top .title').text('长三角旅游浙江省内旅游贡献度TOP5')
        _this.updateBarChart(global.contributeChart);
        this.clicked = 0
      } else {
        $('.bottom-top .title').text('长三角区域旅游贡献度TOP5')
        _this.updateBarChart(global.contributeChart);
        this.clicked = 1
      }
    })
  },
  //初始化柱状图
  setBarChart: function(chartDomID, chartData) {
    var chart = echarts.init(document.getElementById(chartDomID));
    var option = {
      grid: {
        left: 30, 
        top: 20,
        right: 30,
        bottom: 26,
        containLabel: false,
      },
      xAxis: {
        boundaryGap: true,
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
        axisLabel: {
          textStyle: {
            color: '#fff'
          },
          fontWeight: 'bolder'
        },
        axisTick: {
          show: false
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: 'rgb(41,87,121)'
          }
        },
        nameGap: 0
      },
      yAxis: {
          type: 'value',
          show: false
      },
      series: [{
          data: [120, 200, 150, 80, 70],
          type: 'bar',
          barWidth: 20,
          label: {
            show: true,
            position: 'top',
            color: '#fff',
            formatter: '{c}万'
          },
          itemStyle: {
            normal: {
              barBorderRadius: 4,
                color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                        {offset: 0, color: 'rgb(31, 153, 231)'},
                        {offset: 0.5, color: 'rgb(37, 184, 215)'},
                        {offset: 1, color: 'rgb(44,221,198)'}
                    ]
                )
            }
        },
      }]
    }
    chart.setOption(option);
    var timer = null;
    window.addEventListener('resize', function(){
      clearTimeout(timer);
      timer = this.setTimeout(function(){
        console.log(timer);
        chart.resize();
      }, 200)
    })
    return chart;
  },
  // 更新柱状图
  updateBarChart: function (chartInstance, chartData) {
    chartInstance.setOption({
      series: [{
        data: [10, 200, 150, 80, 70],
      }],
      xAxis: {
        data: ['舟山市', '杭州市', '苏州市', '上海', '南京']
      }
    })
  },
  //初始化地图
  setMapChart: function (chartdata) {

    var chart = echarts.init(document.getElementById('resource-chart'));
    var five = {
      "石家庄": [114.48, 38.03],
      "西安": [108.95, 34.27],
      "成都": [104.06, 30.67],
      "重庆": [106.54, 29.59],
      "昆明": [102.73, 25.04],
    };
    var three = {
      "上海": [121.48, 31.22],
      "珠海": [113.52, 22.3],
      "三亚": [109.31, 18.14],
      "惠州": [114.4, 23.09],
      "海口": [110.35, 20.02],
      "合肥": [117.27, 31.86],
      "南京": [118.78, 32.04],
      "杭州": [120.19, 30.26],
      "苏州": [120.62, 31.32],
      "无锡": [120.29, 31.59],
      "昆山": [120.95, 31.39],
      "广州": [113.23, 23.16],
      "深圳": [114.07, 22.62],
    }
    var four = {
      "佛山": [113.11, 23.05],
      "东莞": [113.75, 23.04],
      "福州": [119.3, 26.08],
      "厦门": [118.1, 24.46],
      "南宁": [108.33, 22.84],
      "郑州": [113.65, 34.76],
      "武汉": [114.31, 30.52],
      "长沙": [113, 28.21],
      "南昌": [115.89, 28.68],
      "北京": [116.46, 39.92],
      "长春": [125.35, 43.88],
      "大连": [121.62, 38.92],
      "沈阳": [123.38, 41.8],
      "哈尔滨": [126.63, 45.75],
      "天津": [117.2, 39.13],
      "济南": [117, 36.65],
      "青岛": [120.33, 36.07],
      "太原": [112.53, 37.87],
    }
    var convertData = function (data, coordData) {
      var res = [];
      for (var i = 0; i < data.length; i++) {
        var geoCoord = coordData[data[i].name];
        if (geoCoord) {
          res.push({
            name: data[i].name,
            value: geoCoord.concat(data[i].value)
          });
        }
      }
      return res;
    };
    var option = {
      color: ['rgb(43,253,165)', 'rgb(55,243,236)', 'rgb(46,178,241)'],
      legend: {
        orient: 'vertical',
        align: 'left',
        itemWidth: 10,
        padding: [6, 10],
        y: 'top',
        x: 'right',
        // data: ['3A级景区', '4A级景区', '5A级景区'],
        textStyle: {
          color: '#fff',
          fontSize: 12
        },
        formatter: function (name) {
          var parts = name.split('-');
          return parts[0] + ' ' + parts[1] + '家';
        }
      },
      bmap: {
        center: [119.512751, 31.173666],
        zoom: 7,
        roam: false,
        mapStyle: {
          styleJson: [
            {
              "featureType": "land",
              "elementType": "geometry",
              "stylers": {
                "color": "#031629ff",
                "visibility": "on"
              }
            },
            {
              "featureType": "building",
              "elementType": "geometry",
              "stylers": {
                "color": "#2b2b2b"
              }
            },
            {
              "featureType": "highway",
              "elementType": "all",
              "stylers": {
                "lightness": -42,
                "saturation": -91,
                "visibility": "off"
              }
            },
            {
              "featureType": "arterial",
              "elementType": "geometry",
              "stylers": {
                "lightness": -77,
                "saturation": -94,
                "visibility": "off"
              }
            },
            {
              "featureType": "green",
              "elementType": "geometry",
              "stylers": {
                "color": "#1b1b1b"
              }
            },
            {
              "featureType": "water",
              "elementType": "geometry",
              "stylers": {
                "color": "#112e48ff",
                "visibility": "on"
              }
            },
            {
              "featureType": "subway",
              "elementType": "geometry.stroke",
              "stylers": {
                "color": "#181818",
                "visibility": "off"
              }
            },
            {
              "featureType": "airportlabel",
              "elementType": "geometry",
              "stylers": {
                "lightness": -52,
                "visibility": "off"
              }
            },
            {
              "featureType": "all",
              "elementType": "labels.text.stroke",
              "stylers": {
                "color": "#313131"
              }
            },
            {
              "featureType": "all",
              "elementType": "labels.text.fill",
              "stylers": {
                "color": "#8b8787"
              }
            },
            {
              "featureType": "manmade",
              "elementType": "geometry",
              "stylers": {
                "color": "#1b1b1b"
              }
            },
            {
              "featureType": "districtlabel",
              "elementType": "labels.text.stroke",
              "stylers": {
                "lightness": -75,
                "saturation": -91,
                "visibility": "on"
              }
            },
            {
              "featureType": "districtlabel",
              "elementType": "labels.icon",
              "stylers": {
                "lightness": -65,
                "visibility": "off"
              }
            },
            {
              "featureType": "districtlabel",
              "elementType": "labels.text.fill",
              "stylers": {
                "color": "#1a5e7dff",
                "visibility": "on"
              }
            },
            {
              "featureType": "railway",
              "elementType": "all",
              "stylers": {
                "visibility": "off"
              }
            }
          ]
        }
      },
      series: [
        {
          name: `3A级景区-${Object.keys(three).length}`,
          type: 'scatter',
          coordinateSystem: 'bmap',
          data: convertData([
            { name: "上海", },
            { name: "珠海", value: 91.5 },
            { name: "三亚", value: 98.4 },
            { name: "惠州", value: 92.8 },
            { name: "海口", value: 99.6 },
            { name: "合肥", value: 87.2 },
            { name: "南京", value: 94.8 },
            { name: "杭州", value: 93.9 },
            { name: "苏州", value: 90.5 },
            { name: "无锡", value: 95.4 },
            { name: "昆山", value: 91.8 },
            { name: "广州", value: 97.0 },
          ], three),
          symbolSize: 12,
          label: {
            normal: {
              show: false
            },
            emphasis: {
              show: false
            }
          },
          itemStyle: {
            normal: {
              backgroundColor: '#fff',
              borderWidth: 1
            }
          }
        },
        {
          name: `4A级景区-${Object.keys(four).length}`,
          type: 'scatter',
          coordinateSystem: 'bmap',
          data: convertData([
            { name: "深圳", value: 87.7 },
            { name: "佛山", value: 98.6 },
            { name: "东莞", value: 94.9 },
            { name: "福州", value: 95.2 },
            { name: "厦门", value: 89.6 },
            { name: "南宁", value: 98.6 },
            { name: "郑州", value: 94.7 },
            { name: "武汉", value: 97.4 },
            { name: "长沙", value: 95.5 },
            { name: "南昌", value: 97.9 },
            { name: "北京", value: 92.1 },
            { name: "长春", value: 93.0 },
            { name: "大连", value: 87.9 },
            { name: "沈阳", value: 97.4 },
            { name: "哈尔滨", value: 97.7 },
            { name: "天津", value: 94.9 },
            { name: "济南", value: 93.2 },
            { name: "青岛", value: 95.4 },
            { name: "太原", value: 98.4 },
          ], four),
          symbolSize: 12,
          label: {
            normal: {
              show: false
            },
            emphasis: {
              show: false
            }
          },
          itemStyle: {
            normal: {
              backgroundColor: '#fff',
              borderWidth: 1
            }
          }
        },
        {
          name: `3A级景区-${Object.keys(five).length}`,
          type: 'scatter',
          coordinateSystem: 'bmap',
          data: convertData([
            { name: "石家庄", value: 95.1 },
            { name: "西安", value: 95.6 },
            { name: "成都", value: 96.3 },
            { name: "重庆", value: 98.0 },
            { name: "昆明", value: 98.4 },

          ], five),
          symbolSize: 12,
          label: {
            normal: {
              show: false
            },
            emphasis: {
              show: false
            }
          },
          itemStyle: {
            normal: {
              backgroundColor: '#fff',
              borderWidth: 1
            }
          }
        }
      ]
    }
    chart.setOption(option)
    // setTimeout(function () {
    //   document.getElementsByClassName('ec-extension-bmap')[0].style.backgroundColor = 'transparent'
    // }, 100)
    window.addEventListener('resize', function () {
      chart.resize();
    })
  },
  //初始化关系图
  setRelationChart: function (chartData) {
    var chart = echarts.init(document.getElementById('relation-chart'));
    var graphData = [
      { x: 100, y: 155, name: '姚庄镇北鹤村' },
      { x: 215, y: 296, name: '大云镇缪家村' },
      { x: 154, y: 400, name: '秀洲潘家浜村' },
      { x: 223, y: 100, name: '广陈镇山塘村' },
      { x: 80, y: 20, name: '新丰镇竹林村' },
      { x: 394, y: 10, name: '新仓镇三叉河村' },
      { x: 296, y: 200, name: '凤桥镇永红村' },
      { x: 322, y: 360, name: '王店镇建林村' },
      { x: 311, y: 60, name: '桐乡墅丰村' },
      { x: 58, y: 180, name: '洲泉镇马鸣村' },
      { x: 79, y: 245, name: '乍浦镇马家荡村' },
      { x: 437, y: 300, name: '大麻镇海华村' },
      { x: 406, y: 120, name: '丁桥镇新仓村' },
      { x: 51, y: 50, name: '澉浦镇澉东村' },
      { x: 43, y: 401, name: '海盐紫金山村' },
      { x: 353, y: 481, name: '周王庙镇云龙村' }
    ];
    var link = [
      { source: '丁桥镇新仓村', target: '周王庙镇云龙村' },
      { source: '丁桥镇新仓村', target: '海盐紫金山村' }
    ]
    function processLink(link) {
      var temp = link.map(function(item){
        return [item.source, item.target];
      })
      console.log(temp)
      return temp.reduce(function(a, b) {
          return a.concat(b);
      },[])
    }
    var linkarr = processLink(link);
    var graphDatas=[];
    for(var i=0;i<graphData.length;i++){
        graphDatas[i]={
            name:graphData[i].name,
            x:graphData[i].x,
            y:graphData[i].y,
            symbol:'image://../resources/images/YangtzeAnalysis/relation-b.png'
        }
        if(linkarr.indexOf(graphDatas[i].name) == -1) {
          graphDatas[i].symbol = 'image://../resources/images/YangtzeAnalysis/relation-b.png'
        }else {
          graphDatas[i].symbol = 'image://../resources/images/YangtzeAnalysis/relation-a.png'
        }
    }
    var option = {
      series: [{
        type: 'graph',
        tooltip: {},
        symbolSize: 20,
        label: {
          normal: {
            position: ['0', '100%'],
            fontWeight: 'normal',
            fontSize: 10,
            formatter: '{b}',
            normal: {
              textStyle: {
                fontFamily: '宋体'
              }
            }
          }
        },
        edgeLabel: {
          normal: {
            textStyle: {
              fontSize: 12 ,
              fontWeight: 'bold',
              fontFamily: '宋体'
            }
          }
        },
        itemStyle: {
          normal: {
            label: {
              rotate: true,
              show: true,
              textStyle: {
                color: '#fff',
                fontWeight: 'bold',
                fontSize: 12
              }
            }
          },
          emphasis: {
            label: {
              show: true
            }
          }
        },
        data: graphDatas,
        links: link,
        lineStyle: {
          normal: {
            width: 2,
            color: '#fff',
            curveness: 0,
            type: "solid"
          }
        }
      }]
    }
    chart.setOption(option)
    var timer = null;
    window.addEventListener('resize', function(){
      clearTimeout(timer);
      timer = setTimeout(function(){
        chart.resize();
      },200)
    })
  }
}
$(function () {
  analysis.init();
  $('body').niceScroll();
})