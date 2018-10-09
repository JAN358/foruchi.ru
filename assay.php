<?php

if (isset($_GET["addend1"]) && isset($_GET["addend2"]) ) { 

	// Формируем массив для JSON ответа
    $result = array(
    	'addend1' => $_GET["addend1"],
    	'addend2' => $_GET["addend2"]
    ); 

    // Переводим массив в JSON
    echo json_encode($result); 
}

?>