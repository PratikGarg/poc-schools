var allpolygons = [];
var map;

function initialize() {
	var mapOptions = {
		zoom : 15,
		center : new google.maps.LatLng(28.453807000000000000, 77.049250400000000000),
		mapTypeId : google.maps.MapTypeId.ROADMAP,
		scrollwheel : false
	};

	map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

	$.each(allpolygons, function(i, area) {
		polygon = new google.maps.Polygon({
			paths : area.coords,
			strokeColor : '#FFFFFF',
			geodesic : true,
			strokeOpacity : 1.0,
			strokeWeight : 2,
			fillColor : '#FF0000',
			fillOpacity : 0.35
		});

		polygon.setMap(map);
		attachInfoWindow(polygon, map, area.title);

	});

	function attachInfoWindow(poly, map, html) {
		google.maps.event.addListener(poly, 'mouseover',
				function(e) {
					var infoWindow = new google.maps.InfoWindow();
					infoWindow.setContent("<div style='width:70px'>" + html
							+ "</div>");
					var latLng = e.latLng;
					infoWindow.setPosition(latLng);
					infoWindow.open(map);
					poly.infoWindow = infoWindow;
				});

		google.maps.event.addListener(poly, 'mouseout', function() {
			poly.infoWindow.close(map);
		});
	}

	
	var lastValidCenter = map.getCenter();

	
	/*var styles = [ {
		stylers : [ {
			hue : "#40e0d0"
		}, {
			saturation : -100
		}, {
			lightness : 30
		} ]
	}, {
		featureType : "road",
		elementType : "geometry",
		stylers : [ {
			lightness : 10
		}, {
			visibility : "simplified"
		} ]
	}, {
		featureType : "road",
		elementType : "labels",
		stylers : [ {
			visibility : "off"
		} ]
	}, {
		featureType : "terrain",
		elementType : "labels",
		stylers : [ {
			visibility : "on"
		}, {
			hue : "#FFFFFF"
		} ]
	} ];*/



var	main_color = '#2d313f',
	saturation_value= -20,
	brightness_value= 5;
var styles= [ 
	{
		//don't show highways lables on the map
        featureType: 'road.highway',
        elementType: 'labels',
        stylers: [
            {visibility: "off"}
        ]
    }, 
	{
		//set highway colors/brightness/saturation
		featureType: "road.highway",
		elementType: "geometry.fill",
		stylers: [
			{ hue: main_color },
			{ visibility: "on" }, 
			{ lightness: brightness_value }, 
			{ saturation: saturation_value }
		]
	}, 
	
	// other elements style here
];


	map.setOptions({
		styles : styles
	});

var marker = new google.maps.Marker({
      position: new google.maps.LatLng(28.453807000000000000, 77.049250400000000000),
      map: map,
      title: 'Hello World!'
  });



}

google.maps.event.addDomListener(window, 'load', initialize);

