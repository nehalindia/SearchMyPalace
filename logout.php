<?php
	session_start();
	$mail=$_SESSION['mail1'];
	
	include("config.php"); 
	
	@mysql_select_db("smp_data",$con)
	or    die('Connection Failed'.mysql_error());
	@mysql_query("UPDATE data SET persence=0 WHERE email_id = '$mail'");
	
	unset($_SESSION['mail1']);
	echo "<script>window.open('login.html','_self')</script>";
?>