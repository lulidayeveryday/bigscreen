$(function(){
    $(".setIcon").click(showNavTool);
    $(".closeBtn").click(closeNavTool);
    //日期控件
    // var atime = $('#dayDatePickDemo').peacock_datePicker({field:"dayDateIpt",onpicked:function(val){
    //     //console.log(val);
    // }});
    // //console.log(atime.getValue());
    // atime.setValue("20110909");

    //  showDate();


    $(".locPick").click(function(){
        setMaskShow();
    })
    getTitleList(titleList);
    $(".navBtn").click(function(e){
        e.stopPropagation();
        $(".subList>li").removeClass('active');
        $(".subList2>li").removeClass('active');
        $(".titleSelect>li").removeClass('active');
        $(".subList").css('display','none');
        $(".subList2").css('display','none');
        $(this).children(".titleSelect").slideToggle();
        if( $(this).children(".titleSelect").css('display')=='block'){
            $(document).click(function(){
                $(".subList>li").removeClass('active');
                $(".subList2>li").removeClass('active');
                $(".titleSelect>li").removeClass('active');
                $(".subList").css('display','none');
                $(".subList2").css('display','none');
                $(".titleSelect").slideUp();
            });
        }else{
            $(document).unbind('click');
        }

    });
    $(".toolContain>ul>li:nth-child(2)").click(function(){
        // if(IsFull()){
        //     exitFullScreen();
        // }else{
        //     fullScreen();
        // }
        toggleFullScreen();
    })
    $(".subList>li").click(function(e){

        e.stopPropagation();
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
        $(this).parent().parent().siblings().removeClass('active');
        $(this).parent().parent().addClass('active');
        if($(this).find('.subList2 li').length==0){
            // alert($(this).children('span').attr('title'));
            // alert($(this).parent().parent().children("span").attr('title'))
            $(".headDiv h2").html($(this).parent().parent().children("span").attr('title')+'-'+$(this).children('span').attr('title'));
            $(this).parent().slideToggle();
            $(this).parent().parent().parent().slideToggle();
            $(this).parent().children().removeClass('active');
            $(this).parent().parent().parent().children().removeClass('active');
            return;
        }
        $(this).siblings().children('.subList2').hide();
        var childW=$(this).children(".subList2").outerWidth();
        var thisW=$(this).outerWidth();
        var leftW=$(this).offset().left+$(this).outerWidth();
        var windowW=$(window).width();
        childW=parseFloat(childW);
        if(windowW-leftW<childW){

            $($(this).children('.subList2').css({
                'left':0-childW
            }))
        }else if(windowW-leftW>=childW){
            $($(this).children('.subList2').css({
                'left':0-childW
            }))
        }
//                console.log($(this).children(".subList2").outerWidth());
//                console.log($(window).width());
//                console.log($(this).offset().left+$(this).outerWidth());

        //alert($(this).children('.subList2').width());
        $(this).children('.subList2').slideToggle()

    })
    $(".subList2>li").click(function(e){
        e.stopPropagation();
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
        $(".headDiv h2").html($(this).parent().parent().parent().parent().children("span").attr('title')+'-'+$(this).attr('title'));
        $(this).parent().slideToggle();
        $(this).parent().parent().parent().slideToggle();
        $(this).parent().parent().parent().parent().parent().slideToggle();
    })
    $(".titleSelect>li").click(function(e){
        e.stopPropagation();
        $(this).siblings().children('.subList').hide();
        var childW=$(this).children(".subList").outerWidth();
        var thisW=$(this).outerWidth();
        var leftW=$(this).offset().left+$(this).outerWidth();
        var windowW=$(window).width();
        childW=parseFloat(childW);
        if(windowW-leftW<childW){

            $($(this).children('.subList').css({
                'left':0-childW
            }))
        }else if(windowW-leftW>=childW){
            $($(this).children('.subList').css({
                'left':0-childW
            }))
        }
//                console.log($(this).children(".subList").outerWidth());
//                console.log($(window).width());
//                console.log($(this).offset().left+$(this).outerWidth());
//                console.log($(this).width());
        $(this).children('.subList').slideToggle();
    })

/*    setSingleCircle('mid1');
    setSingleCircle('mid2');
    setSingleCircle('mid3');
    setSingleCircle('mid4');
    setSingleCircle('mid5');
    setSingleCircle('mid6');
    setSingleCircle('mid7');
    setSingleCircle('mid8');
    setSingleCircle('mid9');
    setSingleCircle('mid10');
    setGenderCircle('genderCircle');

    setMulCircle();
    setTop5(top5Data);
    setTSource(travelSource);*/


    // $("#rangeContainer").dragDivResize();
    bindResize(document.getElementById("rangeContainer"))
  /*  identifyLine();*/

    //获取地域数据
    getRangeData(locList);
    setMaskLocSome();
/*    //右上浏览历史
    getBrowsHis(browsData[0]);
    getBrowsHis(browsData[1]);
    getBrowsHis(browsData[2]);*/
    /*//设置字数
    setEllipss(".titleSelect>li>span",10);
    setEllipss(".subList>li>span",10);
    setEllipss(".subList2>li",10);
    setEllipss(".browsHistory>li .browsName",7);*/

})
function toggleFullScreen() {
    if (!document.fullscreenElement && // alternative standard method
        !document.mozFullScreenElement && !document.webkitFullscreenElement) {// current working methods
        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
        } else if (document.documentElement.mozRequestFullScreen) {
            document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullscreen) {
            document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
        }
    } else {
        if (document.cancelFullScreen) {
            document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
        }
    }
}
//设置mask显示
var setMaskShow=function(){
    $(".rangeMask").show();
    //设置mask左侧部分高度
    $(".leftDiv").each(function(){
        $(this).height($(this).siblings(".rightDiv").outerHeight()-5);
    });
}
//设置地区mask的相关项
var setMaskLocSome=function(){

    //设置关闭mask
    $(".closeMask").click(function(){
        $(".rangeMask").hide();
    });
    //展开景区选择
    $(".rightDiv>div>label").hover(function(){
        $(this).find(".scenicChose").show();
    },function(){
        $(this).find(".scenicChose").hide();
    });
    //设置全选景区
    $(".rightDiv>div>label").on("change","input",function(e){
        e.stopPropagation();
        //console.log($(this).prop('checked'));
        if($(this).prop('checked')){
            $(this).siblings(".scenicChose").find("ul li input").attr("checked",'true');//全选
        }else{
            $(this).siblings(".scenicChose").find("ul li input").removeAttr("checked");//全取消
        }
    });
    //设置景区选择
    $(".scenicChose ul li label").on("change","input",function(e){
        e.stopPropagation();

        if($(this).prop('checked')){
            $(this).parent().parent().parent().parent().siblings('input').attr("checked",'true');
        }else{
            if($(this).parent().parent().parent().find("input:checkbox:checked").size() == 0){
                $(this).parent().parent().parent().parent().siblings('input').removeAttr("checked");
            }
        }
    });
    //设置地区全选
    $(".leftDiv>label").on("change",'input',function(e){
        e.stopPropagation();
//                alert($(this).prop('checked'));
        if($(this).prop('checked')){
            $(this).parent().parent().siblings(".rightDiv").find("div label input").attr("checked",'true');//全选
        }else{
            $(this).parent().parent().siblings(".rightDiv").find("div label input").removeAttr("checked");//全取消
        }
    });
    //设置地区选择
    $(".rightDiv>div>label").on("change","input",function(e){
        e.stopPropagation();
        if($(this).prop('checked')){
            $(this).parent().parent().parent().siblings('.leftDiv').find("label input").attr("checked",'true');
        }else{
            if($(this).parent().parent().find("input:checkbox:checked").size() == 0){
                $(this).parent().parent().parent().siblings('.leftDiv').find("label input").removeAttr("checked");
            }
        }
    });
    //设置全部选择
    $(".btnP").on("click","span:nth-child(1)",function(e){
        e.stopPropagation();
        $(".contentDiv").find('label input').attr("checked",'true');
    });
    //设置反选
    $(".btnP").on("click","span:nth-child(2)",function(e){
        e.stopPropagation();
        $(".rightDiv>div>label").each(function(){
            if($(this).children(".scenicChose").length>0){
                $(this).find(".scenicChose label input").each(function(){
                    //console.log($(this));
                    if($(this).prop('checked')==true){
                        //console.log("true");
                        $(this).removeAttr("checked");
                    }else if($(this).prop('checked')==false){
                        //console.log("false");
                        $(this).attr("checked",'true');
                        $(this).parent().parent().parent().parent().parent().children("input").attr("checked",'true');
                    }
                });
                if($(this).find(".scenicChose label input:checkbox:checked").size()==0){
                    $(this).children("input").removeAttr("checked");
                }
            }else{
                $(this).children("input").each(function(){
                    if($(this).prop('checked')==true){
                        $(this).removeAttr("checked");
                    }else if($(this).prop('checked')==false){
                        $(this).attr("checked",'true');
                    }
                })
            }
        });
        $(".rightDiv").each(function(){
            if($(this).find("input:checkbox:checked").size() == 0){
                $(this).siblings(".leftDiv").find("label input").removeAttr("checked");
            }else{
                $(this).siblings(".leftDiv").find("label input").attr("checked",'true');
            }
        });
    });
    //设置清空
    $(".btnP").on("click","span:nth-child(3)",function(e){
        e.stopPropagation();
        $(".contentDiv").find('label input').removeAttr("checked");
    });
}
//获取地区选择的数据
var getRangeData=function(data){
    var sub2 = '';

    for(var i=0;i<data.length;i++){

        var sub3=''
        if(data[i].hasOwnProperty("children")) {
            for (var j=0;j<data[i].children.length;j++) {
                var sub4 = '';
                if (data[i].children[j].hasOwnProperty("children")) {

                    for (var k = 0; k < data[i].children[j].children.length; k++) {
                        sub4 += '<li>' +
                            '<label class="cm-checkbox-label">' +
                            '<input type="checkbox" name="' + data[i].children[j].children[k].name + '"/>' +
                            '<i></i><b title="' + data[i].children[j].children[k].name + '">' + data[i].children[j].children[k].name + '</b>' +
                            '</label>' +
                            '</li>';
                    }
                }
                sub3 += '<label class="cm-checkbox-label">' +
                    '<input type="checkbox" name="' + data[i].children[j].name + '" />' +
                    '<i></i><b title="' + data[i].children[j].name + '">' + data[i].children[j].name + '</b>' +
                    '<div class="scenicChose">' +
                    '<i class="trangleTop"></i>' +
                    '<ul>' +
                    sub4 +
                    '</ul>' +
                    '</div>' +
                    '</label>';
            }
        }
        sub2+= '<li>'+
            '<div class="leftDiv">'+
            '<label class="cm-checkbox-label" >'+
            '<input type="checkbox" name="'+data[i].name+'" />'+
            '<i></i><b title="'+data[i].name+'">'+data[i].name+'</b>'+
            '</label>'+
            '</div>'+
            '<div class="rightDiv">'+
            '<div>'+
            sub3+
            '</div>'+
            '</div>'+
            '</li>';
    }
    $(".contentDiv>ul").html(sub2);
    //设置地区数据显示
    setEllipss(".scenicChose>ul>li>label>b",8);
    setEllipss(".rightDiv>div>label>b",4);
    setEllipss(".leftDiv>label>b",4);


}
function showNavTool(){
    $(".setIcon").hide();
    $(".titleSelect li").removeClass('active');
    $(".titleSelect").hide();
    $(".subList").hide();
    $(".subList2").hide();
    $(".toolContain").show();
}
function closeNavTool() {
    $(".toolContain").hide();
    $(".setIcon").show();
    $(".browsHistory").hide();
}
// function showDate(){
//     $(".datePick").hover(function(){
//             $("#dayDatePickDemo").show();

