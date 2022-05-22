<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

include("config.php"); 

$address=$_POST['address'];
$category=$_POST['category'];
$address='%'.$address.'%';

$query="SELECT * FROM table_smp WHERE location_category='$category' AND address LIKE '$address'";
$result=mysqli_query($con, $query)
or die('eroooooror');
$outp = "[";
while($row = mysqli_fetch_assoc($result)) {
if ($outp != "[") {$outp .= ",";}
    $outp .= '{"address":"'  . $row["Address"] . '",';   
    $outp .= '"name":"    '. $row["Name"]        .' ",';
    $outp .= '"contact_no":"    '. $row["Contact_No"]        .' ",';
    $outp .= '"description":"    '. $row["Description"]        .' ",';
    $outp .= '"latitude":    '. $row["Latitude"]        .' ,';
    $outp .= '"longitude":'. $row["Longitude"]     . '}'; 
}
$outp .="]";
$json = json_encode($outp);
echo($outp);
?>