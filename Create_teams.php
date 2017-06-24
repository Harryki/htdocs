<html>
<body>
	<?php
	$team_name = $_POST["name"];
	$filename = $team_name . ".php"; 
	$somecontent = file_get_contents("template.php");
	

// Let's make sure the file exists and is writable first.
	$handle = fopen($filename,'w+'); 
	if (is_writable($filename)) {

    // In our example we're opening $filename in append mode.
    // The file pointer is at the bottom of the file hence
    // that's where $somecontent will go when we fwrite() it.
		if (!$handle = fopen($filename, 'a')) {
			echo "Cannot open file ($filename)";
			exit;
		}

    // Write $somecontent to our opened file.
		if (fwrite($handle, $somecontent) === FALSE) {
			echo "Cannot write to file ($filename)";
			exit;
		}

		echo "Success, wrote to file ($filename)";

		fclose($handle);

	} else {
		echo "The file $filename is not writable";
	}

	// this works
	$key_value = "?name=" . $team_name;

	echo $_POST["hidden_userid"];

	//add some database work related to team table
	
	?>
	
	<script type="text/javascript">
		location.href = '<?php echo $filename . $key_value ?>';
	</script>
</body>	
</html>