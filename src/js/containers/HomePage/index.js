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
import './index.less';
import ThreeDRoll from '../../component/library/ThreeDRoll';
import Schedule from '../../component/library/schedule/Schedule';
import RingChart from '../../component/library/RingChart';
import NumRoll from '../../component/library/NumTest';
import OilChart from '../../component/library/OilChart';

export default class HomePage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            remTime:'05',
            bcaNum:'258741',
            etlNum:'147965'
        }
    }

    componentDidMount(){
        var self=this;
        var width=document.documentElement.clientWidth || document.body.clientWidth;
        var height=document.documentElement.clientHeight || document.body.clientHeight;
        $('.homePage-div').css("width",width);
        $('.homePage-div').css("height",height-10);
        var bcaNum=parseInt(self.state.bcaNum);
        var etlNum=parseInt(self.state.etlNum);
        setInterval(function (){
            bcaNum=bcaNum+18;
            etlNum=etlNum+24;
            self.setState({bcaNum:bcaNum+'',etlNum:etlNum+''});
        },2000);
    }

    render(){
        var self=this;
        return(
            <div className="homePage-div">
                <img className="homePage-div-bottom-border" src="/src/js/containers/HomePage/images/u96.png"/>
                <div className="homePage-top">
                    <div className="main-title">接口流程监控平台</div>
                    <img className="main-title-img" src="/src/js/containers/HomePage/images/u94.png"/>
                    <img className="main-title-img-logo" src="/src/js/containers/HomePage/images/u64.png"/>
                </div>
                <div className="homePage-central">
                    <div className="homePage-central-left">
                        <ThreeDRoll/>
                    </div>
                    <div className="homePage-central-right">
                        <div className="homePage-content-title"><span style={{'background-color':'#015ED0','border-radius': '3px'}}>&nbsp;BCA流程&nbsp;</span></div>
                        <div className="central-right-central">
                            <div className="central-right-centrals">
                                <p className="central-right-centrals-p">总任务</p>
                                <div style={{'margin-top':'20px'}}>
                                    <NumRoll data={self.state.bcaNum} rank="1"/>
                                </div>
                            </div>
                            <div className="central-right-centrals">
                                <div>
                                    <RingChart  wid={'100%'} heig={'120px'}/>
                                </div>
                            </div>
                            <div className="central-right-centrals">
                                <p className="central-right-centrals-title">超时流程数:25895</p>
                                <p className="central-right-centrals-title">系统检活:253</p>
                            </div>
                        </div>
                        <div className="central-right-top">
                            <div style={{width:'90%','margin-left':'5%'}}>
                                <span>日流程进度</span>
                                <span style={{float:'right'}}>预估剩余<span style={{'font-size':'25px',color:'#C23531'}}>&nbsp;{self.state.remTime}&nbsp;</span>小时</span>
                                <Schedule data={40}/>
                            </div>
                        </div>
                        <div className="homePage-content-title"><span style={{'background-color':'#015ED0','border-radius': '3px'}}>&nbsp;ETL流程&nbsp;</span></div>
                        <div className="central-right-bottom">
                            <div className="central-right-centrals">
                                <p className="central-right-centrals-p">总任务</p>
                                <div style={{'margin-top':'20px'}}>
                                    <NumRoll data={self.state.etlNum} rank="2"/>
                                </div>
                            </div>
                            <div className="central-right-centrals">
                                {/*<p className="central-right-centrals-p">完成情况</p>*/}
                                <div>
                                    <RingChart  wid={'100%'} heig={'120px'}/>
                                </div>
                            </div>
                            <div className="central-right-centrals">
                                <p className="central-right-centrals-title">超时流程数:25895</p>
                                <p className="central-right-centrals-title">系统检活:253</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="homePage-bottom">
                    <div className="homePage-bottom-left">
                        <div className="homePage-content-title"><span style={{'background-color':'#015ED0','border-radius': '3px'}}>&nbsp;DPI接口——汇聚流量设备流量接口&nbsp;</span></div>
                        <div className="homePage-bottom-left1">
                            <span>
                                <div>85684256M</div>
                                <p>日均流量/小时</p>
                            </span>
                            <span>
                                <div><OilChart wid={'100%'} heig={'100px'}/></div>
                                <p>实时流量</p>
                            </span>
                            <span>
                                <div>85684256M</div>
                                <p>上月日均/小时</p>
                            </span>
                        </div>
                        <div className="homePage-bottom-left1">
                            <span>
                                <div>85684256M</div>
                                <p>日均流量/小时</p>
                            </span>
                            <span>
                                <div><OilChart  wid={'100%'} heig={'100px'}/></div>
                                <p>实时流量</p>
                            </span>
                            <span>
                                <div>85684256M</div>
                                <p>上月日均/小时</p>
                            </span>
                        </div>
                    </div>
                    <div className="homePage-bottom-central">
                        <div className="homePage-content-title"><span style={{'background-color':'#015ED0','border-radius': '3px'}}>&nbsp;DPI接口——接口主机监控&nbsp;</span></div>
                        <table>
                            <tbody>
                                <tr>
                                    <th>&nbsp;</th>
                                    <th>文件大小</th>
                                    <th>CPU</th>
                                    <th>储存</th>
                                    <th>&nbsp;</th>
                                    <th>文件大小</th>
                                    <th>CPU</th>
                                    <th>储存</th>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>2364</td>
                                    <td>85764</td>
                                    <td className="table-part">36985</td>
                                    <td>4</td>
                                    <td>2364</td>
                                    <td>85764</td>
                                    <td>36985</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>2364</td>
                                    <td>85764</td>
                                    <td className="table-part">36985</td>
                                    <td>5</td>
                                    <td>2364</td>
                                    <td>85764</td>
                                    <td>36985</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>2364</td>
                                    <td>85764</td>
                                    <td className="table-part">36985</td>
                                    <td>6</td>
                                    <td>2364</td>
                                    <td>85764</td>
                                    <td>36985</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="homePage-bottom-right">
                        <div className="homePage-bottom-rights">
                            <div className="homePage-content-title"><span style={{'background-color':'#015ED0','border-radius': '3px'}}>&nbsp;总部kafka接口&nbsp;</span></div>
                            <span>
                                <div>254587</div>
                                <p>实时流量</p>
                            </span>
                            <span>
                                <div>254587</div>
                                <p>日累计</p>
                            </span>
                            <span>
                                <div>254587</div>
                                <p>日均</p>
                            </span>
                        </div>
                        <div className="homePage-bottom-right2">
                            <div className="homePage-content-title"><span style={{'background-color':'#015ED0','border-radius': '3px'}}>&nbsp;纵向上传接口&nbsp;</span></div>
                            <span>
                                <div>254587</div>
                                <p>总数</p>
                            </span>
                            <span>
                                <div>254587</div>
                                <p>已传数</p>
                            </span>
                            <span>
                                <div>254587</div>
                                <p>待传数</p>
                            </span>
                            <span>
                                <div>254587</div>
                                <p>超时数</p>
                            </span>
                        </div>
                        <div className="homePage-bottom-rights">
                            <div className="homePage-content-title"><span style={{'background-color':'#015ED0','border-radius': '3px'}}>&nbsp;指标上传接口&nbsp;</span></div>
                            <span>
                                <div>254587</div>
                                <p>总数</p>
                            </span>
                            <span>
                                <div>254587</div>
                                <p>已完成</p>
                            </span>
                            <span>
                                <div>254587</div>
                                <p>超时数</p>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}