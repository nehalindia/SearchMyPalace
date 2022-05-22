<?php
if(isset($_POST['submit_image']))
{
	session_start();
	$mail=$_SESSION['mail1'];
	$id= $_SESSION['table_id'];
	if($mail==null)	
	{
		echo "<script>window.open('login.html','_self')</script>";
	}
	else
	{
		include("config.php"); 
		
		$database="smp_data";
		$imagename=$_FILES["myimage"][ "tmp_name" ];
		
		$filetmp= $_FILES["myimage"]["tmp_name"];
		$filename= $_FILES["myimage"]["name"];
		$filetype= $_FILES["myimage"]["type"];
		$filepath= "image/".$filename;
		move_uploaded_file($filetmp,$filepath);
		$sql="INSERT INTO img_table(image_path,image_name,image_type,table_id)"."VALUES"."('$filepath','$filename','$filetype','$id')";
		@mysql_select_db($database,$con);
		$var=mysql_query($sql,$con);
		if(! $var)
		{
			die("colu not enter data");
		}
		else
		{
			echo "data enterd sucessfully";
		}
		if($id==null)
		{
			echo "its empty";
		}
	else{echo $id;}
	//echo "<script>window.open('profile.php','_self')</script>";
	}
	mysql_close($con);
}
?>