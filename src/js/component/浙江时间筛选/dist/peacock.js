;(function(window){
	window.peacock = _peacock = {};
	//获取url的传值通过name
	function GetQueryString(name){
	     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
	     var r = window.location.search.substr(1).match(reg);
	     if(r!=null)return  unescape(r[2]); return null;
	}
	_peacock.GetQueryString = GetQueryString;
	//用于赋值在页面中加一个<span class="A">--</span>
	function loadData(data){
		for(var k in data){
			var tempdata = data[k]+"";
			tempdata = tempdata.replace("null","--");
			if(tempdata == ""){
				tempdata = "--";
			}
			$('.'+k).text(tempdata);
		}
	}
	_peacock.loadData = loadData;
	function styleFix(){
		$(window).resize(function(){
			var ww = $(window).width();
			if(ww > 2400){
                $('body').addClass('w2500').removeClass('w2400 w2100 w1800 w1600 w1440 w1366 w1024 w980 w1300');
            }
            else if(ww > 2100&& ww <= 2400){
                $('body').addClass('w2400').removeClass('w2500 w2100 w1800 w1600 w1440 w1366 w1024 w980 w1300');
            }
            else if(ww > 1800&& ww <= 2100){
                $('body').addClass('w2100').removeClass('w2500 w2400  w1800 w1600 w1440 w1366 w1024 w980 w1300');
            }
            else if(ww > 1660&& ww <= 1800){
                $('body').addClass('w1800').removeClass('w2500 w2400 w2100 w1600 w1440 w1366 w1024 w980 w1300');
			}
			else if(ww > 1440&& ww <= 1600){
				$('body').addClass('w1600').removeClass('w2500 w2400 w2100 w1800  w1440 w1366 w1024 w980 w1300');
			}else if(ww > 1366 && ww <= 1440){
				$('body').addClass('w1440').removeClass('w2500 w2400 w2100 w1800 w1600  w1366 w1024 w980 w1300');
			}else if(ww > 1300  && ww <= 1366){
				$('body').addClass('w1366').removeClass('w2500 w2400 w2100 w1800 w1600 w1440  w1024 w980 w1300');
			}else if(ww > 1024  && ww <= 1300){
				$('body').addClass('w1300').removeClass('w2500 w2400 w2100 w1800 w1600 w1440 w1366 w1024 w980');
			}else if(ww > 980 && ww <= 1024){
				$('body').addClass('w1024').removeClass('w2500 w2400 w2100 w1800 w1600 w1440 w1366 w980 w1300');
			}else if(ww <= 980){
				$('body').addClass('w980').removeClass('w2500 w2400 w2100 w1800 w1600 w1440 w1366 w1024 w1300');
			}
		}).resize();
	}
	_peacock.styleFix = styleFix;
	
	/**
	 * 为请求字符串添加随机码，处理ie中请求只访问一次的问题
	 * @author 姚林刚
	 * @param url 需要处理的URL
	 */
	function warpRandom(url){
		if(url){
			if(/\?+/.test(url)){
				url = url+"&math="+Math.random();
			}else{
				url = url+"?math="+Math.random();
			}
			return url;
		}
		return null;
	}
	_peacock.warpRandom = warpRandom;
	
	//获取浏览器类型
	var browser = function() {
	    var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
	    var isOpera = userAgent.indexOf("Opera") > -1;
	    var browserStr = navigator.appName;
	    var b_version=navigator.appVersion;
		  var version=b_version.split(";");
		  var trim_Version=version[1].replace(/[ ]/g,"");
	    
	    if (isOpera) {
	        return "Opera"
	    }; //判断是否Opera浏览器
	    if (userAgent.indexOf("Firefox") > -1) {
	        return "FF";
	    } //判断是否Firefox浏览器
	    if (userAgent.indexOf("Chrome") > -1) {
	        return "Chrome";
	    }
	    if (userAgent.indexOf("Safari") > -1) {
	        return "Safari";
	    } //判断是否Safari浏览器
	    if(browserStr=="Microsoft Internet Explorer" && trim_Version=="MSIE6.0") 
			{ 
				return "IE6";
			}else if(browserStr=="Microsoft Internet Explorer" && trim_Version=="MSIE7.0"){
					return "IE7";
				}else if(browserStr=="Microsoft Internet Explorer" && trim_Version=="MSIE8.0") 
			{ 
				return "IE8";
			} 
			else if(browserStr=="Microsoft Internet Explorer" && trim_Version=="MSIE9.0") 
			{ 
				return "IE9";
			}
	    if (userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera) {
	        return "IE";
	    }; //判断是否IE浏览器, ie10以下可以判断出来
	    if("ActiveXObject" in window || window.ActiveXObject){
	    	//ie11
	    	return "IE";
	    }
	    //如果都没出去返回
	    return "Can not judge";
	}
	_peacock.browser = browser;
	/**
	阻止向上冒泡
	*/
	function preventEvent(e) {
	    if (e && e.stopPropagation) {
	        e.stopPropagation()
	    } else {
	        window.event.cancelBubble = true
	    }
	}
	_peacock.preventEvent = preventEvent;
	/**
	阻止默认方法
	*/
	function preventDefault(e) {
	    if (e && e.preventDefault) {
	        e.preventDefault();
	    } else {
	        window.event.returnValue = false;
	        return false;
	    }
	}
	_peacock.preventDefault = preventDefault;
	
	/**
     * 动态加载css文件
     * 金术静
     */
	function loadDynamicStyles(url) {
	    var link = document.createElement("link");
	    link.type = "text/css";
	    link.rel = "stylesheet";
	    link.href = url;
	    document.getElementsByTagName("head")[0].appendChild(link);
	}
	_peacock.loadDynamicStyles = loadDynamicStyles;
	
	/**
	 * 动态加载js文件
	 * 金术静
	 */
	function loadDynamicJavascript(url) {
	    var script = document.createElement("script");
	    script.type = "text/javascript";
	    script.src = url;
	    document.getElementsByTagName("head")[0].appendChild(script);
	}
	_peacock.loadDynamicJavascript = loadDynamicJavascript;
	
	/*
	 * 自定义下拉框初始化
	 * 靳海月
	 */
	function initCommonSelect(ele,data) {
		var ele = ele?ele:'.common-select';
		$(ele).each(function() {
			var htmlStr = '';
			var _this = $(this),
				selectTxt = _this.children('.cm-select-form'),
				selectInp = _this.children('input'),
				selectBtn = _this.children('.cm-select-btn'),
				selectBoxWrap = _this.children('.cm-selectBox-Wrap'),
				
				allSelectBtn = $('.cm-select-btn'),
				allSelectBoxWrap = $('.cm-selectBox-Wrap');
				
			// 初始化
			if(typeof data !== 'undefined') {	
				for(var i = 0; i < data.length; i++) {				
					htmlStr += '<li idx="'+data[i].id+'">'+data[i].text+'</li>';
				}
				selectBoxWrap.html(htmlStr);
			}
			//selectTxt.val(selectBoxWrap.children('li:first-child').text());
			
			// 操作
			$(document).click(function() {
				allSelectBoxWrap.hide();
				allSelectBtn.removeClass('active');
			});
			
			selectTxt.off('click').on('click', function(e) {
				preventEvent(e);
				toggleRotate();
			})
			.next().off('click').on('click', function(e) {
				preventEvent(e);
				toggleRotate();			
				selectTxt.css({'border-color': '#d43f3a', 'background-color': '#fffdfd'});
				$(this).css({'color': '#e15b52'});
			});
			
			// 鼠标划入效果
			_this.children('.cm-select-form, .cm-select-btn').hover(function() {
				$(this).parent().css({'border-color': '#d43f3a'});
				selectTxt.css({'background-color': '#fcf4f4'});
				selectBtn.css({'color': '#e15b52'});
				// 添加title
				selectTxt.attr('title', $(this).val());
			}, function() {
				$(this).parent().css({'border-color': '#ccc'});
				selectTxt.css({'background-color': '#fff'});
				selectBtn.css({'color': '#aaa'});
			})
			
			// 下拉操作
			selectBoxWrap.children('li').off('click').on('click', function() {
				selectInp.val($(this).attr('idx'));
				selectTxt.text($(this).text());
				selectBoxWrap.hide();
				selectBtn.removeClass('active');
			})
			
			// 内容过多时出现滚动条
			selectBoxWrap.niceScroll({cursorcolor: '#ccc'});		
			
			function toggleRotate() {
				if(selectBoxWrap.is(':visible') == true) {
					selectBoxWrap.hide();
					selectBtn.removeClass('active');
				}else {
					allSelectBoxWrap.hide();
					allSelectBtn.removeClass('active');
					selectBoxWrap.show();
					
					// 判断下拉菜单显示位置					
					if(selectTxt.offset().top + selectTxt.height()/2 - $(document).scrollTop() > ($(window).height() - 78)*2/3) {
						selectBoxWrap.css({'top': - selectBoxWrap.outerHeight()-1}).addClass('topActive');
					}else {
						selectBoxWrap.css({'top': '27px'}).removeClass('topActive');
					}
					selectBtn.addClass('active');
				}
			}
		})
	}
	_peacock.initCommonSelect = initCommonSelect;
	
	// 显示提示弹出层
	var showTipsLayer = function(msg, id) {
		layer.tips(msg, '#'+id, {
			tips: 2,
			time:0
		});
	};
	_peacock.showTipsLayer = showTipsLayer;
	var hideAllTip = function(){
		layer.closeAll('tips');
	}
	_peacock.hideAllTip = hideAllTip;
	

	//初始化zTree树状结构---带 checkbox复选框 的多选下拉菜单
	/**
	 * id   外层div的id
	 * data  下拉树中的数据
	 * options  一些常规的配置项  
	  **/
	
	function initDownTree(id, options, data, Searchbut) {
		var inPut = '<input type="text" class="cm-select-form" readonly="true" data-rule="required;" placeholder="--请选择--" />'+
			'<span class="iconfont cm-select-btn">&#xe6a3;</span>'+						
			'<div class="cm-menu-content">';		    
		if ( Searchbut == true ){
			inPut += '<div><input type="text" id="'+id+'cID" class="searchInput" placeholder="--请输入要搜索的内容--" /><button type="button" id="'+id+'ser" class="sBut cm-wredBtn-big">搜索</button></div>';	
		};
		inPut += '<ul id="'+id+'1" class="ztree"></ul></div>';		
		$('#'+id).html(inPut);
		$("#"+id+"ser").click(function(e){
			preventEvent(e);
			search_ztree( id+'1',id+'cID');
		})
		$('#'+id+'1').each(function() {	
			var downWrap = $(this).parent(),
				selInp = downWrap.siblings('.cm-select-form'),
				selValIpt = downWrap.siblings('.selval');
				selBtn = downWrap.siblings('.cm-select-btn'),
				
				allSelBtn = $('.cm-select-btn'),
				allSelectBoxWrap = $('.cm-selectBox-Wrap');
			var setting = {
				data: {
					simpleData: {
						enable: true, 
						idKey: 'id',
						pIdKey: 'pId'
					},
					key:{
						name: 'text'
					}
				},
				check: {
					enable: false,
					chkboxType: {"Y":"s", "N":"s"}
				},
				callback: {
					beforeClick: function(treeId, treeNode){
						var zTree = $.fn.zTree.getZTreeObj(id+'1');
						zTree.checkNode(treeNode, !treeNode.checked, null, true);
					},
					onClick: function(e, treeId, treeNode) {
						if(!options.check.enable) {					
							selInp.attr("value", treeNode[options.data.key.name]);
							selValIpt.attr("value", treeNode[options.data.simpleData.idKey]);
						}
					},
					onCheck: function(e, treeId, treeNode){
						var zTree = $.fn.zTree.getZTreeObj(id+'1'),
						nodes = zTree.getCheckedNodes(true),
						selectVal="",
						v = "";
						
						for (var i=0, l=nodes.length; i<l; i++) {
							selectVal += nodes[i][options.data.simpleData.idKey] + ",";
							v += nodes[i][options.data.key.name] + ",";
						}
						if (v.length > 0 ) v = v.substring(0, v.length-1);
						selBtn.addClass('active');
						selInp.attr("value", v);
						selValIpt.attr("value", selectVal);
					}
				}
			};
			$.extend(setting,options);
			
			if(data!=null&&data.length>0){
				var treeObj = $.fn.zTree.init($("#"+id+'1'), setting, data);
				if(options.expandAll == true || options.expandAll == undefined){
					treeObj.expandAll(true);
				}
			}
			
			// 鼠标划入效果
			downWrap.prevAll().hover(function() {
				selInp.css({'border-color': '#fc7f01','background-color': '#fcf4f4','color': '#e15b52'});
				// 添加title属性
				$(this).attr('title', $(this).val());
			}, function() {
				if(selBtn.attr('class') && selBtn.attr('class').indexOf('active') < 0){
					selInp.css({'border-color': '#eee','background-color': '#fafafa','color': '#aaa'});
				}
			}).click(showMenu);
			
			// 内容过多时出现滚动条 -- 不稳定
			//downWrap.niceScroll({cursorcolor: '#ccc', horizrailenabled: true});	
			
			function showMenu() {
				allSelectBoxWrap.hide();
				allSelBtn.removeClass('active');
				$('.cm-tree').removeClass('active');
				
				var cityOffset = selInp.offset();
				if(downWrap.is(':visible')) {
					downWrap.fadeOut("fast");
					selBtn.removeClass('active');
				}else {					
					// 判断下拉菜单显示位置					
					if(selInp.offset().top + selInp.height()/2 - $(document).scrollTop() > ($(window).height() - 78)*2/3) {
						downWrap.css({top:- downWrap.outerHeight()-1 + "px"}).addClass('topActive').slideDown("fast");
					}else {
						downWrap.css({top: selInp.outerHeight()+1 + "px"}).removeClass('topActive').slideDown("fast");
					}
					selBtn.addClass('active');
				}	
				$("body").bind("mousedown", onBodyDown);
				selInp.css({'background-color': '#fcf4f4','border-color': '#fc7f01','color': '#e15b52'});
				return false;
			}
			function hideMenu() {
				downWrap.fadeOut("fast");
				$("body").unbind("mousedown", onBodyDown);
				selInp.css({'background-color': '#fafafa', 'border-color': '#eee','color': '#aaa'});
				selBtn.removeClass('active');
			}
			function onBodyDown(event) {
				if (!(event.target.className == "cm-menu-content" || $(event.target).parents(".cm-menu-content").length>0)) {
					hideMenu();
				}
			}
		})
	}
	_peacock.initDownTree = initDownTree;
	

	
	// 补0函数
	function toDouble(n) {
		return n < 10 ? '0'+n : '' + n;
	}
	_peacock.toDouble = toDouble;
	
	// 求总和函数
	function sum(arr) {
		var res = 0;
		for(var i = 0; i < arr.length; i++) {
			res += arr[i].value;
		}
		return res;
	}
	_peacock.sum = sum;
	
	
	//div高度定义
	function calcHeight(){
		var documentH = $("body").height();//减margin-top值
		$('.cm-allH').height(documentH - 16);
		$('.cm-halfH').height(documentH/2 - 16);
		$('.cm-two-thirds').height(document*2/3 - 16); //2/3高度
		$('.cm-one-thirds').height(document/3 - 16); //1/3高度
	}
	_peacock.calcHeight = calcHeight;
})(window);

