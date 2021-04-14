var indexData=0
$(function () {
    var data={
        cellNum:12345,//单元数量
        crewNum:2364,//人员数量
        paymentAll:258943.26,//薪酬总额
        paymentGx:{   //固薪
            payment:2559.36,//薪酬
            stocks:100,//完成数量
            allNum:100,//总数量
        },
        paymentJf:{   //积分
            payment:25529.36,//薪酬
            stocks:0,//完成数量
            allNum:104,//总数量
        },
        paymentKh:{   //考核
            payment:23559.36,//薪酬
            stocks:0,//完成数量
            allNum:103,//总数量
        },
        paymentZl:{   //增量
            payment:22559.36,//薪酬
            stocks:100,//完成数量
            allNum:102,//总数量
        },
        paymentFm:{   //负面
            payment:25159.36,//薪酬
            stocks:101,//完成数量
            allNum:101,//总数量
        },
    }

    var data1={
        cellNum:12345,//单元数量
        crewNum:2364,//人员数量
        paymentAll:258943.26,//薪酬总额
        paymentGx:{   //固薪
            payment:2559.36,//薪酬
            stocks:0,//完成数量
            allNum:100,//总数量
        },
        paymentJf:{   //积分
            payment:25529.36,//薪酬
            stocks:0,//完成数量
            allNum:104,//总数量
        },
        paymentKh:{   //考核
            payment:23559.36,//薪酬
            stocks:0,//完成数量
            allNum:103,//总数量
        },
        paymentZl:{   //增量
            payment:22559.36,//薪酬
            stocks:0,//完成数量
            allNum:102,//总数量
        },
        paymentFm:{   //负面
            payment:25159.36,//薪酬
            stocks:0,//完成数量
            allNum:101,//总数量
        },
    }

    var tableData=[
        {
            name:'尚方',
            dataGx:253,
            dataJf:253,
            dataKh:253,
            dataZl:253,
            dataFm:253,
            dataZe:1265,
        },
        {
            name:'尚方111',
            dataGx:253,
            dataJf:253,
            dataKh:253,
            dataZl:253,
            dataFm:253,
            dataZe:1265,
        },
        {
            name:'尚方',
            dataGx:253,
            dataJf:253,
            dataKh:253,
            dataZl:253,
            dataFm:253,
            dataZe:1265,
        },
        {
            name:'尚方111',
            dataGx:253,
            dataJf:253,
            dataKh:253,
            dataZl:253,
            dataFm:253,
            dataZe:1265,
        },
        {
            name:'尚方',
            dataGx:253,
            dataJf:253,
            dataKh:253,
            dataZl:253,
            dataFm:253,
            dataZe:1265,
        },
        {
            name:'尚方111',
            dataGx:253,
            dataJf:253,
            dataKh:253,
            dataZl:253,
            dataFm:253,
            dataZe:1265,
        },
        {
            name:'尚方',
            dataGx:253,
            dataJf:253,
            dataKh:253,
            dataZl:253,
            dataFm:253,
            dataZe:1265,
        },
        {
            name:'尚方111',
            dataGx:253,
            dataJf:253,
            dataKh:253,
            dataZl:253,
            dataFm:253,
            dataZe:1265,
        },
        {
            name:'尚方11',
            dataGx:253,
            dataJf:253,
            dataKh:253,
            dataZl:253,
            dataFm:253,
            dataZe:1265,
        },
        {
            name:'尚方1',
            dataGx:253,
            dataJf:253,
            dataKh:253,
            dataZl:253,
            dataFm:253,
            dataZe:1265,
        },
    ]

    tableRenderData(tableData);
    renderData(data1)
    var test=setInterval(function(){
        renderData(data)
    }, 3000);
})

function tableRenderData(data) {
    indexData=data.length;
    var html=""
    html+="<tbody>"
    for (var i=0;i<data.length;i++){
        html+='<tr>'
        html+='    <td class="payment-pc-table-name">'+data[i].name+'</td>'
        html+='    <td id="dataGx'+i+'">'+data[i].dataGx+'</td>'
        html+='    <td id="dataJf'+i+'">'+data[i].dataJf+'</td>'
        html+='    <td id="dataKh'+i+'" onclick="editEvent(this,'+i+')">'+data[i].dataKh+'</td>'
        html+='    <td id="dataZl'+i+'" onclick="editEvent(this,'+i+')">'+data[i].dataZl+'</td>'
        html+='    <td id="dataFm'+i+'" onclick="editEvent(this,'+i+')">'+data[i].dataFm+'</td>'
        html+='    <td id="dataZe'+i+'" >'+data[i].dataZe+'</td>'
        html+='</tr>'
    }
    html+="</tbody>0"
    $('#paymentTable').html(html);
}

function renderData(data) {
    var list=['Gx','Jf','Kh','Zl','Fm']
    $('#cellNum').html(data.cellNum);
    $('#crewNum').html(data.crewNum);
    $('#paymentAll').html(data.paymentAll);
    $('#paymentTd').html(data.paymentKh.payment + data.paymentZl.payment - data.paymentFm.payment)
    for (var i=0;i<list.length;i++){
        var aa=data['payment'+list[i]]
        $('#payment'+list[i]).html(aa.payment);
        if(aa.stocks==aa.allNum){
            $('#paymentType'+list[i]).removeClass('type-yes type-no')
                .addClass('type-yes')
        }else if(aa.stocks<aa.allNum){
            $('#paymentType'+list[i]).removeClass('type-yes type-no')
                .addClass('type-no')
        }
    }
}

function editEvent(event,index) {
    let dom = $(event); //获取当前节点元素
    let oldVal = dom[0].innerHTML;//获取当前值
    if(oldVal.indexOf("input") != -1){
        return
    }
    dom[0].innerHTML ="";//
    let inputHtml = document.createElement("input");//创建input标签
    inputHtml.setAttribute("type","text");
    inputHtml.setAttribute("value",oldVal);
    inputHtml.style.height="100%";
    inputHtml.style.width ="100%";
    dom[0].appendChild(inputHtml);
    inputHtml.focus();//使光标在输入框内
    inputHtml.select();//默认选择内容
    inputHtml.onblur = function(e){
        //绑定失去焦点事件
        let target = e.target;
        let newVal = target.value;
        if(newVal==""){
            newVal=0;
        }
        dom[0].innerHTML = newVal;
        var gx=parseInt($('#dataGx'+index).html());
        var jf=parseInt($('#dataJf'+index).html());
        var kh=parseInt($('#dataKh'+index).html());
        var zl=parseInt($('#dataZl'+index).html());
        var fm=parseInt($('#dataFm'+index).html());
        $('#dataZe'+index).html(gx+jf+kh+zl-fm)
    }
}

function clickPayment() {
    var allRealKh=0;
    var allRealZl=0;
    var allRealFm=0;
    for(var i=0;i<indexData;i++){
        allRealKh+=parseInt($('#dataKh'+i).html());
        allRealZl+=parseInt($('#dataZl'+i).html());
        allRealFm+=parseInt($('#dataFm'+i).html());
    }
    var allKh=parseInt($('#paymentKh').html());
    var allZl=parseInt($('#paymentZl').html());
    var allFm=parseInt($('#paymentFm').html());
    if(allRealKh!=allKh){
        alert('考核薪酬数据不匹配');
        return
    }
    if(allRealZl!=allZl){
        alert('增量毛利数据不匹配');
        return
    }
    if(allRealFm!=allFm){
        alert('负面清单数据不匹配');
        return
    }

    alert('提交成功');
}