/**
 *
 * title:
 *
 * description:
 *
 * @author: luli
 *
 * @date: 2018/3/14
 */
import React from 'react';
import './NumTest.less';

export default class NumTest extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:this.props.data,
            num:[],
            rank:this.props.rank
        }
    }

    componentWillMount(){
        var nums=this.state.data;
        this.setState({num:nums.split("")})
    }

    componentDidMount(){
        var nums=this.state.num;
        this.changeNum(nums);
    }

    componentWillReceiveProps(nextProps){
        this.setState({num:nextProps.data.split("")});
    }

    componentDidUpdate(){
        var nums=this.state.num;
        var self=this;
        nums.map(function (i_data,index) {
            $('.num-span-'+self.state.rank+(nums.length-1-index)).css('margin-top',-i_data+'em')
        })
    }

    changeNum(nums){
        var self=this;
        nums.map(function (i_data,index) {
            $('.num-span-'+self.state.rank+(nums.length-1-index)).css('margin-top',-i_data+'em')
        })

    }

    changeNumTest(e) {
        var nums = e.target.value.split("");
        this.setState({num: nums});
    }

    render(){
        var self=this;
        return(
            <div style={{overflow:"hidden"}}>
                <div className="num_span">
                    {
                        self.state.num.map(function (i_data,index) {
                            return(
                                <span className={"num-span-"+self.state.rank+index} key={index}>0123456789</span>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}