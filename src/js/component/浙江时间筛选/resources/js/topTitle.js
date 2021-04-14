$(function(){
    $(".setIcon").click(showNavTool);
    $(".closeBtn").click(closeNavTool);


    getTitleList(titleList);
    $(".navBtn").click(function(e){

        $(this).children(".titleSelect").slideToggle();
    });
    $(".toolContain>ul>li:nth-child(2)").click(function(){
        if(IsFull()){
            exitFullScreen();
        }else{
            fullScreen();
        }

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
            return;
        }
        $(this).siblings().children('.subList2').hide();
        var childW=$(this).children(".subList2").outerWidth();
        var thisW=$(this).outerWidth();
        var leftW=$(this).offset().left+$(this).outerWidth();
        var windowW=$(window).width();
        if(windowW-leftW<childW){
            $($(this).children('.subList2').css({
                'left':'0'
            }))
        }else if(windowW-leftW>=childW){
            $($(this).children('.subList2').css({
                'left':thisW
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
        if(windowW-leftW<childW){
            $($(this).children('.subList').css({
                'left':'0'
            }))
        }else if(windowW-leftW>=childW){
            $($(this).children('.subList').css({
                'left':thisW
            }))
        }
//                console.log($(this).children(".subList").outerWidth());
//                console.log($(window).width());
//                console.log($(this).offset().left+$(this).outerWidth());
//                console.log($(this).width());
        $(this).children('.subList').slideToggle();
    });
    //设置字数
    setEllipss(".titleSelect>li>span",10);
    setEllipss(".subList>li>span",10);
    setEllipss(".subList2>li",10);
})
function showNavTool(){
    $(".setIcon").hide();
    $(".toolContain").show();
}
function closeNavTool() {
    $(".toolContain").hide();
    $(".setIcon").show();
}

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
                sub2+='<li>'+'<span title="'+data[i].childrenL[j].name+'">'+
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
            //                      '<i>'+
            //                      '>'+
            //                      '</i>'+
            '<ul class="subList">'+
            sub2+
            '</ul>'+
            '</li>';
    }
    $(".titleSelect").html(sub);

};
//设置字数
var setEllipss=function(ele,num){// //设置超过字数显示省略号
    $(ele).each(function(){
        var str = $(this).html();
        var Number=parseInt(num);
        var subStr = str.substring(0,Number);
        //alert(subStr);
        $(this).html(subStr + (str.length > Number ? '...': ''));
    });
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
                "name":"景区旅游2"

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

