<?php
$addend1 = "Не известно";
$addend2 = "Не известно";
if(isset($_POST['addend1'])) $addend1 = $_POST['addend1'];
if (isset($_POST['addend2'])) $addend2 = $_POST['addend2'];
 
echo "Первое слагаемое: $addend1  <br> Второе слагаемое: $addend2";
?>