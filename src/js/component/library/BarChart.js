/**
 *
 * title:
 *
 * description:
 *
 * @author: luli
 *
 * @date: 2018/3/9
 */
import React from 'react';
import echarts from 'echarts';
export default class BarChart extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }
    }

    componentDidMount(){
        this.barCharts();
    }

    barCharts(){
        var option = {
            backgroundColor: '#011c3a',
            xAxis: {
                data: ['涉恐人员', '涉稳人员', '涉毒人员', '在逃人员', '刑事犯罪\n前科、劣迹人员', '肇事肇祸\n精神病人', '重点上访\n人员'],
                axisLine: {
                    lineStyle: {
                        color: '#0177d4'
                    }
                },
                axisLabel: {
                    color: '#fff',
                    fontSize: 14
                }
            },
            yAxis: {
                name: "（人）",
                nameTextStyle: {
                    color: '#fff',
                    fontSize: 16
                },
                axisLine: {
                    lineStyle: {
                        color: '#0177d4'
                    }
                },
                axisLabel: {
                    color: '#fff',
                    fontSize: 16
                },
                splitLine: {
                    show:false,
                    lineStyle: {
                        color: '#0177d4'
                    }
                },
                interval:500,
                max:5000

            },
            series: [{
                type: 'bar',
                barWidth: 18,
                itemStyle:{
                    normal:{
                        color:new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#00b0ff'
                        }, {
                            offset: 0.8,
                            color: '#7052f4'
                        }], false)
                    }
                },
                data: [254, 3254, 1654, 2454, 4757, 2011, 1211]
            }]
        };
        var barChart=echarts.init(this.refs.barChart);
        barChart.setOption(option);
        window.onresize=barChart.resize;
    }

    render(){
        return(
            <div ref="barChart" style={{width:'400px',height:'250px'}}></div>
        )
    }
}