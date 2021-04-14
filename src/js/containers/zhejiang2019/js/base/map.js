$(function () {

})

function mapBase(central) {

    // 构造官方卫星、路网图层
    var satelliteLayer = new AMap.TileLayer.Satellite();
    var roadNetLayer =  new AMap.TileLayer.RoadNet();
    var map = new AMap.Map('container', {
        center: central,
        layers: [//使用多个图层
            satelliteLayer,
            roadNetLayer
        ],
        mapStyle:'4be187b7e467ad2d359219944d2aca75', //设置地图的显示样式
        zooms: [4,18],//设置地图级别范围
        zoom: 9,
        pitch:55, // 地图俯仰角度，有效范围 0 度- 83 度
        viewMode:'3D' // 地图模式
    });

    //批量添加图层
    map.add([satelliteLayer, roadNetLayer]);
    map.remove(roadNetLayer);

    return map;

}