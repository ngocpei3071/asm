<?php
    $server = 'localhost';
    $user = 'root';
    $pass = '';
    $database = 'ltweb';

    $conn = new mysqLi($server, $user, $pass, $database, 3306);

    if($conn){
        //mysqLi_query($conn, " SETNAME 'utf8' ");
        
    } else {
        echo ' ket noi that bai';
    }
?>