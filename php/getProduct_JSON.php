<?php
    try{
        require_once("connectWestland.php");
        $sql ="select * from product";
        $products =$pdo->prepare($sql);
        $products->execute();
        if($products->rowCount()==0){
            echo "{}";
        }else{
            $product_array=[];
            while($productRow=$products->fetch(PDO::FETCH_ASSOC)){
                $product_array[]=$productRow;
            }
            echo json_encode($product_array);
        }

    }catch(PDOException $e){
        echo $e->getMessage();
    }
?>