//         }
//         ,function(){
//             $("#dayDatePickDemo").hide();

//         }
//     )
// }
$('.datePick').click(function(){
    $("#dayDatePickDemo").show();
})
$(document).click(function(e){
    if($(e.target).hasClass('notHide')) return;
    $("#dayDatePickDemo").hide();
})
//全屏显示
function IsFull() {
    var fullscreenElement =
        document.fullscreenEnabled
        || document.mozFullscreenElement
        || document.webkitFullscreenElement;
    var fullscreenEnabled =
        document.fullscreenEnabled
        || document.mozFullscreenEnabled
        || document.webkitFullscreenEnabled;
    if (fullscreenElement == null)
    {
        return false;
    } else {
        return true;
    }
}
// 全屏代码
function fullScreen() {

    var elem = document.body;
    //var elem=$(".mainContainer")[0];//要求不同的元素全屏更改此处即可
    if (elem.webkitRequestFullScreen) {
        elem.webkitRequestFullScreen();
    } else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen();
    } else if (elem.requestFullScreen) {
        elem.requestFullscreen();
    } else {
        notice.notice_show("浏览器不支持全屏API或已被禁用", null, null, null, true, true);
    }
}
//退出全屏
function exitFullScreen() {
    var elem = document;
    if (elem.webkitCancelFullScreen) {
        elem.webkitCancelFullScreen();
    } else if (elem.mozCancelFullScreen) {
        elem.mozCancelFullScreen();
    } else if (elem.cancelFullScreen) {
        elem.cancelFullScreen();
    } else if (elem.exitFullscreen) {
        elem.exitFullscreen();
    } else {
        notice.notice_show("浏览器不支持全屏API或已被禁用", null, null, null, true, true);
    }
}
var getTitleList=function(data){
    var sub='';
    for(var i=0;i<data.length;i++){
        var sub2='';
//                console.log(data[i].childrenL);
        if(data[i].hasOwnProperty("childrenL")){
            for(var j=0;j<data[i].childrenL.length;j++){
                var sub3='';
                if(data[i].childrenL[j].hasOwnProperty("childrenL")){
                    for(var k=0;k<data[i].childrenL[j].childrenL.length;k++){
                        sub3+="<li title='"+data[i].childrenL[j].childrenL[k].name+"'>"+data[i].childrenL[j].childrenL[k].name+"</li>";
                    }
                }
                sub2+='<li>'+'<span title="'+ data[i].childrenL[j].name+'">'+
                    data[i].childrenL[j].name+'</span>'+
                    //                              '<i class="downArrow">︿</i>'+
                    '<ul class="subList2">'+
                    sub3+
                    '</ul>'+
                    '</li>';
            }
        }
        sub+= '<li>'+
            '<i class="icon">'+
            '<img src="'+"../resources/images/YangtzeDelta/titleService.png"+'" alt="">'+
            '</i>'+
            '<span title="'+data[i].name+'">'+
            data[i].name+
            '</span>'+
            '<ul class="subList">'+
            sub2+
            '</ul>'+
            '</li>';
    }
    $(".titleSelect").html(sub);

};
//设置左侧top5
var setTop5=function(data){
    var sub='';
    for(var i=0;i<data.length;i++){
        sub+= '<li>'+
        '<p>No.2 <span>'+
        data[i].name+
        '</span></p><ul><li>'+
        data[i].num+'</li>'+
        '<li>'+
        '较上周同时段 <br/><span>'+
        data[i].subNum+
        '</span>'+
        '<img src="../resources/images/YangtzeDelta/TOP5_Upicon.png" alt=""></li></ul> </li>';
    }
    $(".leftPart>.lTop>ul").html(sub);
}
//设置左下旅游资源
var setTSource=function(data){
    var sub='';
    for(var i=0;i<data.length;i++){
        sub+='<li>'+
             '<span class="sceneLevel">'+data[i].level+'</span><br/>'+
             '<span class="sceneNum">'+data[i].count+'家</span>'+
             '</li>'
    }
    $(".leftPart>.lBottom>ul").html(sub);
}
//设置环形图
var setSingleCircle=function(id){
    var myChart = echarts.init(document.getElementById(id));
    var data = {
        value: 24.2,
        text: '新用户率',
        color: '#fff',
        title: '饼图'
    };
    var  value = data.value || 0;
    myChart.setOption({
        backgroundColor: 'transparent',
        series: [{
            type: 'pie',
            radius: ['90%', '95%'],
            hoverAnimation: false,
            label: {
                normal: {
                    position: 'center'
                }
            },
            data: [{
                value: value,
                name: data.text,
                itemStyle: {
                    normal: {
                        color: {  // 完成的圆环的颜色
                            colorStops: [{
                                offset: 0, color: '#18a0e5' // 0% 处的颜色
                            }, {
                                offset: 1, color: '#1ed3d7' // 100% 处的颜色
                            }]
                        },

                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    },
                },
                label: {
                    normal: {
                        formatter: '{d} %',
                        textStyle: {
                            fontSize: 15,
                            fontWeight: 500,
                            color: data.color
                        }
                    }
                }
            },
                {
                    value: 100 - value,
                    name: '占位',
                    tooltip: {
                        show: false
                    },
                    itemStyle: {
                        normal: {
                            color: '#295472',
                        }
                    },
                    label: {
                        normal: {
                            formatter: data.text,
                            textStyle: {
                                fontSize: 12,
                                color: data.color
                            }
                        },

                    }
                }
            ]
        }]
    });
}
//设置男女比例
var setGenderCircle=function(id){
    var myChart = echarts.init(document.getElementById(id));
    myChart.setOption({
        series: [
            {
                name: '男女比例',
                type: 'pie',
                radius: ['50%', '60%'],

                labelLine: {
                    normal: {
                        length: 0,
                        length2: 15,
                        lineStyle: {
                            color: '#12d6fa'
                        }
                    }
                },
                itemStyle:{
                    normal:{
                        borderWidth:'1',
                        borderColor:"#13cdf0"
                    }
                },

                label: {
                    normal: {
                        formatter: '{a|{d}%}\n{b|{b}}',
                        borderWidth: 2,

                        borderRadius: 'center',

                        rich: {
                            a: {
                                color: '#fff',
                                fontSize: 12,
                                lineHeight: 20
                            },

                            hr: {
                                borderColor: '#333',
                                width: '100%',
                                borderWidth: 0.5,
                                height: 0
                            },
                            b: {
                                fontSize: 12,
                                lineHeight: 20,
                                color: '#fff'
                            }

                        }
                    }
                },
                data: [{
                    value: 135,
                    name: '男性',
                    hoverAnimation: false,
                    itemStyle: {
                        normal: {
                            color: {  // 完成的圆环的颜色
                                colorStops: [{
                                    offset: 0, color: '#18a0e5' // 0% 处的颜色
                                }, {
                                    offset: 1, color: '#1ed3d7' // 100% 处的颜色
                                }]
                            },
                            label: {
                                show: true
                            },
                            labelLine: {
                                show: true
                            }
                        },
                    },

                }, {
                    value: 1048,
                    name: '女性',
                    hoverAnimation: false,
                    itemStyle: {
                        normal: {
                            color: "#245c7b",
                            label: {
                                show: true
                            },
                            labelLine: {
                                show: true
                            }
                        },
                    },
                }]
            }
        ]
    });
}
//设置字数
var setEllipss=function(ele,num){// //设置超过字数显示省略号
    $(ele).each(function(){
        var str = $(this).html();
        var Number=parseInt(num);
        var subStr = str.substring(0,Number);
        //alert(subStr);
        $(this).html(subStr + (str.length > Number ? '...': ''));
    });
};
var setMulCircle=function(a,b,c,d){
    var myChart = echarts.init(document.getElementById('mulCircle'));
    var placeHolderStyle = {
        normal: {
            label: {
                show: false,
                position: "center"
            },
            labelLine: {
                show: false
            },
            color: "#295473",
            borderColor: "#295473",
            borderWidth: 2
        }
    };
    myChart.setOption({
        backgroundColor: 'transparent',
        color: ['#fc7a26', '#fff', '#ffa127', '#fff', "#ffcd26"],
        series: [
            {name: '值',
                type: 'pie',
                clockWise: true, //顺时加载
                hoverAnimation: false, //鼠标移入变大
                radius: ['43%', '43%'],
                itemStyle: {
                    normal: {
                        label: {
                            show: false,
                            position: 'outside'
                        },
                        labelLine: {
                            show: false,
                            length: 100,
                            smooth: 0.5
                        },
                        borderWidth: 2,
                        shadowBlur: 40,
                        borderColor: "#ea0fbb",
                        shadowColor: 'rgba(0, 0, 0, 0)' //边框阴影
                    }
                },
                data: [{
                    value: 1,
                    name: '70%'
                }, {
                    value: 1/0.7*(1-0.7),
                    name: '',
                    itemStyle: placeHolderStyle
                }]
            },

            {name: '值',
                type: 'pie',
                clockWise: true, //顺时加载
                hoverAnimation: false, //鼠标移入变大
                radius: ['53%', '53%'],
                itemStyle: {
                    normal: {
                        label: {
                            show: false,
                            position: 'outside'
                        },
                        labelLine: {
                            show: false,
                            length: 100,
                            smooth: 0.5
                        },
                        borderWidth: 2,
                        shadowBlur: 40,
                        borderColor: "#f3c40f",
                        shadowColor: 'rgba(0, 0, 0, 0)' //边框阴影
                    }
                },
                data: [{
                    value: 7,
                    name: '70%'
                }, {
                    value: 3,
                    name: '',
                    itemStyle: placeHolderStyle
                }]
            }, {
                name: '值',
                type: 'pie',
                clockWise: true,
                hoverAnimation: false,
                radius: ['63%', '63%'],
                itemStyle: {
                    normal: {
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: true,
                            length: 100,
                            smooth: 0.5
                        },
                        borderWidth: 2,
                        shadowBlur: 40,
                        borderColor: "#0faaf3",
                        shadowColor: 'rgba(0, 0, 0, 0)' //边框阴影
                    }
                },
                data: [{
                    value: 100,
                    name: '60%'
                }, {
                    value: 100,
                    name: '',
                    itemStyle: placeHolderStyle
                }]
            }, {
                name: '值',
                type: 'pie',
                clockWise: true,
                hoverAnimation: false,
                radius: ['72%', '72%'],
                itemStyle: {
                    normal: {
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: true,
                            length: 100,
                            smooth: 0.5
                        },
                        borderWidth: 2,
                        shadowBlur: 40,
                        borderColor: "#0acde5",
                        shadowColor: 'rgba(0, 0, 0, 0)' //边框阴影
                    }
                },
                data: [{
                    value: 4,
                    name: '40%'
                }, {
                    value: 6,
                    name: '',
                    itemStyle: placeHolderStyle
                }]
            }]
    });
}
//获取url参数
function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); // 构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg);  // 匹配目标参数
    if (r != null) return unescape(r[2]); return null; // 返回参数值
}
//增加浏览历史
var getBrowsHis=function(data){
    var str='';

        str+='<li>'+
            '<span class="browsName" title="'+data.name+'">'+data.name+'</span>'+
            '<span class="iconCo">'+
            '<img src="../resources/images/YangtzeDelta/refresh.png" class="refreshIcon" alt="">'+
            '<img src="../resources/images/YangtzeDelta/closeIcon.png" class="closeIcon" alt="">'+
            '</span>'+
            '</li>';

    $(".browsHistory").append(str);
    setBorwsHis();

}
//设置右上角浏览历史相关
var setBorwsHis=function(){
    $(".toolContain>ul").on("click","li:first-child",function(e){
        e.stopPropagation();

        if($('.browsHistory').is(':hidden')){//如果当前隐藏
            $('.browsHistory').show();//那么就显示div
        }else{//否则
            $('.browsHistory').hide();//就隐藏div
        }
    })
    $(".browsHistory").on("click",'li',function(e){
        e.stopPropagation();
       $(this).siblings().removeClass('active');
       $(this).addClass('active');
        $(".browsHistory").hide();
    });
    //设置关闭
    $(".iconCo").on('click','.closeIcon',function(e){
        e.stopPropagation();
        $(this).parent().parent().remove();
    })
}
//判断是否启用日历或地域选择
var identifyLine=function(){
    var name=getUrlParam('name');
    if(name){//如果有name这个参数。。。执行。。

    }else{//没有参数。。执行。。
        //取消日历的hover事件

        // $('.datePick').unbind('mouseenter').unbind('mouseleave');
        //取消地域的click事件
        // $('.locPick').unbind('click');
    }
}
//日期选择后的回调函数
var pickedFunc=function(){
   $(".dayDatePickDemo").hide();
};
//mask内部div大小



   function bindResize(el) {
       //初始化参数
       var els = el.style;
           //鼠标的 X 和 Y 轴坐标
       var  x  = 0;
       var y=0;
       //邪恶的食指
       $(el).mousedown(function (e) {
           //按下元素后，计算当前鼠标与对象计算后的坐标
           x = e.clientX - el.offsetWidth, y = e.clientY - el.offsetHeight;
           //在支持 setCapture 做些东东
           el.setCapture ? (
               //捕捉焦点
               el.setCapture(),
                   //设置事件
                   el.onmousemove = function (ev) {
                       mouseMove(ev || event)
                   },
                   el.onmouseup = mouseUp
           ) : (
               //绑定事件
               $(document).bind("mousemove", mouseMove).bind("mouseup", mouseUp)
           )
           //防止默认事件发生
           e.preventDefault()
       });
       //移动事件
       function mouseMove(e) {
           //宇宙超级无敌运算中...
           els.width = e.clientX - x + 'px', //改变宽度
               els.height = e.clientY - y + 'px' //改变高度
       }
       //停止事件
       function mouseUp() {
           //在支持 releaseCapture 做些东东
           el.releaseCapture ? (
               //释放焦点
               el.releaseCapture(),
                   //移除事件
                   el.onmousemove = el.onmouseup = null
           ) : (
               //卸载事件
               $(document).unbind("mousemove", mouseMove).unbind("mouseup", mouseUp)
           )
       }
   }
