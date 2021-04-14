import React from 'react';
import './index.less';
import PieGaougeChart from '../../component/library/PieGaougeChart';
import RingCharts from '../../component/library/RingChart';
import RingChart from '../../component/library/RingChart2';
import RingChart2 from '../../component/library/RingChart3';
import OilChart from '../../component/library/OilChart';
import Schedule from '../../component/library/schedule/Schedule';

export default class NewPage extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }
    }

    componentDidMount(){
        var self=this;
        var width=document.documentElement.clientWidth || document.body.clientWidth;
        var height=document.documentElement.clientHeight || document.body.clientHeight;
        $('.newPage-div').css("width",width);
        $('.newPage-div').css("height",height);
    }

    render(){
        return(
            <div className="newPage-div">
                <div className="newPage-top">
                    <span className="newPage-top-title">接口流程监控平台</span>
                </div>
                <div className="newPage-central-top">
                    <div className="newPage-central-left">
                        <span className="newPage-content-title">{"》BCA流程"}
                            <img className="newPage-content-image" src="/src/js/containers/NewPage/images/red.png"/>
                        </span>
                        <div className="newPage-central-left-div">
                            <RingChart/>
                        </div>
                        <div className="newPage-central-left-div">
                            <table className="newPage-central-table">
                                <tbody>
                                <tr>
                                    <td className="newPage-central-table-td1">总任务:</td>
                                    <td className="newPage-central-table-td2">12654785</td>
                                </tr>
                                <tr>
                                    <td className="newPage-central-table-td1">超时数:</td>
                                    <td className="newPage-central-table-td2">2584123</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="newPage-central-central">
                        <PieGaougeChart/>
                    </div>
                    <div className="newPage-central-right">
                        <span className="newPage-content-title">{"》ETL流程"}
                            <img className="newPage-content-image" src="/src/js/containers/NewPage/images/green.png"/>
                        </span>
                        <div className="newPage-central-left-div">
                            <table className="newPage-central-table" style={{'text-align': 'right'}}>
                                <tbody>
                                <tr>
                                    <td className="newPage-central-table-td1">总任务:</td>
                                    <td className="newPage-central-table-td2">12654785</td>
                                </tr>
                                <tr>
                                    <td className="newPage-central-table-td1">超时数:</td>
                                    <td className="newPage-central-table-td2">2584123</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="newPage-central-left-div">
                            <RingChart/>
                        </div>
                    </div>
                </div>
                <div className="newPage-central-bottom">
                    <div className="newPage-central-bottom-left">
                        <span className="newPage-content-title">{"》总部kafka接口"}</span>
                        <div className="newPage-content-legend">
                            <span style={{width: '30px',height: '13px',margin: '10px 10px 0 80px','background-color': '#678EA7','border-radius': '4px'}}></span>
                            <span>实时流量</span>
                            <span style={{width: '30px',height: '8px',margin: '10px 10px 0 30px','background-color': '#678EA7','border-radius': '4px'}}></span>
                            <span>日均流量</span>
                        </div>
                        <div className="newPage-central-bottom-div1">
                            <OilChart wid={'180px'} heig={'170px'}/>
                        </div>
                        <div className="newPage-central-bottom-div2">
                            <span style={{color:'#88d5e5','font-size':'25px','font-wight':'500'}}>上月日均</span>
                            <span style={{color:'#E0E7ED'}}>2563212542</span>
                        </div>
                    </div>
                    <div className="newPage-central-bottom-left">
                        <span className="newPage-content-title">{"》纵向上传接口"}</span>
                        <div className="newPage-content-legend">
                        </div>
                        <div className="newPage-central-bottom-div1" style={{'margin-top': '-15px'}}>
                            <RingCharts  wid={'180px'} heig={'170px'}/>
                        </div>
                        <div className="newPage-central-bottom-div2">
                            <span style={{color:'#88d5e5','font-size':'25px','font-wight':'500'}}>超时数</span>
                            <span style={{color:'#E0E7ED'}}>2369874</span>
                        </div>
                    </div>
                    <div className="newPage-central-bottom-left">
                        <span className="newPage-content-title">{"》指标上传接口"}</span>
                        <div className="newPage-content-legend">
                        </div>
                        <div className="newPage-central-bottom-div1" style={{'margin-top': '-15px'}}>
                            <RingCharts  wid={'180px'} heig={'170px'}/>
                        </div>
                        <div className="newPage-central-bottom-div2">
                            <span style={{color:'#88d5e5','font-size':'25px','font-wight':'500'}}>超时数</span>
                            <span style={{color:'#E0E7ED'}}>352146</span>
                        </div>
                    </div>
                    <div className="newPage-central-bottom-right">
                        <span className="newPage-content-title">{"》DPI接口——汇聚流量设备流量接口"}</span>
                        <div className="newPage-content-legend">
                            <span style={{width: '30px',height: '13px',margin: '10px 10px 0 210px','background-color': '#678EA7','border-radius': '4px'}}></span>
                            <span>实时流量</span>
                            <span style={{width: '30px',height: '8px',margin: '10px 10px 0 30px','background-color': '#678EA7','border-radius': '4px'}}></span>
                            <span>日均流量</span>
                        </div>
                        <div className="newPage-central-bottom-div1">
                            <OilChart wid={'210px'} heig={'170px'}/>
                        </div>
                        <div className="newPage-central-bottom-div2">
                            <span style={{color:'#E0E7ED','line-height': '60px'}}>←&nbsp;3641289365</span>
                            <span style={{color:'#88d5e5','font-size':'25px','font-wight':'500','line-height': '40px'}}>上月日均</span>
                            <span style={{color:'#E0E7ED','line-height': '60px'}}>2563212542&nbsp;→</span>
                        </div>
                        <div className="newPage-central-bottom-div1">
                            <OilChart wid={'210px'} heig={'170px'}/>
                        </div>
                    </div>
                </div>
                <div className="newPage-bottom">
                    <div className="newPage-bottom-left">
                        <span className="newPage-content-title">{"》DPI接口——接口主机监控(1)"}</span>
                        <table>
                            <tbody>
                            <tr>
                                <th>接口名称</th>
                                <th>文件大小</th>
                                <th>CPU</th>
                                <th>储存</th>
                            </tr>
                            <tr>
                                <td>接口1</td>
                                <td>9658.7M</td>
                                <td><span className="content-tible-scal"><Schedule data={1256/4096*100} rank="11"/></span>&nbsp;<span style={{width:'100px',display:'inline-block'}}>1256M/4G</span></td>
                                <td><span className="content-tible-scal"><Schedule data={858/1024*100} rank="12"/></span>&nbsp;<span style={{width:'100px',display:'inline-block'}}>858G/1T</span></td>
                            </tr>
                            <tr>
                                <td>接口2</td>
                                <td>1124.7M</td>
                                <td><span className="content-tible-scal"><Schedule data={4095/4096*100} rank="21"/></span>&nbsp;<span style={{width:'100px',display:'inline-block'}}>4095M/4G</span></td>
                                <td><span className="content-tible-scal"><Schedule data={100/1024*100} rank="22"/></span>&nbsp;<span style={{width:'100px',display:'inline-block'}}>8G/1T</span></td>
                            </tr>
                            <tr>
                                <td>接口3</td>
                                <td>76.7M</td>
                                <td><span className="content-tible-scal"><Schedule data={2095/4096*100} rank="31"/></span>&nbsp;<span style={{width:'100px',display:'inline-block'}}>2095M/4G</span></td>
                                <td><span className="content-tible-scal"><Schedule data={989/1024*100} rank="32"/></span>&nbsp;<span style={{width:'100px',display:'inline-block'}}>989G/1T</span></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="newPage-bottom-right">
                        <span className="newPage-content-title">{"》DPI接口——接口主机监控(2)"}</span>
                        <table>
                            <tbody>
                            <tr>
                                <th>接口名称</th>
                                <th>文件大小</th>
                                <th>CPU</th>
                                <th>储存</th>
                            </tr>
                            <tr>
                                <td>接口4</td>
                                <td>35.7M</td>
                                <td><span className="content-tible-scal"><Schedule data={1256/4096*100} rank="41"/></span>&nbsp;<span style={{width:'100px',display:'inline-block'}}>1256M/4G</span></td>
                                <td><span className="content-tible-scal"><Schedule data={858/1024*100} rank="42"/></span>&nbsp;<span style={{width:'100px',display:'inline-block'}}>858G/1T</span></td>
                            </tr>
                            <tr>
                                <td>接口5</td>
                                <td>21.7M</td>
                                <td><span className="content-tible-scal"><Schedule data={4095/4096*100} rank="51"/></span>&nbsp;<span style={{width:'100px',display:'inline-block'}}>4095M/4G</span></td>
                                <td><span className="content-tible-scal"><Schedule data={100/1024*100} rank="52"/></span>&nbsp;<span style={{width:'100px',display:'inline-block'}}>8G/1T</span></td>
                            </tr>
                            <tr>
                                <td>接口6</td>
                                <td>46.7M</td>
                                <td><span className="content-tible-scal"><Schedule data={2095/4096*100} rank="61"/></span>&nbsp;<span style={{width:'100px',display:'inline-block'}}>2095M/4G</span></td>
                                <td><span className="content-tible-scal"><Schedule data={989/1024*100} rank="62"/></span>&nbsp;<span style={{width:'100px',display:'inline-block'}}>989G/1T</span></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}