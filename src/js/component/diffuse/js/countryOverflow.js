var countryList
$(function () {

    //漫出热力图
    var geoCoordMap = {
        中国:[116.4038470000,39.9155260000],
        尼日利亚: [-4.388361, 11.186148],
        美国洛杉矶: [-118.24311, 34.052713],
        美国芝加哥: [-87.801833, 41.870975],
        柬埔寨金边: [104.88659, 11.545469]
    };

    var data = [

        {
            name: '尼日利亚',
            datas: 256
        }, {
            name: '美国洛杉矶',
            datas: 256
        }, {
            name: '柬埔寨金边',
            datas: 256
        },
        {
            name:'中国',
            datas:369
        },
        {
            name:'美国芝加哥',
            datas:369
        }

    ];

    var worldData=[
        {name: 'Afghanistan', value: 28397.812},
        {name: 'Angola', value: 19549.124},
        {name: 'Albania', value: 3150.143},
        {name: 'United Arab Emirates', value: 8441.537},
        {name: 'Argentina', value: 40374.224},
        {name: 'Armenia', value: 2963.496},
        {name: 'French Southern and Antarctic Lands', value: 268.065},
        {name: 'Australia', value: 22404.488},
        {name: 'Austria', value: 8401.924},
        {name: 'Azerbaijan', value: 9094.718},
        {name: 'Burundi', value: 9232.753},
        {name: 'Belgium', value: 10941.288},
        {name: 'Benin', value: 9509.798},
        {name: 'Burkina Faso', value: 15540.284},
        {name: 'Bangladesh', value: 151125.475},
        {name: 'Bulgaria', value: 7389.175},
        {name: 'The Bahamas', value: 66402.316},
        {name: 'Bosnia and Herzegovina', value: 3845.929},
        {name: 'Belarus', value: 9491.07},
        {name: 'Belize', value: 308.595},
        {name: 'Bermuda', value: 64.951},
        {name: 'Bolivia', value: 716.939},
        {name: 'Brazil', value: 195210.154},
        {name: 'Brunei', value: 27.223},
        {name: 'Bhutan', value: 716.939},
        {name: 'Botswana', value: 1969.341},
        {name: 'Central African Republic', value: 4349.921},
        {name: 'Canada', value: 34126.24},
        {name: 'Switzerland', value: 7830.534},
        {name: 'Chile', value: 17150.76},
        {name: 'China', value: 1359821.465},
        {name: 'Ivory Coast', value: 60508.978},
        {name: 'Cameroon', value: 20624.343},
        {name: 'Democratic Republic of the Congo', value: 62191.161},
        {name: 'Republic of the Congo', value: 3573.024},
        {name: 'Colombia', value: 46444.798},
        {name: 'Costa Rica', value: 4669.685},
        {name: 'Cuba', value: 11281.768},
        {name: 'Northern Cyprus', value: 1.468},
        {name: 'Cyprus', value: 1103.685},
        {name: 'Czech Republic', value: 10553.701},
        {name: 'Germany', value: 83017.404},
        {name: 'Djibouti', value: 834.036},
        {name: 'Denmark', value: 5550.959},
        {name: 'Dominican Republic', value: 10016.797},
        {name: 'Algeria', value: 37062.82},
        {name: 'Ecuador', value: 15001.072},
        {name: 'Egypt', value: 78075.705},
        {name: 'Eritrea', value: 5741.159},
        {name: 'Spain', value: 46182.038},
        {name: 'Estonia', value: 1298.533},
        {name: 'Ethiopia', value: 87095.281},
        {name: 'Finland', value: 5367.693},
        {name: 'Fiji', value: 860.559},
        {name: 'Falkland Islands', value: 49.581},
        {name: 'France', value: 63230.866},
        {name: 'Gabon', value: 1556.222},
        {name: 'United Kingdom', value: 62066.35},
        {name: 'Georgia', value: 4388.674},
        {name: 'Ghana', value: 24262.901},
        {name: 'Guinea', value: 10876.033},
        {name: 'Gambia', value: 1680.64},
        {name: 'Guinea Bissau', value: 10876.033},
        {name: 'Equatorial Guinea', value: 696.167},
        {name: 'Greece', value: 11109.999},
        {name: 'Greenland', value: 56.546},
        {name: 'Guatemala', value: 14341.576},
        {name: 'French Guiana', value: 231.169},
        {name: 'Guyana', value: 786.126},
        {name: 'Honduras', value: 7621.204},
        {name: 'Croatia', value: 4338.027},
        {name: 'Haiti', value: 9896.4},
        {name: 'Hungary', value: 10014.633},
        {name: 'Indonesia', value: 240676.485},
        {name: 'India', value: 1205624.648},
        {name: 'Ireland', value: 4467.561},
        {name: 'Iran', value: 240676.485},
        {name: 'Iraq', value: 30962.38},
        {name: 'Iceland', value: 318.042},
        {name: 'Israel', value: 7420.368},
        {name: 'Italy', value: 60508.978},
        {name: 'Jamaica', value: 2741.485},
        {name: 'Jordan', value: 6454.554},
        {name: 'Japan', value: 127352.833},
        {name: 'Kazakhstan', value: 15921.127},
        {name: 'Kenya', value: 40909.194},
        {name: 'Kyrgyzstan', value: 5334.223},
        {name: 'Cambodia', value: 14364.931},
        {name: 'South Korea', value: 51452.352},
        {name: 'Kosovo', value: 97.743},
        {name: 'Kuwait', value: 2991.58},
        {name: 'Laos', value: 6395.713},
        {name: 'Lebanon', value: 4341.092},
        {name: 'Liberia', value: 3957.99},
        {name: 'Libya', value: 6040.612},
        {name: 'Sri Lanka', value: 20758.779},
        {name: 'Lesotho', value: 2008.921},
        {name: 'Lithuania', value: 3068.457},
        {name: 'Luxembourg', value: 507.885},
        {name: 'Latvia', value: 2090.519},
        {name: 'Morocco', value: 31642.36},
        {name: 'Moldova', value: 103.619},
        {name: 'Madagascar', value: 21079.532},
        {name: 'Mexico', value: 117886.404},
        {name: 'Macedonia', value: 507.885},
        {name: 'Mali', value: 13985.961},
        {name: 'Myanmar', value: 51931.231},
        {name: 'Montenegro', value: 620.078},
        {name: 'Mongolia', value: 2712.738},
        {name: 'Mozambique', value: 23967.265},
        {name: 'Mauritania', value: 3609.42},
        {name: 'Malawi', value: 15013.694},
        {name: 'Malaysia', value: 28275.835},
        {name: 'Namibia', value: 2178.967},
        {name: 'New Caledonia', value: 246.379},
        {name: 'Niger', value: 15893.746},
        {name: 'Nigeria', value: 159707.78},
        {name: 'Nicaragua', value: 5822.209},
        {name: 'Netherlands', value: 16615.243},
        {name: 'Norway', value: 4891.251},
        {name: 'Nepal', value: 26846.016},
        {name: 'New Zealand', value: 4368.136},
        {name: 'Oman', value: 2802.768},
        {name: 'Pakistan', value: 173149.306},
        {name: 'Panama', value: 3678.128},
        {name: 'Peru', value: 29262.83},
        {name: 'Philippines', value: 93444.322},
        {name: 'Papua New Guinea', value: 6858.945},
        {name: 'Poland', value: 38198.754},
        {name: 'Puerto Rico', value: 3709.671},
        {name: 'North Korea', value: 1.468},
        {name: 'Portugal', value: 10589.792},
        {name: 'Paraguay', value: 6459.721},
        {name: 'Qatar', value: 1749.713},
        {name: 'Romania', value: 21861.476},
        {name: 'Russia', value: 21861.476},
        {name: 'Rwanda', value: 10836.732},
        {name: 'Western Sahara', value: 514.648},
        {name: 'Saudi Arabia', value: 27258.387},
        {name: 'Sudan', value: 35652.002},
        {name: 'South Sudan', value: 9940.929},
        {name: 'Senegal', value: 12950.564},
        {name: 'Solomon Islands', value: 526.447},
        {name: 'Sierra Leone', value: 5751.976},
        {name: 'El Salvador', value: 6218.195},
        {name: 'Somaliland', value: 9636.173},
        {name: 'Somalia', value: 9636.173},
        {name: 'Republic of Serbia', value: 3573.024},
        {name: 'Suriname', value: 524.96},
        {name: 'Slovakia', value: 5433.437},
        {name: 'Slovenia', value: 2054.232},
        {name: 'Sweden', value: 9382.297},
        {name: 'Swaziland', value: 1193.148},
        {name: 'Syria', value: 7830.534},
        {name: 'Chad', value: 11720.781},
        {name: 'Togo', value: 6306.014},
        {name: 'Thailand', value: 66402.316},
        {name: 'Tajikistan', value: 7627.326},
        {name: 'Turkmenistan', value: 5041.995},
        {name: 'East Timor', value: 10016.797},
        {name: 'Trinidad and Tobago', value: 1328.095},
        {name: 'Tunisia', value: 10631.83},
        {name: 'Turkey', value: 72137.546},
        {name: 'United Republic of Tanzania', value: 44973.33},
        {name: 'Uganda', value: 33987.213},
        {name: 'Ukraine', value: 46050.22},
        {name: 'Uruguay', value: 3371.982},
        {name: 'United States of America', value: 312247.116},
        {name: 'Uzbekistan', value: 27769.27},
        {name: 'Venezuela', value: 236.299},
        {name: 'Vietnam', value: 89047.397},
        {name: 'Vanuatu', value: 236.299},
        {name: 'West Bank', value: 13.565},
        {name: 'Yemen', value: 22763.008},
        {name: 'South Africa', value: 51452.352},
        {name: 'Zambia', value: 13216.985},
        {name: 'Zimbabwe', value: 13076.978}
    ]
    worldMap(geoCoordMap,data,worldData);

    //性别比例
    var sexData=[
        {
            name:'男性',
            y:158,
            percent:'79%'
        },
        {
            name:'女性',
            y:42,
            percent:'21%'
        }
    ]
    barEcharts(sexData);

    //首页状态 0:全屏 1：四分之三   2：二分之一
    changeDiv(1)

    //年龄比例
    var ageData=[
        {
            name: '<16',
            data: '19%'
        },
        {
            name: '16-20',
            data: '29%'
        },
        {
            name: '21-25',
            data: '39%'
        },
        {
            name: '26-30',
            data: '49%'
        },
        {
            name: '31-35',
            data: '59%'
        },
        {
            name: '36-40',
            data: '69%'
        },
        {
            name: '41-50',
            data: '79%'
        },
        {
            name: '>50',
            data: '89%'
        },
    ]

    ageBar(ageData)


    //漫出列表
    var listData=[
        {
            continent: '亚洲',
            data: [
                {
                    type:'A',
                    listData:[
                        {
                            countryName: '国家1',
                            data:3698,
                            percent: '94%',
                            rank:1
                        },
                        {
                            countryName: '国家2',
                            data:3698,
                            percent: '44%',
                            rank:21
                        },
                        {
                            countryName: '国家3',
                            data:3698,
                            percent: '34%',
                            rank:31
                        },
                        {
                            countryName: '国家4',
                            data:3698,
                            percent: '24%',
                            rank:41
                        },
                        {
                            countryName: '国家5',
                            data:3698,
                            percent: '54%',
                            rank:51
                        },
                    ]
                },
                {
                    type:'B',
                    listData:[
                        {
                            countryName: '国家1',
                            data:3698,
                            percent: '94%',
                            rank:6
                        },
                        {
                            countryName: '国家2',
                            data:3698,
                            percent: '44%',
                            rank:17
                        }
                    ]
                },
                {
                    type:'C',
                    listData:[
                        {
                            countryName: '国家1',
                            data:3698,
                            percent: '94%',
                            rank:1
                        },
                        {
                            countryName: '国家2',
                            data:3698,
                            percent: '44%',
                            rank:21
                        },
                        {
                            countryName: '国家3',
                            data:3698,
                            percent: '34%',
                            rank:31
                        },
                        {
                            countryName: '国家4',
                            data:3698,
                            percent: '24%',
                            rank:41
                        },
                        {
                            countryName: '国家5',
                            data:3698,
                            percent: '54%',
                            rank:51
                        },
                    ]
                },
                {
                    type:'W',
                    listData:[
                        {
                            countryName: '国家1',
                            data:3698,
                            percent: '94%',
                            rank:6
                        },
                        {
                            countryName: '国家2',
                            data:3698,
                            percent: '44%',
                            rank:17
                        }
                    ]
                },
                {
                    type:'E',
                    listData:[
                        {
                            countryName: '国家1',
                            data:3698,
                            percent: '94%',
                            rank:1
                        },
                        {
                            countryName: '国家2',
                            data:3698,
                            percent: '44%',
                            rank:21
                        },
                        {
                            countryName: '国家3',
                            data:3698,
                            percent: '34%',
                            rank:31
                        },
                        {
                            countryName: '国家4',
                            data:3698,
                            percent: '24%',
                            rank:41
                        },
                        {
                            countryName: '国家5',
                            data:3698,
                            percent: '54%',
                            rank:51
                        },
                    ]
                },
                {
                    type:'R',
                    listData:[
                        {
                            countryName: '国家1',
                            data:3698,
                            percent: '94%',
                            rank:6
                        },
                        {
                            countryName: '国家2',
                            data:3698,
                            percent: '44%',
                            rank:17
                        }
                    ]
                },
                {
                    type:'T',
                    listData:[
                        {
                            countryName: '国家1',
                            data:3698,
                            percent: '94%',
                            rank:1
                        },
                        {
                            countryName: '国家2',
                            data:3698,
                            percent: '44%',
                            rank:21
                        },
                        {
                            countryName: '国家3',
                            data:3698,
                            percent: '34%',
                            rank:31
                        },
                        {
                            countryName: '国家4',
                            data:3698,
                            percent: '24%',
                            rank:41
                        },
                        {
                            countryName: '国家5',
                            data:3698,
                            percent: '54%',
                            rank:51
                        },
                    ]
                },
                {
                    type:'Y',
                    listData:[
                        {
                            countryName: '国家1',
                            data:3698,
                            percent: '94%',
                            rank:6
                        },
                        {
                            countryName: '国家2',
                            data:3698,
                            percent: '44%',
                            rank:17
                        }
                    ]
                },
                {
                    type:'U',
                    listData:[
                        {
                            countryName: '国家1',
                            data:3698,
                            percent: '94%',
                            rank:1
                        },
                        {
                            countryName: '国家2',
                            data:3698,
                            percent: '44%',
                            rank:21
                        },
                        {
                            countryName: '国家3',
                            data:3698,
                            percent: '34%',
                            rank:31
                        },
                        {
                            countryName: '国家4',
                            data:3698,
                            percent: '24%',
                            rank:41
                        },
                        {
                            countryName: '国家5',
                            data:3698,
                            percent: '54%',
                            rank:51
                        },
                    ]
                },
                {
                    type:'I',
                    listData:[
                        {
                            countryName: '国家1',
                            data:3698,
                            percent: '94%',
                            rank:6
                        },
                        {
                            countryName: '国家2',
                            data:3698,
                            percent: '44%',
                            rank:17
                        }
                    ]
                },
            ]
        },
        {
            continent: '欧洲',
            data: [
                {
                    type:'A',
                    listData:[
                        {
                            countryName: '国家1',
                            data:3698,
                            percent: '94%',
                            rank:11
                        },
                        {
                            countryName: '国家2',
                            data:3698,
                            percent: '44%',
                            rank:21
                        },
                        {
                            countryName: '国家3',
                            data:3698,
                            percent: '34%',
                            rank:31
                        },
                        {
                            countryName: '国家4',
                            data:3698,
                            percent: '24%',
                            rank:41
                        },
                        {
                            countryName: '国家5',
                            data:3698,
                            percent: '54%',
                            rank:51
                        },
                    ]
                },
                {
                    type:'B',
                    listData:[
                        {
                            countryName: '国家1',
                            data:3698,
                            percent: '94%',
                            rank:6
                        },
                        {
                            countryName: '国家2',
                            data:3698,
                            percent: '44%',
                            rank:17
                        }
                    ]
                },
                {
                    type:'C',
                    listData:[
                        {
                            countryName: '国家1',
                            data:3698,
                            percent: '94%',
                            rank:1
                        },
                        {
                            countryName: '国家2',
                            data:3698,
                            percent: '44%',
                            rank:21
                        },
                        {
                            countryName: '国家3',
                            data:3698,
                            percent: '34%',
                            rank:31
                        },
                        {
                            countryName: '国家4',
                            data:3698,
                            percent: '24%',
                            rank:41
                        },
                        {
                            countryName: '国家5',
                            data:3698,
                            percent: '54%',
                            rank:51
                        },
                    ]
                },
                {
                    type:'W',
                    listData:[
                        {
                            countryName: '国家1',
                            data:3698,
                            percent: '94%',
                            rank:6
                        },
                        {
                            countryName: '国家2',
                            data:3698,
                            percent: '44%',
                            rank:17
                        }
                    ]
                },
                {
                    type:'E',
                    listData:[
                        {
                            countryName: '国家1',
                            data:3698,
                            percent: '94%',
                            rank:1
                        },
                        {
                            countryName: '国家2',
                            data:3698,
                            percent: '44%',
                            rank:21
                        },
                        {
                            countryName: '国家3',
                            data:3698,
                            percent: '34%',
                            rank:31
                        },
                        {
                            countryName: '国家4',
                            data:3698,
                            percent: '24%',
                            rank:41
                        },
                        {
                            countryName: '国家5',
                            data:3698,
                            percent: '54%',
                            rank:51
                        },
                    ]
                },
                {
                    type:'R',
                    listData:[
                        {
                            countryName: '国家1',
                            data:3698,
                            percent: '94%',
                            rank:2
                        },
                        {
                            countryName: '国家2',
                            data:3698,
                            percent: '44%',
                            rank:17
                        }
                    ]
                },
                {
                    type:'T',
                    listData:[
                        {
                            countryName: '国家1',
                            data:3698,
                            percent: '94%',
                            rank:1
                        },
                        {
                            countryName: '国家2',
                            data:3698,
                            percent: '44%',
                            rank:21
                        },
                        {
                            countryName: '国家3',
                            data:3698,
                            percent: '34%',
                            rank:31
                        },
                        {
                            countryName: '国家4',
                            data:3698,
                            percent: '24%',
                            rank:41
                        },
                        {
                            countryName: '国家5',
                            data:3698,
                            percent: '54%',
                            rank:51
                        },
                    ]
                },
                {
                    type:'Y',
                    listData:[
                        {
                            countryName: '国家1',
                            data:3698,
                            percent: '94%',
                            rank:6
                        },
                        {
                            countryName: '国家2',
                            data:3698,
                            percent: '44%',
                            rank:17
                        }
                    ]
                },
                {
                    type:'U',
                    listData:[
                        {
                            countryName: '国家1',
                            data:3698,
                            percent: '94%',
                            rank:1
                        },
                        {
                            countryName: '国家2',
                            data:3698,
                            percent: '44%',
                            rank:21
                        },
                        {
                            countryName: '国家3',
                            data:3698,
                            percent: '34%',
                            rank:31
                        },
                        {
                            countryName: '国家4',
                            data:3698,
                            percent: '24%',
                            rank:41
                        },
                        {
                            countryName: '国家5',
                            data:3698,
                            percent: '54%',
                            rank:51
                        },
                    ]
                },
                {
                    type:'I',
                    listData:[
                        {
                            countryName: '国家1',
                            data:3698,
                            percent: '94%',
                            rank:6
                        },
                        {
                            countryName: '国家2',
                            data:3698,
                            percent: '44%',
                            rank:17
                        }
                    ]
                },
            ]
        },
        {
            continent: '非洲',
            data: [
                {
                    type:'A',
                    listData:[
                        {
                            countryName: '国家1',
                            data:3698,
                            percent: '94%',
                            rank:11
                        },
                        {
                            countryName: '国家2',
                            data:3698,
                            percent: '44%',
                            rank:21
                        },
                        {
                            countryName: '国家3',
                            data:3698,
                            percent: '34%',
                            rank:31
                        },
                        {
                            countryName: '国家4',
                            data:3698,
                            percent: '24%',
                            rank:41
                        },
                        {
                            countryName: '国家5',
                            data:3698,
                            percent: '54%',
                            rank:51
                        },
                    ]
                },
                {
                    type:'B',
                    listData:[
                        {
                            countryName: '国家1',
                            data:3698,
                            percent: '94%',
                            rank:6
                        },
                        {
                            countryName: '国家2',
                            data:3698,
                            percent: '44%',
                            rank:17
                        }
                    ]
                },
                {
                    type:'C',
                    listData:[
                        {
                            countryName: '国家1',
                            data:3698,
                            percent: '94%',
                            rank:1
                        },
                        {
                            countryName: '国家2',
                            data:3698,
                            percent: '44%',
                            rank:21
                        },
                        {
                            countryName: '国家3',
                            data:3698,
                            percent: '34%',
                            rank:31
                        },
                        {
                            countryName: '国家4',
                            data:3698,
                            percent: '24%',
                            rank:41
                        },
                        {
                            countryName: '国家5',
                            data:3698,
                            percent: '54%',
                            rank:51
                        },
                    ]
                },
                {
                    type:'W',
                    listData:[
                        {
                            countryName: '国家1',
                            data:3698,
                            percent: '94%',
                            rank:6
                        },
                        {
                            countryName: '国家2',
                            data:3698,
                            percent: '44%',
                            rank:17
                        }
                    ]
                },
                {
                    type:'E',
                    listData:[
                        {
                            countryName: '国家1',
                            data:3698,
                            percent: '94%',
                            rank:1
                        },
                        {
                            countryName: '国家2',
                            data:3698,
                            percent: '44%',
                            rank:21
                        },
                        {
                            countryName: '国家3',
                            data:3698,
                            percent: '34%',
                            rank:31
                        },
                        {
                            countryName: '国家4',
                            data:3698,
                            percent: '24%',
                            rank:41
                        },
                        {
                            countryName: '国家5',
                            data:3698,
                            percent: '54%',
                            rank:51
                        },
                    ]
                },
                {
                    type:'R',
                    listData:[
                        {
                            countryName: '国家1',
                            data:3698,
                            percent: '94%',
                            rank:6
                        },
                        {
                            countryName: '国家2',
                            data:3698,
                            percent: '44%',
                            rank:17
                        }
                    ]
                },
                {
                    type:'T',
                    listData:[
                        {
                            countryName: '国家1',
                            data:3698,
                            percent: '94%',
                            rank:1
                        },
                        {
                            countryName: '国家2',
                            data:3698,
                            percent: '44%',
                            rank:21
                        },
                        {
                            countryName: '国家3',
                            data:3698,
                            percent: '34%',
                            rank:31
                        },
                        {
                            countryName: '国家4',
                            data:3698,
                            percent: '24%',
                            rank:41
                        },
                        {
                            countryName: '国家5',
                            data:3698,
                            percent: '54%',
                            rank:51
                        },
                    ]
                },
                {
                    type:'Y',
                    listData:[
                        {
                            countryName: '国家1',
                            data:3698,
                            percent: '94%',
                            rank:6
                        },
                        {
                            countryName: '国家2',
                            data:3698,
                            percent: '44%',
                            rank:17
                        }
                    ]
                },
                {
                    type:'U',
                    listData:[
                        {
                            countryName: '国家1',
                            data:3698,
                            percent: '94%',
                            rank:3
                        },
                        {
                            countryName: '国家2',
                            data:3698,
                            percent: '44%',
                            rank:21
                        },
                        {
                            countryName: '国家3',
                            data:3698,
                            percent: '34%',
                            rank:31
                        },
                        {
                            countryName: '国家4',
                            data:3698,
                            percent: '24%',
                            rank:41
                        },
                        {
                            countryName: '国家5',
                            data:3698,
                            percent: '54%',
                            rank:51
                        },
                    ]
                },
                {
                    type:'I',
                    listData:[
                        {
                            countryName: '国家1',
                            data:3698,
                            percent: '94%',
                            rank:6
                        },
                        {
                            countryName: '国家2',
                            data:3698,
                            percent: '44%',
                            rank:17
                        }
                    ]
                },
            ]
        },
        {
            continent: '大洋洲',
            data: [
                {
                    type:'A',
                    listData:[
                        {
                            countryName: '国家1',
                            data:3698,
                            percent: '94%',
                            rank:1
                        },
                        {
                            countryName: '国家2',
                            data:3698,
                            percent: '44%',
                            rank:21
                        },
                        {
                            countryName: '国家3',
                            data:3698,
                            percent: '34%',
                            rank:31
                        },
                        {
                            countryName: '国家4',
                            data:3698,
                            percent: '24%',
                            rank:41
                        },
                        {
                            countryName: '国家5',
                            data:3698,
                            percent: '54%',
                            rank:51
                        },
                    ]
                },
                {
                    type:'B',
                    listData:[
                        {
                            countryName: '国家1',
                            data:3698,
                            percent: '94%',
                            rank:4
                        },
                        {
                            countryName: '国家2',
                            data:3698,
                            percent: '44%',
                            rank:17
                        }
                    ]
                },
                {
                    type:'C',
                    listData:[
                        {
                            countryName: '国家1',
                            data:3698,
                            percent: '94%',
                            rank:1
                        },
                        {
                            countryName: '国家2',
                            data:3698,
                            percent: '44%',
                            rank:21
                        },
                        {
                            countryName: '国家3',
                            data:3698,
                            percent: '34%',
                            rank:31
                        },
                        {
                            countryName: '国家4',
                            data:3698,
                            percent: '24%',
                            rank:41
                        },
                        {
                            countryName: '国家5',
                            data:3698,
                            percent: '54%',
                            rank:51
                        },
                    ]
                },
                {
                    type:'W',
                    listData:[
                        {
                            countryName: '国家1',
                            data:3698,
                            percent: '94%',
                            rank:6
                        },
                        {
                            countryName: '国家2',
                            data:3698,
                            percent: '44%',
                            rank:17
                        }
                    ]
                },
                {
                    type:'E',
                    listData:[
                        {
                            countryName: '国家1',
                            data:3698,
                            percent: '94%',
                            rank:1
                        },
                        {
                            countryName: '国家2',
                            data:3698,
                            percent: '44%',
                            rank:21
                        },
                        {
                            countryName: '国家3',
                            data:3698,
                            percent: '34%',
                            rank:31
                        },
                        {
                            countryName: '国家4',
                            data:3698,
                            percent: '24%',
                            rank:41
                        },
                        {
                            countryName: '国家5',
                            data:3698,
                            percent: '54%',
                            rank:51
                        },
                    ]
                },
                {
                    type:'R',
                    listData:[
                        {
                            countryName: '国家1',
                            data:3698,
                            percent: '94%',
                            rank:6
                        },
                        {
                            countryName: '国家2',
                            data:3698,
                            percent: '44%',
                            rank:17
                        }
                    ]
                },
                {
                    type:'T',
                    listData:[
                        {
                            countryName: '国家1',
                            data:3698,
                            percent: '94%',
                            rank:1
                        },
                        {
                            countryName: '国家2',
                            data:3698,
                            percent: '44%',
                            rank:21
                        },
                        {
                            countryName: '国家3',
                            data:3698,
                            percent: '34%',
                            rank:31
                        },
                        {
                            countryName: '国家4',
                            data:3698,
                            percent: '24%',
                            rank:41
                        },
                        {
                            countryName: '国家5',
                            data:3698,
                            percent: '54%',
                            rank:51
                        },
                    ]
                },
                {
                    type:'Y',
                    listData:[
                        {
                            countryName: '国家1',
                            data:3698,
                            percent: '94%',
                            rank:6
                        },
                        {
                            countryName: '国家2',
                            data:3698,
                            percent: '44%',
                            rank:17
                        }
                    ]
                },
                {
                    type:'U',
                    listData:[
                        {
                            countryName: '国家1',
                            data:3698,
                            percent: '94%',
                            rank:1
                        },
                        {
                            countryName: '国家2',
                            data:3698,
                            percent: '44%',
                            rank:21
                        },
                        {
                            countryName: '国家3',
                            data:3698,
                            percent: '34%',
                            rank:31
                        },
                        {
                            countryName: '国家4',
                            data:3698,
                            percent: '24%',
                            rank:41
                        },
                        {
                            countryName: '国家5',
                            data:3698,
                            percent: '54%',
                            rank:51
                        },
                    ]
                },
                {
                    type:'I',
                    listData:[
                        {
                            countryName: '国家1',
                            data:3698,
                            percent: '94%',
                            rank:6
                        },
                        {
                            countryName: '国家2',
                            data:3698,
                            percent: '44%',
                            rank:17
                        }
                    ]
                },
            ]
        },
        {
            continent: '南美洲',
            data: [
                {
                    type:'A',
                    listData:[
                        {
                            countryName: '国家1',
                            data:3698,
                            percent: '94%',
                            rank:1
                        },
                        {
                            countryName: '国家2',
                            data:3698,
                            percent: '44%',
                            rank:21
                        },
                        {
                            countryName: '国家3',
                            data:3698,
                            percent: '34%',
                            rank:31
                        },
                        {
                            countryName: '国家4',
                            data:3698,
                            percent: '24%',
                            rank:41
                        },
                        {
                            countryName: '国家5',
                            data:3698,
                            percent: '54%',
                            rank:51
                        },
                    ]
                },
            ]
        },
        {
            continent: '北美洲',
            data: [
                {
                    type:'B',
                    listData:[
                        {
                            countryName: '国家1',
                            data:3698,
                            percent: '94%'
                        },
                        {
                            countryName: '国家2',
                            data:3698,
                            percent: '44%'
                        }
                    ]
                },
                {
                    type:'C',
                    listData:[
                        {
                            countryName: '国家1',
                            data:3698,
                            percent: '94%'
                        },
                        {
                            countryName: '国家2',
                            data:3698,
                            percent: '44%'
                        },
                        {
                            countryName: '国家3',
                            data:3698,
                            percent: '34%'
                        },
                        {
                            countryName: '国家4',
                            data:3698,
                            percent: '24%'
                        },
                        {
                            countryName: '国家5',
                            data:3698,
                            percent: '54%'
                        },
                    ]
                },
                {
                    type:'F',
                    listData:[
                        {
                            countryName: '国家1',
                            data:3698,
                            percent: '94%'
                        },
                        {
                            countryName: '国家2',
                            data:3698,
                            percent: '44%'
                        },
                        {
                            countryName: '国家3',
                            data:3698,
                            percent: '34%'
                        },
                        {
                            countryName: '国家4',
                            data:3698,
                            percent: '24%'
                        },
                        {
                            countryName: '国家5',
                            data:3698,
                            percent: '54%'
                        },
                    ]
                },
                {
                    type:'G',
                    listData:[
                        {
                            countryName: '国家1',
                            data:3698,
                            percent: '94%'
                        },
                        {
                            countryName: '国家2',
                            data:3698,
                            percent: '44%'
                        },
                        {
                            countryName: '国家3',
                            data:3698,
                            percent: '34%'
                        },
                        {
                            countryName: '国家4',
                            data:3698,
                            percent: '24%'
                        },
                        {
                            countryName: '国家5',
                            data:3698,
                            percent: '54%'
                        },
                    ]
                },
                {
                    type:'Q',
                    listData:[
                        {
                            countryName: '国家1',
                            data:3698,
                            percent: '94%'
                        },
                        {
                            countryName: '国家2',
                            data:3698,
                            percent: '44%'
                        },
                        {
                            countryName: '国家3',
                            data:3698,
                            percent: '34%'
                        },
                        {
                            countryName: '国家4',
                            data:3698,
                            percent: '24%'
                        },
                        {
                            countryName: '国家5',
                            data:3698,
                            percent: '54%'
                        },
                    ]
                },
                {
                    type:'Q',
                    listData:[
                        {
                            countryName: '国家1',
                            data:3698,
                            percent: '94%'
                        },
                        {
                            countryName: '国家2',
                            data:3698,
                            percent: '44%'
                        },
                        {
                            countryName: '国家3',
                            data:3698,
                            percent: '34%'
                        },
                        {
                            countryName: '国家4',
                            data:3698,
                            percent: '24%'
                        },
                        {
                            countryName: '国家5',
                            data:3698,
                            percent: '54%'
                        },
                    ]
                },
                {
                    type:'W',
                    listData:[
                        {
                            countryName: '国家1',
                            data:3698,
                            percent: '94%'
                        },
                        {
                            countryName: '国家2',
                            data:3698,
                            percent: '44%'
                        },
                        {
                            countryName: '国家3',
                            data:3698,
                            percent: '34%'
                        },
                        {
                            countryName: '国家4',
                            data:3698,
                            percent: '24%'
                        },
                        {
                            countryName: '国家5',
                            data:3698,
                            percent: '54%'
                        },
                    ]
                },
                {
                    type:'Y',
                    listData:[
                        {
                            countryName: '国家1',
                            data:3698,
                            percent: '94%'
                        },
                        {
                            countryName: '国家2',
                            data:3698,
                            percent: '44%'
                        },
                        {
                            countryName: '国家3',
                            data:3698,
                            percent: '34%'
                        },
                        {
                            countryName: '国家4',
                            data:3698,
                            percent: '24%'
                        },
                        {
                            countryName: '国家5',
                            data:3698,
                            percent: '54%'
                        },
                    ]
                },
                {
                    type:'Z',
                    listData:[
                        {
                            countryName: '国家1',
                            data:3698,
                            percent: '94%'
                        },
                        {
                            countryName: '国家2',
                            data:3698,
                            percent: '44%'
                        },
                        {
                            countryName: '国家3',
                            data:3698,
                            percent: '34%'
                        },
                        {
                            countryName: '国家4',
                            data:3698,
                            percent: '24%'
                        },
                        {
                            countryName: '国家5',
                            data:3698,
                            percent: '54%'
                        },
                    ]
                },
            ]
        },
    ]

    countryList=listData;
    worldList(0);


    $('#listContent').niceScroll('#listContentContent',{
        cursorcolor: "#41557B",//#CC0071 光标颜色
        cursoropacitymax: 1, //改变不透明度非常光标处于活动状态（scrollabar“可见”状态），范围从1到0
        touchbehavior: false, //使光标拖动滚动像在台式电脑触摸设备
        cursorwidth: "5px", //像素光标的宽度
        cursorborder: "0", // 游标边框css定义
        cursorborderradius: "5px",//以像素为光标边界半径
        autohidemode: false, //是否隐藏滚动条
        background: '#132F5F',
        boxzoom:false,
    });

})

