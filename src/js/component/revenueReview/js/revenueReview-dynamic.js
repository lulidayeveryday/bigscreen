$(function () {
    window.alert = function (msg, callback) {
        var div = document.createElement("div");
        div.innerHTML = "<style type=\"text/css\">"
            + ".nbaMask { position: fixed; z-index: 1000; top: 0; right: 0; left: 0; bottom: 0; background: rgba(0, 0, 0, 0.5); }                                                                                                                                                                       "
            + ".nbaMaskTransparent { position: fixed; z-index: 1000; top: 0; right: 0; left: 0; bottom: 0; }                                                                                                                                                                                            "
            + ".nbaDialog { position: fixed; z-index: 5000; width: 80%; max-width: 350px; top: 50%; left: 50%; -webkit-transform: translate(-50%, -50%); transform: translate(-50%, -50%); background-color: #fff; text-align: center; border-radius: 8px; overflow: hidden; opacity: 1; color: white; }"
            + ".nbaDialog .nbaDialogHd { padding: .2rem .27rem .08rem .27rem; }                                                                                                                                                                                                                         "
            + ".nbaDialog .nbaDialogHd .nbaDialogTitle { font-size: 17px; font-weight: 400; }                                                                                                                                                                                                           "
            + ".nbaDialog .nbaDialogBd { padding: 1.5rem .27rem 0;; font-size: 15px; line-height: 1.3; word-wrap: break-word; word-break: break-all; color: #000000; }                                                                                                                                          "
            + ".nbaDialog .nbaDialogFt { position: relative; line-height: 48px; font-size: 17px; display: -webkit-box; display: -webkit-flex; display: flex; }                                                                                                                                          "
            + ".nbaDialog .nbaDialogFt:after { content: \" \"; position: absolute; left: 0; top: 0; right: 0; height: 1px; border-top: 1px solid #e6e6e6; color: #e6e6e6; -webkit-transform-origin: 0 0; transform-origin: 0 0; -webkit-transform: scaleY(0.5); transform: scaleY(0.5); }               "
            + ".nbaDialog .nbaDialogBtn { display: block; -webkit-box-flex: 1; -webkit-flex: 1; flex: 1; color: #308efc; text-decoration: none; -webkit-tap-highlight-color: transparent; position: relative; margin-bottom: 0; }                                                                       "
            + ".nbaDialog .nbaDialogBtn:after { content: \" \"; position: absolute; left: 0; top: 0; width: 1px; bottom: 0; border-left: 1px solid #e6e6e6; color: #e6e6e6; -webkit-transform-origin: 0 0; transform-origin: 0 0; -webkit-transform: scaleX(0.5); transform: scaleX(0.5); }             "
            + ".nbaDialog a { text-decoration: none; -webkit-tap-highlight-color: transparent; }"
            + "</style>"
            + "<div id=\"dialogs2\" style=\"display: none\">"
            + "<div class=\"nbaMask\"></div>"
            + "<div class=\"nbaDialog\">"
            + "	<div class=\"nbaDialogHd\">"
            + "		<strong class=\"nbaDialogTitle\"></strong>"
            + "	</div>"
            + "	<div class=\"nbaDialogBd\" id=\"dialog_msg2\">弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内</div>"
            + "	<div class=\"nbaDialogHd\">"
            + "		<strong class=\"nbaDialogTitle\"></strong>"
            + "	</div>"
            + "	<div class=\"nbaDialogFt\">"
            + "		<a href=\"javascript:;\" class=\"nbaDialogBtn nbaDialogBtnPrimary\" id=\"dialog_ok2\">确定</a>"
            + "	</div></div></div>";
        document.body.appendChild(div);

        var dialogs2 = document.getElementById("dialogs2");
        dialogs2.style.display = 'block';

        var dialog_msg2 = document.getElementById("dialog_msg2");
        dialog_msg2.innerHTML = msg;

        // var dialog_cancel = document.getElementById("dialog_cancel");
        // dialog_cancel.onclick = function() {
        // dialogs2.style.display = 'none';
        // };
        var dialog_ok2 = document.getElementById("dialog_ok2");
        dialog_ok2.onclick = function () {
            dialogs2.style.display = 'none';
            callback();
        };
    };
    // 仪表盘以及表格数据
    /*var remDates = AjaxJson('getAcctData',{})
    remDate = remDates.acctdate;
    var topData = AjaxJson('getReviewData',{date:remDate});*/
    /*假数据*/
    remDate = {"pg": "2021-04","pz": "2021-01"};
    var topData = {
        "zbData": [{
            "QW_USER_NUM1": 3.75,
            "QW_ACCT_FEE3": 96.68,
            "QW_USER_NUM2": 3.0300000000000002,
            "QW_ACCT_FEE1": 3.32,
            "QW_USER_NUM3": 93.22,
            "QW_ACCT_FEE2": 0
        }],
        "dataList": [{
            "ACCT_FEE": 355660469.3,
            "USER_NUM": 8398181,
            "ACCT_FEE_TB": 0,
            "USER_NUM_TB": 0.0,
            "LABEL": "移网全网",
            "ACCT_FEE_HB": 2.05,
            "USER_IF_ACCT": "00",
            "USER_NUM_HB": -0.45999999999999996
        }, {
            "ACCT_FEE": 11820653.66,
            "USER_NUM": 315253,
            "ACCT_FEE_TB": 0,
            "USER_NUM_TB": 0.0,
            "LABEL": "新增",
            "ACCT_FEE_HB": 0,
            "USER_IF_ACCT": "1",
            "USER_NUM_HB": 16.03
        }, {
            "ACCT_FEE": 0,
            "USER_NUM": 254131,
            "ACCT_FEE_TB": 0,
            "USER_NUM_TB": 0.0,
            "LABEL": "流失",
            "ACCT_FEE_HB": -100,
            "USER_IF_ACCT": "2",
            "USER_NUM_HB": -9.35
        }, {
            "ACCT_FEE": 343839815.64,
            "USER_NUM": 7828797,
            "ACCT_FEE_TB": 0,
            "USER_NUM_TB": 0.0,
            "LABEL": "保有",
            "ACCT_FEE_HB": 1.64,
            "USER_IF_ACCT": "3",
            "USER_NUM_HB": -0.7100000000000001
        }],
        "pg": "2021-04",
        "pz": "2021-01"
    };

    remTopData = topData.dataList;
    remybData = topData.zbData[0];
    var monthStart = topData.pz;
    var monthEnd = topData.pg;
    layui.use('laydate', function () {
        var laydate = layui.laydate;


        //年月范围
        var myDate = new Date();
        var tYear = myDate.getFullYear();
        var tMonth = myDate.getMonth();
        var year = tYear;
        var month = tMonth;
        if (tMonth == 0) {
            year = tYear - 1;
            month = 12;
        }

        var m = tMonth + 1;
        if (m.toString().length == 1) {
            m = "0" + m;
        }
        if (month.toString().length == 1) {
            month = "0" + month;
        }


        laydate.render({
            elem: '#test8'
            , value: monthStart + ' - ' + monthEnd
            , type: 'month'
            , btns: ['confirm']
            , range: true
        });

        interfaceService(0, topData.zbData[0]);
        //树图
        revenueTree();
        // 指标分析tab
        var middleTab = AjaxJson('getDimensionIndexData', {});
        /*var middleTab = {
            "dimensionList":[
                {
                    "FILE_DESC":"地市名称",
                    "FILE_NAME":"AREA_DESC"
                },
                {
                    "FILE_DESC":"区县名称",
                    "FILE_NAME":"CITY_DESC"
                },
                {
                    "FILE_DESC":"电话号码",
                    "FILE_NAME":"DEVICE_NUMBER"
                },
                {
                    "FILE_DESC":"服务状态",
                    "FILE_NAME":"USER_STATUS"
                },
                {
                    "FILE_DESC":"产品名称",
                    "FILE_NAME":"PRODUCT_NAME"
                },
                {
                    "FILE_DESC":"上月产品名称",
                    "FILE_NAME":"LAST_PRODUCT_NAME"
                },
                {
                    "FILE_DESC":"是否参与出帐",
                    "FILE_NAME":"IS_ACCT"
                },
                {
                    "FILE_DESC":"发展人名称",
                    "FILE_NAME":"DEVELOPER_NAME"
                },
                {
                    "FILE_DESC":"发展渠道名称",
                    "FILE_NAME":"CHANNEL_NAME"
                },
                {
                    "FILE_DESC":"七大渠道名称",
                    "FILE_NAME":"CHANNEL_TYPE_7_DESC"
                },
                {
                    "FILE_DESC":"业务类型名称",
                    "FILE_NAME":"SERVICE_TYPE_DESC"
                },
                {
                    "FILE_DESC":"是否2IC2",
                    "FILE_NAME":"IS_2I2C"
                },
                {
                    "FILE_DESC":"是否冰激凌",
                    "FILE_NAME":"IS_ICE"
                },
                {
                    "FILE_DESC":"是否上月出账本月不出账",
                    "FILE_NAME":"IF_ACCT_MONTH"
                },
                {
                    "FILE_DESC":"是否亲情号",
                    "FILE_NAME":"IS_FAMILY"
                }
            ],
            "indexList":[
                {
                    "FILE_DESC":"是否在网",
                    "FILE_NAME":"IS_INNET"
                },
                {
                    "FILE_DESC":"是否统计用户",
                    "FILE_NAME":"IS_STAT"
                },
                {
                    "FILE_DESC":"是否新增",
                    "FILE_NAME":"IS_ADD"
                },
                {
                    "FILE_DESC":"是否本期新发展",
                    "FILE_NAME":"IS_THIS_DEV"
                },
                {
                    "FILE_DESC":"是否流失",
                    "FILE_NAME":"IS_LOST"
                },
                {
                    "FILE_DESC":"是否本期离网",
                    "FILE_NAME":"IS_THIS_BREAK"
                },
                {
                    "FILE_DESC":"总通话时长(秒)",
                    "FILE_NAME":"TOTAL_DURA"
                },
                {
                    "FILE_DESC":"总通话次数",
                    "FILE_NAME":"TOTAL_NUMS"
                },
                {
                    "FILE_DESC":"总短信条数",
                    "FILE_NAME":"TOTAL_SMS_NUM"
                },
                {
                    "FILE_DESC":"点对点短信条数",
                    "FILE_NAME":"PTP_SMS_NUM"
                },
                {
                    "FILE_DESC":"总流量(M)",
                    "FILE_NAME":"TOTAL_FLUX"
                },
                {
                    "FILE_DESC":"计费时长",
                    "FILE_NAME":"JF_TIMES"
                },
                {
                    "FILE_DESC":"出帐费用",
                    "FILE_NAME":"ACCT_FEE"
                },
                {
                    "FILE_DESC":"上月出帐费用",
                    "FILE_NAME":"LAST_ACCT_FEE"
                },
                {
                    "FILE_DESC":"月租费",
                    "FILE_NAME":"RENT_FEE"
                },
                {
                    "FILE_DESC":"上月月租费",
                    "FILE_NAME":"LAST_RENT_FEE"
                },
                {
                    "FILE_DESC":"通话费",
                    "FILE_NAME":"CALL_FEE"
                },
                {
                    "FILE_DESC":"上月通话费",
                    "FILE_NAME":"LAST_CALL_FEE"
                },
                {
                    "FILE_DESC":"短信费",
                    "FILE_NAME":"SMS_FEE"
                },
                {
                    "FILE_DESC":"上月短信费",
                    "FILE_NAME":"LAST_SMS_FEE"
                },
                {
                    "FILE_DESC":"流量费",
                    "FILE_NAME":"GP_FEE"
                },
                {
                    "FILE_DESC":"上月流量费",
                    "FILE_NAME":"LAST_GP_FEE"
                },
                {
                    "FILE_DESC":"赠费销账",
                    "FILE_NAME":"ZFXZ_FEE"
                },
                {
                    "FILE_DESC":"上月赠费销账",
                    "FILE_NAME":"LAST_ZFXZ_FEE"
                },
                {
                    "FILE_DESC":"用户欠费金额",
                    "FILE_NAME":"OWE_FEE"
                },
                {
                    "FILE_DESC":"上月用户欠费金额",
                    "FILE_NAME":"LAST_OWE_FEE"
                },
                {
                    "FILE_DESC":"是否三无",
                    "FILE_NAME":"IF_3WU"
                },
                {
                    "FILE_DESC":"是否极低用户",
                    "FILE_NAME":"IS_LOWER_USER"
                },
                {
                    "FILE_DESC":"是否不计收",
                    "FILE_NAME":"IS_NOFEE"
                },
                {
                    "FILE_DESC":"当月不计收金额",
                    "FILE_NAME":"NO_FEE"
                },
                {
                    "FILE_DESC":"当月现金流累计缴费金额",
                    "FILE_NAME":"RECV_FEE"
                },
                {
                    "FILE_DESC":"现金流账本余额",
                    "FILE_NAME":"DEPOSIT_MONEY"
                },
                {
                    "FILE_DESC":"叠加套餐包费",
                    "FILE_NAME":"BILL_DJB_FEE"
                },
                {
                    "FILE_DESC":"流量包月租费",
                    "FILE_NAME":"BILL_GP_RENT_FEE"
                },
                {
                    "FILE_DESC":"语音叠加包月套餐费",
                    "FILE_NAME":"BILL_CALL_RENT_FEE"
                },
                {
                    "FILE_DESC":"基本月租费",
                    "FILE_NAME":"BILL_BASE_RENT_FEE"
                },
                {
                    "FILE_DESC":"增值业务",
                    "FILE_NAME":"BILL_INC_FEE"
                },
                {
                    "FILE_DESC":"手机上网流量费",
                    "FILE_NAME":"BILL_WAP_FEE"
                }
            ]
        }*/
        var Wd = middleTab.dimensionList;
        var Zb = middleTab.indexList;
        var wdList = [];
        var zbList = [];
        for (var i = 0; i < Wd.length; i++) {
            var arr = {};
            arr.name = Wd[i].FILE_DESC;
            arr.id = 'Wd' + i;
            if (i === 0) {
                arr.select = true;
            } else {
                arr.select = false;
            }
            arr.field = Wd[i].FILE_NAME;
            arr.combination = {drog1Html: '', drog1Value: '', drog2Html: '', drog2Value: '', input: ''};
            wdList.push(arr);
        }
        for (var m = 0; m < Zb.length; m++) {
            var arr = {};
            arr.name = Zb[m].FILE_DESC;
            arr.id = 'Zb' + m;
            if (m === 0) {
                arr.select = true;
            } else {
                arr.select = false;
            }
            arr.field = Zb[m].FILE_NAME;
            arr.combination = {drog1Html: '', drog1Value: '', drog2Html: '', drog2Value: '', input: ''};
            zbList.push(arr);
        }
        zbfscheckWd = wdList;
        zbfscheckZb = zbList;
        /*左上*/
        dataTj(0)
        /*左下*/
        zbfxSel(0)
        tabTable();
        zbfxTabWd();
        zbfxTabZb();
        fetchDataList()
    })
})
var remDate = '2021-03';
var remTopData ;
var remybData;
var wdNum = 0;
var zbNum = 0;
var remBottomAllData = '';
var remTreeClickAll = ['移网'];
var treeClickType = ''
var remTreeClickType = '';
var remMiddleTab;
var myChartTree = echarts.init(document.getElementById('main'));
var myChartBar = echarts.init(document.getElementById('echartBar'));
var chartLine = echarts.init(document.getElementById('tabLine'));
var datas=[{
    "name": "移网",
    id:'tree0',
    point:[0],
    isEnd:false,
    menu:[
        {
            name:'网上用户数',
            id:'menuYh',
            children:[
                {
                    name:'本月出账上月不出账',
                    id:'treeYh00',
                    point:[0,0],
                    isEnd: false,
                    menu:[
                        {
                            name:'详情',
                            id:'menuYh01',
                            children:[
                                {
                                    name:'发展',
                                    id:'treeYh000',
                                    point:[0,0,0],
                                    isEnd: true
                                },
                                {
                                    name:'非发展',
                                    id:'treeYh001',
                                    point:[0,0,1],
                                    isEnd: true
                                }
                            ]
                        }
                    ]
                },
                {
                    name:'上月出账本月不出账',
                    id:'treeYh01',
                    point:[0,1],
                    isEnd: false,
                    menu:[
                        {
                            name:'详情',
                            id:'menuYh02',
                            children:[
                                {
                                    name:'离网',
                                    id:'treeYh002',
                                    point:[0,1,0],
                                    isEnd: true
                                },
                                {
                                    name:'非离网',
                                    id:'treeYh003',
                                    point:[0,1,1],
                                    isEnd: true
                                }
                            ]
                        }
                    ]
                },
                {
                    name:'两月都出账',
                    id:'treeYh02',
                    point:[0,2],
                    isEnd: false,
                    menu:[
                        {
                            name:'用户分析',
                            id:'menuYh03',
                            children:[
                                {
                                    name:'用户增收',
                                    id:'treeYh004',
                                    point:[0,2,0],
                                    isEnd: false,
                                    menu:[
                                        {
                                            name:'详情',
                                            id:'menuYh030',
                                            children:[
                                                {
                                                    name:'是否迁转',
                                                    id:'treeYh0040',
                                                    point:[0,2,0,0],
                                                    isEnd: true,
                                                },
                                                {
                                                    name:'是否升级包',
                                                    id:'treeYh0041',
                                                    point:[0,2,0,1],
                                                    isEnd: true
                                                },
                                                {
                                                    name:'是否附属包',
                                                    id:'treeYh0042',
                                                    point:[0,2,0,2],
                                                    isEnd: true
                                                },
                                            ]
                                        }
                                    ]
                                },
                                {
                                    name:'用户不变',
                                    id:'treeYh005',
                                    point:[0,2,1],
                                    isEnd: true
                                },
                                {
                                    name:'用户降收',
                                    id:'treeYh006',
                                    point:[0,2,2],
                                    isEnd: false,
                                    menu:[
                                        {
                                            name:'详情',
                                            id:'menuYh031',
                                            children:[
                                                {
                                                    name:'是否迁转',
                                                    id:'treeYh0043',
                                                    point:[0,2,2,0],
                                                    isEnd: true,
                                                },
                                                {
                                                    name:'是否升级包',
                                                    id:'treeYh0044',
                                                    point:[0,2,2,1],
                                                    isEnd: true
                                                },
                                                {
                                                    name:'是否附属包',
                                                    id:'treeYh0045',
                                                    point:[0,2,2,2],
                                                    isEnd: true
                                                },
                                            ]
                                        }
                                    ]
                                },
                            ]
                        },
                        {
                            name:'费用分析',
                            id:'menuYh04',
                            children:[
                                {
                                    name:'出账增收',
                                    id:'treeYh007',
                                    point:[0,2,0],
                                    isEnd: false,
                                    menu:[
                                        {
                                            name:'详情',
                                            id:'menuYh032',
                                            children:[
                                                {
                                                    name:'是否迁转',
                                                    id:'treeYh0046',
                                                    point:[0,2,0,0],
                                                    isEnd: true,
                                                },
                                                {
                                                    name:'是否升级包',
                                                    id:'treeYh0047',
                                                    point:[0,2,0,1],
                                                    isEnd: true
                                                },
                                                {
                                                    name:'是否附属包',
                                                    id:'treeYh0048',
                                                    point:[0,2,0,2],
                                                    isEnd: true
                                                },
                                            ]
                                        }
                                    ]
                                },
                                {
                                    name:'出账不变',
                                    id:'treeYh008',
                                    point:[0,2,1],
                                    isEnd: true
                                },
                                {
                                    name:'出账降收',
                                    id:'treeYh009',
                                    point:[0,2,2],
                                    isEnd: false,
                                    menu:[
                                        {
                                            name:'详情',
                                            id:'menuYh033',
                                            children:[
                                                {
                                                    name:'是否迁转',
                                                    id:'treeYh0049',
                                                    point:[0,2,2,0],
                                                    isEnd: true,
                                                },
                                                {
                                                    name:'是否升级包',
                                                    id:'treeYh00410',
                                                    point:[0,2,2,1],
                                                    isEnd: true
                                                },
                                                {
                                                    name:'是否附属包',
                                                    id:'treeYh00411',
                                                    point:[0,2,2,2],
                                                    isEnd: true
                                                },
                                            ]
                                        }
                                    ]
                                },
                            ]
                        }
                    ]
                }
            ]
        },
        {
            name:'出账收入',
            id:'menuCz',
            children:[
                {
                    name:'本月出账上月不出账',
                    id:'treeCz00',
                    point:[0,0],
                    isEnd: false,
                    menu:[
                        {
                            name:'详情',
                            id:'menuCz01',
                            children:[
                                {
                                    name:'发展',
                                    id:'treeCz000',
                                    point:[0,0,0],
                                    isEnd: true
                                },
                                {
                                    name:'非发展',
                                    id:'treeCz001',
                                    point:[0,0,1],
                                    isEnd: true
                                }
                            ]
                        }
                    ]
                },
                {
                    name:'上月出账本月不出账',
                    id:'treeCz01',
                    point:[0,1],
                    isEnd: false,
                    menu:[
                        {
                            name:'详情',
                            id:'menuCz02',
                            children:[
                                {
                                    name:'离网',
                                    id:'treeCz002',
                                    point:[0,1,0],
                                    isEnd: true
                                },
                                {
                                    name:'非离网',
                                    id:'treeCz003',
                                    point:[0,1,1],
                                    isEnd: true
                                }
                            ]
                        }
                    ]
                },
                {
                    name:'两月都出账',
                    id:'treeCz02',
                    point:[0,2],
                    isEnd: false,
                    menu:[
                        {
                            name:'用户分析',
                            id:'menuCz03',
                            children:[
                                {
                                    name:'用户增收',
                                    id:'treeCz004',
                                    point:[0,2,0],
                                    isEnd: false,
                                    menu:[
                                        {
                                            name:'详情',
                                            id:'menuCz030',
                                            children:[
                                                {
                                                    name:'是否迁转',
                                                    id:'treeCz0040',
                                                    point:[0,2,0,0],
                                                    isEnd: true,
                                                },
                                                {
                                                    name:'是否升级包',
                                                    id:'treeCz0041',
                                                    point:[0,2,0,1],
                                                    isEnd: true
                                                },
                                                {
                                                    name:'是否附属包',
                                                    id:'treeCz0042',
                                                    point:[0,2,0,2],
                                                    isEnd: true
                                                },
                                            ]
                                        }
                                    ]
                                },
                                {
                                    name:'用户不变',
                                    id:'treeCz005',
                                    point:[0,2,1],
                                    isEnd: true
                                },
                                {
                                    name:'用户降收',
                                    id:'treeCz006',
                                    point:[0,2,2],
                                    isEnd: false,
                                    menu:[
                                        {
                                            name:'详情',
                                            id:'menuCz031',
                                            children:[
                                                {
                                                    name:'是否迁转',
                                                    id:'treeCz0043',
                                                    point:[0,2,2,0],
                                                    isEnd: true,
                                                },
                                                {
                                                    name:'是否升级包',
                                                    id:'treeCz0044',
                                                    point:[0,2,2,1],
                                                    isEnd: true
                                                },
                                                {
                                                    name:'是否附属包',
                                                    id:'treeCz0045',
                                                    point:[0,2,2,2],
                                                    isEnd: true
                                                },
                                            ]
                                        }
                                    ]
                                },
                            ]
                        },
                        {
                            name:'费用分析',
                            id:'menuCz04',
                            children:[
                                {
                                    name:'出账增收',
                                    id:'treeCz007',
                                    point:[0,2,0],
                                    isEnd: false,
                                    menu:[
                                        {
                                            name:'详情',
                                            id:'menuCz032',
                                            children:[
                                                {
                                                    name:'是否迁转',
                                                    id:'treeCz0046',
                                                    point:[0,2,0,0],
                                                    isEnd: true,
                                                },
                                                {
                                                    name:'是否升级包',
                                                    id:'treeCz0047',
                                                    point:[0,2,0,1],
                                                    isEnd: true
                                                },
                                                {
                                                    name:'是否附属包',
                                                    id:'treeCz0048',
                                                    point:[0,2,0,2],
                                                    isEnd: true
                                                },
                                            ]
                                        }
                                    ]
                                },
                                {
                                    name:'出账不变',
                                    id:'treeCz008',
                                    point:[0,2,1],
                                    isEnd: true
                                },
                                {
                                    name:'出账降收',
                                    id:'treeCz009',
                                    point:[0,2,2],
                                    isEnd: false,
                                    menu:[
                                        {
                                            name:'详情',
                                            id:'menuCz033',
                                            children:[
                                                {
                                                    name:'是否迁转',
                                                    id:'treeCz0049',
                                                    point:[0,2,2,0],
                                                    isEnd: true,
                                                },
                                                {
                                                    name:'是否升级包',
                                                    id:'treeCz00410',
                                                    point:[0,2,2,1],
                                                    isEnd: true
                                                },
                                                {
                                                    name:'是否附属包',
                                                    id:'treeCz00411',
                                                    point:[0,2,2,2],
                                                    isEnd: true
                                                },
                                            ]
                                        }
                                    ]
                                },
                            ]
                        }
                    ]
                }
            ]
        }
    ],
}]//全部树数据
var dataTree = [];//页面树图展示数据
var menuList=[];//存放菜单展示数据
var remId = '';//记录点击节点id
var remPoint = [];
var remMenu = [];

