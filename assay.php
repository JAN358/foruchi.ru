<?php
if((isset($_GET['addend1'])&&$_GET['addend1']!="")&&(isset($_GET['addend2'])&&$_GET['addend2']!="")){
$addend1 = "Не известно";
$addend2 = "Не известно";
if(isset($_GET['addend1'])) $addend1 = $_GET['addend1'];
if (isset($_GET['addend2'])) $addend2 = $_GET['addend2']; 
echo "Первое слагаемое: $addend1  <br> Второе слагаемое: $addend2";
}
