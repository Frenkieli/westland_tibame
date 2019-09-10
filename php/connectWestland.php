<?php
    $dsn="mysql:host=localhost;port=XXXX;dbname=XXXXXXX;charset=utf8";
    $user="XXXXXXXXX";
    $password="XXXXXXXXXXXXXXXXXXXXXXX";
    $options=array(PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION);
    $pdo=new PDO($dsn,$user,$password,$options);
?>