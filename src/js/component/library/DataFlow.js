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
import style from './DataFlow.less';

export default class DataFlow extends React.Component{
    // 默认静态的数据
    static defaultProps = {
        num: 9, // 默认数据流显示的条数
        leftOffside: 200, // 默认1080p分辨率下左侧数据流入口位置
    };

    constructor(props){
        super(props);
        this.state  = {
            interfaceNames: "宽带公司:三要素验证, 上海交行:用户状态验证, " +
            "宽带公司:实时位置接口, 宽带公司:历史位置验证, " +
            "宽带公司:黑名单查询接口, 宽带公司:评估用户名下手机号码数量, " +
            "宽带公司:呼叫转移验证, 宽带公司:用户沃信用分接口, 宽带公司:最近终端查询",
            flowData : [], // 经过处理的div数据格式
            newInterfaceNames: [],
            flowLeftArray: [] // 记录每个div的距离左侧的初始位置
        };
    }
    // 定义数据的流动方式
    /**
     * 限制只能取给出数据的前9组数据，如若不够，则全部取出；
     * 9组数据上下依次排列，从左到右顺序滚动；
     *
     * */
    getFlowData(interfaceNames) {
        let flowData = [];
        if (interfaceNames == null || interfaceNames == "") return flowData;
        let interfaceArray = interfaceNames.split(",");

        // 截取前9组数据循环显示
        // interfaceArray = interfaceArray.slice(0, this.props.num);
        // 给出随机9组数据
        interfaceArray = this.sliceArray(interfaceArray);

        var leftOffside = this.props.leftOffside;
        var flowLeftArray = [];
        flowData = interfaceArray.map(function(item, index) {
            let leftWidth = leftOffside + parseInt(Math.random()*700);
            flowLeftArray.push({
                left: "220px",
                middle: leftWidth,
                rightEnd: "1700px"
            });
            return <div className={style["data_flow_data_0"]} style={{left: leftWidth}}>{item}</div>;
        });

        /*this.setState({
         flowLeftArray: flowLeftArray
         });*/
        return flowData;
    }
    sliceArray(array) {
        var resultArray = [], arrayIndex = [];
        // 小于9组数据
        if (array.length <= this.props.num)
            return array.slice(0, this.props.num);

        while (resultArray.length != this.props.num) {
            let result = this.generateRandom(arrayIndex, array);
            if (!!result) {
                resultArray.push(result);
            }
        }

        return resultArray;
    }
    generateRandom(arrayIndex, interfaceArray) {
        var rand = parseInt(Math.random()*this.props.num);

        for(var i = 0 ; i < arrayIndex.length; i++){
            if(arrayIndex[i] == rand){
                return false;
            }
        }
        arrayIndex.push(rand);

        return interfaceArray[rand];
    }
    // 获取9组数据
    getInterfaceNames(interfaceNames) {
        let flowData = [];
        if (interfaceNames == null || interfaceNames == "") return flowData;
        let interfaceArray = interfaceNames.split(",");

        // 截取前9组数据循环显示
        // interfaceArray = interfaceArray.slice(0, this.props.num);
        // 给出随机9组数据
        interfaceArray = this.sliceArray(interfaceArray);

        return interfaceArray;
    }
    getFlowData2(interfaceNames) {
        let interfaceArray = this.getInterfaceNames(interfaceNames), flowData = [];

        var leftOffside = this.props.leftOffside;
        var flowLeftArray = [];
        flowData = interfaceArray.map(function(item, index) {
            let leftWidth = leftOffside + parseInt(Math.random()*700);
            flowLeftArray.push({
                left: "220px",
                middle: leftWidth,
                rightEnd: "1700px"
            });
            return '<div class="' + style["data_flow_data_0"] + '">' + item +'</div>';
        });

        /*this.setState({
         flowLeftArray: flowLeftArray
         });*/
        return flowData;
    }
    componentWillReceiveProps(nextProps) {
        let self = this;
        if (nextProps) {
            self.setState({
                interfaceNames: nextProps.dataFlow
            });
            self.setState({
                newInterfaceNames: self.getInterfaceNames(nextProps.dataFlow)
            });
        }
    }

