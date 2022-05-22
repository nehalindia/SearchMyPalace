<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
$address=$_POST['address'];
$category=$_POST['category'];
$sub_category=$_POST['sub_category'];
$address='%'.$address.'%';

include("config.php"); 

@mysql_select_db('smp_data',$con)
or die('not connected'.mysql_error());
$query="SELECT * FROM table_smp as t,img_table as s WHERE t.location_sub_cat='$sub_category' AND t.location_category='$category' AND Address LIKE '$address' 
	AND t.Name=s.Location_name";
	
		if($query==null)
		{echo "You are a validated user"."<script>window.open('profile.php','_self')</script>";
		}
/*$query="SELECT * FROM table_smp as t,img_table as s WHERE t.location_sub_cat='Hospital' AND t.location_category='Health' 
	AND t.Name=s.Location_name";*/
	
$result=mysqli_query($conn, $query)
or die('error');
$outp = "[";
while($row = mysqli_fetch_assoc($result)) {
if ($outp != "[") {$outp .= ",";}
    $outp .= '{"address":"'  . $row["Address"] . '",';    
    $outp .= '"image":"    '. $row["image_path"]        .' ",';
	$outp .= '"name":"    '. $row["Name"]        .' ",';
    $outp .= '"contact_no":"    '. $row["Contact_No"]        .' ",';
    $outp .= '"description":"    '. $row["Description"]        .' ",';
    $outp .= '"latitude":    '. $row["Latitude"]        .' ,';
    $outp .= '"longitude":'. $row["Longitude"]     . '}'; 
	
}
$outp .="]";

echo($outp);
?>