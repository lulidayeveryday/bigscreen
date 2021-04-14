//页面自适应
//$("body").css({"transform":"scale("+$(window).width()/1920+","+$(window).height()/1080+")"});
// 游客轨迹地图
var map = new BMap.Map("map"); // 创建Map实例
map.centerAndZoom(new BMap.Point(120.161744, 30.279918), 12); // 初始化地图,设置中心点坐标和地图级别
map.setMapStyle({
    styleJson: [{
        "featureType": "land",
        "elementType": "geometry",
        "stylers": {
            "color": "#152d3eff",
            "visibility": "on"
        }
    }, {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": {
            "color": "#9ab7cdff",
            "visibility": "on"
        }
    }, {
        "featureType": "building",
        "elementType": "geometry.fill",
        "stylers": {
            "color": "#0e171dff",
            "visibility": "on"
        }
    }, {
        "featureType": "building",
        "elementType": "geometry.stroke",
        "stylers": {
            "color": "#000504ff",
            "visibility": "on"
        }
    }, {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": {
            "color": "#071b2aff",
            "visibility": "on"
        }
    }, {
        "featureType": "village",
        "elementType": "labels",
        "stylers": {
            "visibility": "on"
        }
    }, {
        "featureType": "town",
        "elementType": "labels",
        "stylers": {
            "visibility": "off"
        }
    }, {
        "featureType": "district",
        "elementType": "labels",
        "stylers": {
            "visibility": "on"
        }
    }, {
        "featureType": "country",
        "elementType": "labels.text.fill",
        "stylers": {
            "color": "#9ab7cdff",
            "visibility": "on"
        }
    }, {
        "featureType": "city",
        "elementType": "labels.text.fill",
        "stylers": {
            "color": "#9ab7cdff",
            "visibility": "on"
        }
    }, {
        "featureType": "continent",
        "elementType": "labels.text.fill",
        "stylers": {
            "color": "#9ab7cdff",
            "visibility": "on"
        }
    }, {
        "featureType": "poilabel",
        "elementType": "labels",
        "stylers": {
            "visibility": "off"
        }
    }, {
        "featureType": "poilabel",
        "elementType": "labels.icon",
        "stylers": {
            "visibility": "off"
        }
    }, {
        "featureType": "scenicspotslabel",
        "elementType": "labels.icon",
        "stylers": {
            "visibility": "off"
        }
    }, {
        "featureType": "scenicspotslabel",
        "elementType": "labels.text.fill",
        "stylers": {
            "color": "#0a141cff",
            "visibility": "on"
        }
    }, {
        "featureType": "transportationlabel",
        "elementType": "labels.text.fill",
        "stylers": {
            "color": "#0a141cff",
            "visibility": "on"
        }
    }, {
        "featureType": "transportationlabel",
        "elementType": "labels.icon",
        "stylers": {
            "visibility": "off"
        }
    }, {
        "featureType": "airportlabel",
        "elementType": "labels.text.fill",
        "stylers": {
            "color": "#9ab7cdff",
            "visibility": "on"
        }
    }, {
        "featureType": "airportlabel",
        "elementType": "labels.icon",
        "stylers": {
            "visibility": "on"
        }
    }, {
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": {
            "color": "#0a141cff",
            "visibility": "on"
        }
    }, {
        "featureType": "road",
        "elementType": "geometry.stroke",
        "stylers": {
            "color": "#000000ff",
            "visibility": "on"
        }
    }, {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": {
            "weight": 3
        }
    }, {
        "featureType": "green",
        "elementType": "geometry",
        "stylers": {
            "color": "#193645ff",
            "visibility": "on"
        }
    }, {
        "featureType": "scenicspots",
        "elementType": "geometry",
        "stylers": {
            "color": "#19232cff",
            "visibility": "off"
        }
    }, {
        "featureType": "scenicspots",
        "elementType": "labels.text.fill",
        "stylers": {
            "color": "#0a141cff",
            "visibility": "on"
        }
    }, {
        "featureType": "scenicspots",
        "elementType": "labels.text.stroke",
        "stylers": {
            "weight": 1,
            "color": "#ffffffff",
            "visibility": "on"
        }
    }, {
        "featureType": "continent",
        "elementType": "labels.text.stroke",
        "stylers": {
            "color": "#071b2aff",
            "visibility": "on",
            "weight": 1
        }
    }, {
        "featureType": "country",
        "elementType": "labels.text.stroke",
        "stylers": {
            "color": "#071b2aff",
            "visibility": "on",
            "weight": 1
        }
    }, {
        "featureType": "city",
        "elementType": "labels.text.stroke",
        "stylers": {
            "color": "#071b2aff",
            "visibility": "on",
            "weight": 1
        }
    }, {
        "featureType": "city",
        "elementType": "labels.icon",
        "stylers": {
            "visibility": "off"
        }
    }, {
        "featureType": "scenicspotslabel",
        "elementType": "labels.text.stroke",
        "stylers": {
            "color": "#ffffffff",
            "visibility": "on",
            "weight": 1
        }
    }, {
        "featureType": "airportlabel",
        "elementType": "labels.text.stroke",
        "stylers": {
            "color": "#071b2aff",
            "visibility": "on",
            "weight": 1
        }
    }, {
        "featureType": "transportationlabel",
        "elementType": "labels.text.stroke",
        "stylers": {
            "color": "#ffffffff",
            "visibility": "on",
            "weight": 1
        }
    }, {
        "featureType": "railway",
        "elementType": "geometry",
        "stylers": {
            "visibility": "off"
        }
    }, {
        "featureType": "subway",
        "elementType": "geometry",
        "stylers": {
            "visibility": "off"
        }
    }, {
        "featureType": "highwaysign",
        "elementType": "labels",
        "stylers": {
            "visibility": "off"
        }
    }, {
        "featureType": "nationalwaysign",
        "elementType": "labels",
        "stylers": {
            "visibility": "off"
        }
    }, {
        "featureType": "nationalwaysign",
        "elementType": "labels.icon",
        "stylers": {
            "visibility": "off"
        }
    }, {
        "featureType": "provincialwaysign",
        "elementType": "labels",
        "stylers": {
            "visibility": "off"
        }
    }, {
        "featureType": "provincialwaysign",
        "elementType": "labels.icon",
        "stylers": {
            "visibility": "off"
        }
    }, {
        "featureType": "tertiarywaysign",
        "elementType": "labels",
        "stylers": {
            "visibility": "off"
        }
    }, {
        "featureType": "tertiarywaysign",
        "elementType": "labels.icon",
        "stylers": {
            "visibility": "off"
        }
    }, {
        "featureType": "subwaylabel",
        "elementType": "labels",
        "stylers": {
            "visibility": "off"
        }
    }, {
        "featureType": "subwaylabel",
        "elementType": "labels.icon",
        "stylers": {
            "visibility": "off"
        }
    }, {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": {
            "color": "#9ab7cdff",
            "visibility": "on",
            "weight": 90
        }
    }, {
        "featureType": "road",
        "elementType": "labels.text.stroke",
        "stylers": {
            "color": "#071b2aff",
            "visibility": "on",
            "weight": 1
        }
    }, {
        "featureType": "shopping",
        "elementType": "geometry",
        "stylers": {
            "visibility": "off"
        }
    }, {
        "featureType": "scenicspots",
        "elementType": "labels",
        "stylers": {
            "visibility": "off"
        }
    }, {
        "featureType": "scenicspotslabel",
        "elementType": "labels",
        "stylers": {
            "visibility": "off"
        }
    }, {
        "featureType": "manmade",
        "elementType": "geometry",
        "stylers": {
            "visibility": "off"
        }
    }, {
        "featureType": "manmade",
        "elementType": "labels",
        "stylers": {
            "visibility": "off"
        }
    }, {
        "featureType": "highwaysign",
        "elementType": "labels.icon",
        "stylers": {
            "visibility": "off"
        }
    }, {
        "featureType": "water",
        "elementType": "labels.text.stroke",
        "stylers": {
            "color": "#071b2a00",
            "visibility": "on"
        }
    }, {
        "featureType": "road",
        "stylers": {
            "curZoomRegionId": "0",
            "curZoomRegion": "6,9",
            "level": "6"
        }
    }, {
        "featureType": "road",
        "stylers": {
            "curZoomRegionId": "0",
            "curZoomRegion": "6,9",
            "level": "7"
        }
    }, {
        "featureType": "road",
        "stylers": {
            "curZoomRegionId": "0",
            "curZoomRegion": "6,9",
            "level": "8"
        }
    }, {
        "featureType": "road",
        "stylers": {
            "curZoomRegionId": "0",
            "curZoomRegion": "6,9",
            "level": "9"
        }
    }, {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": {
            "visibility": "off",
            "curZoomRegionId": "0",
            "curZoomRegion": "6,9",
            "level": "6"
        }
    }, {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": {
            "visibility": "off",
            "curZoomRegionId": "0",
            "curZoomRegion": "6,9",
            "level": "7"
        }
    }, {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": {
            "visibility": "off",
            "curZoomRegionId": "0",
            "curZoomRegion": "6,9",
            "level": "8"
        }
    }, {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": {
            "visibility": "off",
            "curZoomRegionId": "0",
            "curZoomRegion": "6,9",
            "level": "9"
        }
    }, {
        "featureType": "road",
        "elementType": "labels",
        "stylers": {
            "visibility": "off",
            "curZoomRegionId": "0",
            "curZoomRegion": "6,9",
            "level": "6"
        }
    }, {
        "featureType": "road",
        "elementType": "labels",
        "stylers": {
            "visibility": "off",
            "curZoomRegionId": "0",
            "curZoomRegion": "6,9",
            "level": "7"
        }
    }, {
        "featureType": "road",
        "elementType": "labels",
        "stylers": {
            "visibility": "off",
            "curZoomRegionId": "0",
            "curZoomRegion": "6,9",
            "level": "8"
        }
    }, {
        "featureType": "road",
        "elementType": "labels",
        "stylers": {
            "visibility": "off",
            "curZoomRegionId": "0",
            "curZoomRegion": "6,9",
            "level": "9"
        }
    }, {
        "featureType": "road",
        "elementType": "labels.text",
        "stylers": {
            "fontsize": 24
        }
    }, {
        "featureType": "highway",
        "elementType": "labels.text.stroke",
        "stylers": {
            "color": "#071b2aff",
            "visibility": "on",
            "weight": 1
        }
    }, {
        "featureType": "highway",
        "elementType": "geometry.fill",
        "stylers": {
            "color": "#0a141cff",
            "visibility": "on"
        }
    }, {
        "featureType": "highway",
        "elementType": "geometry.stroke",
        "stylers": {
            "color": "#1c4f7eff"
        }
    }, {
        "featureType": "highway",
        "elementType": "labels.text.fill",
        "stylers": {
            "color": "#9ab7cdff",
            "visibility": "on"
        }
    }, {
        "featureType": "highway",
        "elementType": "geometry",
        "stylers": {
            "weight": 3
        }
    }, {
        "featureType": "nationalway",
        "elementType": "geometry.fill",
        "stylers": {
            "color": "#0a141cff",
            "visibility": "on"
        }
    }, {
        "featureType": "nationalway",
        "elementType": "geometry.stroke",
        "stylers": {
            "color": "#1c4f7eff"
        }
    }, {
        "featureType": "nationalway",
        "elementType": "labels.text.fill",
        "stylers": {
            "color": "#9ab7cdff",
            "visibility": "on"
        }
    }, {
        "featureType": "nationalway",
        "elementType": "labels.text.stroke",
        "stylers": {
            "color": "#071b2aff",
            "visibility": "on",
            "weight": 1
        }
    }, {
        "featureType": "nationalway",
        "elementType": "geometry",
        "stylers": {
            "weight": 3
        }
    }, {
        "featureType": "provincialway",
        "elementType": "geometry.fill",
        "stylers": {
            "color": "#0a141cff",
            "visibility": "on"
        }
    }, {
        "featureType": "cityhighway",
        "elementType": "geometry.fill",
        "stylers": {
            "color": "#0a141cff",
            "visibility": "on"
        }
    }, {
        "featureType": "arterial",
        "elementType": "geometry.fill",
        "stylers": {
            "color": "#0a141cff",
            "visibility": "on"
        }
    }, {
        "featureType": "tertiaryway",
        "elementType": "geometry.fill",
        "stylers": {
            "color": "#0a141cff",
            "visibility": "on"
        }
    }, {
        "featureType": "fourlevelway",
        "elementType": "geometry.fill",
        "stylers": {
            "color": "#0a141cff",
            "visibility": "on"
        }
    }, {
        "featureType": "local",
        "elementType": "geometry.fill",
        "stylers": {
            "color": "#0a141cff",
            "visibility": "on"
        }
    }, {
        "featureType": "provincialway",
        "elementType": "geometry.stroke",
        "stylers": {
            "color": "#000000ff",
            "visibility": "on"
        }
    }, {
        "featureType": "cityhighway",
        "elementType": "geometry.stroke",
        "stylers": {
            "color": "#000000ff",
            "visibility": "on"
        }
    }, {
        "featureType": "arterial",
        "elementType": "geometry.stroke",
        "stylers": {
            "color": "#000000ff",
            "visibility": "on"
        }
    }, {
        "featureType": "tertiaryway",
        "elementType": "geometry.stroke",
        "stylers": {
            "color": "#000000ff",
            "visibility": "on"
        }
    }, {
        "featureType": "fourlevelway",
        "elementType": "geometry.stroke",
        "stylers": {
            "color": "#000000ff",
            "visibility": "on"
        }
    }, {
        "featureType": "local",
        "elementType": "geometry.stroke",
        "stylers": {
            "color": "#000000ff",
            "visibility": "on"
        }
    }, {
        "featureType": "local",
        "elementType": "labels.text.fill",
        "stylers": {
            "color": "#9ab7cdff",
            "visibility": "on"
        }
    }, {
        "featureType": "local",
        "elementType": "labels.text.stroke",
        "stylers": {
            "color": "#071b2aff",
            "visibility": "on",
            "weight": 1
        }
    }, {
        "featureType": "fourlevelway",
        "elementType": "labels.text.fill",
        "stylers": {
            "color": "#9ab7cdff",
            "visibility": "on"
        }
    }, {
        "featureType": "tertiaryway",
        "elementType": "labels.text.fill",
        "stylers": {
            "color": "#9ab7cdff",
            "visibility": "on"
        }
    }, {
        "featureType": "arterial",
        "elementType": "labels.text.fill",
        "stylers": {
            "color": "#9ab7cdff",
            "visibility": "on"
        }
    }, {
        "featureType": "cityhighway",
        "elementType": "labels.text.fill",
        "stylers": {
            "color": "#9ab7cdff",
            "visibility": "on"
        }
    }, {
        "featureType": "provincialway",
        "elementType": "labels.text.fill",
        "stylers": {
            "color": "#9ab7cdff",
            "visibility": "on"
        }
    }, {
        "featureType": "provincialway",
        "elementType": "labels.text.stroke",
        "stylers": {
            "color": "#071b2aff",
            "visibility": "on",
            "weight": 1
        }
    }, {
        "featureType": "cityhighway",
        "elementType": "labels.text.stroke",
        "stylers": {
            "color": "#071b2aff",
            "visibility": "on",
            "weight": 1
        }
    }, {
        "featureType": "arterial",
        "elementType": "labels.text.stroke",
        "stylers": {
            "color": "#071b2aff",
            "visibility": "on",
            "weight": 1
        }
    }, {
        "featureType": "tertiaryway",
        "elementType": "labels.text.stroke",
        "stylers": {
            "color": "#071b2aff",
            "visibility": "on",
            "weight": 1
        }
    }, {
        "featureType": "fourlevelway",
        "elementType": "labels.text.stroke",
        "stylers": {
            "color": "#071b2aff",
            "visibility": "on",
            "weight": 1
        }
    }, {
        "featureType": "fourlevelway",
        "elementType": "geometry",
        "stylers": {
            "weight": 1
        }
    }, {
        "featureType": "tertiaryway",
        "elementType": "geometry",
        "stylers": {
            "weight": 1
        }
    }, {
        "featureType": "local",
        "elementType": "geometry",
        "stylers": {
            "weight": 1
        }
    }, {
        "featureType": "provincialway",
        "elementType": "geometry",
        "stylers": {
            "weight": 3
        }
    }, {
        "featureType": "cityhighway",
        "elementType": "geometry",
        "stylers": {
            "weight": 3
        }
    }, {
        "featureType": "arterial",
        "elementType": "geometry",
        "stylers": {
            "weight": 3
        }
    }, {
        "featureType": "highway",
        "stylers": {
            "curZoomRegionId": "0",
            "curZoomRegion": "6,9",
            "level": "6"
        }
    }, {
        "featureType": "highway",
        "stylers": {
            "curZoomRegionId": "0",
            "curZoomRegion": "6,9",
            "level": "7"
        }
    }, {
        "featureType": "highway",
        "stylers": {
            "curZoomRegionId": "0",
            "curZoomRegion": "6,9",
            "level": "8"
        }
    }, {
        "featureType": "highway",
        "stylers": {
            "curZoomRegionId": "0",
            "curZoomRegion": "6,9",
            "level": "9"
        }
    }, {
        "featureType": "highway",
        "elementType": "geometry",
        "stylers": {
            "visibility": "off",
            "curZoomRegionId": "0",
            "curZoomRegion": "6,9",
            "level": "6"
        }
    }, {
        "featureType": "highway",
        "elementType": "geometry",
        "stylers": {
            "visibility": "off",
            "curZoomRegionId": "0",
            "curZoomRegion": "6,9",
            "level": "7"
        }
    }, {
        "featureType": "highway",
        "elementType": "geometry",
        "stylers": {
            "visibility": "off",
            "curZoomRegionId": "0",
            "curZoomRegion": "6,9",
            "level": "8"
        }
    }, {
        "featureType": "highway",
        "elementType": "geometry",
        "stylers": {
            "visibility": "off",
            "curZoomRegionId": "0",
            "curZoomRegion": "6,9",
            "level": "9"
        }
    }, {
        "featureType": "highway",
        "elementType": "labels",
        "stylers": {
            "visibility": "off",
            "curZoomRegionId": "0",
            "curZoomRegion": "6,9",
            "level": "6"
        }
    }, {
        "featureType": "highway",
        "elementType": "labels",
        "stylers": {
            "visibility": "off",
            "curZoomRegionId": "0",
            "curZoomRegion": "6,9",
            "level": "7"
        }
    }, {
        "featureType": "highway",
        "elementType": "labels",
        "stylers": {
            "visibility": "off",
            "curZoomRegionId": "0",
            "curZoomRegion": "6,9",
            "level": "8"
        }
    }, {
        "featureType": "highway",
        "elementType": "labels",
        "stylers": {
            "visibility": "off",
            "curZoomRegionId": "0",
            "curZoomRegion": "6,9",
            "level": "9"
        }
    }, {
        "featureType": "nationalway",
        "stylers": {
            "curZoomRegionId": "0",
            "curZoomRegion": "6,9",
            "level": "6"
        }
    }, {
        "featureType": "nationalway",
        "stylers": {
            "curZoomRegionId": "0",
            "curZoomRegion": "6,9",
            "level": "7"
        }
    }, {
        "featureType": "nationalway",
        "stylers": {
            "curZoomRegionId": "0",
            "curZoomRegion": "6,9",
            "level": "8"
        }
    }, {
        "featureType": "nationalway",
        "stylers": {
            "curZoomRegionId": "0",
            "curZoomRegion": "6,9",
            "level": "9"
        }
    }, {
        "featureType": "nationalway",
        "elementType": "geometry",
        "stylers": {
            "visibility": "off",
            "curZoomRegionId": "0",
            "curZoomRegion": "6,9",
            "level": "6"
        }
    }, {
        "featureType": "nationalway",
        "elementType": "geometry",
        "stylers": {
            "visibility": "off",
            "curZoomRegionId": "0",
            "curZoomRegion": "6,9",
            "level": "7"
        }
    }, {
        "featureType": "nationalway",
        "elementType": "geometry",
        "stylers": {
            "visibility": "off",
            "curZoomRegionId": "0",
            "curZoomRegion": "6,9",
            "level": "8"
        }
    }, {
        "featureType": "nationalway",
        "elementType": "geometry",
        "stylers": {
            "visibility": "off",
            "curZoomRegionId": "0",
            "curZoomRegion": "6,9",
            "level": "9"
        }
    }, {
        "featureType": "nationalway",
        "elementType": "labels",
        "stylers": {
            "visibility": "off",
            "curZoomRegionId": "0",
            "curZoomRegion": "6,9",
            "level": "6"
        }
    }, {
        "featureType": "nationalway",
        "elementType": "labels",
        "stylers": {
            "visibility": "off",
            "curZoomRegionId": "0",
            "curZoomRegion": "6,9",
            "level": "7"
        }
    }, {
        "featureType": "nationalway",
        "elementType": "labels",
        "stylers": {
            "visibility": "off",
            "curZoomRegionId": "0",
            "curZoomRegion": "6,9",
            "level": "8"
        }
    }, {
        "featureType": "nationalway",
        "elementType": "labels",
        "stylers": {
            "visibility": "off",
            "curZoomRegionId": "0",
            "curZoomRegion": "6,9",
            "level": "9"
        }
    }, {
        "featureType": "provincialway",
        "stylers": {
            "curZoomRegionId": "0",
            "curZoomRegion": "8,10",
            "level": "8"
        }
    }, {
        "featureType": "provincialway",
        "stylers": {
            "curZoomRegionId": "0",
            "curZoomRegion": "8,10",
            "level": "9"
        }
    }, {
        "featureType": "provincialway",
        "elementType": "geometry",
        "stylers": {
            "visibility": "off",
            "curZoomRegionId": "0",
            "curZoomRegion": "8,10",
            "level": "8"
        }
    }, {
        "featureType": "provincialway",
        "elementType": "geometry",
        "stylers": {
            "visibility": "off",
            "curZoomRegionId": "0",
            "curZoomRegion": "8,10",
            "level": "9"
        }
    }, {
        "featureType": "provincialway",
        "elementType": "labels",
        "stylers": {
            "visibility": "off",
            "curZoomRegionId": "0",
            "curZoomRegion": "8,10",
            "level": "8"
        }
    }, {
        "featureType": "provincialway",
        "elementType": "labels",
        "stylers": {
            "visibility": "off",
            "curZoomRegionId": "0",
            "curZoomRegion": "8,10",
            "level": "9"
        }
    }, {
        "featureType": "cityhighway",
        "stylers": {
            "curZoomRegionId": "0",
            "curZoomRegion": "6,9",
            "level": "6"
        }
    }, {
        "featureType": "cityhighway",
        "stylers": {
            "curZoomRegionId": "0",
            "curZoomRegion": "6,9",
            "level": "7"
        }
    }, {
        "featureType": "cityhighway",
        "stylers": {
            "curZoomRegionId": "0",
            "curZoomRegion": "6,9",
            "level": "8"
        }
    }, {
        "featureType": "cityhighway",
        "stylers": {
            "curZoomRegionId": "0",
            "curZoomRegion": "6,9",
            "level": "9"
        }
    }, {
        "featureType": "cityhighway",
        "elementType": "geometry",
        "stylers": {
            "visibility": "off",
            "curZoomRegionId": "0",
            "curZoomRegion": "6,9",
            "level": "6"
        }
    }, {
        "featureType": "cityhighway",
        "elementType": "geometry",
        "stylers": {
            "visibility": "off",
            "curZoomRegionId": "0",
            "curZoomRegion": "6,9",
            "level": "7"
        }
    }, {
        "featureType": "cityhighway",
        "elementType": "geometry",
        "stylers": {
            "visibility": "off",
            "curZoomRegionId": "0",
            "curZoomRegion": "6,9",
            "level": "8"
        }
    }, {
        "featureType": "cityhighway",
        "elementType": "geometry",
        "stylers": {
            "visibility": "off",
            "curZoomRegionId": "0",
            "curZoomRegion": "6,9",
            "level": "9"
        }
    }, {
        "featureType": "cityhighway",
        "elementType": "labels",
        "stylers": {
            "visibility": "off",
            "curZoomRegionId": "0",
            "curZoomRegion": "6,9",
            "level": "6"
        }
    }, {
        "featureType": "cityhighway",
        "elementType": "labels",
        "stylers": {
            "visibility": "off",
            "curZoomRegionId": "0",
            "curZoomRegion": "6,9",
            "level": "7"
        }
    }, {
        "featureType": "cityhighway",
        "elementType": "labels",
        "stylers": {
            "visibility": "off",
            "curZoomRegionId": "0",
            "curZoomRegion": "6,9",
            "level": "8"
        }
    }, {
        "featureType": "cityhighway",
        "elementType": "labels",
        "stylers": {
            "visibility": "off",
            "curZoomRegionId": "0",
            "curZoomRegion": "6,9",
            "level": "9"
        }
    }, {
        "featureType": "arterial",
        "stylers": {
            "curZoomRegionId": "0",
            "curZoomRegion": "9,9",
            "level": "9"
        }
    }, {
        "featureType": "arterial",
        "elementType": "geometry",
        "stylers": {
            "visibility": "off",
            "curZoomRegionId": "0",
            "curZoomRegion": "9,9",
            "level": "9"
        }
    }, {
        "featureType": "arterial",
        "elementType": "labels",
        "stylers": {
            "visibility": "off",
            "curZoomRegionId": "0",
            "curZoomRegion": "9,9",
            "level": "9"
        }
    }, {
        "featureType": "village",
        "elementType": "labels.text.fill",
        "stylers": {
            "color": "#9ab7cdff"
        }
    }, {
        "featureType": "village",
        "elementType": "labels.text.stroke",
        "stylers": {
            "color": "#071b2aff"
        }
    }, {
        "featureType": "districtlabel",
        "elementType": "labels.text.stroke",
        "stylers": {
            "color": "#071b2aff"
        }
    }, {
        "featureType": "districtlabel",
        "elementType": "labels.text.fill",
        "stylers": {
            "color": "#9ab7cdff"
        }
    }, {
        "featureType": "road",
        "elementType": "labels",
        "stylers": {
            "visibility": "on"
        }
    }, {
        "featureType": "highway",
        "elementType": "labels",
        "stylers": {
            "visibility": "on"
        }
    }, {
        "featureType": "educationlabel",
        "elementType": "labels",
        "stylers": {
            "visibility": "off"
        }
    }, {
        "featureType": "medicallabel",
        "elementType": "labels",
        "stylers": {
            "visibility": "off"
        }
    }, {
        "featureType": "entertainmentlabel",
        "elementType": "labels",
        "stylers": {
            "visibility": "off"
        }
    }, {
        "featureType": "estatelabel",
        "elementType": "labels",
        "stylers": {
            "visibility": "off"
        }
    }, {
        "featureType": "businesstowerlabel",
        "elementType": "labels",
        "stylers": {
            "visibility": "off"
        }
    }, {
        "featureType": "educationlabel",
        "elementType": "labels.icon",
        "stylers": {
            "visibility": "off"
        }
    }, {
        "featureType": "medicallabel",
        "elementType": "labels.icon",
        "stylers": {
            "visibility": "off"
        }
    }, {
        "featureType": "entertainmentlabel",
        "elementType": "labels.icon",
        "stylers": {
            "visibility": "off"
        }
    }, {
        "featureType": "estatelabel",
        "elementType": "labels.icon",
        "stylers": {
            "visibility": "off"
        }
    }, {
        "featureType": "businesstowerlabel",
        "elementType": "labels.icon",
        "stylers": {
            "visibility": "off"
        }
    }, {
        "featureType": "companylabel",
        "elementType": "labels",
        "stylers": {
            "visibility": "off"
        }
    }, {
        "featureType": "companylabel",
        "elementType": "labels.icon",
        "stylers": {
            "visibility": "off"
        }
    }, {
        "featureType": "governmentlabel",
        "elementType": "labels",
        "stylers": {
            "visibility": "off"
        }
    }, {
        "featureType": "governmentlabel",
        "elementType": "labels.icon",
        "stylers": {
            "visibility": "off"
        }
    }, {
        "featureType": "restaurantlabel",
        "elementType": "labels",
        "stylers": {
            "visibility": "off"
        }
    }, {
        "featureType": "restaurantlabel",
        "elementType": "labels.icon",
        "stylers": {
            "visibility": "off"
        }
    }, {
        "featureType": "hotellabel",
        "elementType": "labels",
        "stylers": {
            "visibility": "off"
        }
    }, {
        "featureType": "hotellabel",
        "elementType": "labels.icon",
        "stylers": {
            "visibility": "off"
        }
    }, {
        "featureType": "shoppinglabel",
        "elementType": "labels",
        "stylers": {
            "visibility": "off"
        }
    }, {
        "featureType": "shoppinglabel",
        "elementType": "labels.icon",
        "stylers": {
            "visibility": "off"
        }
    }, {
        "featureType": "lifeservicelabel",
        "elementType": "labels",
        "stylers": {
            "visibility": "off"
        }
    }, {
        "featureType": "lifeservicelabel",
        "elementType": "labels.icon",
        "stylers": {
            "visibility": "off"
        }
    }, {
        "featureType": "carservicelabel",
        "elementType": "labels",
        "stylers": {
            "visibility": "off"
        }
    }, {
        "featureType": "carservicelabel",
        "elementType": "labels.icon",
        "stylers": {
            "visibility": "off"
        }
    }, {
        "featureType": "transportationlabel",
        "elementType": "labels",
        "stylers": {
            "visibility": "off"
        }
    }, {
        "featureType": "financelabel",
        "elementType": "labels",
        "stylers": {
            "visibility": "off"
        }
    }, {
        "featureType": "financelabel",
        "elementType": "labels.icon",
        "stylers": {
            "visibility": "off"
        }
    }, {
        "featureType": "district",
        "elementType": "labels.text.fill",
        "stylers": {
            "color": "#9ab7cdff"
        }
    }, {
        "featureType": "town",
        "elementType": "labels.text.fill",
        "stylers": {
            "color": "#9ab7cdff"
        }
    }, {
        "featureType": "town",
        "elementType": "labels.text.stroke",
        "stylers": {
            "color": "#071b2aff"
        }
    }, {
        "featureType": "district",
        "elementType": "labels.text.stroke",
        "stylers": {
            "color": "#071b2aff"
        }
    }, {
        "featureType": "subwaystation",
        "elementType": "geometry",
        "stylers": {
            "visibility": "off"
        }
    }, {
        "featureType": "education",
        "elementType": "geometry",
        "stylers": {
            "visibility": "off"
        }
    }, {
        "featureType": "education",
        "elementType": "labels",
        "stylers": {
            "visibility": "off"
        }
    }, {
        "featureType": "medical",
        "elementType": "geometry",
        "stylers": {
            "visibility": "off"
        }
    }, {
        "featureType": "medical",
        "elementType": "labels",
        "stylers": {
            "visibility": "off"
        }
    }, {
        "featureType": "entertainment",
        "elementType": "geometry",
        "stylers": {
            "visibility": "off"
        }
    }, {
        "featureType": "estate",
        "elementType": "geometry",
        "stylers": {
            "visibility": "off"
        }
    }, {
        "featureType": "transportation",
        "elementType": "geometry",
        "stylers": {
            "visibility": "off"
        }
    }, {
        "featureType": "transportation",
        "elementType": "labels",
        "stylers": {
            "visibility": "off"
        }
    }, {
        "featureType": "arterial",
        "elementType": "labels.icon",
        "stylers": {
            "visibility": "off"
        }
    }, {
        "featureType": "tertiaryway",
        "elementType": "labels.icon",
        "stylers": {
            "visibility": "off"
        }
    }, {
        "featureType": "fourlevelway",
        "elementType": "labels.icon",
        "stylers": {
            "visibility": "off"
        }
    }, {
        "featureType": "local",
        "elementType": "labels.icon",
        "stylers": {
            "visibility": "off"
        }
    }, {
        "featureType": "roadarrow",
        "elementType": "labels.icon",
        "stylers": {
            "visibility": "off"
        }
    }]
});
map.setCurrentCity("浙江"); // 设置地图显示的城市 此项是必须设置的
map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
function addlabel() {
    var pointArray = [];
    var optsArray = [{}, {}, {}];
    var labelArray = [];
    var contentArray = [];
    for (var i = 0; i < pointArray.length; i++) {
        optsArray[i].position = pointArray[i];
        labelArray[i] = new BMap.Label(contentArray[i], optsArray[i]);
        labelArray[i].setStyle({});
        map.addOverlay(labelArray[i]);
    }
}
// 景点取点
var p1 = new BMap.Point(120.167482, 30.259456); //起点
var p2 = new BMap.Point(120.072637, 30.2759875); //终点
var p3 = new BMap.Point(120.073238, 30.278026); //途经点1
var p4 = new BMap.Point(120.167924, 30.262296); //途经点2
var polylinex=null;
var roadNum = 2;
var point = [];
point.push()
// 创建点
var iconImg1 = new BMap.Icon("img/start.png", new BMap.Size(40, 48));
var iconImg2 = new BMap.Icon("img/end.png", new BMap.Size(40, 48));
// 起点坐标打点标注
var marker01 = new BMap.Marker(p1, {
    icon: iconImg1
});
map.addOverlay(marker01);
label1 = new BMap.Label("起点：西湖音乐喷泉", {
    offset: new BMap.Size(45, 18)
});
label1.setStyle({
    color: "#ffffff",
    fontSize: "18px",
    lineHeight: "40px",
    fontFamily: "微软雅黑",
    height: "40px",
    border: "0",
    padding: "0 15px",
    textShadow: "0",
    backgroundColor: "#274359",
    borderRadius: "10px",
    cursor: "pointer"
});
marker01.setLabel(label1);
// 终点坐标打点标注
var marker02 = new BMap.Marker(p2, {
    icon: iconImg2
});
map.addOverlay(marker02);
label2 = new BMap.Label("终点：西溪国家湿地公园", {
    offset: new BMap.Size(45, -58)
});
label2.setStyle({
    color: "#ffffff",
    fontSize: "18px",
    lineHeight: "40px",
    fontFamily: "微软雅黑",
    height: "40px",
    border: "0",
    padding: "0 15px",
    textShadow: "0",
    backgroundColor: "#274359",
    borderRadius: "10px",
    cursor: "pointer"
});
marker02.setLabel(label2);

