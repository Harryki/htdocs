<html>
<body>
	<?php
	$team_name = $_POST["name"];
	$filename = $team_name . ".php"; 
	$somecontent = file_get_contents("template.php");
	

// Let's make sure the file exists and is writable first.
	$handle = fopen($filename,'w+'); 
	fwrite($handle, $somecontent);
	fclose($handle);

	// this works
	$key_value = "?name=" . $team_name;

	echo $_POST["hidden_userid"];
	?>
	
	<script type="text/javascript">location.href = '<?php echo $file_name . $key_value ?>';</script>
</body>	
</html>