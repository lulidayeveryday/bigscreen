
//假数据
var filterItemArr = [
    { name: '3G登网', value: 'one'},
    { name: '探亲的', value: 'two'},
    { name: '来访用户', value: 'three'},
    { name: '国内用户', value: 'four'},
    { name: '3G登网', value: 'one1'},
    { name: '探亲的', value: 'two1'},
    { name: '来访用户', value: 'three1'},
    { name: '国内用户', value: 'four1'},
];

var tool = {
    //获取当月的天数
    getMonthLength: function(dateStr) {
        var date = dateStr ? new Date(dateStr) : new Date();
        var y = date.getFullYear();
        var m = date.getMonth() + 1;
        var d = new Date(y, m , 0);
        return d.getDate();
    },
    // 获取前第n天的日期
    getBeforeDate: function (n = 0,dateStr) {
        var date = dateStr ? new Date(dateStr) : new Date();
        var year, month, day;
        date.setDate(date.getDate() - n);
        year = date.getFullYear();
        month = date.getMonth() + 1;
        day = date.getDate();
        s = year + '/' + (month < 10 ? ('0' + month) : month) + '/' + (day < 10 ? ('0' + day) : day);
        return s;
    },
    getBeforeMonth: function(n = 0, dateStr) {
        var date = dateStr ? new Date(dateStr) : new Date();
        var year, month;
        date.setMonth(date.getMonth() - n);
        year = date.getFullYear();
        month = date.getMonth() + 1;
        s = year + '/' + (month < 10 ? '0' + month : month);
        return s;
    },
    // 获取前n天的日期数组,包括当天
    getBeforeDateArr: function(n, dateStr) {
        var arr = [];
        for( var i = n; i >= 0; i--) {
            arr.push(this.getBeforeDate(i, dateStr));
        }
        return arr;
    },
    //设置循环播放
    setLoop: function(func, interval) {
        var that = this;
        func();
        global.timer = setTimeout(that.setLoop.bind(that, func, interval), interval);
    },
    //取消循环播放
    cancelLoop: function(){
        clearTimeout(global.timer)
    },
    //删除数组中的某一项，项为对象，根据传入的value值来删除
    removeFromArr: function(value, arr) {
        var index;
        for(var i = 0, len = arr.length; i < len; i++) {
            if(arr[i].value === value){
                index = i;
                break;
            }
        }
        if(index !== undefined) {
            arr.splice(i, 1);
        }
    },
    // 向数组中添加项，项为{name: '', value: ''}形式
    addToArr: function(arr, item) {
        for(var i = 0, len = arr.length; i < len; i++) {
            if(arr[i].value === item.value) {
                return;
            }
        }
        arr.unshift(item);
    }
}
var global = {
    playIndex : 6,
    timer: null,
    swiper: null,
    selectedUserItem: filterItemArr,
    //存储一个从选中状态到取消选中状态的的数组，点击确定按钮时用
    unSelectedUserItem: []
}
var renderFunc = {
    renderTimeline: function(data, type, notThisMonth){
        var htmlStr = '';
        if(type === '日') {
            data.forEach(function(item, index){
                var today = new Date().getDate() - 1;
                if(notThisMonth) {
                    htmlStr += index === today ?
                `
                    <span class="timeline-item active" data-value=${item} data-type=${type}>${item}${type}</span>
                ` :
                `
                    <span class="timeline-item" data-value=${item} data-type=${type}>${item}${type}</span>
                `;
                } else {
                    htmlStr += index === today ?
                `
                    <span class="timeline-item active" data-value=${item} data-type=${type}>${item}${type}</span>
                ` :
                    (index > today ?
                        `
                    <span class="timeline-item disabled" data-value=${item} data-type=${type}>${item}${type}</span>
                ` :
                        `
                    <span class="timeline-item" data-value=${item} data-type=${type}>${item}${type}</span>
                `
                    );
                }
            })
        } else {
            data.forEach(function(item, index){
                var hour = new Date().getHours();
                htmlStr += index <= hour ? 
                (
                    index === 9 ? 
                `
                    <span class="timeline-item active" data-value=${item} data-type=${type}>${item}${type}</span>
                ` : 
                `
                    <span class="timeline-item" data-value=${item} data-type=${type}>${item}${type}</span>
                `
                ) :
                (
                    index === 9 ? 
                `
                    <span class="timeline-item active" data-value=${item} data-type=${type}>${item}${type}</span>
                ` : 
                `
                    <span class="timeline-item disabled" data-value=${item} data-type=${type}>${item}${type}</span>
                `
                )
            })
        }
        
        $('.time-line .line').html(htmlStr);
    },
    renderPlayItem: function(data, type, hour) {
        var htmlStr = '';
        if(type === 'day') {
           data.forEach(function(item, index){
               htmlStr += index === 6 ?
               `
                <div class="play-item active" data-index=${index}>
                    <div class="play-date">${item}</div>
                </div>
                `:
                `
                <div class="play-item" data-index=${index}>
                    <div class="play-date">${item}</div>
                </div>
                `;
           })
        }else if(type === 'hour') {
            var hourText = hour ? `${hour}: 00` : '9: 00';
            data.forEach(function(item, index){
                htmlStr += index === 6 ? 
                `
                    <div class="play-item active" data-index=${index}>
                        <div class="play-date">${item}</div>
                        <div class="play-time">${hourText}</div>
                    </div>
                `:
                `
                    <div class="play-item" data-index=${index}>
                        <div class="play-date">${item}</div>
                        <div class="play-time">${hourText}</div>
                    </div>
                `;
            })
        }
        $('.play-container').html(htmlStr);
    },
    renderFilterItem: function(data){
        var htmlStr = '';
        data.forEach(function(item){
            htmlStr += `
                <div class="filter-item swiper-slide">
                    <span class="filter-name">${item.name}</span>
                    <span data-value=${item.value} class="fliter-close">+</span>
                </div>
            `;
        });
        $('.swiper-wrapper').html(htmlStr);
    },
    renderCountry: function(selector, flag, data) {
        !data && (data = [
            {name: '中华人民共和国', value: '1'},
            {name: '中华人民共和国', value: '2'},
            {name: '中华人民共和国', value: '3'},
            {name: '中华人民共和国', value: '4'},
            {name: '中华人民共和国', value: '5'},
            {name: '中华人民共和国', value: '6'},
        ]);
        var htmlStr = '';
        data.forEach(function(item){
            htmlStr += flag ?
            `
            <div class="check-wrapper type-three active">
                <span class="check-select selected" data-value=${item.value}></span>
                <span class="check-name">${item.name}</span>
            </div>
            `:
            `
            <div class="check-wrapper type-three">
                <span class="check-select" data-value=${item.value}></span>
                <span class="check-name">${item.name}</span>
            </div>
            `
            ;
        })
        $('.source-country.' + selector).html(htmlStr);
    }
}