// 运动图片
var myIcon = new BMap.Icon("./img/arrow.png", new BMap.Size(58, 53), { //箭头图片
    offset: new BMap.Size(0, -5), //相当于CSS精灵
    imageOffset: new BMap.Size(0, 0) //图片的偏移量。为了是图片底部中心对准坐标点。
});

// 线路1
function run(p1, p2) {
    var driving1 = new BMap.DrivingRoute(map);
    driving1.search(p1, p2);
    driving1.setSearchCompleteCallback(function() {
        var pts1 = driving1.getResults().getPlan(0).getRoute(0).getPath(); //得到一个数组
        var polyline1 = new BMap.Polyline(pts1, {
            strokeColor: "#765af9",
            strokeWeight: 10,
            strokeOpacity: 0.9
        });
        map.addOverlay(polyline1);
        setTimeout(function() {
            map.setViewport([p1, p2]);
            jumps(pts1);
        }, 0);
    });
    
    
}

var timer =null;
// 传入数组就可以跑
function jumps(pts) {
    var carMk = new BMap.Marker(pts[0], {
        icon: myIcon
    });
    map.addOverlay(carMk);
    var i = 0;

    function resetMkPoint(i) {
        carMk.setPosition(pts[i]);
        if (i < pts.length) {
           timer = setTimeout(function() {
                i++;
                resetMkPoint(i);
            }, 100);
        } else {
                openLine(roadNum);
        }
    }
    setTimeout(function() {
        resetMkPoint(5);
    }, 100)
}
setTimeout(function() {
    run();
}, 10);
run(p1, p2);  // 默认跑线路1

