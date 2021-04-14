/**
 *
 * <p>Title: BONC - React </p>
 *
 * <p>Description:  </p>
 *
 * <p>Copyright: Copyright BONC(c) 2013 - 2025 </p>
 *
 * <p>Company: 北京东方国信科技股份有限公司 </p>
 *
 * @author RAN
 * @date 2017/3/20
 */

import React from 'react';
import classNames from 'classnames';
import style from './flipNumber.css';

class FlipNumber extends React.Component {
    constructor(props){
        super(props);
        this.state={
            currentNum: '4',
            nextNum: '2'
        };
    }
    componentDidMount() {
        var self = this;
        var currentNum = self.props.currentNum;
        var nextNum = self.props.nextNum;
        self.flipNum(currentNum,nextNum, self.refs);
    }
    componentWillReceiveProps(nextProps, nextState) {
         // debugger;
        if (nextProps != null && (this.state.currentNum != nextProps.currentNum || this.state.nextNum != nextProps.nextNum)  && nextProps.currentNum !=  nextProps.nextNum) {
            this.setState({
                currentNum: nextProps.currentNum,
                nextNum: nextProps.nextNum
            });
        }
    }
    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps != null && (this.state.currentNum != nextProps.currentNum || this.state.nextNum != nextProps.nextNum) && nextProps.currentNum !=  nextProps.nextNum) {
            return true;
        }
        return false;
    }
    componentDidUpdate() {
        var self = this;
        var currentNum = self.props.currentNum;
        var nextNum = self.props.nextNum;
        // debugger;
        // console.log(currentNum,nextNum);
        if(currentNum !== null && nextNum !== null){
            self.flipNum(currentNum,nextNum, self.refs);
        }
    }

    flipNum(cNum,nNum, flipDiv){
        let index = 0;
        function Countdown(time,nextTime, el, flipDiv) {
            _(this).bindAll('executeAnimation', 'finishAnimation');
            this.setVars.apply(this, arguments);
            //this.update();
        };
        Countdown.prototype = {
            duration: 1000,
            setVars: function (time,nextTime, els, flipDiv) {
                this.max = time;
                this.time = time;
                $(flipDiv.flip).empty();
                $(flipDiv.flip).removeClass("up down changing changed");
                //this.el = el;
                // debugger;
                this.el = flipDiv.flip;
                /*for (let k=els.length -1;k >= 0;k--){
                    // if (els[k].childNodes.length == 0){
                        this.el = els[k];
                    console.log("----flipNumber222----");
                    // }
                }*/
                this.nextTime = nextTime;

                this.checkTime();
                this.setSizes();
                this.setupAnimation();
                _.delay(this.executeAnimation.bind(this), 20);
                _(this.finishAnimation).delay(this.duration * 0.9);
                //_(this.update).delay(this.duration);
            },
            checkTime: function () {
                this.nextTime < this.time ? this.toggleDirection(style["up"], style["down"]) : this.toggleDirection(style["down"], style["up"]);
            },
            toggleDirection: function (add, remove) {
                this.el.classList.add(add);
                this.el.classList.remove(remove);
            },
            setSizes: function () {
                this.currentSize = this.getSize(this.time);
                this.nextSize = this.getSize(this.nextTime);
            },
            getSize: function (time) {
                return '';
            },
            setupAnimation: function () {

                var ctime = this.time;
                var ntime = this.nextTime;
                // this.el.innerHTML = "<span class='current top'>"+ctime+"</span><span class='next top'>"+ntime+"</span><span class='current bottom'>"+ctime+"</span><span class='next bottom'>"+ntime+"</span>";
                this.el.innerHTML = "<span class='" +
                    classNames(style["current"], style["top"]) + "'>"+ctime+"</span><span class='" +
                    classNames(style["next"], style["top"]) + "'>"+ntime+"</span><span class='" +
                    classNames(style["current"], style["bottom"]) + "'>"+ctime+"</span><span class='" +
                    classNames(style["next"], style["bottom"])+ "'>"+ntime+"</span>";
                this.el.classList.remove('changed');
            },
            executeAnimation: function () {
                this.el.classList.add('changing');
            },
            finishAnimation: function () {
                this.el.classList.add('changed');
                this.el.classList.remove('changing');
            }
        };
        //debugger;
        new Countdown(cNum,nNum, document.querySelectorAll('.count'), flipDiv);
    }

    render(){
        var self = this;
        var size = self.props.size;
        var classname = "count"+" "+size;
        // console.log("----flipNumber----");

        return (
            <div className={classNames(style["count"], style[self.props.size])} ref="flip"></div>
        )
    }
}

export default FlipNumber;