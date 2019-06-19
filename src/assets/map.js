var createMap = function () {
    var map = new BMap.Map("container");          // 创建地图实例  
    var point = new BMap.Point(116.404, 39.915);  // 创建点坐标  
    map.centerAndZoom(point, 15);                 // 初始化地图，设置中心点坐标和地图级别  
    map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
    function addMarker(point, index){  // 创建图标对象   
        var myIcon = new BMap.Icon("@/assets/logo.png", new BMap.Size(23, 25), {    
            // 指定定位位置。   
            // 当标注显示在地图上时，其所指向的地理位置距离图标左上    
            // 角各偏移10像素和25像素。您可以看到在本例中该位置即是   
            // 图标中央下端的尖角位置。    
            anchor: new BMap.Size(10, 25),    
            // 设置图片偏移。   
            // 当您需要从一幅较大的图片中截取某部分作为标注图标时，您   
            // 需要指定大图的偏移位置，此做法与css sprites技术类似。    
            imageOffset: new BMap.Size(0, 0 - index * 25)   // 设置图片偏移    
        });      
        // 创建标注对象并添加到地图   
        var marker = new BMap.Marker(point, {icon: myIcon});    
        map.addOverlay(marker);    
    }    
    // 随机向地图添加10个标注    
    var bounds = map.getBounds();    
    var lngSpan = bounds.maxX - bounds.minX;    
    var latSpan = bounds.maxY - bounds.minY;    
    for (var i = 0; i < 10; i ++) {    
        var point = new BMap.Point(bounds.minX + lngSpan * (Math.random() * 0.7 + 0.15),    
                                      bounds.minY + latSpan * (Math.random() * 0.7 + 0.15));    
        addMarker(point, i);    
    }
}
export default {
    createMap
}