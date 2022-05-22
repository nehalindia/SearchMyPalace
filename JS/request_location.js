var lati;
var longi;
var yourmarker;
$(document).ready(function(){ 



                  
	$("#description").attr('disabled','disabled');
  
    $("button").click(function(){
      send();
    });

    $("input").keydown(function(event){ 
        if(event.which==13){send();};
    });
});

function send(){
  var markers = [];
      //markers.push(marker);
      if (markers) 
          { 
            console.log("marker length",markers.length);
            for(var i=0;i<markers.length;i++){
              console.log("markers", i);
              markers[i].setMap(null);
            }
            markers.length=0;
          };
      $.post("searchresultresponse.php",
        {
        address: $("#searcttext").val(),
        category: $("#locationtype").val()
        },
        function(data,status){
          
          console.log(data.length);
          console.log(data[0].address);
          console.log(data[0].longitude);
          console.log(data[0].latitude);
          console.log("marker length2",markers.length);
          $("#locationdescription").empty();
          var infoWindow = new google.maps.InfoWindow();
          for(var i=0;i<data.length;i++){
            $("#locationdescription").append('<span class="form-control" rows="5"  style="height:150px;  overflow:hidden;"><b>'+data[i].name+'</b></br>'+data[i].address+'</br>'+data[i].contact_no+'</br>'+data[i].description+'</br><span id="'+i+'" onClick="displayRoute('+data[i].latitude+', '+data[i].longitude+')">show direction</span></span>');
            console.log(data[i].address);
            console.log(data[i].longitude);
            console.log(data[i].latitude);
            //markers.push(marker);
            marker=new google.maps.Marker({ position: new google.maps.LatLng(data[i].latitude,data[i].longitude), map: map}); 
            attachSecretMessage(marker, data[i].name,data[i].address);
            markers.push(marker);
            };  
        });
    }

function attachSecretMessage(marker, secretMessage, withAddress) {
  var infowindow = new google.maps.InfoWindow({
  content: secretMessage+' '+withAddress
  });
  marker.addListener('click', function() {
  infowindow.open(marker.get('map'), marker);
  });
}
function showError(error) {
  switch(error.code) {
    case error.PERMISSION_DENIED:
      console.log("User denied the request for Geolocation.");
      break;
    case error.POSITION_UNAVAILABLE:
      console.log("Location information is unavailable.");
      break;
    case error.TIMEOUT:
      console.log("The request to get user location timed out.");
      break;
    case error.UNKNOWN_ERROR:
      console.log("An unknown error occurred.");
      break;
    }
}


var directionsDisplay = new google.maps.DirectionsRenderer();// also, constructor can get "DirectionsRendererOptions" object
function displayRoute(elati,elongi) {
    //markers[i].setMap(null);


    console.log("displayroute");
    var start = new google.maps.LatLng(lati, longi);
    var end = new google.maps.LatLng(elati, elongi);

    
    directionsDisplay.setMap(map); // map should be already initialized.

    var request = {
        origin : start,
        destination : end,
        travelMode : google.maps.TravelMode.DRIVING
    };
    var directionsService = new google.maps.DirectionsService(); 
    directionsService.route(request, function(response, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            directionsDisplay.setDirections(response);
        }
    });
}


/*$("#id").click(function(){
      displayRoute();
    });
    */