peacock.styleFix();


/*
 * 公共select
 * 使用方法：html：<div id="selectTest3"></div>
 * js:$(function(){
 *	var selectData = [
 *		{key:'100',text: 1111},
 *		{key:'101',text: 2222},
 *		{key:'102',text: 3333}
 *	];
 *	$('#selectTest3').peacock_select({field:"select3",data:selectData});});
 *  easyui form.load
 * $('#formid').form('load',{
		select3:'111',//选项id
		select3Text:'1111', //选项显示名称
	});
	
	公共树方法 peacock_selectTree
 */
(function(jQuery){
	
	/**
	 * 移除数组指定位置的元素
	 */

	Array.prototype.remove=function(dx){
		if(isNaN(dx)||dx>this.length){
			return false;
		}
		for(var i=0,n=0;i<this.length;i++){
			if(this[i]!=this[dx]){
				this[n++]=this[i];
			}
		}
		this.length-=1;
	}

	/**
	 * 移除指定值的元素
	 */
	Array.prototype.removeVal=function(dx){
		var isremove = false;
		if((this.length==1)&&(this[0]==dx)){
			this.length=0;
			this[0] == "";
			return;
		}
		for(var i=0,n=0;i<this.length;i++){
			if(this[i]!=dx){
				this[n++]=this[i];
			}else{
				isremove = true;
			}
		}
		if(isremove){
			this.length-=1;
		}
	}
	
	var bindWindowClick = function(){
		$(document).click(function(events){
			var targetCls = events.target.getAttribute('class');
			if(!targetCls || (targetCls.indexOf('cm-selectOption') < 0 && targetCls.indexOf('cm-selectIcon') < 0)){
				$(".cm-allOptions").addClass('cm-noElement');
				$('.cm-selectPeacock').removeClass('active');
			}
    	});
	}
	
	
	/**
	 * 下拉框方法
	 */
	$.fn.peacock_select = function(option){
		var definedOption = {
			field:"pIpt",
			data:[],
			onselect:function(){
				
			}
		};
		$.extend(definedOption,option);
		var _this = this;
		var li_str = "";
		var placeHStr = '';
		var selObj = '';
		if(!definedOption){
			return null;
		}
		if(definedOption.data){
			li_data = definedOption.data;
			for(var i = 0; i< li_data.length;i++){
				li_str += '<li idx = "'+li_data[i].key.toString()+'" title="'+li_data[i].text+'">'+li_data[i].text+'</li>';
				if(li_data[i].selected){
					selObj = li_data[i];
				}
			}
		}
		_this.addClass("cm-selectPeacock");
		if(_this.attr('class') && _this.attr('class').indexOf('cm-select-xs') < 0) placeHStr=' placeholder="--请选择--"';
		
		var idDefineHtml = _this.attr('idxName')?'name="'+_this.attr('idxName')+'"':'name="'+definedOption.field+'"';
		var txtDefineHtml = _this.attr('txtName')?'name="'+_this.attr('txtName')+'"':'name="'+definedOption.field+'Text"';
		idDefineHtml += _this.attr('idxId')?'id="'+_this.attr('idName')+'"':'id="'+definedOption.field+'"';
		txtDefineHtml += _this.attr('txtId')?'id="'+_this.attr('txtId')+'"':'id="'+definedOption.field+'Text"';
		
		_this.html('<input class="cm-selectId" '+idDefineHtml+' value="" type="hidden"/>'
			+'<input class="cm-selectOption input-md form-control" readonly="true" '+txtDefineHtml+placeHStr+'/>'
			+'<i class="cm-selectIcon iconfont">&#xe6a3;</i>'
			+'<ul class="cm-allOptions cm-noElement">'
			+li_str
			+'</ul>');
		
		if(selObj != ''){
			_this.selectValue = selObj.key;
	        _this.selectText = selObj.text;
	        _this.find(".cm-selectOption").val(selObj.text);
	        _this.find('.cm-selectId').val(selObj.key);
		}
		
		//如果select id的input值变了，改变txt的值，可用于回显form.load
		_this.find(".cm-selectId").change(function(){
			var thisDom = $(this);
			var id = thisDom.val();
			for(var i = 0; i< definedOption.data.length;i++){
				if(definedOption.data[i].key == id){
					thisDom.next('.cm-selectOption').val(definedOption.data[i].text);
					_this.selectValue = id;
	                _this.selectText=definedOption.data[i].text;
					break;
				}
			}
		});
		
		_this.find(".cm-selectOption,.cm-selectIcon").click(function() {
	        var option_this = _this.find(".cm-selectOption");
	        var option_id = _this.find('.cm-selectId');
	        var topDistance=option_this.offset().top;
	        var documentHeight=$(document).height();
	        var bottomDistance=documentHeight-topDistance;
	        if(bottomDistance<260){
	  	    	   _this.find(".cm-allOptions").addClass("cm-turnUp");
	  	       }
	        var allOptionsClass = _this.find(".cm-allOptions").attr('class');
	        if(_this.attr('class') && _this.attr('class').indexOf('active') >= 0){
	        	$('.cm-selectPeacock').removeClass('active');
	        }else{
	        	$('.cm-selectPeacock').removeClass('active');
	        	_this.addClass('active');
	        }
	        
	        if(allOptionsClass && allOptionsClass.indexOf('cm-noElement') >= 0){
	        	$(".cm-allOptions").addClass('cm-noElement');
	        	_this.find(".cm-allOptions").removeClass('cm-noElement');
	        }else{
	        	_this.find(".cm-allOptions").addClass('cm-noElement');
	        }
	        _this.find(".cm-allOptions li").each(function() {
	            var li_this = $(this);
	            li_this.unbind("click").click(function() {
	            	_this.find(".cm-allOptions").removeClass("cm-turnUp active");
	                var select_text = li_this.text();
	                var select_id = li_this.attr("idx");
	                _this.selectValue = select_id;
	                _this.selectText=select_text;
	                option_this.val(select_text);
	                option_id.val(select_id);
	                _this.find(".cm-allOptions").addClass('cm-noElement');
	                definedOption.onselect.call(_this,_this.selectValue);
	            });
	        });
	    });
		bindWindowClick();
	    function setSelectVal(tag,key){
			tag.selectValue = key;
			var  i = 0;
			for(i=0;i<option.data.length;i++){
				if(option.data[i].key == key){
					$(tag).find(".cm-selectOption").val(option.data[i].text);
					$(tag).find(".cm-selectId").val(key);
					tag.selectText=option.data[i].text;
				}
			}
		}

		$.fn.extend(_this,{
			/**
			 * 获取数值方法
			 */
			getValue:function(){
				return this.selectValue;
			},
			getText:function(){
				return this.selectText;
			},
			setValue:function(key){
				setSelectVal(this,key);
				definedOption.onselect.call(_this,_this.selectValue);
			}
		});
		
		return _this;
	}
	
	
	/*树方法*/
	$.fn.peacock_selectTree = function(option){
		var _this = this;
		var isFirst = true;
		var ztreeId, htmlStr="";
		var definedOption = {
			objId:'chooseId',
			objName:'chooseName',
			childUrl:'',
			rootNode:[{ 
				text: '辽宁省分公司', 
				id:'root',
				pID:null,
				isParent:true
			}],
			ztreeOption:{
				check:{},
				callback:{}
			},
			callback:{
				onClick: function(e, treeId, treeNode) {
					//单选选择相应的项关闭下拉框
					if(!option.check){
						$('#'+definedOption.objId).attr("value", treeNode.id);
						$('#'+definedOption.objName).attr("value", treeNode.text);
						_this.removeClass('active');
						if(option.onselect){
							option.onselect(e, treeId, treeNode);
						}
					}
				},
				onCheck:function(event, treeId, treeNode) {
					//多选时获取所有选中的值放到input里面
					var zTree = $.fn.zTree.getZTreeObj(ztreeId),
						nodes = zTree.getCheckedNodes(true),
						selectVal="",
						selectTxt = "";
						
						for (var i=0, l=nodes.length; i<l; i++) {
							selectVal += nodes[i].id + ",";
							selectTxt += nodes[i].text + ",";
						}
						if (selectVal.length > 0 ) selectVal = selectVal.substring(0, selectVal.length-1);
						if (selectTxt.length > 0 ) selectTxt = selectTxt.substring(0, selectTxt.length-1);
						$('#'+definedOption.objName).attr("value", selectTxt);
						$('#'+definedOption.objId).attr("value", selectVal);
					
					if(option.oncheck){
						option.oncheck(e, treeId, treeNode);
					}
				}
			}
		};
		$.extend(definedOption.ztreeOption.callback, definedOption.callback);
		$.extend(definedOption.ztreeOption.callback, option.callback);
		$.extend(definedOption,option);
		if(!definedOption){
			return null;
		}
		_this.addClass('cm-tree');
		htmlStr = '<input type="hidden" name="'+definedOption.objId+'" id="'+definedOption.objId+'" value="'+definedOption.rootNode[0].id+'"/>'+
		'<input type="text" id="'+definedOption.objName+'" name="'+definedOption.objName+'" class="cm-select-form" readonly="true" value="'+definedOption.rootNode[0].text+'" />'+
		'<span class="iconfont cm-select-btn">&#xe6a3;</span>'+
		'<div class="cm-menu-content"><ul id="downTree'+definedOption.objId+'" class="ztree"></ul></div>';
		ztreeId = 'downTree'+definedOption.objId;
		
		_this.html(htmlStr);
		_this.find("#" +definedOption.objName+ ",.cm-select-btn").click(function(e) {
			peacock.preventEvent(e);
			
			if(_this.attr("class").indexOf("active")>=0){
				_this.removeClass('active');	
			}else{
				$('.cm-tree.active').removeClass('active');
				_this.addClass('active');
			};
			
			
						
		});
		
		$(document).click(function(event){
			var event = event || window.event;
			if (!(event.target.className == "cm-menu-content" || $(event.target).parents(".cm-menu-content").length>0)) {
				_this.removeClass('active');
			}
		});
		
		if(definedOption.childUrl){
			//异步加载的初始化对象定义
			var ztreeOption ={
				async: {
					enable: true,
					url: definedOption.childUrl,
					autoParam: ["id"],
					otherParam: ["mouth", "201701"]
				},
				data: {
					simpleData: {
						enable: true,
						idKey: 'id',
						pIdKey:'pID'
					},
					key:{
						name:'text'
					}
				}
			};
			$.extend(definedOption.ztreeOption, ztreeOption);
			if(definedOption.autoParam){
				definedOption.ztreeOption.async.autoParam = definedOption.autoParam;
			}
			if(definedOption.otherParam){
				definedOption.ztreeOption.async.otherParam = definedOption.otherParam;
			}
		}else{
			var ztreeOption ={
				data: {
					simpleData: {
						enable: true,
						idKey: 'id',
						pIdKey:'pID'
					},
					key:{
						name:'text'
					}
				}
			};
			$.extend(definedOption.ztreeOption, ztreeOption);
		}
		if(option.check){
			$.extend(definedOption.ztreeOption.check, option.check);
		}
		var treeObj = $.fn.zTree.init($("#"+ztreeId), definedOption.ztreeOption, definedOption.rootNode);
		$('#downTreedeptLink_1_switch').click();
		return treeObj;
	}

/**************************************************************************************************/
/**
 * 日期插件带左右箭头、日控件和月控件
 * @param {Object} option
 * 
 */
	function showTime(pdVal, dateString, def, maxDate, minDate) {
	    var trans_day = "";
	    var cur_date = new Date();
	    var cur_year = new Date().getFullYear();
	    var cur_month = cur_date.getMonth() + 1;
	    var real_date = cur_date.getDate();
	    cur_month = cur_month > 9 ? cur_month : ("0" + cur_month);
	    real_date = real_date > 9 ? real_date : ("0" + real_date);
	    eT = cur_year + "年" + cur_month + "月" + real_date + "日";
	    if (dateString == "") {
	        dateString = eT;
	    }
	    if (pdVal == 1) {
	        trans_day = addByTransDate(dateString, 1, maxDate, minDate);
	    } else if (pdVal == -1) {
	    	trans_day = reduceByTransDate(dateString, 1, def, maxDate, minDate);
	    } else {
	        trans_day = dateString;
	    }
	    return trans_day;
	}
	
	function addByTransDate(dateParameter, num, maxDate, minDate) {
	    var translateDate = "",
	        dateString = "",
	        monthString = "",
	        dayString = "",
	        maxDate = new Date(maxDate),
			minDate = new Date(minDate);
			
	    translateDate = dateParameter.replace("年", "/").replace("月", "/").replace("日", "");
	    var newDate = new Date(translateDate);
	    newDate = newDate.valueOf();
	    newDate = newDate + num * 24 * 60 * 60 * 1000;
	    newDate = new Date(newDate);
	    
	    //对比大小
	    if(newDate > maxDate && maxDate < minDate){
	    	return dateParameter;
	    }
	    
	    if ((newDate.getMonth() + 1).toString().length == 1) {
	        monthString = 0 + "" + (newDate.getMonth() + 1).toString();
	    } else {
	        monthString = (newDate.getMonth() + 1).toString();
	    }
	    if (newDate.getDate().toString().length == 1) {
	        dayString = 0 + "" + newDate.getDate().toString();
	    } else {
	        dayString = newDate.getDate().toString();
	    }
	    dateString = newDate.getFullYear() + "年" + monthString + "月" + dayString +"日";
	    return dateString;
	}

	function reduceByTransDate(dateParameter, num, def, maxDate, minDate) {
	    var translateDate = "",
	        dateString = "",
	        monthString = "",
	        dayString = "",
	        maxDate = new Date(maxDate),
			minDate = new Date(minDate);
			
	    translateDate = dateParameter.replace("年", "/").replace("月", "/").replace("日", "");
	    var newDate = new Date(translateDate);
	    newDate = newDate.valueOf();
	    if(typeof def == 'undefined') newDate = newDate - num * 24 * 60 * 60 * 1000;
	    newDate = new Date(newDate);
	    
	    //对比大小
	    if(newDate > maxDate && maxDate < minDate){
	    	return dateParameter;
	    }
	    
	    if ((newDate.getMonth() + 1).toString().length == 1) {
	        monthString = 0 + "" + (newDate.getMonth() + 1).toString();
	    } else {
	        monthString = (newDate.getMonth() + 1).toString();
	    }
	    if (newDate.getDate().toString().length == 1) {
	        dayString = 0 + "" + newDate.getDate().toString();
	    } else {
	        dayString = newDate.getDate().toString();
	    }
	    dateString = newDate.getFullYear() + "年" + monthString + "月" + dayString + "日";
	    return dateString;
	}
	
	
	/**
	 * 解决 ie，火狐浏览器不兼容new Date(s)
	 * @param strDate
	 * 返回 date对象
	 * add by xujx at 20190929
	 */
	function getDateForStringDate(strDate){
		var d1 = new Date(strDate.replace(/\-/g, "\/"));
		return d1;
	}
	
	//输入日期返回月份数据(txtDate)和真实数据(relDate) 的obj
	function toMonth(dateString){
		var newdate = getDateForStringDate(dateString);//new Date(dateString),xujx 20170929
		var yearString = newdate.getFullYear(),
		monthString = (newdate.getMonth() + 1).toString(),
		returnObj = {txtDate:'',relDate:''};
		if (monthString.length == 1) {
	        monthString = "0" + monthString;
	    }
		returnObj.txtDate = yearString + "年" + monthString + "月";
		returnObj.relDate = yearString + monthString;
		return returnObj;
	}
	
	/* dateString是类似201708的字符串
	 * 输入pdVal=1就是把当前日期dateString+1月，
	 * 输入pdVal=-1就是把当前日期dateString-1月，
	 * 返回月份数据(txtDate)和真实数据(relDate) 的obj
	 */
	function changeMonth(pdVal, dateString, maxDate, minDate){
		var year = parseInt(dateString.substring(0,4)),
		month = dateString.substring(4,6),
		tagDate = '',
		returnObj = {},
		maxDate = new Date(maxDate),
		minDate = new Date(minDate),
		maxDateYear = maxDate.getFullYear(),
		maxDateMonth = maxDate.getMonth() + 1,
		minDateYear = minDate.getFullYear(),
		minDateMonth = minDate.getMonth() + 1;
		
		var fdStart = month.indexOf("0");
		if(fdStart == 0){
			month = month.substring(1,2);
		}else if(fdStart == -1){
			
		}
		
		if(pdVal == 1){
			month++;
			if(month > 12){
				year++;
				month = 1;
			}
		}
		if(pdVal == -1){
			month--;
			if(month < 1){
				year--;
				month = 12;
			}
		}
		tagDate = year + '-' + month + '-' + '01';
		if((year > maxDateYear || (year == maxDateYear && month > maxDateMonth)) || (year < minDateYear || (year == minDateYear && month < minDateMonth))){
			return returnObj;
		}else{
			returnObj = toMonth(tagDate);
		}
		return returnObj;
	}
	/*
	 * 输入20160809或者201608的日期值返回日期格式的数据
	 */
	function stringToDate(dateString){
		var year = parseInt(dateString.substring(0,4)),
		month = parseInt(dateString.substring(4,6)),
		day = '';
		if(dateString.length == 8){
			day = parseInt(dateString.substring(6,8));
		}
		var newDate = new Date(year+'/'+month+'/'+day);
		return newDate;
	}
	
	$.fn.peacock_datePicker = function(option){
		var relid = '#reltimeIpt';
		if(option.field){
			relid = 'rel' + option.field;
		}
		var definedOption = {
			field:"timeIpt", //日期的值input的name和id是什么
			type:"month", // month、day两个属性取值日期到日还是到 月
			dateOption:{//日期控件自定义属性
				maxDate:'21171231',
				minDate:'19801231',
				isShowToday: false,
				realDateFmt:'yyyyMM',
				dateFmt:'yyyy年MM月',
				realFullFmt: '%Date',
				autoPickDate:true,
				position: {
					left: -45
				},
				vel: "reltimeIpt",
				onpicked:function(){
					console.log(option)
					if(option.onpicked){
						option.onpicked($('#'+relid).val());
					}
					$("#dayDatePickDemo").hide();
				},
				onpicking:function(){
					if(option.onpicking){
						option.onpicking($('#'+relid).val());
					}
				},
				onclearing:function(){
					if(option.onclearing){
						option.onclearing($('#'+relid).val());
					}
				},
				oncleared:function(){
					if(option.oncleared){
						option.oncleared($('#'+relid).val());
					}
				}
			}
		};
		if((option && (!option.type || option.type && option.type == "day")) || !option ){
			definedOption.dateOption.realDateFmt = 'yyyyMMdd';
			definedOption.dateOption.maxDate='21171231';
			definedOption.dateOption.minDate='19801231';
			definedOption.dateOption.dateFmt='yyyy年MM月dd日';
			definedOption.type = "day";
			definedOption.dateOption.isShowToday = true;
		}
		$.extend(definedOption,option);
		definedOption.dateOption.vel = "rel"+definedOption.field;

		var type = definedOption.type;
		var _this = this,
			htmlStr = '<input id="rel'+definedOption.field+'" name="rel'+definedOption.field+'" type="hidden"/>'
			+'<i class="iconfont preBtn">&#xe8ca;</i>'
			+'<input id="'+definedOption.field+'" name="'+definedOption.field+'" class="cm-input" readonly="true" type="text"/>'
			+'<i class="nextBtn"><img src="../resources/images/YangtzeDelta/edit.png" alt=""></i>';
			
		_this.html(htmlStr);
		_this.addClass('cm-datepicker');
		
		var dateInp = _this.children('#'+definedOption.field),
			dateInpRel = _this.children('#rel'+definedOption.field),
			leftIcon = _this.children('.preBtn'),
			rightIcon = _this.children('.nextBtn');

		//设置默认日期
		var myDate = new Date();
	    //var dateToday = myDate.toLocaleDateString();//xujx add at 20170929
	    var now = new Date();
		var dateToday = now.getYear()+"-"+((now.getMonth()+1)<10?"0":"")+(now.getMonth()+1)+"-"+(now.getDate()<10?"0":"")+now.getDate();
		var maxDate =  stringToDate(definedOption.dateOption.maxDate),
		minDate =  stringToDate(definedOption.dateOption.minDate);
	    
	    if(type == 'day'){
	    	dateToday = showTime(-1, '', false);
	    	if(definedOption.value){
	    		var val = definedOption.value;
	    		if(val.length == 8){
		    		dateInp.val(val.substring(0,4) + "年" + val.substring(4,6) + "月" + val.substring(6,8) + "日");
		    		dateInpRel.val(definedOption.value);
	    		}else{
	    			alert("日期控件默认日期格式不对！");
	    		}
	    	}else{
			    dateInp.val(dateToday);
				dateInpRel.val(new Date().toLocaleDateString().split('/').join(''));
			}
			// 前一天点击
			leftIcon.unbind().click(function() {
				var curTime = dateInp.val();
				var dateStr = showTime(-1, curTime, undefined, maxDate, minDate);
		        dateInp.val(dateStr);
		        dateInpRel.val(dateStr.replace("年", "").replace("月", "").replace("日", ""));
		        definedOption.dateOption.onpicked();
			});
			
			//后一天
			rightIcon.unbind().click(function() {


                definedOption.dateOption.onpicked();
		        // var curTime = dateInp.val();
		        // var dateStr = showTime(1, curTime, undefined, maxDate, minDate);
		        // dateInp.val(dateStr);
		        // dateInpRel.val(dateStr.replace("年", "").replace("月", "").replace("日", ""));
		        // definedOption.dateOption.onpicked();
		    });
		}else if(type == 'month'){
			if(definedOption.value){
	    		var val = definedOption.value;
	    		if(val.length == 6){
		    		dateInp.val(val.substring(0,4) + "年" + val.substring(4,6) + "月");
		    		dateInpRel.val(definedOption.value);
	    		}else{
	    			alert("月日期控件默认日期格式不对！");
	    		}
	    	}else{
				dateInp.val(toMonth(dateToday).txtDate);
				dateInpRel.val(toMonth(dateToday).relDate);
			}
			
			// 前一月点击
			leftIcon.unbind().click(function() {
				var curTime = dateInpRel.val();
				var dateObj = changeMonth(-1, curTime, maxDate, minDate);
				if(!$.isEmptyObject(dateObj)){
					dateInp.val(dateObj.txtDate);
		        	dateInpRel.val(dateObj.relDate);
		        	definedOption.dateOption.onpicked();
				}			        
			});
			
			//后一月
			rightIcon.unbind().click(function() {
		        var curTime = dateInpRel.val();
		        var dateObj = changeMonth(1, curTime, maxDate, minDate);
		        if(!$.isEmptyObject(dateObj)){
			        dateInp.val(dateObj.txtDate);
			        dateInpRel.val(dateObj.relDate);
			        definedOption.dateOption.onpicked();
			    }
		    });
		}
		dateInp.focus(function() {
			WdatePicker(definedOption.dateOption);
		});
		
		function setSelectVal(tag,key){
			$(tag).find('#rel'+definedOption.field).val(key);
			var dateIpt = $(tag).find('#'+definedOption.field);
			if(key.length == 8){
	    		dateInp.val(key.substring(0,4) + "年" + key.substring(4,6) + "月" + key.substring(6,8) + "日");
    		}else if(key.length == 6){
    			dateInp.val(key.substring(0,4) + "年" + key.substring(4,6) + "月");
    		}
		}
		
		$.fn.extend(_this,{
			/**
			 * 获取数值方法
			 */
			getValue:function(){
				return this.find('#rel'+definedOption.field).val();
			},
			setValue:function(key){
				setSelectVal(this,key);
			}
		});
		
		return _this;
	};
/**************************************日期插件结束************************************************************/

})(jQuery);