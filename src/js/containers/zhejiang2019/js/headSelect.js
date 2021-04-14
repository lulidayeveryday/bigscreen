var legendType=0;
$(function () {
    $(".locPick").click(function(){
        setMaskShow();
    })

    bindResize(document.getElementById("rangeContainer"))
    //获取地域数据
    getRangeData(locList);
    setMaskLocSome();
    $(".headSelect-div-legend-span").click(function () {
        var test=$(this).attr("id");
        legendHidden();
        legendType=1;
    })
})


$(document).click(function(e){
    if($(e.target).hasClass('notHide')) return;
    $("#dayDatePickDemo").hide();
    $('.headSelect-div-legend').css('display','none')
})

//日期选择后的回调函数
var pickedFunc=function(){
    var a=$('#d12')[0].value;
    console.log(a)
};


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
var setEllipss=function(ele,num){// //设置超过字数显示省略号
    $(ele).each(function(){
        var str = $(this).html();
        var Number=parseInt(num);
        var subStr = str.substring(0,Number);
        //alert(subStr);
        $(this).html(subStr + (str.length > Number ? '...': ''));
    });
};



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

function legendShow() {
    if(legendType==1){
        legendType=0;
        return;
    }
    var type=$('.headSelect-div-legend').css('display');
    if(type=="none"){
        $('.headSelect-div-legend').css('display','block')
    }else {
        $('.headSelect-div-legend').css('display','none')
    }
}

function legendHidden() {
    $('.headSelect-div-legend').css('display','none')
}