function worldList(type) {
    $('td').removeClass('plate-div-active');
    var datas=$('#continentData td')[type];
    $(datas).addClass('plate-div-active');
    var countryData;
    for (var i=0;i<countryList.length;i++){
        if(type==0){
            if(countryList[i].continent=='亚洲'){
                countryData=countryList[i].data
            }
        }else if(type==1){
            if(countryList[i].continent=='欧洲'){
                countryData=countryList[i].data
            }
        }else if(type==2){
            if(countryList[i].continent=='非洲'){
                countryData=countryList[i].data
            }
        }else if(type==3){
            if(countryList[i].continent=='大洋洲'){
                countryData=countryList[i].data
            }
        }else if(type==4){
            if(countryList[i].continent=='南美洲'){
                countryData=countryList[i].data
            }
        }else if(type==5){
            if(countryList[i].continent=='北美洲'){
                countryData=countryList[i].data
            }
        }
    }
    var html=''
    for(var i=0;i<countryData.length;i++){
        html+='<div class="list-content-div">'
        html+='<div class="list-content-div1" id="content' + countryData[i].type + '">'
        html+='<div class="list-content-div1-content">' + countryData[i].type + '</div>'
        html+='</div>'
        html+='<div class="list-content-div2"> '

        var contentData=countryData[i].listData;
        for(var j=0;j<contentData.length;j++){
            html+='<div class="content-div2-title">';
            html+=contentData[j].countryName+'<br>';
            html+='<div class="content-div2-bar">';
            if(contentData[j].rank<6){
                html+='<div class="content-div2-bar-color-top"'
            }else {
                html+='<div class="content-div2-bar-color"'
            }
            html+='style="width: '+contentData[j].percent+'"></div>';
            html+='</div>';
            html+=contentData[j].data;
            html+='</div>';
        }

        html+='</div>'
        html+='</div>'
    }

    $('#listContentContent').html(html);
    $('#listContent').scrollTop(0);
    $("#listContent").getNiceScroll().resize();
}

