<?php

if (isset($_POST["addend1"]) && isset($_POST["addend2"]) ) { 

	// Формируем массив для JSON ответа
    $result = array(
    	'addend1' => $_POST["addend1"],
    	'addend2' => $_POST["addend2"]
    ); 

    // Переводим массив в JSON
    echo json_encode($result); 
}

?>