//线路2
var driving2 = new BMap.DrivingRoute(map);    //驾车实例  
driving2.search(p1, p3);
driving2.search(p3, p2);

driving2.setSearchCompleteCallback(function(){  
    var pts2 = driving2.getResults().getPlan(0).getRoute(0).getPath();    //通过驾车实例，获得一系列点的数组  
    var polyline2 = new BMap.Polyline(pts2, {
            strokeColor: "#765af9",
            strokeWeight: 5,
            strokeOpacity: 0.9
        });       
    map.addOverlay(polyline2);  

    setTimeout(function(){  
        map.setViewport([p1, p3, p2]);          //调整到最佳视野  
     },100);

}); 
// 路线3
var driving3 = new BMap.DrivingRoute(map);    //驾车实例  
driving3.search(p1, p4);
driving3.search(p4, p2);

driving3.setSearchCompleteCallback(function(){  
    var pts3 = driving3.getResults().getPlan(0).getRoute(0).getPath();    //通过驾车实例，获得一系列点的数组  
    var polyline3 = new BMap.Polyline(pts3, {
            strokeColor: "#765af9",
            strokeWeight: 5,
            strokeOpacity: 0.9
        });       
    map.addOverlay(polyline3);  
    
    setTimeout(function(){  
        map.setViewport([p1, p4, p2]);          //调整到最佳视野  
     },100);  
});


