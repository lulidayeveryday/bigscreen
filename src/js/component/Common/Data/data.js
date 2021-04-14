/**
 *
 * title:
 *
 * description:
 *
 * @author: luli
 *
 * @date: 2017/10/24
 */
import React from 'react';

export default class Data extends React.Component{
    constructor(props){
        super(props);
        this.state={
            date:'2017'
        }
    }

    componentDidMount(){
        var self=this;
        setInterval(function () {
            self.tick()
        },1000);
    }

    tick(){
        //定义时间格式
        Date.prototype.toLocaleString = function() {
            return this.getFullYear() + "年" + (this.getMonth() + 1) + "月" + this.getDate() + "日 " + this.getHours() + "点" + this.getMinutes() + "分" + this.getSeconds() + "秒";
        };
        var d = new Date();
        this.setState({date:d.toLocaleString()}) ;
    }

    render(){
        var self=this;
        // var element=self.tick()
        return(
            <div>
                <h1>Hello world</h1>
                <h2>it is {self.state.date}</h2>
            </div>
        )
    }
}