function ageBar(datas) {
    var html='';
    for(var i=0;i<datas.length;i++){
        html+='<tr>'
        html+='<td class="table-td1">'+ datas[i].name +'</td>'
        html+='<td class="table-td2">'
        html+='<div class="table-td2-bar">'
        html+='<div class="td2-bar-content" style="width: ' + datas[i].data + '"></div>'
        html+='</div>'
        html+='</td>'
        html+='<td class="table-td3">' + datas[i].data + '</td>'
        html+='</tr>'
    }

    $('#ageData').html(html)
}

function tempAZ(temp) {
    var name=$(temp).html();
    $("#listContent").scrollTop($("#content"+name).position().top)

    /*//获取城市模块到顶部的距离
    var city_top = $("#content"+name).offset().top;
    $('html,body').animate({scrollTop:city_top},500);*/
}

function AZClick() {
    var type = $('.countryOverflow-list-AZ-content').css('display');
    if (type=='none'){
        $('.countryOverflow-list-AZ-content').css('display','block');
        $('.countryOverflow-list-AZ').css('background','url("../image/AZ1.png") no-repeat');
        $('.countryOverflow-list-AZ').css('background-size','100% 100%');
    }else {
        $('.countryOverflow-list-AZ-content').css('display','none');
        $('.countryOverflow-list-AZ').css('background','url("../image/AZ0.png") no-repeat');
        $('.countryOverflow-list-AZ').css('background-size','100% 100%');
    }
}

