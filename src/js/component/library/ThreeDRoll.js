/**
 *
 * title:
 *
 * description:
 *
 * @author: luli
 *
 * @date: 2018/3/13
 */
import React from 'react';
import './ThreeDRoll.less';
import DataFlow from './DataFlow';

export default class ThreeDRoll extends React.Component{
    constructor(props){
        super(props);
        this.state={
            dataFlow:"日接口监控:DPI接口, 日接口监控:总部kafka接口, " +
            "日接口监控:cbss文档接口, 日接口监控:纵向上传接口, " +
            "日接口监控:指标上传接口, 日流程监控:BCA流程, " +
            "日流程监控:ETL流程, 日流程监控:BCA流程, 日流程监控:ETL流程"
        }
    }

    render(){
        return(
            <div>
                <DataFlow dataFlow={this.state.dataFlow}/>
                <div>
                    <div className="three-d-roller-left"></div>
                    <div className="three-d-roller-middle"></div>
                    <div className="three-d-roller-right"></div>
                </div>
            </div>
        )
    }
}