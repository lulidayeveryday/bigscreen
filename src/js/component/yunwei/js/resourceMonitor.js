var test='A001';

$(function () {
    //服务器主机监控
    var dataMaster=[
        {hostId:'A011',netWork:'良好',deviceSpace:'52%',courseNum:219,memoryPercent:'57%',memoryNum:64,cpu:'26%'},
        {hostId:'A002',netWork:'良好',deviceSpace:'51%',courseNum:229,memoryPercent:'57%',memoryNum:4,cpu:'26%'},
        {hostId:'A003',netWork:'良好',deviceSpace:'90%',courseNum:239,memoryPercent:'57%',memoryNum:614,cpu:'90%'},
        {hostId:'A004',netWork:'中断',deviceSpace:'95%',courseNum:249,memoryPercent:'57%',memoryNum:624,cpu:'16%'},
        {hostId:'A005',netWork:'良好',deviceSpace:'9%',courseNum:259,memoryPercent:'57%',memoryNum:634,cpu:'26%'},
        {hostId:'A006',netWork:'中断',deviceSpace:'1%',courseNum:269,memoryPercent:'57%',memoryNum:644,cpu:'10%'},
        {hostId:'A007',netWork:'良好',deviceSpace:'2%',courseNum:279,memoryPercent:'57%',memoryNum:654,cpu:'26%'},
        {hostId:'A008',netWork:'中断',deviceSpace:'3%',courseNum:289,memoryPercent:'57%',memoryNum:664,cpu:'21%'},
        {hostId:'A009',netWork:'良好',deviceSpace:'4%',courseNum:2919,memoryPercent:'57%',memoryNum:674,cpu:'96%'},
        {hostId:'A010',netWork:'良好',deviceSpace:'5%',courseNum:29,memoryPercent:'57%',memoryNum:604,cpu:'16%'},
    ]
    test=dataMaster[0].hostId;
    master(dataMaster);
    table();

    //hadoop
    var hadoopData={storage:'9%',dataSheet:189,job:69};
    hadoop(hadoopData);

    //mysql
    var mysqlData={space:254,table:254,process:2658,linker:268}
    mysql(mysqlData);

    //Oracle
    var oracleData={space:254,table:254,process:2658,linker:268}
    oracle(oracleData);

    //默认选中第一条
    leftRender(test)
})

function oracle(data){
    $('#oracleSpace').html(data.space)
    $('#oracleTable').html(data.table)
    $('#oracleProcess').html(data.process)
    $('#oracleLinker').html(data.linker)
}

function mysql(data){
    $('#mysqlSpace').html(data.space)
    $('#mysqlTable').html(data.table)
    $('#mysqlProcess').html(data.process)
    $('#mysqlLinker').html(data.linker)
}

function hadoop(hadoopData) {
    var ccNum=parseFloat(hadoopData.storage)/100;
    if (ccNum>=0.9){
        echartBar('echartPie2','red',ccNum);
        $('img[ref=pieChartImg2]').attr('src','../img/redBg.png')
    }else {
        echartBar('echartPie2','blue',ccNum);
        $('img[ref=pieChartImg2]').attr('src','../img/blueBg.png')
    }
}

