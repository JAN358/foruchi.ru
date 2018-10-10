<?php

if (isset($_POST["addend1"])){
	$result = array(
		'addend1' => $_POST["addend1"],
	); 
} elseif(isset($_POST["addend2"])){
	$result = array(
		'addend2' => $_POST["addend2"],
	); 
} elseif(isset($_POST["answer"])){
	$result = array(
	    'answer' => $_POST["answer"],
	 );
};
echo json_encode($result); 

?>