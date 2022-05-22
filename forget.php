<?php
if(isset($_POST['submit']))
{	 
	$email =mysql_real_escape_string( $_POST["email"]);
	$phone =mysql_real_escape_string( $_POST["phone"]);
	$pass =mysql_real_escape_string( $_POST["pass"]);
	$pass1 =mysql_real_escape_string( $_POST["pass1"]);
	
	include("config.php"); 

	@mysql_select_db("smp_data",$con)
	or    die('Connection Failed'.mysql_error());
	
	if($pass!=$pass1)
	{
		echo "Your password not matched."."<script>window.open('forget.html','_self')</script>";
	}
	else
	{
		$result = mysql_query("SELECT * FROM data WHERE email_id = '$email' && contact='$phone'");
		$count=mysql_num_rows($result);
		if($count==1)
		{
			@mysql_query("UPDATE data SET pass='$pass' WHERE email_id = '$email'");
			echo "You are a validated user"."<script>window.open('login.html','_self')</script>";
		}
		else
		{
			echo "you are not valid user.";
		}
	}
}
?>