<?php
try {
    require_once("connectWestland.php");
    $sql = "select * from Robot_text order by text_no desc";
    $Robot_texts = $pdo->prepare($sql);
    $Robot_texts->execute();
    
    $Robot_texts_array=[];
    while($Robot_textsRow=$Robot_texts->fetch(PDO::FETCH_ASSOC)){
        $Robot_texts_array[]=$Robot_textsRow;
    }
    echo json_encode($Robot_texts_array);
} catch (PDOException $e) {
    echo $e->getMessage();
}
?>