getWeight(p1,p2,10);
 function getWeight(point1,point2,weight){    
  
     var driving1 = new BMap.DrivingRoute(map);
        driving1.search(point1, point2);
        driving1.setSearchCompleteCallback(function() {
            var pts1 = driving1.getResults().getPlan(0).getRoute(0).getPath(); //得到一个数组
            polylinex = new BMap.Polyline(pts1, {
                strokeColor: "#765af9",
                strokeWeight: weight,
                strokeOpacity: 0.9
            });
            map.addOverlay(polylinex);

        }); 
}
var lineopen = 0;
// 线路排行点击事件
function openLine(i) {
     map.clearOverlays();
    clearTimeout(timer);
    roadNum = i+1;
    if(roadNum>3){
        roadNum = 1;
    }
    var lines = [" ","#line1","#line2","#line3"];
    $(lines[1]).removeClass('big'); 
    $(lines[2]).removeClass('big'); 
    $(lines[3]).removeClass('big'); 
    $(lines[i]).addClass('big');
    lineopen =i;
    if (i == 1)
    {
        //map.clearOverlays();
        /* map.removeOverlay(polylinex);
          polylinex1 = null;
         polylinex = null;*/
        getWeight(p1,p2,10);
        run(p1,p2);
        getWeight(p1,p3,5);
        getWeight(p4,p2,5);
        markerLabel() 
    }
    else if (i == 2)
    {
       // map.clearOverlays();
        /*map.removeOverlay(polylinex);
         polylinex = null;*/
        getWeight(p1,p2,5);
        getWeight(p1,p3,10);
        getWeight(p4,p2,5);
        markerLabel();
        run(p1,p3);

    }
    else
    {
        //map.clearOverlays();
         /*map.removeOverlay(polylinex);
         polylinex = null;*/
        getWeight(p1,p2,5);
        getWeight(p1,p3,5);
        getWeight(p4,p2,10);
        markerLabel();
        run(p4,p2);
    }  
   
}

// 标注起点终点
function markerLabel(){
    map.addOverlay(marker01);
    marker01.setLabel(label1);
    map.addOverlay(marker02);
    marker02.setLabel(label2);
}

// 地图线路点击事件
label1.addEventListener("click",function(){
    $("#line3").addClass('big');  
    $(this).siblings('.road_1')                      
});


