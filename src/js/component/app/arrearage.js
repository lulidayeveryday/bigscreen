
function clickType(temp,type) {
    $('.date-active').removeClass('date-active');
    $(temp).addClass('date-active');
    if (type==1){
        $('.content-month').css('display','none');
        $('.content-day').css('display','block');
    }else {
        $('.content-month').css('display','block');
        $('.content-day').css('display','none');
    }
}