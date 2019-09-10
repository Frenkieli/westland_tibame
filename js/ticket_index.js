// 小圖換大圖
function showLarge(e){
    let now = e.target;
    let change = now.src.replace("_small","").replace(".png",".svg");
    document.getElementById("big").src = change;
};

//選擇樣式
function showopa(e){
    let opabox = document.getElementById("customize_opabox");
    if(opabox.lastElementChild){
        let child = opabox.lastElementChild;
        opabox.removeChild(child);
        let now = e.target;
        let change = now.src;
        let opaimg = document.createElement("img");
        opaimg.src = change;
        opabox.appendChild(opaimg);
    }else{
        let now = e.target;
        let change = now.src;
        let opaimg = document.createElement("img");
        opaimg.src = change;
        opabox.appendChild(opaimg);
    }
};

//放大樣式
function plusitem(){
    let opabox = document.getElementById("customize_opabox");
    let width = parseInt(window.getComputedStyle(opabox).width);
    if(width >= 240){
        width = 240;
    }else{
        widthnow = width + 10 +"px";
        opabox.style.width = widthnow;
    }
    console.log(widthnow); 
};

//縮小樣式
function minusitem(){
    let opabox = document.getElementById("customize_opabox");
    let width = parseInt(window.getComputedStyle(opabox).width);
    // let width = parseInt(opabox.style.width);  //只能抓到寫在inline-style的
    console.log(width);
    if(width <= 50){
        width = 50;
    }else{
        widthnow = width - 10 +"px";
        opabox.style.width = widthnow;
    }
    console.log(widthnow); 
};

// 樣式向右轉
function rightitem(){
    let opabox = document.getElementById("customize_opabox");
    itemdeg+=10;
    opabox.style.transform = "rotate("+itemdeg+"deg)";
}

// 樣式向左轉
function leftitem(){
    let opabox = document.getElementById("customize_opabox");
    itemdeg-=10;
    opabox.style.transform = "rotate("+itemdeg+"deg)";
}

//刪除樣式
function trashitem(){
    let opabox = document.getElementById("customize_opabox");
    let child = opabox.firstElementChild;
    opabox.removeChild(child);
};

function init(){
    // 小圖換大圖
    let img = document.getElementsByClassName("mascots");
    for( let i=0 ; i<img.length ; i++ ){
        img[i].onclick = showLarge;
    }
    // 選擇樣式
    let itemimg = document.getElementsByClassName("items_cus");
    for( let i=0 ; i<itemimg.length ; i++ ){
        itemimg[i].onclick = showopa;
    }
    // 放大樣式鈕
    let plus = document.getElementById("opabox_plus");
    plus.addEventListener("click",plusitem);
    // 縮小樣式鈕
    let minus = document.getElementById("opabox_minus");
    minus.addEventListener("click",minusitem);
    //原始角度0
    itemdeg = 0;
    // 選轉向右式鈕
    let turnright = document.getElementById("opabox_right");
    turnright.addEventListener("click",rightitem);
    // 選轉向左式鈕
    let turnleft = document.getElementById("opabox_left");
    turnleft.addEventListener("click",leftitem);
    // 垃圾桶鈕
    let trash = document.getElementById("opabox_del");
    trash.addEventListener("click",trashitem);
}

//拖拉樣式位置
$("#customize_opabox").draggable({
    containment: ".customize_mascot",
    cursor: "move", 
});


window.onload = init;