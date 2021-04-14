
// 显示隐藏错误提示
var formError = {
    show: function(msg){
        $('.err-wrapper').show().find('.err-msg').text(msg);
    },
    hide: function(){
        $('.err-wrapper').hide();
    }
}
// login逻辑部分
var login = {
    init: function() {
        this.bindEvent();
        this.initFullPage();
    },
    bindEvent: function() {
        var _this = this;
        //进入系统按钮
        $('#enter-btn').click(function(){
            _this.enterHandler();
        })
        //登录系统按钮
        $('.login-layer').click(function(e){
            if(e.target.id === 'login-btn'){
                _this.loginHandler();
            }
        })
        // 点击隐藏遮罩
        $('.close-icon').click(function(){
            $('.section-bg-down').show();
            $('.section-bg-up').show();
            $('.login-layer').hide();
        })
        //输入框上绑定隐藏错误提示及enter键提交事件
        $('.input-wrapper input').keyup(function(e){
            formError.hide();
            if(e.keyCode === 13){
                _this.loginHandler()
            }
        })
        $('.bottom-item').click(function(){
            _this.itemClickHandler();
        })
    },
    initFullPage: function() {
        $('#fullPage').fullpage({
            scrollingSpeed: 400,
            navigation: true,
            navigationPosition: 'right',
        });
    },
    enterHandler: function() {
        // $('.section-bg-down').hide();
        $('.login-layer').show();
    },
    itemClickHandler: function() {
        // $('.section-bg-up').hide();
        $('.login-layer').show();
    },
    loginHandler: function() {
        var formData = {
            username: $.trim($('.user-name').val()),
            password: $.trim($('.password').val()),
            validation: $.trim($('.validation').val())
        }
        var result = this.formValidate(formData);
        if(result.status) {
            //发送请求
        }else {
            formError.show(result.msg);
        }

    },
    formValidate(formData) {
        var result = {
            status: false,
            msg : ''
        }
        //验证表单数据
        if(!formData.username) {
            result.msg = '用户名不能为空';
            return result;
        }
        if(!formData.password) {
            result.msg = '密码不能为空';
            return result;
        }else {
            //密码6-12位，由数字、大小写字母组成，且至少包括2种字符
            var psdReg = /((?=.*[0-9])(?=.*[a-z])|(?=.*[0-9])(?=.*[A-Z])|(?=.*[a-z])(?=.*[A-Z]))^[0-9A-Za-z]{6,12}$/;
            if(!psdReg.test(formData.password)) {
                result.msg = '密码长度为6-12位，且由数字、大写、小写字母组成';
                return result;
            }
        }
        if(!formData.validation) {
            result.msg = '验证码不能为空';
            return result;
        } else {
            if(formData.validation.length !== 5) {
                result.msg = '验证码为5位数';
                return result;
            }
        }
        //通过验证
        result.status = true;
        result.msg = '验证通过';
        return result;
    }
}
$(function(){
    login.init();
})