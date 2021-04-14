/**
 *
 * title:
 *
 * description:
 *
 * @author: luli
 *
 * @date: 2018/3/15
 */
import React from 'react';
import echarts from 'echarts';
import './CarTable.less'

export default class CarTable extends React.Component{

    componentDidMount(){
        var option = {
            backgroundColor: '#1b1b1b',
            tooltip : {
                formatter: "{a} <br/>{c} {b}"
            },
            series : [
                {
                    name:'速度',
                    type:'gauge',
                    min:0,
                    max:30,
                    splitNumber:10,
                    radius: '90%',
                    axisLine: {            // 坐标轴线
                        lineStyle: {       // 属性lineStyle控制线条样式
                            color: [[0.09, 'lime'],[0.82, '#1e90ff'],[1, '#ff4500']],
                            width: 3,
                            shadowColor : '#fff', //默认透明
                            shadowBlur: 10
                        }
                    },
                    axisLabel: {            // 坐标轴小标记
                        textStyle: {       // 属性lineStyle控制线条样式
                            fontWeight: 'bolder',
                            color: '#fff',
                            shadowColor : '#fff', //默认透明
                            shadowBlur: 10
                        }
                    },
                    axisTick: {            // 坐标轴小标记
                        length :15,        // 属性length控制线长
                        lineStyle: {       // 属性lineStyle控制线条样式
                            color: 'auto',
                            shadowColor : '#fff', //默认透明
                            shadowBlur: 10
                        }
                    },
                    splitLine: {           // 分隔线
                        length :25,         // 属性length控制线长
                        lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                            width:3,
                            color: '#fff',
                            shadowColor : '#fff', //默认透明
                            shadowBlur: 10
                        }
                    },
                    pointer: {           // 分隔线
                        shadowColor : '#fff', //默认透明
                        shadowBlur: 5
                    },
                    title : {
                        textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                            fontWeight: 'bolder',
                            fontSize: 20,
                            fontStyle: 'italic',
                            color: '#fff',
                            shadowColor : '#fff', //默认透明
                            shadowBlur: 10
                        }
                    },
                    detail : {
                        backgroundColor: 'rgba(30,144,255,0.8)',
                        borderWidth: 1,
                        borderColor: '#fff',
                        shadowColor : '#fff', //默认透明
                        shadowBlur: 5,
                        offsetCenter: [0, '50%'],       // x, y，单位px
                        textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                            fontWeight: 'bolder',
                            color: '#fff'
                        }
                    },
                    data:[{value: 80, name: 'km/h'}]
                }
            ]
        };
        var myChart=echarts.init(this.refs.carTable);
        myChart.setOption(option);

        setInterval(function (){
            option.series[0].data[0].value = (Math.random()*100).toFixed(2) - 0;
            myChart.setOption(option);
        },2000)

    }

    render(){
        return(
            <div ref="carTable" className="carTable"></div>
        )
    }
}