var child = {};
child.name = datas[0].name;
child.id = datas[0].id;
child.isEnd = datas[0].isEnd
child.point = datas[0].point
dataTree.push(child);

var zbfscheckWd = [
    {name:'维度一',id:'0',select:false,field:'field_name1',combination:{drog1Html:'',drog1Value:'',drog2Html:'',drog2Value:'',input:''}},
    {name:'维度二',id:'1',select:false,field:'field_name2',combination:{drog1Html:'',drog1Value:'',drog2Html:'',drog2Value:'',input:''}},
    {name:'维度三',id:'2',select:false,field:'field_name3',combination:{drog1Html:'',drog1Value:'',drog2Html:'',drog2Value:'',input:''}},
    {name:'维度四',id:'3',select:false,field:'field_name4',combination:{drog1Html:'',drog1Value:'',drog2Html:'',drog2Value:'',input:''}},
    {name:'维度五',id:'4',select:false,field:'field_name5',combination:{drog1Html:'',drog1Value:'',drog2Html:'',drog2Value:'',input:''}},
    {name:'维度六',id:'5',select:false,field:'field_name6',combination:{drog1Html:'',drog1Value:'',drog2Html:'',drog2Value:'',input:''}},
    {name:'维度七',id:'6',select:false,field:'field_name7',combination:{drog1Html:'',drog1Value:'',drog2Html:'',drog2Value:'',input:''}},
    {name:'维度八',id:'7',select:false,field:'field_name8',combination:{drog1Html:'',drog1Value:'',drog2Html:'',drog2Value:'',input:''}},
    {name:'维度九',id:'8',select:false,field:'field_name9',combination:{drog1Html:'',drog1Value:'',drog2Html:'',drog2Value:'',input:''}},
    {name:'维度十',id:'9',select:false,field:'field_name10',combination:{drog1Html:'',drog1Value:'',drog2Html:'',drog2Value:'',input:''}},
    {name:'维度十一',id:'10',select:false,field:'field_name11',combination:{drog1Html:'',drog1Value:'',drog2Html:'',drog2Value:'',input:''}},
    {name:'维度十二',id:'11',select:false,field:'field_name12',combination:{drog1Html:'',drog1Value:'',drog2Html:'',drog2Value:'',input:''}},
    {name:'维度十三',id:'12',select:false,field:'field_name13',combination:{drog1Html:'',drog1Value:'',drog2Html:'',drog2Value:'',input:''}},
    {name:'维度十四',id:'13',select:false,field:'field_name14',combination:{drog1Html:'',drog1Value:'',drog2Html:'',drog2Value:'',input:''}},
    {name:'维度十五',id:'14',select:false,field:'field_name15',combination:{drog1Html:'',drog1Value:'',drog2Html:'',drog2Value:'',input:''}},
    {name:'维度十六',id:'15',select:false,field:'field_name16',combination:{drog1Html:'',drog1Value:'',drog2Html:'',drog2Value:'',input:''}},
    {name:'维度十七',id:'16',select:false,field:'field_name17',combination:{drog1Html:'',drog1Value:'',drog2Html:'',drog2Value:'',input:''}},
    {name:'维度十八',id:'17',select:false,field:'field_name18',combination:{drog1Html:'',drog1Value:'',drog2Html:'',drog2Value:'',input:''}},
    {name:'维度十九',id:'18',select:false,field:'field_name19',combination:{drog1Html:'',drog1Value:'',drog2Html:'',drog2Value:'',input:''}},
    {name:'维度二十',id:'19',select:false,field:'field_name20',combination:{drog1Html:'',drog1Value:'',drog2Html:'',drog2Value:'',input:''}},
]

