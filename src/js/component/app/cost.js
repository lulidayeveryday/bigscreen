$(function () {
    var pieData=75;
    costPieChart(pieData);
})

function costPieChart(data1){
    var option = {
        series: [{
            name: '饼图二',
            type: 'pie',
            radius: ['70%', '75%'],
            center: ['50%', '60%'],
            label: {
                normal: {
                    position: 'center'
                }
            },
            data: [{
                value: data1,
                name: '占有率',
                itemStyle: {
                    normal: {
                        color: '#FA2437',
                        shadowColor: '#FA2437',
                        shadowBlur: 10
                    }
                },
                label: {
                    normal: {
                        formatter: '{d}%',
                        textStyle: {
                            fontSize: 23,
                            fontWeight:'bold',
                            color: '#FA2437'
//										FF7970
                        }
                    }
                }
            }, {
                value: 100-data1,
                name: '占位',
                label: {
                    normal: {
                        formatter: '\n成本使用率',
                        textStyle: {
                            color: '#777',
                            fontSize: 15
                        }
                    }
                },
                tooltip: {
                    show: false
                },
                itemStyle: {
                    normal: {
                        color: '#90979D'
                    },
                    emphasis: {
                        color: '#90979D'
                    }
                },
                hoverAnimation: false
            }]
        }]
    };

    var myChart = echarts.init(document.getElementById('costPie'));
    myChart.setOption(option);
}

function showChild(temp) {
    if($(temp).parents('.cost-table-tr').children('.table-content').css('display')=='block'){
        $(temp).parents('.cost-table-tr').children('.table-content').css('display','none');
        $(temp).attr("src","img/add.png")
    }else {
        $(".table-content").css('display','none')
        $(temp).parents('.cost-table-tr').children('.table-content').css('display','block');
        $(temp).attr("src","img/minu.png")
    }
}