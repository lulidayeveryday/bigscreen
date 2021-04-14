/**
 *
 * title:
 *
 * description:
 *
 * @author: luli
 *
 * @date: 2017/10/23
 */

import React from 'react';
import echarts from 'echarts'
import fetchUtil from '../../component/Util/fetchUtil';
export default class Chart extends React.Component {
    componentDidMount(){
        this.renderChart();
        this.fetch();
    }
    fetch(){
        let url="http://localhost:28084/triber/touch/lwb/selectAreaSceneUser";
        fetchUtil('post',url,null).then((data)=>{
            console.log(data)
            }
        );
    }
    renderChart(){
        var option = {
            title : {
                text: '某站点用户访问来源',
                // subtext: '纯属虚构',
                x:'center'
            },
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            /* legend: {
             orient: 'vertical',
             left: 'left',
             data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
             },*/
            series : [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius : '55%',
                    center: ['50%', '60%'],
                    data:[
                        {value:335, name:'直接访问'},
                        {value:310, name:'邮件营销'},
                        {value:234, name:'联盟广告'},
                        {value:135, name:'视频广告'},
                        {value:1548, name:'搜索引擎'}
                    ],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        };
        var pieChart = echarts.init(this.refs.pieChart);
        pieChart.setOption(option);
        window.onresize = pieChart.resize;
    }
    render(){
        return(
            <div ref="pieChart" style={{width:"500px",height:"500px",border:"1px blue solid"}}></div>
        );
    }
}