function master(data) {
    var allNum=data.length;
    var connect=0;
    var html='';
    for (var i=0;i<data.length;i++){
        var ids=data[i].hostId;
        html+='<tr class="trBg" onclick="leftRenders(this)">';
        html+='<td id="' + data[i].hostId + '">' + data[i].hostId + '</td>';
        if (data[i].netWork=='良好'){
            connect++
            html+='<td><img src="../img/good.png" class="table-tbody-img"/>' + data[i].netWork + '</td>'
        }else {
            html+='<td><img src="../img/down.png" class="table-tbody-img"/>' + data[i].netWork + '</td>'
        }
        if ( (parseFloat(data[i].deviceSpace)/100) < 0.9){
            html+='<td>' + data[i].deviceSpace + '</td>'
        }else {
            html+='<td>' + data[i].deviceSpace + ' <img src="../img/warn.png" class="table-tbody-img"/></td>'
        }
        html+='<td>' + data[i].courseNum + '</td>';
        html+='<td gb="' + data[i].memoryNum + '">' + data[i].memoryPercent + '</td>';
        if ( (parseFloat(data[i].cpu)/100) < 0.9){
            html+='<td>' + data[i].cpu + '</td>'
        }else {
            html+='<td>' + data[i].cpu + ' <img src="../img/warn.png" class="table-tbody-img"/></td>'
        }
        html+='</tr>'
    }
    document.getElementById("masterTable").innerHTML=html;
    $('#allNum1,#allNum2').html(allNum);
    $('#connect').html(connect);
}

function nextTr() {
    var mid;
    if ($('#'+test).parent().next().length!=0){
        mid=$('#'+test).parent().next().children()[0].id;
    }else{
        var parent=$('#'+test).parent().parent().children("tr").get(0);
        mid=$(parent).children()[0].id;
    }
    leftRender(mid);
}

function lastTr() {
    var mid;
    if ($('#'+test).parent().prev().length!=0){
        mid=$('#'+test).parent().prev().children()[0].id;
    }else{
        var length=$('#'+test).parent().parent().children("tr").length;
        var parent=$('#'+test).parent().parent().children("tr").get(length-1)
        mid=$(parent).children()[0].id
    }
    leftRender(mid);


}

function Trim(str)
{
    return str.replace(/\s/g, "")
}

function leftRenders(mid) {
    var mid=$(mid).children()[0].id;
    test=mid;
    $('.trBgStar').removeClass('trBgStar');
    var rem=$('#'+mid).parent();
    $(rem).addClass('trBgStar')
    var parent=$('#'+mid).siblings();
    //主机编号
    var td1=$('td[ref=td1]');
    $(td1).html(mid);

    //网络
    var td2Text=$('span[ref=td2Text]');
    var text=Trim($(parent[0]).text());
    $(td2Text).html(text)

    if(text=='良好'){
        $('img[ref=td2Img]').attr('src','../img/good.png')
        $(td2Text).css('color','#00FFA2');
        $('.top-central-condition').removeClass('top-central-condition-red','top-central-condition-blue');
        $('.top-central-condition').addClass('top-central-condition-blue');
        $('.rm-server-content-bottom').css('background-image','url("../img/blue.png")')
    }else if(text=='中断'){
        $('img[ref=td2Img]').attr('src','../img/down.png')
        $(td2Text).css('color','#FF005D');
        $('.top-central-condition').removeClass('top-central-condition-red','top-central-condition-blue');
        $('.top-central-condition').addClass('top-central-condition-red');
        $('.rm-server-content-bottom').css('background-image','url("../img/red.png")')
    }

    //存储空间
    var cc=Trim($(parent[1]).text())
    var ccNum=parseFloat(cc)/100;
    if (ccNum>=0.9){
        echartBar('echartPie1','red',ccNum);
        $('img[ref=pieChartImg]').attr('src','../img/redBg.png')
    }else {
        echartBar('echartPie1','blue',ccNum);
        $('img[ref=pieChartImg]').attr('src','../img/blueBg.png')
    }


    //当前进程数
    $('span[ref=td4]').html($(parent[2]).text());

    //内存剩余
    $('span[ref=td5]').html($(parent[3]).text());
    $('span[ref=td5Num]').html($(parent[3]).attr('gb'));
}

