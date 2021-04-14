/**
 *
 * title:
 *
 * description:
 *
 * @author: luli
 *
 * @date: 2018/3/12
 */
import React from 'react';
import './index.less';
import ThreeDRoll from '../../component/library/ThreeDRoll';

export default class PageTwo extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    render(){
        return(
            <div className="pageTwo-div">
                <ThreeDRoll/>
            </div>
        )
    }
}