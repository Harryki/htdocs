<html>
<body>

	<?php 
	$team_name = $_POST["name"];
	$file_name = $team_name . ".php"; 

	echo $file_name;

	// echo $_POST["hidden_userid"];
	
	$newcontent = file_get_contents("template.php");


	if (!file_exists($file_name)) {
		$handle = fopen($file_name,'w+'); 
		fwrite($handle,$newcontent); 
		fclose($handle); 
	}

	// this works
	$key_value = "?name=" . $team_name;

	?>
	
	<script type="text/javascript">location.href = '<?php echo $file_name . $key_value ?>';</script>
</body>	
</html>