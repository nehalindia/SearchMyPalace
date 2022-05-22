var map;
var lati=28.580300971796596;
var longi=77;
var latii;
var longii;
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
            center: new google.maps.LatLng(latii, longii), //center on JMI
            mapTypeId: google.maps.MapTypeId.ROADMAP,
			styles: myStyles	
		};
        map = new google.maps.Map(document.getElementById('searchmap'), mapOptions);
		//marker = new google.maps.Marker({ position: mapOptions.center, map: map});   
		//yourmarker = new google.maps.Marker({ position: new google.maps.LatLng(lati, longi), map: map});
        yourmarker=new google.maps.Marker({ position: new google.maps.LatLng(latii,longii), map: map});    
console.log("hello1");
        var infowindow = new google.maps.InfoWindow({
        content:"Your current location"
        });
        infowindow.open(map, yourmarker);       
        yourmarker.addListener('click', function() {
        map.setZoom(15);
         center: yourmarker,
        map.setCenter(yourmarker.getPosition());
        });

}
            
            

 

    

    




var y = function(){
    console.log("test");
google.maps.event.addDomListener(window, 'load', mapinit);
}


var test = function(){

    m = setInterval(function(){
if(longii!=77){
    y();
    console.log("location received");
    clearInterval(m);
}

    },0)
}



var getlocation = function(){
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(function (position) {
                    latii =  position.coords.latitude;
                    longii = position.coords.longitude;  
                    console.log("mylat: ",latii);
                    console.log("mylng: ",longii);

test();
//yourmarker.setMap(null);
            
            console.log("hello");
            return 1;
               
        });
        } 
        else { 
            console.log("browser not supported");
        }
    }

    getlocation();