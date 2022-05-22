<?php
if(isset($_POST['submit']))
{	
	include("config.php"); 
	
	$email=$_POST["email"];
	$pass=$_POST["pass"];
	$repass=$_POST["repass"];
	$fname=$_POST["fname"];
	$phone=$_POST["phone"];
	$gender=$_POST["gender"];
	$house=$_POST["house"];
	$distic=$_POST["distic"];
	$pin=$_POST["pin"];
	$lname=$_POST["lname"];
	$landmark=$_POST["landmark"];
	$cordinate=$_POST["cordinate"];
	$addl1=$_POST["addl1"];
	$addl2=$_POST["addl2"];
	
	
	@mysql_select_db($dbname,$con)
	or die('not connected'.mysql_error());
	
	if(isset($_POST['g-recaptcha-response']))
	{
		$captcha=$_POST['g-recaptcha-response'];
	}
	if(!$captcha){
	echo '<h2>please check the captcha form.</h2>';
	exit;
	}
	$response=file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=6LdA3BkTAAAAAK5L-BsqhDAeqlBUkJXMQKF2DAGl&response=".$captcha);
	if($response!=0)
	{
		echo '<h2>you are spammer! get the @$%Kout</h2>';
	}
	if($repass==$pass)	
	{	//$pass=md5($pass);
		$sql="INSERT INTO data(email_id,pass,f_name,contact,gender,house_no,distric,pin_code,l_name,
		landmark,location_coordinate,add1,add2,some)"."VALUE('$email','$pass','$fname','$phone','$gender','$house',
		'$distic','$pin','$lname','$landmark','$cordinate','$addl1','$addl2','1')";
		$revat=mysql_query($sql);
		
		//sending mail.
		$emailTo=$email;
		$subject="I hope this is work!";
		$body="This mail is from smp.org for the security purpos!";
		$headers="From: smp.myjamia@gmail.com";
		mail($emailTo,$subject,$body,$headers);
		
		if(! $revat ) {
			die('Could not enter data: ' . mysql_error());
			}
		echo "Entered data successfully\n";
		mysql_close($con);
		echo "<script>window.open('Welcome.html','_self')</script>";
	}
	else
	{
		echo "Your possword and re-enter password not matched"."<script>window.open('signup.html','_self')</script>";
	}
}
?>