$(document).ready(function(){  

//education refer
if(localStorage.getItem("category")=="Education"){
console.log(localStorage.getItem("category"));
$("#locationtype").append('<option>Education</option>');

if((localStorage.getItem("sub_category")=="Colleges")){
$("#Edu_value").append('<option>Colleges</option>');
}

else if((localStorage.getItem("sub_category")=="School")){
$("#Edu_value").append('<option>School</option>');
}

else if((localStorage.getItem("sub_category")=="University")){
$("#Edu_value").append('<option>University</option>');
}

else if((localStorage.getItem("sub_category")=="Coaching")){
$("#Edu_value").append('<option>Coaching</option>');
}

else if((localStorage.getItem("sub_category")=="Institute")){
$("#Edu_value").append('<option>Institute</option>');
}

localStorage.removeItem("category");
localStorage.removeItem("sub_category");        
console.log("test", localStorage.getItem("category"));
}

 
// health refer      
else if(localStorage.getItem("category")=="Health"){
console.log(localStorage.getItem("category"));
$("#locationtype").append('<option>Health</option>');

if((localStorage.getItem("sub_category")=="Medical")){
$("#Edu_value").append('<option>Medical</option>');
}

else if((localStorage.getItem("sub_category")=="Clinic")){
$("#Edu_value").append('<option>Clinic</option>');
}

else if((localStorage.getItem("sub_category")=="Hospital")){
$("#Edu_value").append('<option>Hospital</option>');
}

else if((localStorage.getItem("sub_category")=="PathLab")){
$("#Edu_value").append('<option>PathLab</option>');
}


localStorage.removeItem("category");
localStorage.removeItem("sub_category");        
console.log("test", localStorage.getItem("category"));


}

//Tour and Travels
else if(localStorage.getItem("category")=="Tour & Travels"){
console.log(localStorage.getItem("category"));
$("#locationtype").append('<option>Tour & Travels</option>');

if((localStorage.getItem("sub_category")=="Bus")){
$("#Edu_value").append('<option>Bus</option>');
}

else if((localStorage.getItem("sub_category")=="Train")){
$("#Edu_value").append('<option>Train</option>');
}

else if((localStorage.getItem("sub_category")=="AirLine")){
$("#Edu_value").append('<option>AirLine</option>');
}

else if((localStorage.getItem("sub_category")=="Hotels")){
$("#Edu_value").append('<option>Hotels</option>');
}

else if((localStorage.getItem("sub_category")=="Cabs")){
$("#Edu_value").append('<option>Cabs</option>');
}


localStorage.removeItem("category");
localStorage.removeItem("sub_category");        
console.log("test", localStorage.getItem("category"));


}


//Entertainment
else if(localStorage.getItem("category")=="Entertainment"){
console.log(localStorage.getItem("category"));
$("#locationtype").append('<option>Entertainment</option>');

if((localStorage.getItem("sub_category")=="Cinema")){
$("#Edu_value").append('<option>Cinema</option>');
}

else if((localStorage.getItem("sub_category")=="Sports")){
$("#Edu_value").append('<option>Sports</option>');
}

else if((localStorage.getItem("sub_category")=="Resort")){
$("#Edu_value").append('<option>Resort</option>');
}

else if((localStorage.getItem("sub_category")=="Histroical Site")){
$("#Edu_value").append('<option>Histroical Site</option>');
}

else if((localStorage.getItem("sub_category")=="Dance Music class")){
$("#Edu_value").append('<option>Dance Music class</option>');
}


localStorage.removeItem("category");
localStorage.removeItem("sub_category");        
console.log("test", localStorage.getItem("category"));


}


//Shop
else if(localStorage.getItem("category")=="Shop"){
console.log(localStorage.getItem("category"));
$("#locationtype").append('<option>Shop</option>');

if((localStorage.getItem("sub_category")=="Shops")){
$("#Edu_value").append('<option>Shops</option>');
}

else if((localStorage.getItem("sub_category")=="Mall")){
$("#Edu_value").append('<option>Mall</option>');
}

else if((localStorage.getItem("sub_category")=="Market")){
$("#Edu_value").append('<option>Market</option>');
}

else if((localStorage.getItem("sub_category")=="Bank")){
$("#Edu_value").append('<option>Bank</option>');
}

else if((localStorage.getItem("sub_category")=="ATM")){
$("#Edu_value").append('<option>ATM</option>');
}

else if((localStorage.getItem("sub_category")=="Customer Service Center")){
$("#Edu_value").append('<option>Customer Service Center</option>');
}


localStorage.removeItem("category");
localStorage.removeItem("sub_category");        
console.log("test", localStorage.getItem("category"));


}


//Maintainance
else if(localStorage.getItem("category")=="Maintainance"){
console.log(localStorage.getItem("category"));
$("#locationtype").append('<option>Maintainance</option>');

if((localStorage.getItem("sub_category")=="Plambur")){
$("#Edu_value").append('<option>Plambur</option>');
}

else if((localStorage.getItem("sub_category")=="Electrician")){
$("#Edu_value").append('<option>Electrician</option>');
}

else if((localStorage.getItem("sub_category")=="Decorator")){
$("#Edu_value").append('<option>Decorator</option>');
}

else if((localStorage.getItem("sub_category")=="Caterers")){
$("#Edu_value").append('<option>Caterers</option>');
}

else if((localStorage.getItem("sub_category")=="Architect")){
$("#Edu_value").append('<option>Architect</option>');
}


localStorage.removeItem("category");
localStorage.removeItem("sub_category");        
console.log("test", localStorage.getItem("category"));


}
//Emergency
else if(localStorage.getItem("category")=="Emergency"){
console.log(localStorage.getItem("category"));
$("#locationtype").append('<option>Emergency</option>');

if((localStorage.getItem("sub_category")=="Ambulance")){
$("#Edu_value").append('<option>Ambulance</option>');
}

else if((localStorage.getItem("sub_category")=="Towing van")){
$("#Edu_value").append('<option>Towing van</option>');
}

else if((localStorage.getItem("sub_category")=="Police Station")){
$("#Edu_value").append('<option>Police Station</option>');
}

else if((localStorage.getItem("sub_category")=="Fire Station")){
$("#Edu_value").append('<option>Fire Station</option>');
}

else if((localStorage.getItem("sub_category")=="Disaster help line")){
$("#Edu_value").append('<option>Disaster help line</option>');
}


localStorage.removeItem("category");
localStorage.removeItem("sub_category");        
console.log("test", localStorage.getItem("category"));


}





else if(true){
 
  console.log("saad");

      $("#locationtype").ready(function(){           
          $("#locationtype").load("TEXT/cat.txt");
      
      });
      $("#Edu_value").ready(function(){           
          $("#Edu_value").load("TEXT/Sub_Cat.txt");
      
      });
       $("#locationtype").mouseleave(function(){

        if ($("#locationtype").val()=="Education")
       {
          console.log($("#locationtype").val());
            $("#Edu_value").load("TEXT/edu_option.txt");
        }
        else if ($("#locationtype").val()=="Health")
       {
          console.log($("#locationtype").val());
            $("#Edu_value").load("TEXT/health_option.txt");
        }
        else if ($("#locationtype").val()=="Tour and travels")
       {
          console.log($("#locationtype").val());
            $("#Edu_value").load("TEXT/tourtravel_option.txt");
        }
        else if ($("#locationtype").val()=="Entertainment")
       {
          console.log($("#locationtype").val());
            $("#Edu_value").load("TEXT/entertainment_option.txt");
        }
        else if ($("#locationtype").val()=="Shop & E-COMMERCE")
       {
          console.log($("#locationtype").val());
            $("#Edu_value").load("TEXT/shop_ecomm_option.txt");
        }
        else if ($("#locationtype").val()=="Maintainence")
       {
          console.log($("#locationtype").val());
            $("#Edu_value").load("TEXT/main_option.txt");
        }
        else if ($("#locationtype").val()=="Emergency")
       {
          console.log($("#locationtype").val());
            $("#Edu_value").load("TEXT/emer_option.txt");
        }
    });
}



});