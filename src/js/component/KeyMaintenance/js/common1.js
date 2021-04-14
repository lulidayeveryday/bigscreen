function initDate(){
    //初始化日期数据
    var dateObj = new Date();
    var intervalSec;
    var str1 = dateObj.getFullYear() + '年' + (dateObj.getMonth()+1) + '月' + dateObj.getDate() + '日';
    str1 += '&nbsp;&nbsp;&nbsp;星期' + '日一二三四五六'.charAt(dateObj.getDay());
    $('#date-span').html(str1);
    var str2 = '&nbsp;&nbsp;&nbsp;'
    str2 += dateObj.getHours().toString().length == 1 ? '0' + dateObj.getHours().toString() : dateObj.getHours();
    str2 += ':';
    str2 += dateObj.getMinutes().toString().length == 1 ? '0' + dateObj.getMinutes().toString() : dateObj.getMinutes();
    $('#hourDate').html(str2);
    intervalSec = (60 - dateObj.getSeconds()) * 1000;
    if(intervalSec == 60000){
        setInterval("initDate()", intervalSec);
    }else{
        setTimeout("initDate()", intervalSec);
    }
}
function setFontSize(){
    var font_size=window.screen.width*100/1920;
    $('html').css('font-size',font_size+'px');
}
$(function(){
    initDate();
    setFontSize();
})