function leftRender(mid) {
    $('.trBgStar').removeClass('trBgStar');
    var rem=$('#'+mid).parent();
    $(rem).addClass('trBgStar')
    test=Trim(mid).toUpperCase( );
    var parent=$('#'+mid).siblings();
    //主机编号
    var td1=$('td[ref=td1]');
    $(td1).html(mid);

    //网络
    var td2Text=$('span[ref=td2Text]');
    var text=Trim($(parent[0]).text());
    $(td2Text).html(text)

    if(text=='良好'){
        $('img[ref=td2Img]').attr('src','../img/good.png')
        $(td2Text).css('color','#00FFA2');
        $('.top-central-condition').removeClass('top-central-condition-red','top-central-condition-blue');
        $('.top-central-condition').addClass('top-central-condition-blue');
        $('.rm-server-content-bottom').css('background-image','url("../img/blue.png")')
    }else if(text=='中断'){
        $('img[ref=td2Img]').attr('src','../img/down.png')
        $(td2Text).css('color','#FF005D');
        $('.top-central-condition').removeClass('top-central-condition-red','top-central-condition-blue');
        $('.top-central-condition').addClass('top-central-condition-red');
        $('.rm-server-content-bottom').css('background-image','url("../img/red.png")')
    }

    //存储空间
    var cc=Trim($(parent[1]).text())
    var ccNum=parseFloat(cc)/100;
    if (ccNum>=0.9){
        echartBar('echartPie1','red',ccNum);
        $('img[ref=pieChartImg]').attr('src','../img/redBg.png')
    }else {
        echartBar('echartPie1','blue',ccNum);
        $('img[ref=pieChartImg]').attr('src','../img/blueBg.png')
    }


    //当前进程数
    $('span[ref=td4]').html($(parent[2]).text());

    //内存剩余
    $('span[ref=td5]').html($(parent[3]).text());
    $('span[ref=td5Num]').html($(parent[3]).attr('gb'));
}

