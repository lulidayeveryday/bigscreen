/**
 *
 * title:
 *
 * description:
 *
 * @author: luli
 *
 * @date: 2018/3/19
 */
import React from 'react';
import echarts from 'echarts';

export default class OilChart extends React.Component{
    constructor(props){
        super(props);
        this.state={
            width:this.props.wid,
            height:this.props.heig,
        }
    }

    componentDidMount(){
        var option = {
            tooltip : {
                formatter: "{a} <br/>{c} {b}"
            },
            series : [
                {
                    name: '实时流量',
                    type: 'gauge',
                    z: 3,
                    min: 0,
                    max: 240,
                    splitNumber: 4,
                    radius: '95%',
                    axisLine: {            // 坐标轴线
                        lineStyle: {       // 属性lineStyle控制线条样式
                            width: 5
                        }
                    },
                    axisTick: {            // 坐标轴小标记
                        length: 10,        // 属性length控制线长
                        lineStyle: {       // 属性lineStyle控制线条样式
                            color: 'auto'
                        }
                    },
                    pointer: { //仪表盘指针
                        show: 1,
                        length: '90%',
                        width: 4
                    },
                    splitLine: {           // 分隔线
                        length: 13,         // 属性length控制线长
                        lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                            color: 'auto'
                        }
                    },
                    title : {
                        textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                            fontWeight: 'bolder',
                            fontSize: 12,
                            fontStyle: 'italic',
                            color:'#aaa'
                        }
                    },
                    detail : {
                        textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                            fontWeight: 'bolder',
                            fontSize: 18,
                        }
                    },
                    data:[{value: 40, name: 'M/h'}]
                },
                {
                    name: '日均流量',
                    type: 'gauge',
                    min: 0,
                    max: 240,
                    splitNumber: 4,
                    radius: '95%',
                    axisLine: {            // 坐标轴线
                        lineStyle: {       // 属性lineStyle控制线条样式
                            width: 5
                        }
                    },
                    axisTick: {            // 坐标轴小标记
                        length: 10,        // 属性length控制线长
                        lineStyle: {       // 属性lineStyle控制线条样式
                            color: 'auto'
                        }
                    },
                    pointer: { //仪表盘指针
                        show: 1,
                        length: '90%',
                        width: 7
                    },
                    splitLine: {           // 分隔线
                        length: 13,         // 属性length控制线长
                        lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                            color: 'auto'
                        }
                    },
                    detail : {
                        show:false
                    },
                    data:[{value: 213, name: ''}]
                }
            ]
        };

        var myChart = echarts.init(this.refs.oilChart);
        myChart.setOption(option);
        window.onresize=myChart.resize;

        app.timeTicket = setInterval(function (){
            option.series[0].data[0].value = (Math.random()*100).toFixed(2) - 0;
            myChart.setOption(option,true);
        },2000);
    }

    render(){
        var self=this;
        return(
            <div style={{height:self.state.height,width:self.state.width}} ref="oilChart"></div>
        )
    }
}