<?php
    try{
        require_once("connectWestland.php");
        echo "連線成功!";

    }catch(PDOException $e){
        echo "錯誤訊息: ", $e->getMessage(), "<br>";
        echo "錯誤行號: ", $e->getLine(),"<br>";
        // echo "系統暫時發生錯誤，請通知維護人員";
    }
?>