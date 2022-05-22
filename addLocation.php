<?php 
session_start();
$mail=$_SESSION['mail1'];
if($mail==null)	
{
	echo "<script>window.open('login.html','_self')</script>";
}
else
{
	if(isset($_POST['submit']))
	{
		$name=$_POST['name'];
		$address=$_POST['address'];
		$contact=$_POST['contact'];
		$description=$_POST['description'];
		$category=$_POST['category'];
		$sub_category=$_POST['sub_category'];
		$latitude=$_POST['lati'];
		$longitude=$_POST['longi'];
		
		include("config.php"); 
		
		$filetmp= $_FILES["myimage"]["tmp_name"];
		$filename= $_FILES["myimage"]["name"];
		
		@mysql_select_db('smp_data',$con)
		or die('not connected'.mysql_error());
		$query="INSERT INTO table_smp (name, address, contact_no, description, location_category, location_sub_cat, longitude, latitude, email) 
		VALUES ('$name','$address','$contact', '$description','$category', '$sub_category','$longitude', '$latitude', '$mail')";
		$result= mysql_query($query)
		or die('error in first connect');
		
		$filepath= "image/".$filename;
		move_uploaded_file($filetmp,$filepath);
		@mysql_select_db('smp_data',$conn)
		or die('not connected'.mysql_error());
		$sql="INSERT INTO img_table (image_path,image_name,Location_name) VALUES ('$filepath','$filename','$name')";
		$var= mysql_query($sql)
		or die('error in image.');
		if(! $var)
		{
			die("colu not enter data");
		}
		else
		{
			echo "data enterd sucessfully";
		}
		
		echo "<script>window.open('profile.php','_self')</script>";
		mysql_close($conn);
	}
}
?>