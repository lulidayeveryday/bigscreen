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
import './css/style.css';

export default class Schedule extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:this.props.data,
            rank:this.props.rank
        }
    }

    componentDidMount(){
        this.changeWidth(this.state.data);
    }

    componentWillReceiveProps(nextProps){
        this.changeWidth(nextProps.data);
    }

    changeWidth(num){
        var rank=this.state.rank;
        var width=num;
        var color;
        if(width<=65){
            color='#91C7AE';
        }else if(width<=85){
            color='#62859D';
        }else if(width<=100){
            color='#C23531';
        }
        $('#progress-bar'+rank).css("width",width+"%");
        $('#progress-bar'+rank).css("background-color",color);
        /*$('#schedule-num').html(width+"%");
        $('#schedule-num').css("color",color);
        $('#schedule-num').css("margin-left",width-3+"%");*/
    }

    render(){
        var self=this;
        return(
            <div style={{padding:"0px 0px"}}>
                <div className="progress">
                    <div className="progress-bar" id={"progress-bar"+self.state.rank}></div>
                </div>
            </div>
        )
    }
}