<?php
if(isset($_POST['submit']))
{	
	$email=$_POST["email"];
	$fname=$_POST["f_name"];
	$phone=$_POST["phone"];
	$house=$_POST["house"];
	$distic=$_POST["dist"];
	$pin=$_POST["pin"];
	$lname=$_POST["l_name"];
	$landmark=$_POST["landmark"];
	$cordinate=$_POST["cordinate"];
	
	include("config.php"); 
	@mysql_select_db($dbname,$con)
	or die('not connected'.mysql_error());
	
	session_start();
	$mail=$_SESSION['mail1'];
	
	//if($repass==$pass)	
	{	//$pass=md5($pass);
		$sql="UPDATE data SET"."email_id=$mail"."f_name=$fname"."contact=$phone"."gender=$gender"."house_no=$house"."distric=$distic"."pin_code=$pin"
			."l_name=$lname"."landmark=$landmark"."WHERE email_id=$mail";
		
		$revat=mysql_query($sql);
		
		
		if(! $revat ) {
			die('Could not enter data: ' . mysql_error());
			}
		echo "Entered data successfully\n";
		mysql_close($con);
		echo "<script>window.open('edit_profile.php','_self')</script>";
	}
}
?>