function echartBar(id,colors,data) {
    var red=['#FF1264','#F568EE']
    var orange=['#FB8619','#FDE584']
    var blue=['#1AA6FC','#57F0FE']
    var color=red
    if(colors=='orange'){
        color=orange
    }else if(colors=='red'){
        color=red
    }else if(colors=='blue'){
        color=blue;
    }
    var rate =data;//0.4+0.2*Math.random();
    var linear_color = {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 1,
        y2: 0,
        colorStops: [{
            offset: 0,
            color: color[0]
        }, {
            offset: 1,
            color: color[1]
        }]
    };
    var option = {
        title: {
            text: "存储空间",
            textStyle: {
                color: '#fff',
                fontSize: 12,
                fontWeight: 'bold'
            },
            left: 'center',
            bottom: '12%'
        },
        series: [{
            type: 'pie',
            hoverAnimation: false,
            radius: ['63%', '70%'],
            startAngle: 225,
            labelLine: {
                show: false,
                color: 'rgba(0,0,0,0)'
            },
            data: [{
                value: rate * 270,
                /*selected:true,*/
                label: {
                    normal: {
                        show: true,
                        position: 'center',
                        formatter: (rate*100).toFixed(2) + '%',
                        textStyle: {
                            color: '#fff',
                            fontSize: 16,
                            fontWeight: '500'
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        color: linear_color,
                        borderWidth: 5,
                        shadowBlur:10,
                        shadowColor: '#647C98'
                    }
                }
            }, {
                value: 270 - rate * 270,
                label: {
                    normal: {
                        show: true,
                        position: 'inside',
                        formatter:'',
                        textStyle: {
                            color: 'rgba(0,0,0,0)',
                            fontSize: 16,
                            fontWeight: '500'
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#27486F',
                        borderWidth: 5,
                        shadowBlur:10,
                        shadowColor: '#647C98'
                    }
                }
            }, {
                value: 90,
                itemStyle: {
                    normal: {
                        color: "rgba(0,0,0,0)"
                    }
                }
            }],
        }]
    };

    var chart = echarts.init(document.getElementById(id));
    chart.setOption(option);
    $(window).resize(function() {
        chart.resize();
    });
}

function table() {

    $('.trBgStar').removeClass('trBgStar');
    var rem=$('#'+test).parent();
    $(rem).addClass('trBgStar')

    var tableObject = $('#tableSort'); //获取id为tableSort的table对象
    var tbHead = tableObject.children('thead'); //获取table对象下的thead
    var tbHeadTh = tbHead.find('tr th'); //获取thead下的tr下的th
    var tbBody = tableObject.children('tbody'); //获取table对象下的tbody
    var tbBodyTr = tbBody.find('tr'); //获取tbody下的tr
    var sortIndex = -1;
    tbHeadTh.each(function () {//遍历thead的tr下的th
        var thisIndex = tbHeadTh.index($(this)); //获取th所在的列号
        //给表态th增加鼠标位于上方时发生的事件
        $(this).mouseover(function () {
            tbBodyTr.each(function () {//编列tbody下的tr
                var tds = $(this).find("td"); //获取列号为参数index的td对象集合
            });
        }).mouseout(function () {//给表头th增加鼠标离开时的事件
            tbBodyTr.each(function () {
                var tds = $(this).find("td");
            });
        });
        $(this).click(function () {//给当前表头th增加点击事件
            var dataType = $(this).attr("type");//点击时获取当前th的type属性值
            checkColumnValue(thisIndex, dataType);
        });
    });
    // $("tbody tr").removeClass(); //先移除tbody下tr的所有css类
    //对表格排序
    function checkColumnValue(index, type) {
        var trsValue = new Array();
        tbBodyTr.each(function () {
            var tds = $(this).find('td');
            //获取行号为index列的某一行的单元格内容与该单元格所在行的行内容添加到数组trsValue中
            trsValue.push(type + ".separator" + $(tds[index]).html() + ".separator" + $(this).html());
            $(this).html("");
        });
        var len = trsValue.length;
        if (index == sortIndex) {
            //如果已经排序了则直接倒序
            trsValue.reverse();
        } else {
            for (var i = 0; i < len; i++) {
                //split() 方法用于把一个字符串分割成字符串数组
                //获取每行分割后数组的第一个值,即此列的数组类型,定义了字符串\数字\Ip
                type = trsValue[i].split(".separator")[0];
                for (var j = i + 1; j < len; j++) {
                    //获取每行分割后数组的第二个值,即文本值
                    value1 = trsValue[i].split(".separator")[1];
                    //获取下一行分割后数组的第二个值,即文本值
                    value2 = trsValue[j].split(".separator")[1];
                    //接下来是数字\字符串等的比较
                    if (type == "number") {
                        value1 = value1 == "" ? 0 : value1;
                        value2 = value2 == "" ? 0 : value2;
                        if (parseFloat(value1) > parseFloat(value2)) {
                            var temp = trsValue[j];
                            trsValue[j] = trsValue[i];
                            trsValue[i] = temp;
                        }
                    } else if (type == "ip") {
                        if (ip2int(value1) > ip2int(value2)) {
                            var temp = trsValue[j];
                            trsValue[j] = trsValue[i];
                            trsValue[i] = temp;
                        }
                    } else {
                        if (value1.localeCompare(value2) > 0) {//该方法不兼容谷歌浏览器
                            var temp = trsValue[j];
                            trsValue[j] = trsValue[i];
                            trsValue[i] = temp;
                        }
                    }
                }
            }
        }
        for (var i = 0; i < len; i++) {
            $("#tableSort tbody tr:eq(" + i + ")").html(trsValue[i].split(".separator")[2]);
        }
        sortIndex = index;
        $('.trBgStar').removeClass('trBgStar');
        var rem=$('#'+test).parent();
        $(rem).addClass('trBgStar')
    }
    //IP转成整型
    function ip2int(ip) {
        var num = 0;
        ip = ip.split(".");
        num = Number(ip[0]) * 256 * 256 * 256 + Number(ip[1]) * 256 * 256 + Number(ip[2]) * 256 + Number(ip[3]);
        return num;
    }
}