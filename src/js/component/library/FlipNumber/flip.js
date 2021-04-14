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
 * @date 2017/3/25
 */

import React from 'react';
import FlipNumber from './flipNumber';

class Flip extends React.Component {
    constructor(props){
        super(props);
        this.state={
            currentNum:'51244295',
            nextNum:'51244300'
        };
    }
    componentDidMount() {

    }
    render(){
        var self =this;
        var num = self.props.num;
        var currentNum = self.props.currentNum;
        var nextNum = self.props.nextNum;

        var currentNum_array = String(currentNum).split('');
        var nextNum_array = String(nextNum).split('');

        let sixnum = num-currentNum_array.length;
        if(sixnum>0){
            for(let i=0;i<sixnum;i++){
                currentNum_array.unshift("0");
            }
        }
        let leng = currentNum_array.length - nextNum_array.length;
        if (leng!==0) {
            if (leng > 0) {
                for(let i=0;i<leng;i++){
                    nextNum_array.unshift("0");
                }
            } else {
                for(let j=0;j<leng;j++) {
                    currentNum_array.unshift("0");
                }
            }
        }
        // console.log(currentNum, nextNum);
        var fliplist = currentNum_array.map(function (item,index) {
            var nextdigit = nextNum_array[index];
            return (
                <div>
                    {/*size决定翻牌大小*/}
                    <FlipNumber size={self.props.size} currentNum={item} nextNum={nextdigit}/>
                </div>
            );
        });
        return (
            <div>
                {fliplist}
            </div>
        )
    }
}

export default Flip;
