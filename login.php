<?php
if(isset($_POST['submit']))
{	 
	include("config.php"); 
	$email =mysql_real_escape_string( $_POST["email"]);
	$pass =mysql_real_escape_string( $_POST["pass"]);
	
	@mysql_select_db("smp_data",$con)
	or    die('Connection Failed'.mysql_error());
	
	$result = mysql_query("SELECT * FROM data WHERE email_id = '$email' && pass='$pass'");
	
	if($result!=null)
	{
		@mysql_query("UPDATE data SET persence=1 WHERE email_id = '$email'");
		
		session_start();
		$_SESSION['mail1']=$email;
		$_SESSION['table_id']='';
		
		echo "You are a validated user"."<script>window.open('profile.php','_self')</script>";
	}
	else
	{
		echo"Sorry, your are not valid user, Please try again.";
	}
}
?>