var zbfscheckZb = [
    {name:'指标一',id:'0',select:false,field:'field_name1',combination:{drog1Html:'',drog1Value:'',drog2Html:'',drog2Value:'',input:''}},
    {name:'指标二',id:'1',select:false,field:'field_name2',combination:{drog1Html:'',drog1Value:'',drog2Html:'',drog2Value:'',input:''}},
    {name:'指标三',id:'2',select:false,field:'field_name3',combination:{drog1Html:'',drog1Value:'',drog2Html:'',drog2Value:'',input:''}},
    {name:'指标四',id:'3',select:false,field:'field_name4',combination:{drog1Html:'',drog1Value:'',drog2Html:'',drog2Value:'',input:''}},
    {name:'指标五',id:'4',select:false,field:'field_name5',combination:{drog1Html:'',drog1Value:'',drog2Html:'',drog2Value:'',input:''}},
    {name:'指标六',id:'5',select:false,field:'field_name6',combination:{drog1Html:'',drog1Value:'',drog2Html:'',drog2Value:'',input:''}},
    {name:'指标七',id:'6',select:false,field:'field_name7',combination:{drog1Html:'',drog1Value:'',drog2Html:'',drog2Value:'',input:''}},
    {name:'指标八',id:'7',select:false,field:'field_name8',combination:{drog1Html:'',drog1Value:'',drog2Html:'',drog2Value:'',input:''}},
    {name:'指标九',id:'8',select:false,field:'field_name9',combination:{drog1Html:'',drog1Value:'',drog2Html:'',drog2Value:'',input:''}},
    {name:'指标十',id:'9',select:false,field:'field_name10',combination:{drog1Html:'',drog1Value:'',drog2Html:'',drog2Value:'',input:''}},
    {name:'指标十一',id:'10',select:false,field:'field_name11',combination:{drog1Html:'',drog1Value:'',drog2Html:'',drog2Value:'',input:''}},
    {name:'指标十二',id:'11',select:false,field:'field_name12',combination:{drog1Html:'',drog1Value:'',drog2Html:'',drog2Value:'',input:''}},
    {name:'指标十三',id:'12',select:false,field:'field_name13',combination:{drog1Html:'',drog1Value:'',drog2Html:'',drog2Value:'',input:''}},
    {name:'指标十四',id:'13',select:false,field:'field_name14',combination:{drog1Html:'',drog1Value:'',drog2Html:'',drog2Value:'',input:''}},
    {name:'指标十五',id:'14',select:false,field:'field_name15',combination:{drog1Html:'',drog1Value:'',drog2Html:'',drog2Value:'',input:''}},
    {name:'指标十六',id:'15',select:false,field:'field_name16',combination:{drog1Html:'',drog1Value:'',drog2Html:'',drog2Value:'',input:''}},
    {name:'指标十七',id:'16',select:false,field:'field_name17',combination:{drog1Html:'',drog1Value:'',drog2Html:'',drog2Value:'',input:''}},
    {name:'指标十八',id:'17',select:false,field:'field_name18',combination:{drog1Html:'',drog1Value:'',drog2Html:'',drog2Value:'',input:''}},
    {name:'指标十九',id:'18',select:false,field:'field_name19',combination:{drog1Html:'',drog1Value:'',drog2Html:'',drog2Value:'',input:''}},
    {name:'指标二十',id:'19',select:false,field:'field_name20',combination:{drog1Html:'',drog1Value:'',drog2Html:'',drog2Value:'',input:''}},
]

var remZbfxTab = 0;

var remZbfxTree = '';

var remDragIds = '';
var remDragType = '';

var remDataFxTabType = 'Table'
var remDataTjType = 0;

function refreshData() {
    var dates = $('#test8').val().split(" - ");
    remDate = dates;
    var topData = AjaxJson('getReviewData',{date:dates});
    remTopData = topData.dataList;
    remybData = topData.zbData[0];
    /*复盘数据统计*/
    dataTj(remDataTjType);

    fetchDataList();
}

function toTableReview(object) {
    // let htmls = window.location.href;
    // let urls = htmls.split('revenueReview.html')
    // let url = urls[0] + 'revenueReviewTable.html'
    // window.open(url);
    //
    // sessionStorage.setItem('revenueMonth','202103')
    sessionStorage.setItem('revenueTwoMonth',$('#test8').val().split(" - "));
    sessionStorage.setItem('revenueType','dynamic');
    var uniId = jsUtil.guid();
    //为触发点击事件的按钮增加href属性
    $(object).attr("href", "/review/toReviewTable");
    //该属性为打开的tab的ID
    var currentPageDataId = parent.$.nitrogenb.getCurrenTabDataId();
    $(object).attr("data-parent-id", currentPageDataId);
    $(object).attr("data-id", uniId);
    $(object).attr("tab-name", "费用项相关报表展现");
    parent.$.nitrogenb.addTab.call($(object));
}

function fetchDataList() {
    var type = remDataFxTabType;
    var wdNums = 0;
    var zbNums = 0;
    for (var i=0;i<zbfscheckWd.length;i++) {
        if (zbfscheckWd[i].select) {
            wdNums++;
        }
    }
    for (var i=0;i<zbfscheckZb.length;i++) {
        if (zbfscheckZb[i].select) {
            zbNums++;
        }
    }
    if(type === 'Line'){
        if(wdNums != 1 || zbNums === 0){
            return
        }
    }else if(type === 'Table'){
        if(wdNums === 0 && zbNums === 0){
            return
        }
    }else if(type === 'Bar'){
        if(wdNums != 1 || zbNums === 0){
            return
        }
    }else if(type === 'Pie'){
        if(wdNums != 1 || zbNums != 1){
            return
        }
    }else if(type === 'Rose'){
        if(wdNums != 1 || zbNums != 1){
            return
        }
    }else if(type === 'Point'){
        if(wdNums != 1 || zbNums === 0){
            return
        }
    }else if(type === 'Map'){
    }
    wdNum = wdNums;
    zbNum = zbNums;
    fetchList();
    if(type === 'Table'){
        tabTable();
    }else if(type === 'Line'){
        tabLine()
    }else if(type === 'Bar'){
        tabBar()
    }else if(type === 'Pie'){
        tabPie()
    }else if(type === 'Rose'){
        tabRose()
    }else if(type === 'Point'){
        tabPoint()
    }else if(type === 'Map'){
        tabMap()
    }
}

