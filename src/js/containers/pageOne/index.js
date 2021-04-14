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
import './index.less';
import BarChart from '../../component/library/BarChart';
import NumTest from '../../component/library/NumTest';
import CarTable from '../../component/library/CarTable';
import Schedule from '../../component/library/schedule/Schedule';
import WordCloud from '../../component/Common/Test/wordCloud';

export default class PageOne extends React.Component{
    constructor(props){
        super(props);
        this.state={
            length:70,
            nums:'25869'
        }
    }

    numChange(){
        this.setState({nums:'25'})
    }

    render(){
        var self=this;
        return(
            <div className="bigscreen-pageone-div">
                {/*<input onClick={self.numChange.bind(this)}/>
                <Schedule data={this.state.length}/>
                <NumTest data={this.state.nums}/>*/}
                <WordCloud/>
            </div>
        )
    }
}