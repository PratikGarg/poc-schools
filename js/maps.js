var allpolygons = [];
var map;

function initialize() {
	var mapOptions = {
		zoom : 15,
		center : new google.maps.LatLng(28.4567692, 77.0524406),
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


var styles =[{"featureType":"administrative","stylers":[{"visibility":"off"}]},{"featureType":"poi","stylers":[{"visibility":"simplified"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"simplified"}]},{"featureType":"water","stylers":[{"visibility":"simplified"}]},{"featureType":"transit","stylers":[{"visibility":"simplified"}]},{"featureType":"landscape","stylers":[{"visibility":"simplified"}]},{"featureType":"road.highway","stylers":[{"visibility":"off"}]},{"featureType":"road.local","stylers":[{"visibility":"on"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"visibility":"on"}]},{"featureType":"water","stylers":[{"color":"#84afa3"},{"lightness":52}]},{"stylers":[{"saturation":-17},{"gamma":0.36}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"color":"#3f518c"}]}]


	map.setOptions({
		styles : styles
	});

}

google.maps.event.addDomListener(window, 'load', initialize);