function fetchList() {
    var data = {
        tree:remTreeClickAll,
        tab:{
            dimensionList:[],
            indexList:[]
        },
        type:remTreeClickType,//user,fee
        date:remDate
    }

    for (var i=0;i<zbfscheckWd.length;i++){
        if(zbfscheckWd[i].select){
            var dimension = {};
            var html = '';
            if ((zbfscheckWd[i].combination.drog1Value != '')||(zbfscheckWd[i].combination.drog2Value != '')||(zbfscheckWd[i].combination.input != '')){
                html += ' (' + zbfscheckWd[i].combination.drog1Value + ' ' + zbfscheckWd[i].field +  ' ' + zbfscheckWd[i].combination.drog2Value +  ' ' + zbfscheckWd[i].combination.input + ')'
            }
            dimension.name = zbfscheckWd[i].field;
            dimension.value = html;
            dimension.znName = zbfscheckWd[i].name;
            data.tab.dimensionList.push(dimension);
        }
    }

    for (var m=0;m<zbfscheckZb.length;m++){
        if(zbfscheckZb[m].select){
            var index = {};
            var html = '';
            if ((zbfscheckZb[m].combination.drog1Value != '')||(zbfscheckZb[m].combination.drog2Value != '')||(zbfscheckZb[m].combination.input != '')){
                html += ' (' + zbfscheckZb[m].combination.drog1Value + ' ' + zbfscheckZb[m].field +  ' ' + zbfscheckZb[m].combination.drog2Value +  ' ' + zbfscheckZb[m].combination.input + ')'
            }
            index.name = zbfscheckZb[m].field;
            index.value = html;
            index.znName = zbfscheckZb[m].name;
            data.tab.indexList.push(index);
        }
    }
    var datas = AjaxJson('getTableData',data);
    /*var datas = {
        "ChNames":[
            "AREA_DESC",
            "TOTAL_NUMS",
            "TOTAL_SMS_NUM"
        ],
        "ChValues":[
            "地市名称",
            "总通话次数",
            "总短信条数"
        ],
        "dataList":[
            {
                "TOTAL_NUMS":49290598,
                "AREA_DESC":"渭南",
                "TOTAL_SMS_NUM":1753943
            },
            {
                "TOTAL_NUMS":30849679,
                "AREA_DESC":"安康",
                "TOTAL_SMS_NUM":5518318
            },
            {
                "TOTAL_NUMS":70913887,
                "AREA_DESC":"榆林",
                "TOTAL_SMS_NUM":2516582
            },
            {
                "TOTAL_NUMS":9855850,
                "AREA_DESC":"铜川",
                "TOTAL_SMS_NUM":316487
            },
            {
                "TOTAL_NUMS":79220127,
                "AREA_DESC":"咸阳",
                "TOTAL_SMS_NUM":2921735
            },
            {
                "TOTAL_NUMS":49230263,
                "AREA_DESC":"宝鸡",
                "TOTAL_SMS_NUM":1829998
            },
            {
                "TOTAL_NUMS":36257588,
                "AREA_DESC":"延安",
                "TOTAL_SMS_NUM":1409120
            },
            {
                "TOTAL_NUMS":318410579,
                "AREA_DESC":"西安",
                "TOTAL_SMS_NUM":110530714
            },
            {
                "TOTAL_NUMS":29505079,
                "AREA_DESC":"汉中",
                "TOTAL_SMS_NUM":1372777
            },
            {
                "TOTAL_NUMS":22419891,
                "AREA_DESC":"商洛",
                "TOTAL_SMS_NUM":14507770
            }
        ]
    }*/
    datas.newDataList = [];
    for(var y = 0;y<datas.dataList.length;y++){
        var zj = []
        for(var z = 0;z<datas.ChNames.length;z++){
            var zjName = datas.ChNames[z];
            var zjData = datas.dataList[y][zjName];
            zj.push(zjData)
        }
        datas.newDataList.push(zj)
    }
    remBottomAllData = datas;
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("Text", ev.target.id);
}

function dragDel(ev) {
    ev.dataTransfer.setData("TextDel", ev.target.id);
}

function dropDel(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("TextDel");
    var item = document.getElementById(data);
    document.getElementById('drapDels').appendChild(item);
    document.getElementById('drapDels').innerHTML = ""
}

function drop2(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("Text");
    var item = document.getElementById(data).cloneNode();
    var addHtml = '<div class="zbfsDialog-content-tableSpan" parentId="dialog2" id="' + item.id + '_'+ Math.ceil(Math.random()*1000) + '" draggable="true" ondragstart="dragDel(event)">' + document.getElementById(data).innerHTML + '</div>'
    var html = document.getElementById("dialog2").innerHTML;
    document.getElementById("dialog2").innerHTML = html + addHtml;
}

function drop1(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("Text");
    var item = document.getElementById(data).cloneNode();
    var addHtml = '<div class="zbfsDialog-content-tableSpan" parentId="dialog1" id="' + item.id + '_'+ Math.ceil(Math.random()*1000) +  '" draggable="true" ondragstart="dragDel(event)">' + document.getElementById(data).innerHTML + '</div>'
    var html = document.getElementById("dialog1").innerHTML;
    document.getElementById("dialog1").innerHTML = html + addHtml;
}

function dataFx(obj,type) {
    var wdNums = 0;
    var zbNums = 0;
    for (var i=0;i<zbfscheckWd.length;i++) {
        if (zbfscheckWd[i].select) {
            wdNums++;
        }
    }
    for (var i=0;i<zbfscheckZb.length;i++) {
        if (zbfscheckZb[i].select) {
            zbNums++;
        }
    }
    if(type === 'Line'){
        if(wdNums != 1 || zbNums === 0){
            alert('维度只可以选择一个，指标最少需要选择一个')
            return
        }
    }else if(type === 'Table'){
        if(wdNums === 0 && zbNums === 0){
            alert('维度和指标最少需要选择一个')
            return
        }
    }else if(type === 'Bar'){
        if(wdNums != 1 || zbNums === 0){
            alert('维度只可以选择一个，指标最少需要选择一个')
            return
        }
    }else if(type === 'Pie'){
        if(wdNums != 1 || zbNums != 1){
            alert('维度只可以选择一个，指标只可以选择一个')
            return
        }
    }else if(type === 'Rose'){
        if(wdNums != 1 || zbNums != 1){
            alert('维度只可以选择一个，指标只可以选择一个')
            return
        }
    }else if(type === 'Point'){
        if(wdNums != 1 || zbNums === 0){
            return
        }
    }else if(type === 'Map'){
    }
    wdNum = wdNums;
    zbNum = zbNums;
    fetchList();
    $('div').removeClass('show-tab-div-click');
    $('div').removeClass('img'+remDataFxTabType+'Click');
    $(obj).addClass('show-tab-div-click');
    $(obj).children().addClass('img'+type+'Click')
    remDataFxTabType = type;
    if(type === 'Table'){
        tabTable();
    }else if(type === 'Line'){
        tabLine()
    }else if(type === 'Bar'){
        tabBar()
    }else if(type === 'Pie'){
        tabPie()
    }else if(type === 'Rose'){
        tabRose()
    }else if(type === 'Point'){
        tabPoint()
    }else if(type === 'Map'){
        tabMap()
    }
}

function tabTable() {
    $('.show-content-div>div').css('visibility','hidden');
    $('#tabTable').css('visibility','inherit');
    var data = remBottomAllData;
    var html = '';
    html += '<table id="dataFxTable" border="0" style="margin-top: 3rem; white-space: nowrap;" cellSpacing="0" cellPadding="0">';
    if(data === ''){
        html += '<tr style="height: 2.5rem">';
        html += '<th>标题一</th>';
        html += '<th>标题二</th>';
        html += '<th>标题三</th>';
        html += '<th>标题四</th>';
        html += '<th>标题五</th>';
        html += '<th>标题六</th>';
        html += '<th>标题七</th>';
        html += '<th>标题八</th>';
        html += '<th>标题九</th>';
        html += '<th>标题十</th>';
        html += '<th>标题十一</th>';
        html += '<th>标题十二</th>';
        html += '</tr>';
        html += '<tr><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td></tr>';
        html += '<tr><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td></tr>';
        html += '<tr><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td></tr>';
        html += '<tr><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td></tr>';
        html += '<tr><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td></tr>';
        html += '<tr><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td></tr>';
        html += '<tr><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td></tr>';
        html += '<tr><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td></tr>';

    }else {
        html += '<tr style="height: 2.5rem">';
        for(var k = 0;k<data.ChValues.length;k++){
            html += '<th>' + data.ChValues[k] + '</th>';
        }
        html += '</tr>';

        for(var j = 0;j<data.newDataList.length;j++){
            html += '<tr>';
            for(var m = 0;m<data.newDataList[j].length;m++){
                html += '<td>' + data.newDataList[j][m] + '</td>'
            }
            html += '</tr>';
        }
    }
    html += '</table>';

    html += '<div class="export-table"  onclick = "tableToExcel(\'dataFxTable\',\'复盘分析数据\')">导出表格</div>'

    $('#tabTable').html(html);
}

