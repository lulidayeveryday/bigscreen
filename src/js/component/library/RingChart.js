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
            width:this.props.wid,
            height:this.props.heig,
        }
    }

    componentDidMount(){
        this.ringChart();
    }

    ringChart(){
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

            tooltip: {
                trigger: 'item',
                formatter: "{b}: <br/> {c}"
            },
            title: [
                {
                    text: "125684",
                    x: 'center',
                    y: 'center',
                    textStyle: {
                        fontWeight: 'normal',
                        color: "#54E0FB",
                        fontSize: 30
                    }
                },
                {
                    text: "总数",
                    x: 'center',
                    y: '25%',
                    textStyle: {
                        fontWeight: 'normal',
                        color: "#54E0FB",
                        fontSize: 17
                    }
                }
            ]
            ,
            color: ['#54E0FB', '#313443', '#fff'],
            series: [{
                name: 'Line 1',
                type: 'pie',
                clockWise: false,
                radius: ['70%', '78%'],
                itemStyle: dataStyles,
                hoverAnimation: false,

                data: [{
                    value: num,
                    name: '已完成'
                }, {
                    value: 100-num,
                    name: '未完成',
                    itemStyle: placeHolderStyles
                }

                ]
            }, {
                name: 'Line 2',
                type: 'pie',
                animation: false,
                clockWise: false,
                radius: ['89%', '90%'],
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
            },
            ]
        };

        var ringChart=echarts.init(this.refs.ringChart);
        ringChart.setOption(option);
        window.onresize = ringChart.resize;
    }

    render(){
        var self=this;
        return(
            <div ref="ringChart"  style={{height:self.state.height,width:self.state.width}}>

            </div>
        )
    }
}