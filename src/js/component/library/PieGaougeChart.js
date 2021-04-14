/**
 *
 * title:
 *
 * description:
 *
 * @author: luli
 *
 * @date: 2018/3/16
 */
import React from 'react';
import echarts from 'echarts';

export default class PieGaugeChart extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }
    }

    componentDidMount(){
        this.ringChart();
    }

    ringChart(){
        var labelData = [];
        for (var i = 0; i < 200; ++i) {
            labelData.push({
                value: 1,
                name:i
            });
        }
        var dataStyle = {
            normal: {
                color:'rgba(83,226,252,.6)',
                label: {show:false},
                labelLine: {show:false},
                shadowBlur: 40,
                shadowColor: 'rgba(255, 255, 255, 1)',
            }
        };
        var dataStyle2 = {
            normal: {
                color:'#AA4486',
                label: {show:false},
                labelLine: {show:false},
                shadowBlur: 40,
                shadowColor: 'rgba(255, 255, 255, 0.5)',
            }
        };
        var dataStyle3 = {
            normal: {
                color:'#a68369',
                label: {show:false},
                labelLine: {show:false},
                shadowBlur: 40,
                shadowColor: 'rgba(40, 40, 40, 0.5)',
                borderColor:'#000',
                borderWidth:2
            }
        };
        var placeHolderStyle = {
            normal : {
                color: 'rgba(0,0,0,0)',
                label: {show:false},
                labelLine: {show:false}
            },
            emphasis : {
                color: 'rgba(0,0,0,0)'
            }
        };
        var num=65;
        var dataStyles = {
            normal: {
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                },
                shadowBlur: 3,
                shadowColor: 'rgba(255,255,255,0.3)'
            }
        };
        var placeHolderStyles = {
            normal: {
                color: 'rgba(44,59,70,1)',//未完成的圆环的颜色
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                }
            },
            emphasis: {
                color: 'rgba(44,59,70,1)'//未完成的圆环的颜色
            }
        };

        var option = {
            title: [
                {
                    text: "05"+"小时",
                    x: 'center',
                    y: 'center',
                    textStyle: {
                        fontWeight: '600',
                        color: "#DC1D83",
                        fontSize: 35
                    }
                },
                {
                    text: "预估剩余",
                    x: 'center',
                    y: '33%',
                    textStyle: {
                        fontWeight: '600',
                        color: "#DC1D83",
                        fontSize: 17
                    }
                },
                {
                    text: "BCA流程",
                    x: 'center',
                    y: '58%',
                    textStyle: {
                        fontWeight: '500',
                        color: "#FFF",
                        fontSize: 16
                    }
                }
            ],
            color: ['#DC1D83', '#313443', '#fff'],
            tooltip : {
                show: false,
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },

            series : [
                {
                    name:'Line 1',
                    type:'pie',
                    clockWise:false,
                    radius : ['118%','121%'],
                    itemStyle : dataStyle2,
                    hoverAnimation: false,
                    legendHoverLink: false,
                    data:[
                        {
                            value:35,
                            name:'invisible1',
                            itemStyle : placeHolderStyle
                        },{
                            value:50,
                            name:'02'
                        },
                        {
                            value:70,
                            name:'invisible2',
                            itemStyle : placeHolderStyle
                        },{
                            value:50,
                            name:'03'
                        },
                        {
                            value:35,
                            name:'invisible3',
                            itemStyle : placeHolderStyle
                        }

                    ]
                },
                {
                    name:'Line 1',
                    type:'pie',
                    clockWise:false,
                    radius : ['98%','99%'],
                    itemStyle : dataStyle,
                    hoverAnimation: false,
                    legendHoverLink: false,
                    data:[
                        {
                            value:50,
                            name:'01'
                        },
                        {
                            value:30,
                            name:'invisible1',
                            itemStyle : placeHolderStyle
                        },{
                            value:40,
                            name:'02'
                        },
                        {
                            value:30,
                            name:'invisible2',
                            itemStyle : placeHolderStyle
                        },{
                            value:40,
                            name:'03'
                        },
                        {
                            value:30,
                            name:'invisible3',
                            itemStyle : placeHolderStyle
                        }

                    ]
                },
                {
                    name:'Line 2',
                    type:'pie',
                    clockWise:false,
                    radius : ['97%','98%'],
                    itemStyle : dataStyle,
                    hoverAnimation: false,
                    startAngle:135,
                    legendHoverLink: false,
                    data:[
                        {
                            value:45,
                            name:'01'
                        },
                        {
                            value:50,
                            name:'invisible1',
                            itemStyle : placeHolderStyle
                        },{
                            value:30,
                            name:'02'
                        },
                        {
                            value:60,
                            name:'invisible2',
                            itemStyle : placeHolderStyle
                        },{
                            value:40,
                            name:'03'
                        },
                        {
                            value:50,
                            name:'invisible3',
                            itemStyle : placeHolderStyle
                        }
                    ]
                },
                {
                    name:'Line 3',
                    type:'pie',
                    clockWise:false,
                    radius : ['92%','94%'],
                    itemStyle : dataStyle,
                    hoverAnimation: false,
                    startAngle:180,
                    legendHoverLink: false,
                    data:[
                        {
                            value:45,
                            name:'01'
                        },
                        {
                            value:50,
                            name:'invisible1',
                            itemStyle : placeHolderStyle
                        },{
                            value:30,
                            name:'02'
                        },
                        {
                            value:60,
                            name:'invisible2',
                            itemStyle : placeHolderStyle
                        },{
                            value:40,
                            name:'03'
                        },
                        {
                            value:50,
                            name:'invisible3',
                            itemStyle : placeHolderStyle
                        }
                    ]
                },{
                    name:'Line 4',
                    type:'pie',
                    clockWise:false,
                    radius : ['80%','88%'],
                    itemStyle : dataStyle,
                    hoverAnimation: false,
                    startAngle:225,
                    legendHoverLink: false,
                    zlevel:1,
                    data:[
                        {
                            value:80,
                            name:'01'
                        },
                        {
                            value:20,
                            name:'invisible1',
                            itemStyle : placeHolderStyle
                        },{
                            value:60,
                            name:'02'
                        },
                        {
                            value:30,
                            name:'invisible2',
                            itemStyle : placeHolderStyle
                        },{
                            value:50,
                            name:'03'
                        },
                        {
                            value:10,
                            name:'invisible3',
                            itemStyle : placeHolderStyle
                        },{
                            value:20,
                            name:'04'
                        },
                        {
                            value:10,
                            name:'invisible4',
                            itemStyle : placeHolderStyle
                        }
                    ]
                },{
                    name:'Line 5',
                    type:'pie',
                    clockWise:false,
                    radius : ['82%','82.5%'],
                    itemStyle : dataStyle2,
                    hoverAnimation: false,
                    startAngle:225,
                    legendHoverLink: false,
                    zlevel:10,
                    data:[
                        {
                            value:80,
                            name:'01'
                        }
                    ]
                },{
                    name:'Line 6',
                    type:'pie',
                    clockWise:false,
                    radius : ['85%','85.5%'],
                    itemStyle : dataStyle2,
                    hoverAnimation: false,
                    startAngle:225,
                    legendHoverLink: false,
                    zlevel:10,
                    data:[
                        {
                            value:80,
                            name:'01'
                        }
                    ]
                },{
                    name:'Line 7',
                    type:'pie',
                    clockWise:false,
                    radius : ['77%','78%'],
                    itemStyle : dataStyle2,
                    hoverAnimation: false,
                    startAngle:225,
                    legendHoverLink: false,
                    data:[
                        {
                            value:80,
                            name:'01'
                        }
                    ]
                },{
                    name:'Line 8',
                    type:'pie',
                    clockWise:false,
                    radius : ['73%','75%'],
                    itemStyle : dataStyle3,
                    hoverAnimation: false,
                    startAngle:225,
                    legendHoverLink: false,
                    data:labelData
                },{
                    type: 'gauge',
                    radius: '70%',
                    min:0,
                    max:10,
                    startAngle: 120,
                    endAngle: -239.999999,
                    splitNumber:10,
                    axisLine: {
                        show: false,
                        lineStyle: {
                            width: 1,
                            shadowBlur: 0,
                            color: [
                                [1, '#000']
                            ]
                        }
                    },
                    axisTick: {
                        show: true,
                        lineStyle: {
                            color: '#8f8f8f',
                            width: 1
                        },
                        length: '-3%',
                        splitNumber: 50
                    },
                    splitLine: {
                        show: true,
                        length: 2,
                        lineStyle: {
                            color: '#8f8f8f',
                        }
                    },
                    axisLabel: {
                        show: false
                    },
                    detail: {
                        show: false
                    }
                },{
                    name: 'bar Line 1',
                    type: 'pie',
                    clockWise: false,
                    radius: ['43%', '58%'],
                    itemStyle: dataStyles,
                    hoverAnimation: false,

                    data: [{
                        value: num,
                        name: '01'
                    }, {
                        value: 100-num,
                        name: 'invisible',
                        itemStyle: placeHolderStyles
                    }

                    ]
                }, {
                    name: 'Line 2',
                    type: 'pie',
                    animation: false,
                    clockWise: false,
                    radius: ['64%', '65%'],
                    itemStyle: dataStyles,
                    hoverAnimation: false,
                    tooltip: {
                        show: false
                    },
                    data: [{
                        value: 100,
                        name: '02',
                        itemStyle: {
                            emphasis: {
                                color: '#313443'
                            }
                        }
                    }, {
                        value: 0,
                        name: 'invisible',
                        itemStyle: placeHolderStyles
                    }

                    ]
                }
            ]
        };

        var ringChart=echarts.init(this.refs.ringChart);
        ringChart.setOption(option);
        window.onresize = ringChart.resize;
    }

    render(){
        return(
            <div ref="ringChart" style={{width:'380px',height:"287px"}}>

            </div>
        )
    }
}