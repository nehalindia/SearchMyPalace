var lati=28.56335327134445;
var longi=77.2812118451111;
var map;
var marker = null;
	function mapinit() {
		var myStyles =[
		{
			featureType: "poi",
			elementType: "labels",
			stylers: [
              { visibility: "off" }
			]
		}
		];
        var mapOptions = {
            zoom: 12,
            disableDefaultUI: false,
            center: new google.maps.LatLng(lati,longi), //center on JMI
            mapTypeId: google.maps.MapTypeId.ROADMAP,
			styles: myStyles	
		};
        map = new google.maps.Map(document.getElementById('map'), mapOptions);
		marker = new google.maps.Marker({ position: mapOptions.center, map: map});
		console.log(mapOptions.center.lat());
		document.getElementById('lati').value = lati;
		document.getElementById('longi').value = longi;
		var infowindow = new google.maps.InfoWindow({
 		content:"Your current location"
  		});
		infowindow.open(map, marker);
        google.maps.event.addListener(map, 'click', function(event) {
            //call function to create marker
			//$("#lati").val(event.latLng.lat());
			//$("#longi").val(event.latLng.lng());
			document.getElementById('lati').value = event.latLng.lat();
			document.getElementById('longi').value = event.latLng.lng();
			//delete the old marker
			if (marker) { marker.setMap(null); }
			marker = new google.maps.Marker({ position: event.latLng, map: map});
		});
		}  
		if (navigator.geolocation) {
        	navigator.geolocation.getCurrentPosition(showPosition);
    	} 
    	else { 
        	console.log("browser not supported");
    	}
		function showPosition(position) {
    		lati =  position.coords.latitude;
    		longi = position.coords.longitude;  
    		console.log("mylat: ",lati);
    		console.log("mylng: ",longi);
  		}
		google.maps.event.addDomListener(window, 'load', mapinit);