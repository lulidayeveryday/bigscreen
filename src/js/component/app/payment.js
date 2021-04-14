$(function () {
    var data = [{
        value: 3661,
        name: '固薪'
    }, {
        value: 5713,
        name: '考核变薪'
    }, {
        value: 9938,
        name: '积分变薪'
    }, {
        value: 17623,
        name: '增量分享'
    }, {
        value: 3299,
        name: '负面扣罚'
    }];
    var payment=5012.23
    echartsPie(data,payment)
})

function echartsPie(data,payment) {

    var option = {
        backgroundColor: '#fff',
        title: {
            text: payment,
            subtext: '总薪酬',
            x: 'center',
            y: 'center',
            textStyle: {
                fontWeight: 'normal',
                fontSize: 16
            }
        },
        tooltip: {
            show: true,
            trigger: 'item',
            formatter: "{b}: {c} ({d}%)"
        },
        legend: {
            show:false,
        },
        series: [{
            type: 'pie',
            radius: ['60%', '75%'],
            color: ['#86D560', '#AF89D6', '#59ADF3', '#FF999A', '#FFCC67'],

            label: {
                normal: {
                    show:false,
                    position: 'inner',
                    formatter: '{d}%',

                    textStyle: {
                        color: '#fff',
                        fontWeight: 'bold',
                        fontSize: 14
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: data
        }]
    };
    var myChart = echarts.init(document.getElementById('paymentPie'));
    myChart.setOption(option);
}