function tabLine() {
    var wdArr = [];
    var zbArr = [];
    for (var i=0;i<zbfscheckWd.length;i++){
        if(zbfscheckWd[i].select){
            wdArr.push(zbfscheckWd[i])
        }
    }
    for (var i=0;i<zbfscheckZb.length;i++){
        if(zbfscheckZb[i].select){
            zbArr.push(zbfscheckZb[i])
        }
    }
    var datas = remBottomAllData;
    var data = datas;
    var html = '';
    html += '<table id="dataFxTable" border="0" style="margin-top: 1rem; white-space: nowrap;" cellSpacing="0" cellPadding="0">';
    if(data === ''){
        html += '<tr style="height: 2.5rem">';
        html += '<th>标题一</th>';
        html += '<th>标题二</th>';
        html += '<th>标题三</th>';
        html += '<th>标题四</th>';
        html += '<th>标题五</th>';
        html += '<th>标题六</th>';
        html += '<th>标题七</th>';
        html += '<th>标题八</th>';
        html += '<th>标题九</th>';
        html += '<th>标题十</th>';
        html += '<th>标题十一</th>';
        html += '<th>标题十二</th>';
        html += '</tr>';
        html += '<tr><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td></tr>';
        html += '<tr><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td></tr>';
        html += '<tr><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td></tr>';
        html += '<tr><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td></tr>';
        html += '<tr><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td></tr>';
        html += '<tr><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td></tr>';
        html += '<tr><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td></tr>';
        html += '<tr><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td></tr>';

    }else {
        html += '<tr style="height: 2.5rem">';
        for(var k = 0;k<data.ChValues.length;k++){
            html += '<th>' + data.ChValues[k] + '</th>';
        }
        html += '</tr>';

        for(var j = 0;j<data.newDataList.length;j++){
            html += '<tr>';
            for(var m = 0;m<data.newDataList[j].length;m++){
                html += '<td>' + data.newDataList[j][m] + '</td>'
            }
            html += '</tr>';
        }
    }
    html += '</table>';
    $('#tabLineTable').html(html);

    var xAxisName = wdArr[0].field;
    var xAxis = [];
    var legends = [];
    var legendsEn = [];
    var yAxisArray = []
    for(var i = 0;i<zbArr.length;i++){
        legends.push(zbArr[i].name);
        legendsEn.push(zbArr[i].field);
    }
    for(var j = 0;j<datas.dataList.length;j++){
        xAxis.push(datas.dataList[j][xAxisName]);
    }
    for(var m = 0;m<legendsEn.length;m++){
        var s = {}
        var arr = [];
        for(var n = 0;n<datas.dataList.length;n++){
            arr.push(datas.dataList[n][legendsEn[m]])
        }
        s.name = legends[m];
        s.data = arr;
        s.type= 'line';
        yAxisArray.push(s)
    }
    $('.show-content-div>div').css('visibility','hidden');
    $('#tabLine').css('visibility','inherit');
    $('#tabLineTable').css('visibility','inherit');
    var option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        legend: {
            data: legends
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                data: xAxis
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: yAxisArray
    };
    chartLine.clear();
    chartLine.setOption(option);
    $(window).resize(function() {
        chartLine.resize();
    });
}
function tabBar() {
    var wdArr = [];
    var zbArr = [];
    for (var i=0;i<zbfscheckWd.length;i++){
        if(zbfscheckWd[i].select){
            wdArr.push(zbfscheckWd[i])
        }
    }
    for (var i=0;i<zbfscheckZb.length;i++){
        if(zbfscheckZb[i].select){
            zbArr.push(zbfscheckZb[i])
        }
    }
    var datas = remBottomAllData;
    var data = datas;
    var html = '';
    html += '<table id="dataFxTable" border="0" style="margin-top: 1rem; white-space: nowrap;" cellSpacing="0" cellPadding="0">';
    if(data === ''){
        html += '<tr style="height: 2.5rem">';
        html += '<th>标题一</th>';
        html += '<th>标题二</th>';
        html += '<th>标题三</th>';
        html += '<th>标题四</th>';
        html += '<th>标题五</th>';
        html += '<th>标题六</th>';
        html += '<th>标题七</th>';
        html += '<th>标题八</th>';
        html += '<th>标题九</th>';
        html += '<th>标题十</th>';
        html += '<th>标题十一</th>';
        html += '<th>标题十二</th>';
        html += '</tr>';
        html += '<tr><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td></tr>';
        html += '<tr><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td></tr>';
        html += '<tr><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td></tr>';
        html += '<tr><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td></tr>';
        html += '<tr><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td></tr>';
        html += '<tr><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td></tr>';
        html += '<tr><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td></tr>';
        html += '<tr><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td></tr>';

    }else {
        html += '<tr style="height: 2.5rem">';
        for(var k = 0;k<data.ChValues.length;k++){
            html += '<th>' + data.ChValues[k] + '</th>';
        }
        html += '</tr>';

        for(var j = 0;j<data.newDataList.length;j++){
            html += '<tr>';
            for(var m = 0;m<data.newDataList[j].length;m++){
                html += '<td>' + data.newDataList[j][m] + '</td>'
            }
            html += '</tr>';
        }
    }
    html += '</table>';
    $('#tabLineTable').html(html);
    var xAxisName = wdArr[0].field;
    var xAxis = [];
    var legends = [];
    var legendsEn = [];
    var yAxisArray = []
    for(var i = 0;i<zbArr.length;i++){
        legends.push(zbArr[i].name);
        legendsEn.push(zbArr[i].field);
    }
    for(var j = 0;j<datas.dataList.length;j++){
        xAxis.push(datas.dataList[j][xAxisName]);
    }
    for(var m = 0;m<legendsEn.length;m++){
        var s = {}
        var arr = [];
        for(var n = 0;n<datas.dataList.length;n++){
            arr.push(datas.dataList[n][legendsEn[m]])
        }
        s.name = legends[m];
        s.data = arr;
        s.type= 'bar';
        yAxisArray.push(s)
    }
    $('.show-content-div>div').css('visibility','hidden');
    $('#tabLine').css('visibility','inherit');
    $('#tabLineTable').css('visibility','inherit');
    var option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            data: legends
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: xAxis
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: yAxisArray
    };
    chartLine.clear();
    chartLine.setOption(option);
    $(window).resize(function() {
        chartLine.resize();
    });
}
function tabPie() {
    var wdArr = [];
    var zbArr = [];
    for (var i=0;i<zbfscheckWd.length;i++){
        if(zbfscheckWd[i].select){
            wdArr.push(zbfscheckWd[i])
        }
    }
    for (var i=0;i<zbfscheckZb.length;i++){
        if(zbfscheckZb[i].select){
            zbArr.push(zbfscheckZb[i])
        }
    }
    var datas = remBottomAllData;
    var data = datas;
    var html = '';
    html += '<table id="dataFxTable" border="0" style="margin-top: 1rem; white-space: nowrap;" cellSpacing="0" cellPadding="0">';
    if(data === ''){
        html += '<tr style="height: 2.5rem">';
        html += '<th>标题一</th>';
        html += '<th>标题二</th>';
        html += '<th>标题三</th>';
        html += '<th>标题四</th>';
        html += '<th>标题五</th>';
        html += '<th>标题六</th>';
        html += '<th>标题七</th>';
        html += '<th>标题八</th>';
        html += '<th>标题九</th>';
        html += '<th>标题十</th>';
        html += '<th>标题十一</th>';
        html += '<th>标题十二</th>';
        html += '</tr>';
        html += '<tr><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td></tr>';
        html += '<tr><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td></tr>';
        html += '<tr><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td></tr>';
        html += '<tr><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td></tr>';
        html += '<tr><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td></tr>';
        html += '<tr><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td></tr>';
        html += '<tr><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td></tr>';
        html += '<tr><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td></tr>';

    }else {
        html += '<tr style="height: 2.5rem">';
        for(var k = 0;k<data.ChValues.length;k++){
            html += '<th>' + data.ChValues[k] + '</th>';
        }
        html += '</tr>';

        for(var j = 0;j<data.newDataList.length;j++){
            html += '<tr>';
            for(var m = 0;m<data.newDataList[j].length;m++){
                html += '<td>' + data.newDataList[j][m] + '</td>'
            }
            html += '</tr>';
        }
    }
    html += '</table>';
    $('#tabLineTable').html(html);
    var xAxisName = wdArr[0].field;
    var yAxisName = zbArr[0].field;
    var xAxis = [];
    var legends = [];
    var legendsEn = [];
    var yAxisArray = []
    for(var i = 0;i<zbArr.length;i++){
        legends.push(zbArr[i].name);
        legendsEn.push(zbArr[i].field);
    }
    for(var j = 0;j<datas.dataList.length;j++){
        xAxis.push(datas.dataList[j][xAxisName]);
        var arr = {};
        arr.name = datas.dataList[j][xAxisName];
        arr.value = datas.dataList[j][yAxisName];
        yAxisArray.push(arr);
    }
    $('.show-content-div>div').css('visibility','hidden');
    $('#tabLine').css('visibility','inherit');
    $('#tabLineTable').css('visibility','inherit');
    var option = {
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
            data: xAxis
        },
        series: [
            {
                name: '数据分析',
                type: 'pie',
                radius: '55%',
                center: ['50%', '60%'],
                data: yAxisArray,
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };

    chartLine.clear();
    chartLine.setOption(option);
    $(window).resize(function() {
        chartLine.resize();
    });
}
function tabRose() {
    var wdArr = [];
    var zbArr = [];
    for (var i=0;i<zbfscheckWd.length;i++){
        if(zbfscheckWd[i].select){
            wdArr.push(zbfscheckWd[i])
        }
    }
    for (var i=0;i<zbfscheckZb.length;i++){
        if(zbfscheckZb[i].select){
            zbArr.push(zbfscheckZb[i])
        }
    }
    var datas = remBottomAllData;
    var data = datas;
    var html = '';
    html += '<table id="dataFxTable" border="0" style="margin-top: 1rem; white-space: nowrap;" cellSpacing="0" cellPadding="0">';
    if(data === ''){
        html += '<tr style="height: 2.5rem">';
        html += '<th>标题一</th>';
        html += '<th>标题二</th>';
        html += '<th>标题三</th>';
        html += '<th>标题四</th>';
        html += '<th>标题五</th>';
        html += '<th>标题六</th>';
        html += '<th>标题七</th>';
        html += '<th>标题八</th>';
        html += '<th>标题九</th>';
        html += '<th>标题十</th>';
        html += '<th>标题十一</th>';
        html += '<th>标题十二</th>';
        html += '</tr>';
        html += '<tr><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td></tr>';
        html += '<tr><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td></tr>';
        html += '<tr><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td></tr>';
        html += '<tr><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td></tr>';
        html += '<tr><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td></tr>';
        html += '<tr><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td></tr>';
        html += '<tr><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td></tr>';
        html += '<tr><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td><td>内容1</td></tr>';

    }else {
        html += '<tr style="height: 2.5rem">';
        for(var k = 0;k<data.ChValues.length;k++){
            html += '<th>' + data.ChValues[k] + '</th>';
        }
        html += '</tr>';

        for(var j = 0;j<data.newDataList.length;j++){
            html += '<tr>';
            for(var m = 0;m<data.newDataList[j].length;m++){
                html += '<td>' + data.newDataList[j][m] + '</td>'
            }
            html += '</tr>';
        }
    }
    html += '</table>';
    $('#tabLineTable').html(html);
    var xAxisName = wdArr[0].field;
    var yAxisName = zbArr[0].field;
    var xAxis = [];
    var legends = [];
    var legendsEn = [];
    var yAxisArray = []
    for(var i = 0;i<zbArr.length;i++){
        legends.push(zbArr[i].name);
        legendsEn.push(zbArr[i].field);
    }
    for(var j = 0;j<datas.dataList.length;j++){
        xAxis.push(datas.dataList[j][xAxisName]);
        var arr = {};
        arr.name = datas.dataList[j][xAxisName];
        arr.value = datas.dataList[j][yAxisName];
        yAxisArray.push(arr);
    }
    $('.show-content-div>div').css('visibility','hidden');
    $('#tabLine').css('visibility','inherit');
    $('#tabLineTable').css('visibility','inherit');
    var option = {
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
            data: xAxis
        },
        series: [
            {
                name: '数据分析',
                type: 'pie',
                roseType: 'radius',
                label: {
                    show: false
                },
                emphasis: {
                    label: {
                        show: true
                    }
                },
                data: yAxisArray
            }
        ]
    };


    chartLine.clear();
    chartLine.setOption(option);
    $(window).resize(function() {
        chartLine.resize();
    });
}
function tabPoint() {
    $('.show-content-div>div').css('visibility','hidden');
    $('#tabLine').css('visibility','inherit');
    var option = {
        tooltip: {
            trigger: 'axis',
            textStyle: {
                color: '#fff'
            },
            axisPointer: {
                type: 'shadow',
                borderColor: 'rgba(124,128,244, .5)',
            },
            position: 'inside',
            formatter: (params) => {
                return `${params[0].axisValueLabel}-${params[0].seriesName}：${params[0].data[2]} <br /> ${params[1].axisValueLabel}-${params[1].seriesName}：${params[1].data[2]}`
            }
        },
        legend: {
            show: true,
            top: 0,
            right: 20,
            itemWidth: 20,
            itemHeight: 10,
            textStyle: {
                color: "#fff"
            }
        },
        grid: {
            show: true,
            top: 30,
            left: '8%',
            right: '3%',
            bottom: 40,
            borderColor: "#061C61"
        },
        xAxis: {
            type: 'category',
            boundaryGap: true,
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            axisPointer: {
                type: 'shadow'
            },
            axisLine: {
                lineStyle: {
                    color: '#215AFF'
                }
            },
            //网格样式
            splitLine: {
                show: true,
                lineStyle: {
                    color: ['#103095'],
                    width: 1,
                    type: 'dashed'
                }
            }
        },
        yAxis: {
            type: 'category',
            //网格样式
            splitLine: {
                show: true,
                lineStyle: {
                    color: ['#103095'],
                    width: 1,
                    type: 'dashed'
                }
            },
            nameTextStyle: {
                color: '#fff'
            },
            axisLine: {
                lineStyle: {
                    color: "#215AFF"
                }
            },
            data: ['福州', '厦门', '莆田', '三明', '泉州', '龙岩'],
            scale: true
        },
        series: [{
            name: '数据2',
            //  先X,后y
            data: [
                [0, 0, 122],
                [1, 1, 123],
                [2, 2, 223],
                [3, 3, 123],
                [4, 2, 123],
                [5, 4, 323],
                [6, 5, 123],
                [7, 5, 123],
                [8, 1, 123],
                [9, 3, 123],
                [10, 5, 223],
                [11, 2, 123],
            ],
            type: 'scatter',
            symbolSize: function(data) {
                return Math.sqrt(data[2])*3;
            },
            emphasis: {
                label: {
                    show: false,
                    formatter: function(param) {
                        return param.data[2];
                    },
                    position: 'top'
                }
            },
            itemStyle: {
                shadowBlur: 15,
                shadowColor: 'rgba(0,0,0, 0.5)',
                shadowOffsetY: 5,
                color: '#ff9f7f',
            }
        },
            {
                name: '数据1',
                data: [
                    [0, 2, 222],
                    [1, 3, 223],
                    [2, 4, 223],
                    [3, 2, 123],
                    [4, 5, 123],
                    [5, 3, 123],
                    [6, 1, 123],
                    [7, 2, 123],
                    [8, 3, 323],
                    [9, 5, 123],
                    [10, 2, 223],
                    [11, 5, 123],
                ],
                type: 'scatter',
                symbolSize: function(data) {
                    return Math.sqrt(data[2])*3;
                },
                emphasis: {
                    label: {
                        show: false,
                        formatter: function(param) {
                            return param.data[2];
                        },
                        position: 'top'
                    }
                },
                itemStyle: {
                    shadowBlur: 15,
                    shadowColor: 'rgba(25, 100, 150, 0.5)',
                    shadowOffsetY: 5,
                    color: '#8379ea',
                }
            }
        ] //end series
    };


    chartLine.clear();
    chartLine.setOption(option);
    $(window).resize(function() {
        chartLine.resize();
    });
}
function tabMap() {
    $('.show-content-div>div').css('visibility','hidden');
    $('#tabLine').css('visibility','inherit');
    var option = {
        tooltip: {
            show: false,
            trigger: 'item'
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: ['站点数据'],
            show: false
        },
        visualMap: {

            pieces: [{
                gte: 1,
                label: "1 - 9 人",
                color: "#e13055"
            }, {
                value: 0,
                color: "#FFFFFF"
            }],
            show: false,

        },
        geo: {
            map: "china",
            zoom: 1,
            itemStyle: {
                normal: {
                    shadowBlur: 4,
                    shadowColor: 'rgba(225,48,85,0.5)',
                    shadowOffsetX: -3,
                    shadowOffsetY: -3,
                    borderColor: "rgb(225,48,85)"
                },
                emphasis: {
                    areaColor: "rgba(225,48,85,0.4)",
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,

                }
            },
        },
        series: [{
            name: '站点数据',
            type: 'map',
            mapType: 'china',
            roam: false,
            label: {
                show: true,
                color: '#000000'
            },
            itemStyle: {
                normal: {
                    borderWidth: 0.7,
                    borderColor: "rgb(225,48,85)"
                },
                emphasis: {
                    borderWidth: 0,
                    areaColor: "rgba(225,48,85,0.4)",
                }
            },
            data: [{
                name: "南海诸岛",
                value: 0
            },
                {
                    name: '北京',
                    value: 11
                },
                {
                    name: '天津',
                    value: 13
                },
                {
                    name: '上海',
                    value: 0
                },
                {
                    name: '重庆',
                    value: 0
                },
                {
                    name: '河北',
                    value: 0
                },
                {
                    name: '河南',
                    value: 0
                },
                {
                    name: '云南',
                    value: 0
                },
                {
                    name: '辽宁',
                    value: 0
                },
                {
                    name: '黑龙江',
                    value: 0
                },
                {
                    name: '湖南',
                    value: 0
                },
                {
                    name: '安徽',
                    value: 0
                },
                {
                    name: '山东',
                    value: 0
                },
                {
                    name: '新疆',
                    value: 0
                },
                {
                    name: '江苏',
                    value: 0
                },
                {
                    name: '浙江',
                    value: 10
                },
                {
                    name: '江西',
                    value: 0
                },
                {
                    name: '湖北',
                    value: 0
                },
                {
                    name: '广西',
                    value: 0
                },
                {
                    name: '甘肃',
                    value: 0
                },
                {
                    name: '山西',
                    value: 0
                },
                {
                    name: '内蒙古',
                    value: 0
                },
                {
                    name: '陕西',
                    value: 0
                },
                {
                    name: '吉林',
                    value: 0
                },
                {
                    name: '福建',
                    value: 10
                },
                {
                    name: '贵州',
                    value: 0
                },
                {
                    name: '广东',
                    value: 1
                },
                {
                    name: '青海',
                    value: 0
                },
                {
                    name: '西藏',
                    value: 0
                },
                {
                    name: '四川',
                    value: 0
                },
                {
                    name: '宁夏',
                    value: 0
                },
                {
                    name: '海南',
                    value: 0
                },
                {
                    name: '台湾',
                    value: 0
                },
                {
                    name: '香港',
                    value: 0
                },
                {
                    name: '澳门',
                    value: 0
                }
            ]
        }]
    };


    chartLine.clear();
    chartLine.setOption(option);
    $(window).resize(function() {
        chartLine.resize();
    });
}

