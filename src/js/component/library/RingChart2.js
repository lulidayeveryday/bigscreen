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

export default class RingChart extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }
    }

    componentDidMount(){
        this.ringChart2();
    }

    ringChart2(){
        var percent = 0.7;


        var option = {

            title: {
                text: (percent * 100) + '%',
                x: 'center',
                y: 'center',
                textStyle: {
                    color: '#5CD99D',
                    fontWeight: 'bolder',
                    fontSize: 24,
                }
            },
            series: [{
                type: 'pie',
                radius: ['48%', '49%'],
                silent: true,
                label: {
                    normal: {
                        show: false,
                    }
                },

                data: [{
                    value: 1,
                    itemStyle: {
                        normal: {
                            color: '#6FA8C0',
                            shadowBlur: 10,
                            shadowColor: '#6FA8C0',
                        }
                    }
                }],

                animation: false
            },

                {
                    type: 'pie',
                    radius:  '70%',
                    z:1,
                    silent: true,
                    label: {
                        normal: {
                            show: false,
                        }
                    },

                    data: [{
                        value: 1,
                        itemStyle: {
                            normal: {
                                color: 'rgba(97,222,253,0.1)',
                            }
                        }
                    }],

                    animation: false
                },{
                    type: 'pie',
                    radius:  '85%',
                    z:1,
                    silent: true,
                    label: {
                        normal: {
                            show: false,
                        }
                    },

                    data: [{
                        value: 1,
                        itemStyle: {
                            normal: {
                                color: 'rgba(97,222,253,0.1)',
                            }
                        }
                    }],

                    animation: false
                },{
                    type: 'pie',
                    radius:  ['37%','38%'],
                    z:1,
                    silent: true,
                    label: {
                        normal: {
                            show: false,
                        }
                    },

                    data: [{
                        value: 1,
                        itemStyle: {
                            normal: {
                                color: '#5CD99D',
                            }
                        }
                    }],

                    animation: false
                },

                {
                    name: '已完成',
                    type: 'pie',
                    radius: ['43%', '48%'],
                    label: {
                        normal: {
                            show: false,
                        }
                    },
                    data: [{
                        value: percent,
                        itemStyle: {
                            normal: {
                                color: '#54E0FB',
                                shadowBlur: 10,
                                shadowColor: '#54E0FB'
                            }
                        }
                    }, {
                        value: 1 - percent,
                        itemStyle: {
                            normal: {
                                color: 'transparent'
                            }
                        }
                    }],

                    animationEasingUpdate: 'cubicInOut',
                    animationDurationUpdate: 500
                }
            ]
        };

        var ringChart=echarts.init(this.refs.ringChart);
        ringChart.setOption(option);
        window.onresize = ringChart.resize;
    }

    render(){
        return(
            <div ref="ringChart" style={{width:"100%",height:"240px"}}>

            </div>
        )
    }
}