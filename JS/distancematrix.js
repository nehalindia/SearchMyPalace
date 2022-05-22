var lati;
var longi;
var orig;
var dist;
var dest;
var count=0;
var table=[];
var tableData;
var settable=0;


if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
        console.log("browser not supported");
    }

function showPosition(position) {
    lati =  position.coords.latitude;
    longi = position.coords.longitude;  
    console.log("mylat: ",lati);
    console.log("mylng: ",longi);
  }
//get location
$(document).ready(function(){ 
    $("#submit").click(function(){
      send();
    });
    $("input").keydown(function(event){ 
        if(event.which==13){send();};
    });

});

function send(){
 
        $.post("distance_response.php",
        {
          address: $("#address").val(),
          category: $("#locationtype").val(),
          sub_category: $("#Edu_value").val()
        },
        function(data,status){
          console.log('db lenght',data.length);
          console.log(data[0].address);
          console.log(data[0].name);
          console.log(data[0].longitude);
          console.log(data[0].latitude);
		  console.log(data[0].image);
                            
         for(var i=0;i<data.length;i++){
          
           getDist(data[i].address, data[i].name, data[i].latitude, data[i].longitude, data.length,data[i].image);
          console.log(data[i].address);
          console.log(data[i].name);
          console.log(data[i].longitude);
          console.log(data[i].latitude);
		  console.log(data[i].image);
            
            };        
        });
    }


function getDist(add, name, lat, lngi, length,img){


	var origin = new google.maps.LatLng(lati, longi),
          destination = new google.maps.LatLng(lat, lngi),
    	  service = new google.maps.DistanceMatrixService();
	service.getDistanceMatrix(
    {
        origins: [origin],
        destinations: [destination],
        travelMode: google.maps.TravelMode.DRIVING,
        avoidHighways: false,
        avoidTolls: false
    }, 
    callback
);

function callback(response, status) {

    count=count+1;
  if((count)==(length)){settable=1};

    if(status=="OK") {
        dest= response.destinationAddresses[0];
        orig = response.originAddresses[0];
        dist = response.rows[0].elements[0].distance.value;
        dist= dist/1000;
        $("#location").ready(function(){ 
          tableData={
            placename:name,
            address: add,
            distance:dist,
			image:img
          };
          table.push(tableData);
          
          console.log("add: ",table[0].placename);
          console.log("hello dist", table.length);
          if(settable==1){
            settable=0;
            count=0;
            console.log("beforehello");
            createTable();
                console.log("hello");
          };

        //count=count+1;          
         //document.getElementById("locationdescription").innerHTML+='<tr><td>'+count+'</td><td>'+name+'</td><td>'+add+'</td><td>'+dist+'</td></tr>';
      });
    } else {
        alert("Error: " + status);
    }

}


};

function createTable(){
  $('tbody').empty();
table.sort(function(a, b){return a.distance-b.distance});
console.log(table[0].placename);

console.log("hello create tabel", table.length);
  for(var j=0;j<table.length;j++){    
  var i=j+1;
  document.getElementById("locationdescription").innerHTML+='<tr><td>'+i+'</td><td>'+table[j].placename+'</td><td>'
  +table[j].address+'</td><td>'+table[j].distance+" km"+'</td><td>'+'<img src="'+table[j].image+'"'+'height="100" width="150"'+'>'+'</td></tr>';
};
table.length=0;
};