    render() {
        // console.log(this.state.flowData);
        return(
            <div className={style["data_flow"]} ref="dataFlow">
                {/*{this.state.flowData}*/}
            </div>
        )
    }
    componentDidMount() {
        $(this.refs.dataFlow).empty();
        $(this.refs.dataFlow).append(this.getFlowData2(this.props.dataFlow));

        let self = this;
        $(this.refs.dataFlow).find("." + style["data_flow_data_0"]).each(function (index, element) {
            self.animate(this, index);
        });
    }
    animate(obj, index) {
        let time = parseInt(Math.random() * 5);
        let fromPosition = $(obj).css("left");
        // fromPosition = (fromPosition === "1700px" ? this.state.flowLeftArray[index].middle : )

        // return;
        // 判断上面的数据流从左往右流动，下面的数据流则从右往左进行流动
        if (index < 5) this.animateLeftToRight(obj, time, index);
        else if (index <= 9) this.animateRightToLeft(obj, time, index);
    }
    /**
     * 定义中间动态数据的流动方式:从右到左
     * @param obj
     */
    animateRightToLeft(obj, time, index) {
        var width= $('.three-d-roller-right').offset().left;
        var self = this;
        let timeTransfer = time * 1000, timeEndTransfer = timeTransfer / (($(obj).offset().left - 200)/50 );

        $(obj).animate({left: '250px'}, timeTransfer, 'linear', function () {
            //  console.log("---dataflow middle---", index);
        });

        // 数据淡出的效果:1秒
        $(obj).animate({left: '200px', opacity: 'toggle'}, timeEndTransfer,  'linear', function () {
            //console.log("---dataflow end---", index);
            callbackRightToLeft(obj);
        });

        function callbackRightToLeft(obj) {
            $(obj).css("left", width-250+'px');
            let time2 = parseInt(Math.random() * 10);
            let timeTransfer2 = time2 * 1000, timeStartTransfer2 = timeTransfer2 / 25 ,timeEndTransfer2 = timeStartTransfer2 ;

            // 数据淡入的效果:1秒
            $(obj).animate({left: width-300+'px', opacity: 'toggle'}, timeEndTransfer2, 'linear', function () {
                // console.log("---dataflow middle---", index);
            });

            $(obj).animate({left: '250px'}, timeTransfer2, 'linear', function () {
                // console.log("---dataflow middle---", index);
            });

            $(obj).animate({left: '200px', opacity: 'toggle'}, timeStartTransfer2, 'linear', function () {
                // 如果有新数据，则更新到数据流
                if (!!self.state.newInterfaceNames[index]) {
                    self.changeData(obj, self.state.newInterfaceNames[index]);
                }

                callbackRightToLeft(obj);
            });
        }
    }
    /**
     * 定义中间动态数据的流动方式:从左到右
     * @param obj
     */
    animateLeftToRight(obj, time, index) {
        var width= $('.three-d-roller-right').offset().left;
        var self = this;
        let timeTransfer = time * 1000, timeEndTransfer = timeTransfer / ((1500 - $(obj).offset().left)/50 );

        $(obj).animate({left: width-200+'px'}, timeTransfer, 'linear', function () {
            //  console.log("---dataflow middle---", index);
        });

        // 数据淡出的效果:1秒
        $(obj).animate({left: width-150+'px', opacity: 'toggle'}, timeEndTransfer, 'linear', function () {

            // 回调函数
            callbackLeftToRight(obj);
        });

        function callbackLeftToRight(obj) {
            $(obj).css("left", "200px");
            let time2 = parseInt(Math.random() * 10);
            let timeTransfer2 = time2 * 1000, timeStartTransfer2 = timeTransfer2 / 25 ,timeEndTransfer2 = timeStartTransfer2 ;

            // 数据淡入的效果:1秒
            $(obj).animate({left: '250px', opacity: 'toggle'}, timeStartTransfer2, 'linear', function () {
                // console.log("---dataflow middle---", index);
            });

            $(obj).animate({left: width-300+'px'}, timeTransfer2, 'linear', function () {
                // console.log("---dataflow middle---", index);
            });

            $(obj).animate({left: width-250+'px', opacity: 'toggle'}, timeEndTransfer2, 'linear', function () {

                // 如果有新数据，则更新到数据流
                if (!!self.state.newInterfaceNames[index]) {
                    self.changeData(obj, self.state.newInterfaceNames[index]);
                }

                callbackLeftToRight(obj);
            });
        }
    }
    changeData(obj, text) {
        $(obj).text(text);
    }
}