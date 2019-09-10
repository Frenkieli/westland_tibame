<?php
try {
    require_once("connectWestland.php");
    $sql = "select * from random_question";
    $questions = $pdo->prepare($sql);
    $questions->execute();
    
    $questions_array=[];
    while($questionsRow=$questions->fetch(PDO::FETCH_ASSOC)){
        $questions_array[]=$questionsRow;
    }
    echo json_encode($questions_array);
} catch (PDOException $e) {
    echo $e->getMessage();
}
?>