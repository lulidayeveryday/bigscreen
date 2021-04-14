$(function () {
    //天气接口
    var temp='23℃';
    var skyImg='W35.png';
    var sky='晴';
    var position="浙江•苏州";
    tempFunction(temp,skyImg,sky,position);

    //时间
    setInterval(function () {
        var d = new Date;
        var y = d.getFullYear();
        var m = d.getMonth()+1;
        if(m<=9){
            m = '0'+m
        }
        var ds = d.getDate();
        if(ds<=9){
            ds = '0' + ds;
        }
        var h= d.getHours();
        if(h<=9){
            h='0'+h;
        }
        var f=d.getMinutes();
        if(f<=9){
            f='0'+f;
        }
        var days=d.getDay();
        switch(days){
            case 1:
                days='星期一';
                break;
            case 2:
                days='星期二';
                break;
            case 3:
                days='星期三';
                break;
            case 4:
                days='星期四';
                break;
            case 5:
                days='星期五';
                break;
            case 6:
                days='星期六';
                break;
            case 0:
                days='星期日';
                break;
        }

        $('#headTime').html(h + ":" + f);
        $('#headWeek').html(days);
        $('#headDay').html(y + '/' + m + '/' + ds);
    },1000)
})

//天气
function tempFunction(temp,skyImg,sky,position) {
    $('#headTemp').html(temp);
    $('#headSky').html(sky);
    $('#headPosition').html(position);
    $('.head-div-temp-imgContent').css('background','url("../img/head/'+skyImg+'") no-repeat');
    $('.head-div-temp-imgContent').css('background-size','100% 100%');
}

//鼠标进入吃住行
function titleMouthOver(mid) {
    $("#titleContent"+mid).css("display","block");
}

//鼠标离开吃住行
function titleMouthLeave(mid) {
    $("#titleContent"+mid).css("display","none");
}

//点击吃住行二级菜单
function titleMouthClick(m) {
    var text=$(m)[0].innerText;
    $('#titleContent').html(text);
    $('.head-div-title-div1-content').css("display","none")
}

//点击导航
function menuHidden() {
    $('.head-div-title-div1-content2').css("display","none")
}

//全屏显示
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