var realTime = {
    init: function() {
        // 初始化地图
        this.initMap();
        //初始化图表
        this.setChart();
        // 渲染时间轴
        var hourLine = Array.from({length:24}, (item, index) => index);
        renderFunc.renderTimeline(hourLine, '点');
        //渲染playItem
        var dateArr = tool.getBeforeDateArr(6);
        renderFunc.renderPlayItem(dateArr, 'hour');
        //初始化前一天、后一天的值
        $('.pre .pre-date').text(tool.getBeforeDate(1));
        $('.next .next-date').text(tool.getBeforeDate(-1));
        //渲染选项标签
        renderFunc.renderFilterItem(filterItemArr);
        this.setSwiper();
        //绑定事件
        this.bindEvent();
    },
    bindEvent: function() {
        var _this = this;
        //在body上绑定事件，
        $('body').click(function(e){
            //点击页面其他地方，关闭选项卡
            if($(e.target).hasClass('select-nav-btn')) return;
            if($(e.target).parents('.select-content').length === 0){
                $('.select-content').hide();
                $('.select-nav-btn').removeClass('active');
            }
        })
        //事件轴上的点击
        $('.time-line').on('click','.timeline-item',_this.handleTimeLineItem)
        // 在选择地域、用户等按钮上绑定事件
        $('.nav-item-container').on('click','.select-nav-btn',_this.handleNavItem);
        //选择用户绑定事件
        $('.user-confirm-btn').click(function(){
            $('.select-content').hide();
            $('.select-nav-btn').removeClass('active');
            var doms = $('.user-content .check-select.selected');
            for(var i = 0, len = global.unSelectedUserItem.length; i < len; i++){
                tool.removeFromArr(global.unSelectedUserItem[i].value, global.selectedUserItem);
            }
            for(var i = 0, len = doms.length; i < len; i++) {
                var item = {
                    name: doms[i].nextElementSibling.innerText,
                    value: doms[i].nextElementSibling.innerText
                }
                tool.addToArr(global.selectedUserItem, item);
            }
            //先把注释写在这里，这里只处理的选择用户的项，还有地域和场景要处理呢
            renderFunc.renderFilterItem(global.selectedUserItem);
            global.swiper.destroy();
            realTime.setSwiper();
            global.unSelectedUserItem = [];

        });
        $('.source-hide-btn').click(function(){
            $('.source-hide').hide();
            $('.source-country').hide();
            $('.source-entry').hide();
            $('.source-area-title .check-wrapper').removeClass('active');
            $('.source-continent .check-wrapper').removeClass('active')
        });
        $('.user-content').on('click','.type-three',function(){
            var $_this = $(this);
            if($_this.hasClass('active')){
                $_this.removeClass('active').find('.check-select').removeClass('selected');
                // 将此项放入unSelectedUserItem
                var item = {
                    name: $_this.find('.check-name').text(),
                    value: $_this.find('.check-name').text()
                }
                tool.addToArr(global.unSelectedUserItem, item);
            }else {
                $_this.addClass('active').find('.check-select').addClass('selected');
            }
        });
        //选择用户第二类复选框绑定事件
        $('.user-content').on('click', '.type-two',_this.handleTypeTwo);
        $('.entry-btn').click(function(){
            if($(this).hasClass('active')){
                $(this).removeClass('active');
                $('.source-entry').hide();
                $('.source-continent .check-wrapper').removeClass('active')
            }else {
                $(this).addClass('active').siblings().removeClass('active');
                $('.source-entry').show();
            }
        })
        //这个事件在.type-two, .type-three上绑定事件之后
        // $('.user-content').on('click', '.type-two, .type-three',function(){
        //     console.log($(this).find('.check-select'));
        // })
        //在天、小时、实时上绑定事件
        $('.nav-type').on('click', 'span', _this.handleNavType);
        //在前一天/月按钮上绑定事件
        $('.pre').click(_this.hnadlePreBtn);
        //在后一天/月按钮上绑定事件
        $('.next').click(_this.handleNextBtn);
        //在选项标签上绑定删除事件
        $('.filter-item-container').on('click', '.fliter-close', _this.handleDeleteItem);
        //开始、停止按钮绑定事件
        $('.stop-play').click(_this.handlePlay);
        //在play-item上绑定事件
        $('.play-container').on('click', '.play-item', _this.handlePlayClick);
        //绑定清空
        $('.user-content .clear-btn').click(function(){
            _this.handleClearBtn('user-content');
        });
    },
    //以下定义一些事件处理函数
    handleTimeLineItem: function(){
        if($(this).hasClass('disabled')) return;
        $(this).addClass('active').siblings().removeClass('active');
        if(this.dataset.type === '点') {
            $('.play-time').text(`${this.dataset.value} : 00`)
        } else if(this.dataset.type === '日'){
            var currentDate = new Date($('.pre .pre-date').text());
            currentDate.setMonth(currentDate.getMonth() + 1, $('.timeline-item.active').data().value)
            var dateArr = tool.getBeforeDateArr(6, currentDate.toLocaleDateString());
            renderFunc.renderPlayItem(dateArr, 'day');
        }
    },
    handleNavItem: function() {
        $('.select-nav-btn').removeClass('active').siblings('.select-content').hide();
        $(this).addClass('active').siblings('.select-content').show();
    },
    handleTypeTwo: function (e) {
        var $_this = $(this);
        if (e.target.className.indexOf('check-select') !== -1) {
            var childSelector = $(this).data().child;
            if ($(e.target).hasClass('selected')) {
                var item = {
                    name: e.target.nextElementSibling.innerText,
                    value: e.target.nextElementSibling.innerText
                }
                tool.addToArr(global.unSelectedUserItem, item);
                $('.source-country.' + childSelector + ' .type-three').removeClass('active');
                $('.source-country.' + childSelector + ' .check-select').removeClass('selected');
                $(e.target).removeClass('selected');
            } else {
                $('.source-country.' + childSelector + ' .type-three').addClass('active');
                $('.source-country.' + childSelector + ' .check-select').addClass('selected');
                $(e.target).addClass('selected')
            }
            e.stopPropagation();
            return;
        }
        var countryDom = $('.source-country.' + $_this.data().child);
        if ($_this.hasClass('active')) {
            $_this.removeClass('active')
            countryDom.hide();
            return;
        } else {
            $('.source-hide').show();
            //获取国家列表，然后渲染
            countryDom.show().siblings().hide();
            if(countryDom.children().length<=0) {
                console.log($_this.find('.check-select')[0],$_this.find('.check-select').hasClass('selected'))
                if($_this.find('.check-select').hasClass('selected')) {
                    renderFunc.renderCountry($_this.data().child, true);
                }else {
                    renderFunc.renderCountry($_this.data().child, false);
                }
            }
            $_this.addClass('active').siblings().removeClass('active');
        }
    },
    hnadlePreBtn: function (e) {
        console.log($(this).find('.pre-text').text())
        if ($(this).find('.pre-text').text().indexOf('天') !== -1) {
            renderFunc.renderPlayItem(tool.getBeforeDateArr(6, $('.pre .pre-date').text()), 'hour',
            $('.timeline-item.active').data('value'));
            $('.pre .pre-date').text(tool.getBeforeDate(1, $('.pre .pre-date').text()))
            $('.next .next-date').text(tool.getBeforeDate(1, $('.next .next-date').text()))
            $('.next').removeClass('disabled')
        } else if ($(this).find('.pre-text').text().indexOf('月') !== -1) {
            var dayLine = Array.from({ length: tool.getMonthLength($('.pre .pre-date').text()) }, (t, i) => i + 1);
            renderFunc.renderTimeline(dayLine, '日', true);
            $('.next').removeClass('disabled')
            //改变下面轮播的日期的放在点击timeline上做
            $('.pre .pre-date').text(tool.getBeforeMonth(1, $('.pre .pre-date').text()))
            $('.next .next-date').text(tool.getBeforeMonth(1, $('.next .next-date').text()))
        }
    },
    handleNextBtn: function (e) {
        if ($(this).hasClass('disabled')) return;
        if ($(this).find('.next-text').text().indexOf('天') !== -1) {
            renderFunc.renderPlayItem(tool.getBeforeDateArr(6, $('.next .next-date').text()), 'hour',
                $('.timeline-item.active').data('value'));
            $('.pre .pre-date').text(tool.getBeforeDate(-1, $('.pre .pre-date').text()))
            $('.next .next-date').text(tool.getBeforeDate(-1, $('.next .next-date').text()))
            if (new Date($('.next .next-date').text()).getTime() >= new Date().getTime()) {
                $('.next').addClass('disabled');
            }
        } else if ($(this).find('.next-text').text().indexOf('月') !== -1) {
            var dayLine = Array.from({ length: tool.getMonthLength($('.next .next-date').text()) }, (t, i) => i + 1);
            renderFunc.renderTimeline(dayLine, '日', true);
            //改变下面轮播的日期的放在点击timeline上做
            $('.pre .pre-date').text(tool.getBeforeMonth(-1, $('.pre .pre-date').text()))
            $('.next .next-date').text(tool.getBeforeMonth(-1, $('.next .next-date').text()))
            if (new Date($('.next .next-date').text()).getTime() >= new Date().getTime()) {
                $('.next').addClass('disabled');
                renderFunc.renderTimeline(dayLine, '日', false);
            } else {
                renderFunc.renderTimeline(dayLine, '日', true);
            }
        }
    },
    handleNavType: function (e) {
        var $this = $(this);
        if ($this.hasClass('active')) return;
        switch (e.target.className) {
            case 'nav-day':
                $('.select-scene').parent().show();
                $('.select-user').parent().show();
                $('.filter').show();
                $('.time-line').show();
                $('.play-container').show();
                $('.chart-dom').show();
                $('.time-line .next').addClass('disabled');
                var dayLine = Array.from({ length: tool.getMonthLength() }, (t, i) => i + 1);
                renderFunc.renderTimeline(dayLine, '日');
                var dateArr = tool.getBeforeDateArr(6);
                renderFunc.renderPlayItem(dateArr, 'day');
                $('.pre .pre-date').text(tool.getBeforeMonth(1));
                $('.next .next-date').text(tool.getBeforeMonth(-1));
                $('.pre .pre-text').text('前一月');
                $('.next .next-text').text('后一月');
                // 在显示隐藏.time-line的时候，.map-wrapper有时候有点问题，所以用js改变高度，下同
                $('.map-wrapper').height($('.map-wrapper').height() - 34);
                break;
            case 'nav-hour':
                $('.select-scene').parent().show();
                $('.select-user').parent().show();
                $('.filter').show();
                $('.time-line').show();
                $('.play-container').show();
                $('.chart-dom').show();
                $('.time-line .next').addClass('disabled');
                var hourLine = Array.from({ length: 24 }, (item, index) => index);
                renderFunc.renderTimeline(hourLine, '点');
                var dateArr = tool.getBeforeDateArr(6);
                renderFunc.renderPlayItem(dateArr, 'hour');
                $('.pre .pre-date').text(tool.getBeforeDate(1));
                $('.next .next-date').text(tool.getBeforeDate(-1));
                $('.pre .pre-text').text('前一天');
                $('.next .next-text').text('后一天');
                $('.map-wrapper').height($('.map-wrapper').height() - 34);
                break;
            case 'nav-real':
                $('.select-scene').parent().hide();
                $('.select-user').parent().hide();
                $('.filter').hide();
                $('.time-line').hide();
                $('.play-container').hide();
                $('.chart-dom').hide();
                break;
            default:
                console.log('default');
                break;
        }
        $this.addClass('active').siblings().removeClass('active');

    },
    handleDeleteItem: function (e) {
        var value = e.target.dataset.value;
        //销毁swiper实例
        global.swiper.destroy();
        //这里先暂时处理selectedUserItem,还有地域、场景呢
        tool.removeFromArr(value, global.selectedUserItem);
        renderFunc.renderFilterItem(global.selectedUserItem);
        realTime.setSwiper();
        //还没完，还要继续处理checkbox，从CheckBox中取消选中
        //因为这里是假数据，在点击选择框取值时，暂时取的innertext所以这里先这样处理，有真数据的时候再说
        var ele = $('.check-wrapper .check-name:contains('+ value +')');
        ele.siblings().removeClass('selected')
        if(ele.siblings().length === 1){
            ele.parent().removeClass('active')
        }
    },
    // 清空按钮
    handleClearBtn: function(selector) {
        $('.' + selector + ' ' +  '.check-wrapper span').removeClass('selected')
        $('.' + selector + ' ' +  '.check-wrapper').removeClass('active')
        global.selectedUserItem = [];
    },
    handlePlay: function() {
        if($(this).hasClass('active')){
            $(this).removeClass('active').text('开始播放');
            tool.cancelLoop();
        } else {
            $(this).addClass('active').text('结束播放');
            tool.setLoop(realTime.play, 2000);
        }
    },
    //play
    play: function() {
        global.playIndex++;
        if(global.playIndex >= 7){
            global.playIndex = 0;
        }
        $('.play-item').removeClass('active');
        $($('.play-item')[global.playIndex]).addClass('active')
    },
    handlePlayClick: function(){
        $(this).addClass('active').siblings().removeClass('active');
        global.playIndex = parseInt(this.dataset.index);
    },
    //初始化地图
    initMap: function() {
        var map = new BMap.Map('map');
        map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);
        map.enableScrollWheelZoom(true);
    },
    // 设置echart图表
    setChart: function(chartData) {
        var myChart = echarts.init(document.getElementById('my-chart'));
        myChart.setOption({
            color: ['#2de4ff'],
            tooltip: {
                trigger: 'axis'
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun','Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                axisLine: {
                    lineStyle: {
                        color: '#7295d1'
                    }
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#7295d1'
                    }
                }
            },
            yAxis: {
                type: 'value',
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: false
                },
                splitLine: {
                    lineStyle: {
                        color: '#7295d1'
                    }
                }
            },
            itemStyle: {
                color: 'blue'
            },
            markLine: {
                lineStyle: {
                    color: 'blue'
                }
            },
            series: [{
                data: [820, 932, 901, 934, 1290, 1330, 1320,820, 932, 901, 934, 1290, 1330, 1320],
                type: 'line',
                smooth: true,
            }],
            
        })
    },
    setSwiper: function() {
        global.swiper = new Swiper('.swiper-container', {
            slidesPerView: 6,
            spaceBetween: 30,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              },
        })
    },
}

$(function(){
    realTime.init();
})