function barEcharts(datas) {
    var chart = Highcharts.chart('barEcharts1', {
        chart: {
            backgroundColor: 'rgba(0,0,0,0)',
            type: 'pie',
            options3d: {
                enabled: true,
                alpha: 60,
                beta: 0
            }
        },
        colors: ['rgba(180,23,80,0.7)','rgba(23,142,185,0.7)'],
        title: {
            text: null
        },
        tooltip: {
            show:false
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                depth: 20,
                dataLabels: {
                    enabled: false,
                    format: '{point.name}',
                    backgroundColor:'rgba(0,0,0,0)',
                    borderColor:'#333333',
                    borderRadius:4,
                    borderWidth: 2,
                    fontSize:50
                }
            }
        },
        series: [{
            type: 'pie',
            name: '人数',
            size:'200%',
            data: datas
        }],
        credits: {
            enabled: false     //不显示LOGO
        }
    });

    for(var i=0;i<datas.length;i++){
        if(datas[i].name=="男性"){
            $('#manData').html(datas[i].percent)
        }else if(datas[i].name=="女性"){
            $('#womanData').html(datas[i].percent)
        }
    }
}

function barEcharts2() {
    var chart = Highcharts.chart('barEcharts2', {
        chart: {
            backgroundColor: 'rgba(0,0,0,0)',
            type: 'pie',
            options3d: {
                enabled: true,
                alpha: 60,
                beta: 0
            }
        },
        colors: ['rgba(183,173,77,0.6)','rgba(18,155,116,0.6)','rgba(180,23,80,0.6)','rgba(23,142,185,0.6)'],
        title: {
            text: null
        },
        tooltip: {
            show:false
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                depth: 20,
                dataLabels: {
                    enabled: false,
                    format: '{point.name}',
                    backgroundColor:'rgba(0,0,0,0)',
                    borderColor:'#333333',
                    borderRadius:4,
                    borderWidth: 2,
                    fontSize:50
                }
            }
        },
        series: [{
            type: 'pie',
            name: '年龄占比',
            size:'200%',
            data: [
                {
                    name:'0-20',
                    y: 26.8,
                },
                {
                    name: '20-40',
                    y: 12.8,
                },
                {
                    name:'40-60',
                    y: 26.8,
                },
                {
                    name: '>60',
                    y: 12.8,
                }
            ]
        }],
        credits: {
            enabled: false     //不显示LOGO
        }
    });
}