function zbfxSearch() {
    var datas = $('#zbfxSearch')[0].value;
    var html = ''
    if (remZbfxTab === 0){
        for(var m=0;m<zbfscheckWd.length;m++){
            if(datas === "" || zbfscheckWd[m].name.split(datas).length>1){
                if (zbfscheckWd[m].select){
                    html += '<p><input type="checkbox" id="' + zbfscheckWd[m].id + '" name="item" onclick="checkboxWdOnclick(this,\'' + zbfscheckWd[m].id + '\')" checked><label>' + zbfscheckWd[m].name + '</label></p>'
                } else {
                    html += '<p><input type="checkbox" id="' + zbfscheckWd[m].id + '" name="item" onclick="checkboxWdOnclick(this,\'' + zbfscheckWd[m].id + '\')"><label>' + zbfscheckWd[m].name + '</label></p>'
                }
            }
        }
    }else {
        for(var i=0;i<zbfscheckZb.length;i++){
            if(datas === "" || zbfscheckZb[i].name.split(datas).length>1){
                if (zbfscheckZb[i].select){
                    html += '<p><input type="checkbox" id="' + zbfscheckZb[i].id + '" name="item" onclick="checkboxZbOnclick(this,\'' + zbfscheckZb[i].id + '\')" checked><label>' + zbfscheckZb[i].name + '</label></p>'
                } else {
                    html += '<p><input type="checkbox" id="' + zbfscheckZb[i].id + '" name="item" onclick="checkboxZbOnclick(this,\'' + zbfscheckZb[i].id + '\')"><label>' + zbfscheckZb[i].name + '</label></p>'
                }
            }
        }
    }
    $('#zbfxCheckList').html(html);
}
/*左上*/
function dataTj(type) {
    remDataTjType = type;
    var barData = [10+type,20+type,30+type]
    var data = [
        {sr:'666666',hb:'64%',tb:'91%'},
        {sr:'661166',hb:'69%',tb:'71%'},
        {sr:'662266',hb:'67%',tb:'11%'},
        {sr:'663366',hb:'63%',tb:'41%'},
    ]
    if(type === 0){
        // barData = [remybData.QW_ACCT_FEE1.toFixed(2),remybData.QW_ACCT_FEE3.toFixed(2),remybData.QW_ACCT_FEE2.toFixed(2)]
        barData = [{name:'新增',datas:remybData.QW_ACCT_FEE1.toFixed(2)},{name:'保有',datas:remybData.QW_ACCT_FEE3.toFixed(2)},{name:'流失',datas:remybData.QW_ACCT_FEE2.toFixed(2)}]
        data = [
            {sr:remTopData[0].ACCT_FEE,tb:remTopData[0].ACCT_FEE_TB.toFixed(2)},
            {sr:remTopData[1].ACCT_FEE,tb:remTopData[1].ACCT_FEE_TB.toFixed(2)},
            {sr:remTopData[3].ACCT_FEE,tb:remTopData[3].ACCT_FEE_TB.toFixed(2)},
            {sr:remTopData[2].ACCT_FEE,tb:remTopData[2].ACCT_FEE_TB.toFixed(2)},
        ]
    }else {
        // barData = [remybData.QW_USER_NUM1.toFixed(2),remybData.QW_USER_NUM3.toFixed(2),remybData.QW_USER_NUM2.toFixed(2)]
        barData = [{name:'新增',datas:remybData.QW_USER_NUM1.toFixed(2)},{name:'保有',datas:remybData.QW_USER_NUM3.toFixed(2)},{name:'流失',datas:remybData.QW_USER_NUM2.toFixed(2)}]
        data = [
            {sr:remTopData[0].USER_NUM,tb:remTopData[0].USER_NUM_TB.toFixed(2)},
            {sr:remTopData[1].USER_NUM,tb:remTopData[1].USER_NUM_TB.toFixed(2)},
            {sr:remTopData[3].USER_NUM,tb:remTopData[3].USER_NUM_TB.toFixed(2)},
            {sr:remTopData[2].USER_NUM,tb:remTopData[2].USER_NUM_TB.toFixed(2)},
        ]
    }
    var max;
    for(var i = 0;i<barData.length;i++){
        for(var j=i+1; j<barData.length; j++){
            if(barData[i].datas < barData[j].datas){
                //如果arr[j]大就把此时的值赋值给最大值变量max
                max=barData[j];
                barData[j]=barData[i];
                barData[i]=max;
            }
        }
    }
    var option = myChartBar.getOption();
    option.series[0].data[0].value = barData[0].datas;
    option.series[1].data[0].value = barData[1].datas;
    option.series[2].data[0].value = barData[2].datas;
    option.series[0].data[0].name = barData[0].name;
    option.series[1].data[0].name = barData[1].name;
    option.series[2].data[0].name = barData[2].name;
    myChartBar.setOption(option);
    $('#dataTjTab span').removeClass('blue-bg');
    if(type === 0){
        $('#czsr').addClass('blue-bg')
    }else {
        $('#yhs').addClass('blue-bg')
    }
    var dataTjHtml = '';
    dataTjHtml += '<table border="0" cellSpacing="0" cellPadding="0">';
    dataTjHtml += '<tr>';
    dataTjHtml += '<td colSpan="6" class="revenueReview-div-content-div-infoTitle">移网全网</td>';
    dataTjHtml += '</tr>';
    dataTjHtml += '<tr style="border-bottom: solid 1px #6e6e6e">';
    if(type === 0){
        dataTjHtml += '<td style="width: 11rem" class="table-td-bottom">本月出账收入：</td>';
        dataTjHtml += '<td class="table-td-bottom" style="text-align: left;">' + data[0].sr + '万元</td>';
    }else {
        dataTjHtml += '<td style="width: 11rem" class="table-td-bottom">网上用户数：</td>';
        dataTjHtml += '<td class="table-td-bottom" style="text-align: left;">' + data[0].sr + '万户</td>';
    }
    /*dataTjHtml += '<td style="width: 4.5rem;" class="table-td-bottom">环比：</td>';
    dataTjHtml += '<td class="table-td-bottom" style="text-align: left;">' + data[0].hb + '%</td>';*/
    dataTjHtml += '<td style="width: 4.5rem;" class="table-td-bottom">同比：</td>';
    dataTjHtml += '<td class="table-td-bottom" style="text-align: left;">' + data[0].tb + '%</td>';
    dataTjHtml += '</tr>';
    dataTjHtml += '<tr>';
    dataTjHtml += '<td colSpan="6" class="revenueReview-div-content-div-infoTitle">新增</td>';
    dataTjHtml += '</tr>';
    dataTjHtml += '<tr>';
    if(type === 0){
        dataTjHtml += '<td class="table-td-bottom">新增出账收入：</td>';
        dataTjHtml += '<td class="table-td-bottom" style="text-align: left;">' + data[1].sr + '万元</td>';
    }else {
        dataTjHtml += '<td class="table-td-bottom">新增用户数：</td>';
        dataTjHtml += '<td class="table-td-bottom" style="text-align: left;">' + data[1].sr + '万户</td>';
    }
    /*dataTjHtml += '<td class="table-td-bottom">环比：</td>';
    dataTjHtml += '<td class="table-td-bottom" style="text-align: left;">' + data[1].hb + '%</td>';*/
    dataTjHtml += '<td class="table-td-bottom">同比：</td>';
    dataTjHtml += '<td class="table-td-bottom" style="text-align: left;">' + data[1].tb + '%</td>';
    dataTjHtml += '</tr>';
    dataTjHtml += '<tr>';
    dataTjHtml += '<td colSpan="6" class="revenueReview-div-content-div-infoTitle">保有</td>';
    dataTjHtml += '</tr>';
    dataTjHtml += '<tr>';
    if(type === 0){
        dataTjHtml += '<td class="table-td-bottom">保有出账收入：</td>';
        dataTjHtml += '<td class="table-td-bottom" style="text-align: left;">' + data[2].sr + '万元</td>';
    }else {
        dataTjHtml += '<td class="table-td-bottom">保有用户数：</td>';
        dataTjHtml += '<td class="table-td-bottom" style="text-align: left;">' + data[2].sr + '万户</td>';
    }
    /*dataTjHtml += '<td class="table-td-bottom">环比：</td>';
    dataTjHtml += '<td class="table-td-bottom" style="text-align: left;">' + data[2].hb + '%</td>';*/
    dataTjHtml += '<td class="table-td-bottom">同比：</td>';
    dataTjHtml += '<td class="table-td-bottom" style="text-align: left;">' + data[2].tb + '%</td>';
    dataTjHtml += '</tr>';
    dataTjHtml += '<tr>';
    dataTjHtml += '<td colSpan="6" class="revenueReview-div-content-div-infoTitle">流失</td>';
    dataTjHtml += '</tr>';
    dataTjHtml += '<tr>';
    if(type === 0){
        dataTjHtml += '<td>上月出账收入：</td>';
        dataTjHtml += '<td style="text-align: left;">' + data[3].sr + '万元</td>';
    }else {
        dataTjHtml += '<td>流失用户数：</td>';
        dataTjHtml += '<td style="text-align: left;">' + data[3].sr + '万户</td>';
    }
    /*dataTjHtml += '<td>环比：</td>';
    dataTjHtml += '<td style="text-align: left;">' + data[3].hb + '%</td>';*/
    dataTjHtml += '<td>同比：</td>';
    dataTjHtml += '<td style="text-align: left;">' + data[3].tb + '%</td>';
    dataTjHtml += '</tr>';
    dataTjHtml += '</table>';
    $('#dataTjTable').html(dataTjHtml)
}
/*左下Sel*/
function zbfxSel(type) {
    remZbfxTab = type;
    $('#zbfxSearch')[0].value = "";
    $('#zbfxSel span').removeClass('blue-bg')
    if (type === 0){
        $('#zbfxSel0').addClass('blue-bg')
    } else {
        $('#zbfxSel1').addClass('blue-bg')
    }
    var html = ''
    if(type === 0 ){
        for(var i=0;i<zbfscheckWd.length;i++){
            if (zbfscheckWd[i].select){
                html += '<p><input type="checkbox" id="' + zbfscheckWd[i].id + '" name="item" onclick="checkboxWdOnclick(this,\'' + zbfscheckWd[i].id + '\')" checked><label>' + zbfscheckWd[i].name + '</label></p>'
            } else {
                html += '<p><input type="checkbox" id="' + zbfscheckWd[i].id + '" name="item" onclick="checkboxWdOnclick(this,\'' + zbfscheckWd[i].id + '\')"><label>' + zbfscheckWd[i].name + '</label></p>'
            }
        }
    }else {
        for(var i=0;i<zbfscheckZb.length;i++){
            if (zbfscheckZb[i].select){
                html += '<p><input type="checkbox" id="' + zbfscheckZb[i].id + '" name="item" onclick="checkboxZbOnclick(this,\'' + zbfscheckZb[i].id + '\')" checked><label>' + zbfscheckZb[i].name + '</label></p>'
            } else {
                html += '<p><input type="checkbox" id="' + zbfscheckZb[i].id + '" name="item" onclick="checkboxZbOnclick(this,\'' + zbfscheckZb[i].id + '\')"><label>' + zbfscheckZb[i].name + '</label></p>'
            }
        }
    }
    $('#zbfxCheckList').html(html)
}
function checkboxWdOnclick(checkbox,ids) {
    for(var i=0;i<zbfscheckWd.length;i++){
        if(zbfscheckWd[i].id === ids){
            zbfscheckWd[i].select = checkbox.checked;
            break;
        }
    }
    zbfxTabWd();
}
function checkboxZbOnclick(checkbox,ids) {
    for(var i=0;i<zbfscheckZb.length;i++){
        if(zbfscheckZb[i].id === ids){
            zbfscheckZb[i].select = checkbox.checked;
            break;
        }
    }
    zbfxTabZb();
}

