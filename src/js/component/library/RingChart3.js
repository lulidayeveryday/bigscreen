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
                    color: '#C56CFF',
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
                            color: '#743A67',
                            shadowBlur: 10,
                            shadowColor: '#743A67',


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
                                color: 'rgba(116,58,103,0.2)',
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
                                color: 'rgba(116,58,103,0.2)',
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
                                color: '#C56CFF',
                            }
                        }
                    }],

                    animation: false
                },

                {
                    name: 'main',
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
                                color: '#AD4395',
                                shadowBlur: 10,
                                shadowColor: '#AD4395'
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