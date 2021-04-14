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

    renderData(data1)
    var test=setInterval(function(){
        renderData(data)
    }, 3000);
})

function renderData(data) {
    var list=['Gx','Jf','Kh','Zl','Fm']
    $('#cellNum').html(data.cellNum);
    $('#crewNum').html(data.crewNum);
    $('#paymentAll').html(data.paymentAll);
    for (var i=0;i<list.length;i++){
        var aa=data['payment'+list[i]]
        $('#payment'+list[i]).html(aa.payment);
        $('#stocks'+list[i]).html(aa.stocks);
        $('#allNum'+list[i]).html(aa.allNum);
        if(aa.stocks==aa.allNum){
            $('#stocks'+list[i]).removeClass('red green')
                .addClass('green')

            $('#stocks'+list[i]).parent().parent().children('.type-basic').removeClass('type-yes type-no')
                .addClass('type-yes')
        }else if(aa.stocks<aa.allNum){
            $('#stocks'+list[i]).removeClass('red green')
                .addClass('red')

            $('#stocks'+list[i]).parent().parent().children('.type-basic').removeClass('type-yes type-no')
                .addClass('type-no')
        }
    }
}