function worldMap(geoCoordMap,data,worldData) {

    var myChart = echarts.init(document.getElementById('wordMap'));


    var china=[
        /*{
            name: '中国',
            datas: 256
        }*/
    ]

    for (var i=0;i<data.length;i++){
        if (data[i].name=="中国"){
            china[0]=data[i]
        }
    }



/*

    myChart.setOption({
        series: [{
            type: 'map',
            map: 'world'
        }]
    });
*/



    var convertData = function(data) {
        var res = [];

        for (var i = 0; i < data.length; i++) {
            var geoCoord = geoCoordMap[data[i].name];

            if (geoCoord) {
                res.push({
                    name: data[i].name,
                    value: geoCoord.concat(data[i].value),
                    datas:data[i].datas
                });
            }
        }
        return res;
    };

    var option = {
        textStyle: {
            color: '#fff'
        },
        tooltip: {
            trigger: 'item',
            formatter: function (params) {
                return '<div style="min-width: 100px;font-weight: bold">'+'<span style="color:#2EE3FD;">'+params.name+
                    '</span><br>'+params.data.datas;
            },
        },
        visualMap: {
            type: 'piecewise', //分段型。
            splitNumber: 5,
            inverse: true,
            // color:['rgba(38,115,154,0.6)','rgba(29,192,232,0.6)','rgba(40,111,226,0.6)','rgba(137,17,215,0.6)','rgba(250,0,152,0.6)'],
            pieces: [{
             min: 0,
             max: 5000,
             color: 'rgba(250,0,152,0.6)'
             }, {
             min: 5000,
             max: 10000,
             color: 'rgba(137,17,215,0.6)'
             }, {
             min: 10000,
             max: 50000,
             color: 'rgba(40,111,226,0.6)'
             }, {
             min: 50000,
             max: 100000,
             color: 'rgba(29,192,232,0.6)'
             }, {
             min: 100000,
             // max: 30000,
             color: 'rgba(38,115,154,0.6)'
             }],
            left: 20,
            bottom: 20,
            itemWidth: 10,
            itemHeight: 10,
            textStyle: {
                color: '#fff'
            },
            /*min: 0,
            max: 40000,*/
            //text:['High','Low'],
            //realtime: true,
            //calculable: true,
            //color: ['red','orange','lightgreen']
        },


        geo: {
            map: 'world',
            label: {
                normal: {

                    show: false,
                    color: '#c1c4c8'
                },
                emphasis: {
                    show: false,
                    color: '#292929'
                }
            },
            roam: true,
            itemStyle: {
                normal: {


                },
                emphasis: {
                    areaColor: '#8B1BDF'
                }
            }
        },
        series: [{
            name: '漫出细分',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            data: convertData(data),
            symbolSize: 10,
            showEffectOn: 'render',
            rippleEffect: {
                brushType: 'stroke'
            },
            hoverAnimation: true,
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: true
                },
                emphasis: {
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    color: '#29E5FC',
                    shadowBlur: 10,
                    shadowColor: '#333'
                }
            }
        },{
            name: '漫出细分',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            tooltip : {
                trigger: 'item',
            },
            data: convertData(china),
            symbolSize: 10,
            showEffectOn: 'render',
            rippleEffect: {
                brushType: 'stroke'
            },
            hoverAnimation: true,
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: false
                },
                emphasis: {
                    show: false
                }
            },
            itemStyle: {
                normal: {
                    color: '#FF782B',
                    shadowBlur: 10,
                    shadowColor: '#333'
                }
            }
        }, {
            name:'',
            type: 'map',
            mapType: 'world',
            tooltip : {
                trigger: 'item',
                formatter: function (params) {
                    return '<div style="width: 150px">'+'<span style="color:#6AC9EB;">'+params.name+
                        '</span><br>'+params.value;
                },
            },
            geoIndex: 0,
            label: {
                normal: {
                    show: true
                },
                emphasis: {
                    show: true
                }
            },
            data: worldData
        }]
    };


    myChart.setOption(option,true);

        myChart.on("click", function(param) {
            var selectedProvince = param.name;
            if(selectedProvince=="China"){
                var urls = decodeURI(window.location.href);
                var argsIndex = urls .split("diffuse/html");
                var arg = argsIndex[0];
                var url = arg+"diffuse/html/provinceOverflow.html";//此处拼接内容
                window.location.href = url;
            }
        })


    var count = 0;
    var timeTicket = null;
    var dataLength = option.series[0].data.length;
    timeTicket && clearInterval(timeTicket);
    timeTicket = setInterval(function() {
        myChart.dispatchAction({
            type: 'downplay',
            seriesIndex: 0,
        });
        myChart.dispatchAction({
            type: 'highlight',
            seriesIndex: 0,
            dataIndex: (count) % dataLength
        });
        myChart.dispatchAction({
            type: 'showTip',
            seriesIndex: 0,
            dataIndex: (count) % dataLength
        });
        count++;
    }, 3000);

    myChart.on('mouseover', function(params) {
        clearInterval(timeTicket);
        myChart.dispatchAction({
            type: 'downplay',
            seriesIndex: 0
        });
        myChart.dispatchAction({
            type: 'highlight',
            seriesIndex: 0,
            dataIndex: params.dataIndex
        });
        myChart.dispatchAction({
            type: 'showTip',
            seriesIndex: 0,
            dataIndex: params.dataIndex,
        });
    });
    myChart.on('mouseout', function(params) {
        timeTicket && clearInterval(timeTicket);
        timeTicket = setInterval(function() {
            myChart.dispatchAction({
                type: 'downplay',
                seriesIndex: 0,
            });
            myChart.dispatchAction({
                type: 'highlight',
                seriesIndex: 0,
                dataIndex: (count) % dataLength
            });
            myChart.dispatchAction({
                type: 'showTip',
                seriesIndex: 0,
                dataIndex: (count) % dataLength
            });
            count++;
        }, 3000);
    });

    /*window.addEventListener("resize", function () {
        myChart.resize();
    });*/

    $("#wordMap").resize(function(){
        myChart.resize();
    })


    /*$.getJSON('./js/world.json', function (data) {
     echarts.registerMap('world', data);

     var myChart = echarts.init(document.getElementById('wordMap'));
     myChart.setOption(option);

     $(window).resize(function() {
     myChart.resize();
     });
     });*/
}