/*点击tab弹出自定义*/
function tabWdClick(ids) {
    remDragIds = ids;
    remDragType = 'Wd';
    var even ;
    $('.zbfsDialog').css('display','block')
    for(var i=0;i<zbfscheckWd.length;i++){
        if(zbfscheckWd[i].id === ids){
            even = zbfscheckWd[i];
            break;
        }
    }
    $('#dialog1').html(even.combination.drog1Html);
    $('#dialog2').html(even.combination.drog2Html);
    $('#field_name').html(even.field);
    $('#dialogInput').val(even.combination.input)
}
function tabZbClick(ids) {
    remDragIds = ids;
    remDragType = 'Zb';
    var even ;
    $('.zbfsDialog').css('display','block')
    for(var i=0;i<zbfscheckZb.length;i++){
        if(zbfscheckZb[i].id === ids){
            even = zbfscheckZb[i];
            break;
        }
    }
    $('#dialog1').html(even.combination.drog1Html);
    $('#dialog2').html(even.combination.drog2Html);
    $('#field_name').html(even.field);
    $('#dialogInput').val(even.combination.input)
}

function dragTabSubmit() {
    var even;
    if(remDragType === 'Wd'){
        for(var i=0;i<zbfscheckWd.length;i++){
            if(zbfscheckWd[i].id === remDragIds){
                even = zbfscheckWd[i];
                break;
            }
        }
    }else {
        for(var i=0;i<zbfscheckZb.length;i++){
            if(zbfscheckZb[i].id === remDragIds){
                even = zbfscheckZb[i];
                break;
            }
        }
    }
    var drog1Values = $('#dialog1').children();
    var drog1Value = ''
    var drog2Values = $('#dialog2').children();
    var drog2Value = ''
    for (var m = 0;m<drog1Values.length;m++){
        drog1Value += $(drog1Values[m]).html();
    }
    for (var k = 0;k<drog2Values.length;k++){
        drog2Value += $(drog2Values[k]).html();
    }
    even.combination.drog1Html = $('#dialog1').html();
    even.combination.drog1Value = drog1Value;
    even.combination.drog2Html = $('#dialog2').html();
    even.combination.drog2Value = drog2Value;
    even.combination.input = $('#dialogInput').val();

    if(remDragType === 'Wd'){
        zbfxTabWd();
    }else {
        zbfxTabZb();
    }
    $('.zbfsDialog').css('display','none')
}

function zbfxTabWd() {
    var html = '';
    for (var i=0;i<zbfscheckWd.length;i++){
        if(zbfscheckWd[i].select){
            html += '<div class="tabs-content-div">';
            html += '<span onclick="tabWdClick(\''+ zbfscheckWd[i].id  +'\')">' + zbfscheckWd[i].name;
            if ((zbfscheckWd[i].combination.drog1Value != '')||(zbfscheckWd[i].combination.drog2Value != '')||(zbfscheckWd[i].combination.input != '')){
                html += ' (' + zbfscheckWd[i].combination.drog1Value + ' ' + zbfscheckWd[i].field +  ' ' + zbfscheckWd[i].combination.drog2Value +  ' ' + zbfscheckWd[i].combination.input + ')'
            }
            html += '</span>';
            html += '<div class="tabs-content-div-close" onclick="zbfxTabWdClick(\'' + zbfscheckWd[i].id + '\')"></div>';
            html += '</div>';
        }
    }
    $('#zbfxWdTab').html(html);
}
function zbfxTabZb() {
    var html = '';
    for (var i=0;i<zbfscheckZb.length;i++){
        if(zbfscheckZb[i].select){
            html += '<div class="tabs-content-div">';
            html += '<span onclick="tabZbClick(\''+ zbfscheckZb[i].id  +'\')">' +  zbfscheckZb[i].name;
            if ((zbfscheckZb[i].combination.drog1Value != '')||(zbfscheckZb[i].combination.drog2Value != '')||(zbfscheckZb[i].combination.input != '')){
                html += ' (' + zbfscheckZb[i].combination.drog1Value + ' ' + zbfscheckZb[i].field +  ' ' + zbfscheckZb[i].combination.drog2Value +  ' ' + zbfscheckZb[i].combination.input + ')'
            }
            html += '</span>';
            html += '<div class="tabs-content-div-close" onclick="zbfxTabZbClick(\'' + zbfscheckZb[i].id + '\')"></div>';
            html += '</div>';
        }
    }
    $('#zbfxZbTab').html(html)
}

function zbfxTabWdClick(ids) {
    for(var i=0;i<zbfscheckWd.length;i++){
        if(zbfscheckWd[i].id === ids){
            zbfscheckWd[i].select = false;
            zbfscheckWd[i].combination.drog1Html = '';
            zbfscheckWd[i].combination.drog1Value = '';
            zbfscheckWd[i].combination.drog2Html = '';
            zbfscheckWd[i].combination.drog2Value = '';
            zbfscheckWd[i].combination.input = '';
            break;
        }
    }
    zbfxTabWd();
    if(remZbfxTab === 0){
        var html = ''
        for(var i=0;i<zbfscheckWd.length;i++){
            if (zbfscheckWd[i].select){
                html += '<p><input type="checkbox" id="' + zbfscheckWd[i].id + '" name="item" onclick="checkboxWdOnclick(this,\'' + zbfscheckWd[i].id + '\')" checked><label>' + zbfscheckWd[i].name + '</label></p>'
            } else {
                html += '<p><input type="checkbox" id="' + zbfscheckWd[i].id + '" name="item" onclick="checkboxWdOnclick(this,\'' + zbfscheckWd[i].id + '\')"><label>' + zbfscheckWd[i].name + '</label></p>'
            }
        }
        $('#zbfxCheckList').html(html);
    }
}

function zbfxTabZbClick(ids) {
    for(var i=0;i<zbfscheckZb.length;i++){
        if(zbfscheckZb[i].id === ids){
            zbfscheckZb[i].select = false;
            zbfscheckZb[i].combination.drog1Html = '';
            zbfscheckZb[i].combination.drog1Value = '';
            zbfscheckZb[i].combination.drog2Html = '';
            zbfscheckZb[i].combination.drog2Value = '';
            zbfscheckZb[i].combination.input = '';
            break;
        }
    }
    zbfxTabZb();
    if(remZbfxTab === 1){
        var html = ''
        for(var i=0;i<zbfscheckZb.length;i++){
            if (zbfscheckZb[i].select){
                html += '<p><input type="checkbox" id="' + zbfscheckZb[i].id + '" name="item" onclick="checkboxZbOnclick(this,\'' + zbfscheckZb[i].id + '\')" checked><label>' + zbfscheckZb[i].name + '</label></p>'
            } else {
                html += '<p><input type="checkbox" id="' + zbfscheckZb[i].id + '" name="item" onclick="checkboxZbOnclick(this,\'' + zbfscheckZb[i].id + '\')"><label>' + zbfscheckZb[i].name + '</label></p>'
            }
        }
        $('#zbfxCheckList').html(html);
    }
}

function renderTable() {
    layui.use('table', function(){
        var table = layui.table;

        //第一个实例
        table.render({
            elem: '#demo'
            ,height: 512
            ,data:[
                {id:1,username:2},
                {id:1,username:2},
                {id:1,username:2},
                {id:1,username:2}
            ]
            ,cols: [[ //表头
                {field: 'id', title: 'ID', width:80, sort: true, fixed: 'left'}
                ,{field: 'username', title: '用户名', width:80}
            ]]
        });
        var data = [
            {id:1,username:2},
            {id:1,username:2},
            {id:1,username:2},
            {id:1,username:2}
        ]
        /*table.reload('demo', {data: data});*/

    });
}
function editText(arr,str) {
    var lsData = dataTree
    for(var i=0;i<arr.length;i++){
        if (arr.length===i+1){
            lsData = lsData[arr[i]]
        }else {
            lsData = lsData[arr[i]].children
        }
    }
    lsData.children = str;
    return dataTree;
}
/*点击菜单，获取对应菜单下内容*/
function clickTreeMenu(ids) {
    if(ids === 'menuYh'){
        treeClickType = 'user';
    }else if(ids === 'menuCz'){
        treeClickType = 'fee';
    }
    var childInfo = []
    for (var k of menuList){
        if(k.id === ids){
            childInfo = k.children;
            break;
        }
    }
    var childTreeData=[];
    for (let j of childInfo){
        var info = {}
        info.name = j.name;
        info.id = j.id;
        info.isEnd = j.isEnd;
        info.point = j.point;
        childTreeData.push(info);
    }
    var newTreeData = editText(remPoint,childTreeData)
    var option = myChartTree.getOption();
    option.series[0].data = newTreeData;
    myChartTree.setOption(option);
}
/*查找节点对应菜单*/
function returnMenu(source,ids) {
    if (source && source.length) {
        for (let item of source) {
            if (item.id === ids) {
                remPoint = item.point;
                remMenu = item.menu;
                return item.menu;
            } else if (item.menu && item.menu.length){
                for(var m=0;m<item.menu.length;m++){
                    returnMenu(item.menu[m].children, ids);
                }

            }
        }
    }else {
        return [];
    }
}

