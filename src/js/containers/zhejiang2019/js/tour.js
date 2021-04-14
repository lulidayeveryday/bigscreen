$(function () {
    //地图
    var mapData=[
        {point:[120.1492582719,30.2354914501],title:'南湖风景名胜区',rank:3,flow:25365,id:0,img:'gm'},
        {point:[120.4674208409,30.7609350590],title:'中公一大纪念船',rank:4,flow:25365,id:1,img:'gz'},
        {point:[120.7676906437,30.7530190550],title:'南湖革命纪念馆',rank:2,flow:25365,id:2,img:'zt'}
    ]
    var central=[120.7674208409,30.7609350590];
    mapPoint(mapData,central);
})

function mapPoint(mapData,central) {
    var map=mapBase(central);
    //连线
    var city_line = [{
        "name": "北京市-西藏自治区",
        "line": ["120.1492582719,30.2354914501", "120.4674208409,30.7609350590"]
    }, {
        "name": "北京市-陕西省",
        "line": ["120.4674208409,30.7609350590", "120.7676906437,30.7530190550"]
    }]
    var layer = new Loca.LinkLayer({
        map: map,
        fitView: true,
    });

    layer.setData(city_line, {
        lnglat: 'line',
    });

    layer.setOptions({
        style: {
            // 曲率 [-1, 1] 区间
            curveness: 0.1,
            // 弧度
            /*curveness: {
             key: "distance",
             scale: 'linear',
             clamp: true,
             // 弧度范围
             value: [0, 5]
             },*/
            opacity: 0.8,
            color: '#FA7B00',
        }
    });

    layer.render();


    var marker = [];

    var infoWindow = new AMap.InfoWindow({offset: new AMap.Pixel(0, -30)});
    for (var i = 0; i < mapData.length; i++) {
        marker[i] = new AMap.Marker({
            /*icon: "../img/tour/" + mapData[i].img + ".png",*/
            icon: new AMap.Icon({
                image: "../img/tour/" + mapData[i].img + ".png",
                size: new AMap.Size(26, 35),  //图标大小
                imageSize: new AMap.Size(26, 35)
            }),
            position: mapData[i].point,
            offset: new AMap.Pixel(-13, -30),
            extData: {
                id: i + 1
            }
        });
        marker[i].setMap(map);
        var star = ''
        for (var aa = 0; aa < 5; aa++) {
            if (aa < mapData[i].rank) {
                star += '★'
            } else {
                star += '☆'
            }
        }

        var lableDiv = "<span style='color: white;font-size: 1.1rem'>" + mapData[i].title + "</span><br/><table><tbody><tr style='color: #A8D1D9;font-size: 0.8rem;'><td style='padding-right: 2rem;'>景区等级</td><td style='padding-right: 2rem;'>实时客流</td></tr><tr><td style='color:#FA7B00;font-size: 1.2rem;'>" + mapData[i].rank + "A</td><td style='color:#00FFBA;font-size: 1.2rem;'>" + mapData[i].flow + "</td></tr></tbody></table>";
        marker[i].content = lableDiv;
        marker[i].on('click', markerClick);
        marker[i].emit('click', {target: marker[i]});

    }

    function markerClick(e) {
        infoWindow.setContent(e.target.content);
        infoWindow.open(map, e.target.getPosition());
    }
}
