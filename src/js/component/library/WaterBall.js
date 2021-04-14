/**
 *
 * title:
 *
 * description:
 *
 * @author: luli
 *
 * @date: 2018/3/20
 */
import React from 'react';
import echarts from 'echarts';
import liquidfill from 'echarts-liquidfill'

export default class WaterBall extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }
    }

    componentDidMount(){
        var option = {
            series: [{
                type: 'liquidFill',
                data: [0.6, 0.5, 0.4, 0.3],
                radius: '80%',
                label: {
                    normal: {
                        // textStyle: {
                        color: 'red',
                        insideColor: 'yellow',
                        fontSize: 50
                        // }
                    }
                }
            }]
        };
        var self=this;

        var waterChart=echarts.init(self.refs.waterBall);
        waterChart.setOption(option);
        window.onresize=waterChart.resize;
    }

    render(){
        return(
            <div ref="waterBall" style={{width:'150px',height:'100px'}}></div>
        )
    }
}