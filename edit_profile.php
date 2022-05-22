<!doctype html>
<html lang="en">
   <head>
		<meta charset="utf-8" />
		<title>Search My Place</title>
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="icon" href="home/logo.ico" type="image/x-icon"/>
		<!-- Latest compiled and minified CSS -->
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
		<!-- Optional theme -->
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap-theme.min.css">
		<!-- Latest compiled and minified JavaScript -->
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
		<link rel="stylesheet" href="home/style.css">
	</head>
<body>
	<nav class="navbar navbar-fixed-top topc">
	<div class="container-fluid">
	<div class="navbar-header">
		<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar1">
        	<span class="icon-bar"></span>
        	<span class="icon-bar"></span>
        	<span class="icon-bar"></span> 
      	</button>
	<a class="navbar-brand" href="index.html"><img src="home\logo.png" class="yahoo img-responsive"></a></div>
	<div class="collapse navbar-collapse" id="myNavbar1" style="margin-top:20px;">
		<ul class="nav navbar-nav navabar-middle">
	     	<li><h4>Technology change's the world</h4></li>
	    </ul>
	    <ul class="nav navbar-nav navbar-right">
        	<li><a href="https://www.facebook.com/dilkidastan7/?ref=hl" target="blank"><i class="fa fa-facebook-official fa-2x"></i></a></li>
        	<li><a href="https://twitter.com/mdnehalkazmy" target="blank"><i class="fa fa-twitter fa-2x"></i></a></li>
        	<li><a href="http://www.skype.com/en/" target="blank"><i class="fa fa-skype fa-2x"></i></a></li>
        	<li><a href="https://plus.google.com/u/0/+MDNEHALUDDINkazmy/posts" target="blank"><i class="fa fa-google-plus fa-2x"></i></a></li>
      	</ul>
	</div>
	</div></nav>
	<div class="container-fluid">
	<div class="row">
	<div class="col-md-6 col-md-offset-3" style="margin-top:85px;">
	<?php
	
	session_start();
	$mail=$_SESSION['mail1'];
	
	if($mail!=null)	
	{	include("config.php"); 

		@mysql_select_db("smp_data",$con)
		or    die('Connection Failed'.mysql_error());
		$query = "SELECT * FROM data WHERE email_id = '$mail'& persence='1'"; 
		$result = mysql_query($query);
		$row = mysql_fetch_row($result);
		mysql_close($con);
	}
	else
	{
		echo "<script>window.open('login.html','_self')</script>";
	}
	?>
	<form class="form-inline" action="update.php" method="post">
	<h4>Edit Your Detali!</h4>
	<Strong>First Name: </Strong><input type="text" name="f_name" value="<?php echo $row[1] ?>" class="form-control input"/>
	<Strong>Last Name: </Strong><input type="text" name="l_name" value="<?php echo $row[2] ?>" class="form-control input"/><br><br>
	<Strong>Email ID: </Strong><input type="email" name="email" value="<?php echo $row[3] ?>" class="form-control input"/>
	<Strong>Contact No: </Strong><input type="text/number" name="phone" value="<?php echo $row[8] ?>" class="form-control input"/><br><br>
	<Strong>LandMark </Strong><input type="text" name="landmark" value="<?php echo $row[9] ?>" class="form-control input"/>
	<Strong>Location Cordinate:- </Strong><input type="text/number" name="cordinate" value="<?php echo $row[10] ?>" class="form-control input"/><br><br>
	<Strong>House No:</Strong><input type="text/nmber" name="house" value="<?php echo $row[12] ?>" class="form-control input"/>
	<Strong>Address </Strong><input type="text" name="add1" value="<?php echo $row[14].",".$row[15] ?>" class="form-control input"/><br><br>
	<Strong>Distic </Strong><input type="text" name="dist" value="<?php echo $row[13]?>" class="form-control input"/>
	<Strong>Pin Code </Strong><input type="text/number" name="pin" value="<?php echo $row[16] ?>" class="form-control input"/><br><br>
	<input type="submit" name="submit" value="Save Your Edit"class="form-control input1"/>
	</form
	</div></div>
	<div class="row">
	<div class="col-md-3 col-md-offset-3">
	<a href="logout.php"><button class="form-control input1">LogOut</button></a>
	<a href="profile.php"><button class="form-control input1">View Profile</button></a>
	</div>
	</div>
	</div>
<body>
</html>