
(function initUserAnalyze() {
    require.config({
        paths: {
            echarts: './echarts'
        },
        packages: [{
            name: 'BMap',
            location: './echarts/src',
            main: 'main'
        }]
    });
    require(
        ['echarts', 'BMap', 'echarts/chart/map'],
        function (echarts, BMapExtension) {
// 初始化地图

var BMapExt = new BMapExtension($('#map2')[0], BMap, echarts,{
  enableMapClick: false
});
var map = BMapExt.getMap();
var container = BMapExt.getEchartsContainer();
var startPoint = {
  x: 120.161744,
  y: 30.279918
};
var point = new BMap.Point(startPoint.x, startPoint.y);

map.enableScrollWheelZoom(true);
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

option = {
    color: ['gold','aqua','lime'],
    
    tooltip : {
        trigger: 'item',
        formatter: function (v) {
            return v[1].replace(':', ' > ');
        }
    },
    
   
    dataRange: {
        min : 0,
        max : 100,
        y: '80%',
        x: '95%',
        calculable : true,
        color: ['#ff3333', 'orange', 'yellow','lime','aqua']
    },
    series : [
        {
            name:'乌鲁木齐-成都-贵阳',
            type:'map',
            mapType: 'none',
            itemStyle:{
                normal:{
                    borderColor:'rgba(100,149,237,1)',
                    borderWidth:0.5,
                    areaStyle:{
                        color: '#1b1b1b'
                    }
                }
            },
            data:[],
            geoCoord: {
                '乌鲁木齐': [120.151362,30.2894268],
                '成都': [120.15909,30.272563],
                '西湖音乐喷泉': [120.1674828,30.259456],
                '西安': [120.1794,30.261068],
                '北京': [120.195,30.278680],
                '济南': [120.184164,30.28704]

            },

            markLine : {
                symbol: ['circle', 'circle'],
                smooth:true,
                effect : {
                    show: true,
                    scaleSize: 1,
                    period: 25,
                    color: '#fff',
                    shadowBlur: 10
                },
                itemStyle : {
                    normal: {
                        borderWidth:2,
                        lineStyle: {
                            type: 'solid',
                            shadowBlur: 10
                        },
                        label:{show:false}
                    }
                },
                data : [
                    [{name:'西湖音乐喷泉'}, {name:'西安',value:95}],
                    [{name:'西安'}, {name:'北京',value:35}],
                    [{name:'西安'}, {name:'济南',value:26}],
                    [{name:'西湖音乐喷泉'}, {name:'成都',value:85}],
                    [{name:'成都'}, {name:'乌鲁木齐',value:45}]
                ]
            },
            markPoint : {
                symbol:'emptyCircle',
                symbolSize : function (v){
                    return 10 + v/10
                },
                effect : {
                    show: true,
                    shadowBlur : 0,
                    scaleSize : 2
                },
                itemStyle:{
                    normal:{
                        label:{show:false}
                    }
                },
                data : [
                    {name:'西湖音乐喷泉',value:155},
                    {name:'西安',value:85},
                    {name:'北京',value:45},
                    {name:'济南',value:25},
                    {name:'乌鲁木齐',value:15},
                    {name:'成都',value:75}
                ]
            }
        },
        
        
    ]
};

        var myChart = BMapExt.initECharts(container);
        window.onresize = myChart.onresize;
        myChart.setOption(option, true);  
        map.centerAndZoom(point, 15); //重设地图中心点
        
    }
);
})();