function changeDiv(type) {
    if(type==1){
        $('.countryOverflow-map').css('width','72%');
        $('.countryOverflow-list').css('left','75%');
        $('.countryOverflow-mapEchart').css('display','none');
        $('.countryOverflow-mapDiv-country').css({'width':'100%','left':'0'});
        $('.countryOverflow-button-left').attr('onClick','changeDiv(2)');
        $('.countryOverflow-button-right').attr('onClick','changeDiv(0)');
        $('.list-Dang').css('display','block')

        $('.countryOverflow-button-left').css('background','url("../image/buttonLeft.png") no-repeat');
        $('.countryOverflow-button-left').css('background-size','100% 100%');
        $('.countryOverflow-button-right').css('background','url("../image/buttonRight.png") no-repeat');
        $('.countryOverflow-button-right').css('background-size','100% 100%');
    }else if(type==0){
        $('.countryOverflow-map').css('width','94.5%');
        $('.countryOverflow-list').css('left','100%');
        $('.countryOverflow-mapEchart').css('display','block');
        $('.countryOverflow-mapDiv-country').css({'width':'86%','left':'14%'});
        $('.countryOverflow-button-left').attr('onClick','changeDiv(1)');
        $('.countryOverflow-button-right').removeAttr('onClick');
        $('.list-Dang').css('display','none')

        $('.countryOverflow-button-left').css('background','url("../image/buttonLeft.png") no-repeat');
        $('.countryOverflow-button-left').css('background-size','100% 100%');
        $('.countryOverflow-button-right').css('background','url("../image/buttonRight0.png") no-repeat');
        $('.countryOverflow-button-right').css('background-size','100% 100%');

    }else if(type==2){
        $('.countryOverflow-map').css('width','47%');
        $('.countryOverflow-list').css('left','50%');
        $('.countryOverflow-mapEchart').css('display','none');
        $('.countryOverflow-mapDiv-country').css({'width':'100%','left':'0'});
        $('.countryOverflow-button-left').removeAttr('onClick');
        $('.countryOverflow-button-right').attr('onClick','changeDiv(1)');
        $('.list-Dang').css('display','none')

        $('.countryOverflow-button-left').css('background','url("../image/buttonLeft0.png") no-repeat');
        $('.countryOverflow-button-left').css('background-size','100% 100%');
        $('.countryOverflow-button-right').css('background','url("../image/buttonRight.png") no-repeat');
        $('.countryOverflow-button-right').css('background-size','100% 100%');
    }
}

(function($,h,c){var a=$([]),e=$.resize=$.extend($.resize,{}),i,k="setTimeout",j="resize",d=j+"-special-event",b="delay",f="throttleWindow";e[b]=250;e[f]=true;$.event.special[j]={setup:function(){if(!e[f]&&this[k]){return false}var l=$(this);a=a.add(l);$.data(this,d,{w:l.width(),h:l.height()});if(a.length===1){g()}},teardown:function(){if(!e[f]&&this[k]){return false}var l=$(this);a=a.not(l);l.removeData(d);if(!a.length){clearTimeout(i)}},add:function(l){if(!e[f]&&this[k]){return false}var n;function m(s,o,p){var q=$(this),r=$.data(this,d);r.w=o!==c?o:q.width();r.h=p!==c?p:q.height();n.apply(this,arguments)}if($.isFunction(l)){n=l;return m}else{n=l.handler;l.handler=m}}};function g(){i=h[k](function(){a.each(function(){var n=$(this),m=n.width(),l=n.height(),o=$.data(this,d);if(m!==o.w||l!==o.h){n.trigger(j,[o.w=m,o.h=l])}});g()},e[b])}})(jQuery,this);