/*树图渲染*/
function revenueTree(){
    var option = {
        tooltip: {
            trigger: 'item',
            triggerOn: 'mousemove',
            show:false
        },
        series: [
            {
                type: 'tree',

                data: dataTree,

                top: '1%',
                left: 40,
                bottom: '1%',
                right: '20%',

                symbolSize: 12,
                initialTreeDepth:4,
                label: {
                    /*position: 'left',
                    verticalAlign: 'middle',
                    align: 'right',*/
                    fontSize: 12,
                    normal: {
                        position: 'left',
                        verticalAlign: 'middle',
                        align: 'right',
                        formatter: function(params) {
                            if (params.data.isEnd) {
                                return '{a|'+`${params.data.name}`+'} '
                            } else {
                                return `${params.data.name}`
                            }

                        },
                        rich: {
                            a: {
                                color: '#fff',
                                fontSize: 12,
                                fontWeight: 'bolder',
                                align: 'center',
                                backgroundColor:'#63869e',
                                padding:7,
                                borderRadius:5,
                            }
                        }
                    }
                },

                leaves: {
                    label: {
                        position: 'right',
                        verticalAlign: 'middle',
                        align: 'left'
                    }
                },

                expandAndCollapse: true,
                animationDuration: 550,
                animationDurationUpdate: 750
            }
        ]
    };

    myChartTree.setOption(option);
    /* myChart.on('click', function eConsole(param) {
         if (param.data.flow) {
             taskExceptionShow();
         }
 //这个params可以获取参数
     });*/
    $(window).resize(function() {
        myChartTree.resize();
    });
    /*var ecConfig = echarts.config.EVENT;
    myChartTree.on(ecConfig.CLICK,eConsole)
    function eConsole(param) {
        if (typeof param.seriesIndex  == "undefined") {
            return;
        }
        if(param.type == "click"){
            alert(param.data + 1);
        }
    }*/
    /**
     * 鼠标右键，弹出右键操作菜单
     */
    $("#main").bind("contextmenu", function () { return false; });//防止默认菜单弹出（查看图像,图像另存为等）
    myChartTree.on("contextmenu", function(params){
        if(params.data.isEnd){
            return
        }
        menuList=[];
        var id = params.data.id;
        remId = id;
        var test = returnMenu(datas,id);
        menuList = remMenu;
        var html = ''
        html += '<ul>';
        for(let j of menuList){
            html += '<li onclick="clickTreeMenu(' + '\'' + j.id + '\'' +')" id="' + j.id +'">' + j.name +'</li>'
        }
        html += '</ul>';
        $('#rightMenu').html(html);
        // console.log('params',params)
        $('#rightMenu').css({
            'display': 'block',
            'left': params.event.offsetX + 15,
            'top' : params.event.offsetY + 15
        });
        //todo 右键菜单刚弹出时，隐藏鼠标悬停菜单
        $("#main>div:nth-child(2)").hide();
    });
    myChartTree.on('click', function eConsole(param) {
        if(param.data.id === 'tree0'){
            remTreeClickType = '';
            treeClickType = '';
        }
        familyTree(dataTree,param.data.point);
    });
    /**
     * 点击画布的时候隐藏右键菜单
     */
    $('.tree-container').click(function () {
        $('#rightMenu').css({
            'display': 'none',
            'left': '-9999px',
            'top': '-9999px'
        });
    });

}

//查找父节点
function familyTree (arr1, point) {
    var temp = []
    var arrRem = arr1;
    for(var i = 0;i<point.length;i++){
        temp.push(arrRem[point[i]].name);
        arrRem = arrRem[point[i]].children;
    }

    var html= '';
    html+= '<ul>'
    for (var m = 0;m<temp.length;m++){
        html+= '<li>'

        html+= '<a>' + temp[m] + '</a>'
        html+= '</li>'
    }
    html+= '</ul>'
    remTreeClickAll = temp;
    remTreeClickType = treeClickType
    $('#crumbs').html(html)
}

/*复盘数据统计*/
function interfaceService(type,data) {
    var datas = [{name:'新增',datas:data.QW_ACCT_FEE1.toFixed(2)},{name:'保有',datas:data.QW_ACCT_FEE3.toFixed(2)},{name:'流失',datas:data.QW_ACCT_FEE2.toFixed(2)}]
    echartsBar(datas)
}

/*仪表盘*/
function echartsBar(datas) {

    var max;
    for(var i = 0;i<datas.length;i++){
        for(var j=i+1; j<datas.length; j++){
            if(datas[i].datas < datas[j].datas){
                //如果arr[j]大就把此时的值赋值给最大值变量max
                max=datas[j];
                datas[j]=datas[i];
                datas[i]=max;
            }
        }
    }
    var option = {
        tooltip: {
            formatter: "{b} <br/>{c} {a}"
        },
        series : [
            {
                name: '%',
                type: 'gauge',
                z: 3,
                min: 0,
                max: 100,
                splitNumber: 10,
                radius: '90%',
                axisLine: {            // 坐标轴线
                    lineStyle: {       // 属性lineStyle控制线条样式
                        width: 6
                    }
                },
                axisTick: {            // 坐标轴小标记
                    length: 10,        // 属性length控制线长
                    lineStyle: {       // 属性lineStyle控制线条样式
                        color: 'auto'
                    }
                },
                splitLine: {           // 分隔线
                    length: 16,         // 属性length控制线长
                    lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                        color: 'auto'
                    }
                },
                /*axisLabel: {
                    backgroundColor: 'auto',
                    borderRadius: 2,
                    color: '#eee',
                    padding: 3,
                    textShadowBlur: 2,
                    textShadowOffsetX: 1,
                    textShadowOffsetY: 1,
                    textShadowColor: '#222'
                },*/
                title: {
                    // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    fontWeight: 'bolder',
                    fontSize: 18,
                },
                /*detail: {
                    // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    formatter: function (value) {
                        value = (value + '').split('.');
                        value.length < 2 && (value.push('00'));
                        return ('00' + value[0]).slice(-2)
                            + '.' + (value[1] + '00').slice(0, 2);
                    },
                    fontWeight: 'bolder',
                    fontSize:18,
                    borderRadius: 3,
                    backgroundColor: '#444',
                    borderColor: '#aaa',
                    shadowBlur: 3,
                    shadowColor: '#333',
                    shadowOffsetX: 0,
                    shadowOffsetY: 3,
                    borderWidth: 2,
                    textBorderColor: '#000',
                    textBorderWidth: 2,
                    textShadowBlur: 2,
                    textShadowColor: '#fff',
                    textShadowOffsetX: 0,
                    textShadowOffsetY: 0,
                    fontFamily: 'Arial',
                    width: 32,
                    color: '#eee',
                    rich: {}
                },*/
                detail: {
                    // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    fontWeight: 'bolder',
                    fontSize:28
                },
                data: [{value: datas[0].datas, name: datas[0].name}]
            },
            {
                name: '%',
                type: 'gauge',
                center: ['21%', '55%'],    // 默认全局居中
                radius: '70%',
                min: 0,
                max: 100,
                endAngle: 45,
                splitNumber: 5,
                axisLine: {            // 坐标轴线
                    lineStyle: {       // 属性lineStyle控制线条样式
                        width: 3
                    }
                },
                axisTick: {            // 坐标轴小标记
                    length: 8,        // 属性length控制线长
                    lineStyle: {       // 属性lineStyle控制线条样式
                        color: 'auto'
                    }
                },
                splitLine: {           // 分隔线
                    length: 12,         // 属性length控制线长
                    lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                        color: 'auto'
                    }
                },
                pointer: {
                    width: 4
                },
                title: {
                    offsetCenter: [0, '-30%'],       // x, y，单位px
                    fontWeight: 'bolder',
                    fontSize:16,
                },
                detail: {
                    // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    fontWeight: 'bolder',
                    fontSize:24
                },
                data: [{value: datas[1].datas, name: datas[1].name}]
            },
            {
                name: '%',
                type: 'gauge',
                center: ['79%', '55%'],    // 默认全局居中
                radius: '70%',
                min: 0,
                max: 100,
                startAngle: 135,
                endAngle: -45,
                splitNumber: 5,
                axisLine: {            // 坐标轴线
                    lineStyle: {       // 属性lineStyle控制线条样式
                        width: 3
                    }
                },
                axisTick: {            // 坐标轴小标记
                    length: 8,        // 属性length控制线长
                    lineStyle: {       // 属性lineStyle控制线条样式
                        color: 'auto'
                    }
                },
                splitLine: {           // 分隔线
                    length: 12,         // 属性length控制线长
                    lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                        color: 'auto'
                    }
                },
                pointer: {
                    width: 4
                },
                title: {
                    offsetCenter: [0, '-30%'],       // x, y，单位px
                    fontWeight: 'bolder',
                    fontSize:16,
                },
                detail: {
                    // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    fontWeight: 'bolder',
                    fontSize:24
                },
                data: [{value: datas[2].datas, name: datas[2].name}]
            },
        ]
    };

    /*setInterval(function (){
        option.series[0].data[0].value = (Math.random()*100).toFixed(2) - 0;
        option.series[1].data[0].value = (Math.random()*7).toFixed(2) - 0;
        option.series[2].data[0].value = (Math.random()*2).toFixed(2) - 0;
        option.series[3].data[0].value = (Math.random()*2).toFixed(2) - 0;
        myChart.setOption(option);
    },2000);*/

    myChartBar.setOption(option);
    $(window).resize(function(){
        myChartBar.resize();
    })
}

function AjaxJson(url,data) {
    var test;
    var BASE_API = "http://"+window.location.host+"/triber/review/";
    $.ajax({
        type : 'POST',
        headers:{'Content-Type':'application/json'},
        url : BASE_API + url,
        data : JSON.stringify(data),
        async:false,
        success : function(datas) {
            // return JSON.parse(data)
            test = datas;
        },
        error : function(datas) {
            console.log(datas)
        },
        dataType : 'json',

    });
    return test;
}


var tableToExcel = (function() {
    var uri = 'data:application/vnd.ms-excel;base64,'
        , template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]-->'+
        ' <style type="text/css">'+
        '.excelTable  {'+
        'border-collapse:collapse;'+
        ' border:thin solid #999; '+
        '}'+
        '   .excelTable  th {'+
        '   border: thin solid #999;'+
        '  padding:20px;'+
        '  text-align: center;'+
        '  border-top: thin solid #999;'+
        ' '+
        '  }'+
        ' .excelTable  td{'+
        ' border:thin solid #999;'+
        '  padding:2px 5px;'+
        '  text-align: center;'+
        ' }</style>'+'</head><body><table border="1">{table}</table></body></html>'
        , base64 = function(s) { return window.btoa(unescape(encodeURIComponent(s))) }
        , format = function(s, c) { return s.replace(/{(\w+)}/g, function(m, p) { return c[p]; }) }
    return function(table, name) {
        if (!table.nodeType) table = document.getElementById(table)
        var ctx = {worksheet: name || 'Worksheet', table: table.innerHTML};
        var downloadLink = document.createElement("a");
        downloadLink.href = uri + base64(format(template, ctx));
        downloadLink.download = name+".xls";
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    }
})()