var titleList=[
    {
        "id":0,
        "name":"景区旅游景区旅游景区旅游",
        "childrenL":[
            {
                "id":00,
                "name":"景区旅游景区旅游1",
                "childrenL":[
                    {
                        "id":"000",
                        "name":"景区旅游000"
                    },
                    {
                        "id":"001",
                        "name":"景区旅游001"
                    },
                    {
                        "id":"002",
                        "name":"景区旅游002"
                    },
                    {
                        "id":"003",
                        "name":"景区旅游003"
                    }
                ]
            },
            {
                "id":01,
                "name":"景区旅游2",
                "childrenL":[
                    {
                        "id":"010",
                        "name":"景区旅游010"
                    },
                    {
                        "id":"011",
                        "name":"景区旅游011"
                    },
                    {
                        "id":"012",
                        "name":"景区旅游012"
                    },
                    {
                        "id":"013",
                        "name":"景区旅游013"
                    }
                ]
            }
        ]
    },
    {
        "id":1,
        "name":"景区旅游",
        "childrenL":[
            {
                "id":00,
                "name":"景区旅游10"
            },
            {
                "id":01,
                "name":"景区旅游11"
            }
        ]
    },
];
var locList=[
    {
        "id":1,
        "name":"杭州",
        "children":[
            {
                "id":11,
                "name":"萧山区",
                "children":[
                    {
                        "id":111,
                        "name":"景区名字景区名字景区名字"
                    },
                    {
                        "id":112,
                        "name":"景区名字"
                    },
                    {
                        "id":113,
                        "name":"景区名字"
                    }
                ]
            },
            {
                "id":12,
                "name":"萧山区",
                "children":[
                    {
                        "id":121,
                        "name":"景区名字"
                    },
                    {
                        "id":122,
                        "name":"景区名字"
                    },
                    {
                        "id":123,
                        "name":"景区名字"
                    }
                ]
            },
            {
                "id":13,
                "name":"萧山区",
                "children":[
                    {
                        "id":131,
                        "name":"景区名字"
                    },
                    {
                        "id":132,
                        "name":"景区名字"
                    },
                    {
                        "id":133,
                        "name":"景区名字"
                    }
                ]
            },
            {
                "id":14,
                "name":"萧山区",
                "children":[
                    {
                        "id":141,
                        "name":"景区名字"
                    },
                    {
                        "id":142,
                        "name":"景区名字"
                    },
                    {
                        "id":143,
                        "name":"景区名字"
                    }
                ]
            },
            {
                "id":15,
                "name":"萧山区",
                "children":[
                    {
                        "id":151,
                        "name":"景区名字"
                    },
                    {
                        "id":152,
                        "name":"景区名字"
                    },
                    {
                        "id":153,
                        "name":"景区名字"
                    }
                ]
            },
            {
                "id":16,
                "name":"萧山区",
                "children":[
                    {
                        "id":161,
                        "name":"景区名字"
                    },
                    {
                        "id":162,
                        "name":"景区名字"
                    },
                    {
                        "id":163,
                        "name":"景区名字"
                    }
                ]
            },
            {
                "id":17,
                "name":"萧山区",
                "children":[
                    {
                        "id":171,
                        "name":"景区名字"
                    },
                    {
                        "id":172,
                        "name":"景区名字"
                    },
                    {
                        "id":173,
                        "name":"景区名字"
                    }
                ]
            }
        ]
    },
    {
        "id":3,
        "name":"杭州3",
        "children":[
            {
                "id":31,
                "name":"萧山区",
                "children":[
                    {
                        "id":311,
                        "name":"景区名字"
                    },
                    {
                        "id":312,
                        "name":"景区名字"
                    },
                    {
                        "id":313,
                        "name":"景区名字"
                    }
                ]
            },
            {
                "id":32,
                "name":"萧山区",
                "children":[
                    {
                        "id":321,
                        "name":"景区名字"
                    },
                    {
                        "id":322,
                        "name":"景区名字"
                    },
                    {
                        "id":323,
                        "name":"景区名字"
                    }
                ]
            },
            {
                "id":33,
                "name":"萧山区",
                "children":[
                    {
                        "id":331,
                        "name":"景区名字"
                    },
                    {
                        "id":332,
                        "name":"景区名字"
                    },
                    {
                        "id":333,
                        "name":"景区名字"
                    }
                ]
            }
        ]
    },
    {
        "id":2,
        "name":"杭州2",
        "children":[
            {
                "id":21,
                "name":"萧山区",
                "children":[
                    {
                        "id":211,
                        "name":"景区名字"
                    },
                    {
                        "id":212,
                        "name":"景区名字"
                    },
                    {
                        "id":213,
                        "name":"景区名字"
                    }
                ]
            },
            {
                "id":22,
                "name":"萧山区",
                "children":[
                    {
                        "id":221,
                        "name":"景区名字"
                    },
                    {
                        "id":222,
                        "name":"景区名字"
                    },
                    {
                        "id":223,
                        "name":"景区名字"
                    }
                ]
            },
            {
                "id":23,
                "name":"萧山区",
                "children":[
                    {
                        "id":231,
                        "name":"景区名字"
                    },
                    {
                        "id":232,
                        "name":"景区名字"
                    },
                    {
                        "id":233,
                        "name":"景区名字"
                    }
                ]
            }
        ]
    },
    {
        "id":3,
        "name":"杭州3",
        "children":[
            {
                "id":31,
                "name":"萧山区",
                "children":[
                    {
                        "id":311,
                        "name":"景区名字"
                    },
                    {
                        "id":312,
                        "name":"景区名字"
                    },
                    {
                        "id":313,
                        "name":"景区名字"
                    }
                ]
            },
            {
                "id":32,
                "name":"萧山区",
                "children":[
                    {
                        "id":321,
                        "name":"景区名字"
                    },
                    {
                        "id":322,
                        "name":"景区名字"
                    },
                    {
                        "id":323,
                        "name":"景区名字"
                    }
                ]
            },
            {
                "id":33,
                "name":"萧山区",
                "children":[
                    {
                        "id":331,
                        "name":"景区名字"
                    },
                    {
                        "id":332,
                        "name":"景区名字"
                    },
                    {
                        "id":333,
                        "name":"景区名字"
                    }
                ]
            }
        ]
    },
    {
        "id":3,
        "name":"杭州3",
        "children":[
            {
                "id":31,
                "name":"萧山区",
                "children":[
                    {
                        "id":311,
                        "name":"景区名字"
                    },
                    {
                        "id":312,
                        "name":"景区名字"
                    },
                    {
                        "id":313,
                        "name":"景区名字"
                    }
                ]
            },
            {
                "id":32,
                "name":"萧山区",
                "children":[
                    {
                        "id":321,
                        "name":"景区名字"
                    },
                    {
                        "id":322,
                        "name":"景区名字"
                    },
                    {
                        "id":323,
                        "name":"景区名字"
                    }
                ]
            },
            {
                "id":33,
                "name":"萧山区",
                "children":[
                    {
                        "id":331,
                        "name":"景区名字"
                    },
                    {
                        "id":332,
                        "name":"景区名字"
                    },
                    {
                        "id":333,
                        "name":"景区名字"
                    }
                ]
            }
        ]
    },
    {
        "id":3,
        "name":"杭州3",
        "children":[
            {
                "id":31,
                "name":"萧山区",
                "children":[
                    {
                        "id":311,
                        "name":"景区名字"
                    },
                    {
                        "id":312,
                        "name":"景区名字"
                    },
                    {
                        "id":313,
                        "name":"景区名字"
                    }
                ]
            },
            {
                "id":32,
                "name":"萧山区",
                "children":[
                    {
                        "id":321,
                        "name":"景区名字"
                    },
                    {
                        "id":322,
                        "name":"景区名字"
                    },
                    {
                        "id":323,
                        "name":"景区名字"
                    }
                ]
            },
            {
                "id":33,
                "name":"萧山区",
                "children":[
                    {
                        "id":331,
                        "name":"景区名字"
                    },
                    {
                        "id":332,
                        "name":"景区名字"
                    },
                    {
                        "id":333,
                        "name":"景区名字"
                    }
                ]
            }
        ]
    },
];
var top5Data=[
    {
        "name":"西湖名胜风景区",
        "num":"209098000",
        "subNum":"3444"
    },
    {
        "name":"西湖名胜风景区",
        "num":"209098000",
        "subNum":"3444"
    },
    {
        "name":"西湖名胜风景区",
        "num":"209098000",
        "subNum":"3444"
    },
    {
        "name":"西湖名胜风景区",
        "num":"209098000",
        "subNum":"3444"
    },
    {
        "name":"西湖名胜风景区",
        "num":"209098000",
        "subNum":"3444"
    }
]
var travelSource=[
    {
        "level":"5A景区",
        "count":"50"
    },
    {
        "level":"3A景区",
        "count":"20"
    },
    {
        "level":"4A景区",
        "count":"10"
    },
    {
        "level":"5A景区",
        "count":"50"
    }
];
/*var browsData=[
    {
        "name":"首页1首页1首页1首页1",
        "count":"50"
    },
    {
        "name":"首页2",
        "count":"20"
    },
    {
        "name":"首页3",
        "count":"10"
    },
    {
        "name":"首页4",
        "count":"50"
    }
];*/
// (function ($) {
//     $.fn.dragDivResize = function () {
//         var deltaX, deltaY, _startX, _startY;
//         var resizeW, resizeH;
//         var size = 20;
//         var minSize = 10;
//         var scroll = getScrollOffsets();
//         var _this = this;
//         for (var i = 0; i < _this.length; i++) {
//             var target = this[i];
//             $(target).on("mouseover mousemove", overHandler);
//         }
//         function outHandler() {
//             for (var i = 0; i < _this.length; i++) {
//                 target.style.outline = "none";
//             }
//             document.body.style.cursor = "default";
//         }
//         function overHandler(event) {
//             target = event.target || event.srcElement;
//             var startX = event.clientX + scroll.x;
//             var startY = event.clientY + scroll.y;
//             var w = $(target).width();
//             var h = $(target).height();
//             _startX = parseInt(startX);
//             _startY = parseInt(startY);
//             if ((0 < target.offsetLeft + w - _startX && target.offsetLeft + w - _startX < size) || (0 < target.offsetTop + h - _startY && target.offsetTop + h - _startY < size)) {
//                 //target.style.outline = "2px solid #333";
//                 if ((0 > target.offsetLeft + w - _startX || target.offsetLeft + w - _startX > size) && 0 < target.offsetTop + h - _startY && target.offsetTop + h - _startY < size) {
//                     resizeW = false;
//                     resizeH = true;
//                     document.body.style.cursor = "s-resize";
//                 }
//                 if (0 < target.offsetLeft + w - _startX && target.offsetLeft + w - _startX < size && (0 > target.offsetTop + h - _startY || target.offsetTop + h - _startY > size)) {
//                     resizeW = true;
//                     resizeH = false;
//                     document.body.style.cursor = "w-resize";
//                 }
//                 if (0 < target.offsetLeft + w - _startX && target.offsetLeft + w - _startX < size && 0 < target.offsetTop + h - _startY && target.offsetTop + h - _startY < size) {
//                     resizeW = true;
//                     resizeH = true;
//                     document.body.style.cursor = "se-resize";
//                 }
//                 $(target).on('mousedown', downHandler);
//             } else {
//                 resizeW = false;
//                 resizeH = false;
//                 $(target).off('mousedown', downHandler);
//             }
//         }
//         function downHandler(event) {
//             target = event.target || event.srcElement;
//             var startX = event.clientX + scroll.x;
//             var startY = event.clientY + scroll.y;
//             _startX = parseInt(startX);
//             _startY = parseInt(startY);
//             if (document.addEventListener) {
//                 document.addEventListener("mousemove", moveHandler, true);
//                 document.addEventListener("mouseup", upHandler, true);
//             } else if (document.attachEvent) {
//                 target.setCapture();
//                 target.attachEvent("onlosecapeture", upHandler);
//                 target.attachEvent("onmouseup", upHandler);
//                 target.attachEvent("onmousemove", moveHandler);
//             }
//             if (event.stopPropagation) {
//                 event.stopPropagation();
//             } else {
//                 event.cancelBubble = true;
//             }
//             if (event.preventDefault) {
//                 event.preventDefault();
//             } else {
//                 event.returnValue = false;
//             }
//         }
//         function moveHandler(e) {
//             if (!e) e = window.event;
//             var w, h;
//             var startX = parseInt(e.clientX + scroll.x);
//             var startY = parseInt(e.clientY + scroll.y);
//             target = target || e.target || e.srcElement;
//             if (target == document.body) {
//                 return;
//             }
//             if (resizeW) {
//                 deltaX = startX - _startX;
//                 w = $(target).width() + deltaX < minSize ? minSize : $(target).width() + deltaX;
//                 target.style.width = w + "px";
//                 _startX = startX;
//             }
//             if (resizeH) {
//                 deltaY = startY - _startY;
//                 h = $(target).height() + deltaY < minSize ? minSize : $(target).height() + deltaY;
//                 target.style.height = h + "px";
//                 _startY = startY;
//             }
//             if (e.stopPropagation) {
//                 e.stopPropagation();
//             } else {
//                 e.cancelBubble = true;
//             }
//         }
//         function upHandler(e) {
//             if (!e) {
//                 e = window.event;
//             }
//             resizeW = false;
//             resizeH = false;
//             target = e.target || e.srcElement;
//             $(target).on("mouseout", outHandler);
//             if (document.removeEventListener) {
//                 document.removeEventListener("mousemove", moveHandler, true);
//                 document.removeEventListener("mouseup", upHandler, true);
//             } else if (document.detachEvent) {
//                 target.detachEvent("onlosecapeture", upHandler);
//                 target.detachEvent("onmouseup", upHandler);
//                 target.detachEvent("onmousemove", moveHandler);
//                 target.releaseCapture();
//             }
//             if (e.stopPropagation) {
//                 e.stopPropagation();
//             } else {
//                 e.cancelBubble = true;
//             }
//         }
//         function getScrollOffsets(w) {
//             w = w || window;
//             if (w.pageXOffset != null) {
//                 return { x: w.pageXOffset, y: w.pageYOffset };
//             }
//             var d = w.document;
//             if (document.compatMode == "CSS1Compat") {
//                 return { x: d.documentElement.scrollLeft, y: d.documentElement.scrollTop };
//             }
//             return { x: d.body.scrollLeft, y: d.body.scrollTop };
//         }
//     }
// }(jQuery));
