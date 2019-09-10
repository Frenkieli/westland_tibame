let demo_container = document.getElementsByClassName('demo_container')[0];
let demo_toparrow = document.getElementsByClassName('demo_toparrow')[0];
let demo_bottom = document.getElementsByClassName('demo_bottom')[0];
let demo_leftarrow = document.getElementsByClassName('demo_leftarrow')[0];
let demo_rightarrow = document.getElementsByClassName('demo_rightarrow')[0];

let containerX = -33.3333;
let containerY = -33.3333;

demo_rightarrow.addEventListener('click', moveRight, false);
demo_leftarrow.addEventListener('click', moveLeft, false);
demo_toparrow.addEventListener('click', moveTop, false);
demo_bottom.addEventListener('click', moveBottom, false);


document.addEventListener('keydown', keyMove, false);

let smallMap = document.querySelector(".map_container");
let demo_text=document.getElementsByClassName('demo_text')[4];
var place = 5;

function keyMove(e) {
    console.log(demo_text);
};
// 九宮格結構圖(var place對應位置圖):
// _____________
// | 1 | 2 | 3 | 
// _____________
// | 4 | 5 | 6 |
// _____________
// | 7 | 8 | 9 |
// _____________

function moveTop(e) {
    let removeChild =document.getElementsByClassName('point')[0]; //移動座標重置
    removeChild.remove();
    let removeBG =document.getElementsByClassName('demo_imgBG')[0]; //背景重置
    removeBG.remove();
    if (containerY <= -10) {
        containerY += 33.3333;
        demo_container.style.transform = `translate(${containerX}%,${containerY}%)`;
        if (containerY >= -10) {
            demo_toparrow.style.display = 'none';
        }
        demo_bottom.style.display = '';
    }
    if(place==5){
        let gateToWaterSlide_point =document.createElement('img');//增加入口到滑水道事件
        gateToWaterSlide_point.src="images/gameplay/point.svg";
        gateToWaterSlide_point.className='gateToWaterSlide_point point';
        smallMap.appendChild(gateToWaterSlide_point);
        place=2;
        let demo_text=document.getElementsByClassName('demo_text')[1];//增加滑水道背景
        let demo_imgBG =document.createElement('img');
        demo_imgBG.src="images/gameplay/bg-waterSlide.svg";
        demo_imgBG.className='demo_imgBG';
        demo_text.appendChild(demo_imgBG);
    }else
    if(place==4){
        let pirateShipToStore_point =document.createElement('img');//增加海盜船到商店事件
        pirateShipToStore_point.src="images/gameplay/point.svg";
        pirateShipToStore_point.className='pirateShipToStore_point point';
        smallMap.appendChild(pirateShipToStore_point);
        place=1;
        let demo_text=document.getElementsByClassName('demo_text')[0];//增加商店背景
        let demo_imgBG =document.createElement('img');
        demo_imgBG.src="images/gameplay/bg-store.svg";
        demo_imgBG.className='demo_imgBG';
        demo_text.appendChild(demo_imgBG);
    }else
    if(place==6){
        let rollerCoasterToSwivelChair_point =document.createElement('img');//增加雲霄飛車到旋轉椅事件
        rollerCoasterToSwivelChair_point.src="images/gameplay/point.svg";
        rollerCoasterToSwivelChair_point.className='rollerCoasterToSwivelChair_point point';
        smallMap.appendChild(rollerCoasterToSwivelChair_point);
        place=3;
        let demo_text=document.getElementsByClassName('demo_text')[2];//增加旋轉椅背景
        let demo_imgBG =document.createElement('img');
        demo_imgBG.src="images/gameplay/bg-swivelChair.svg";
        demo_imgBG.className='demo_imgBG';
        demo_text.appendChild(demo_imgBG);
    }else
    if(place==8){
        let FerrisWheelToGate_point =document.createElement('img');//增加摩天輪到入口事件
        FerrisWheelToGate_point.src="images/gameplay/point.svg";
        FerrisWheelToGate_point.className='FerrisWheelToGate_point point';
        smallMap.appendChild(FerrisWheelToGate_point);
        place=5;
        let demo_text=document.getElementsByClassName('demo_text')[4];//增加入口背景
        let demo_imgBG =document.createElement('img');
        demo_imgBG.src="images/gameplay/bg-entrance.svg";
        demo_imgBG.className='demo_imgBG';
        demo_text.appendChild(demo_imgBG);
    }else
    if(place==7){
        let carouselTopirateShip_point =document.createElement('img');//增加旋轉木馬到海盜船事件
        carouselTopirateShip_point.src="images/gameplay/point.svg";
        carouselTopirateShip_point.className='carouselTopirateShip_point point';
        smallMap.appendChild(carouselTopirateShip_point);
        place=4;
        let demo_text=document.getElementsByClassName('demo_text')[3];//增加海盜船背景
        let demo_imgBG =document.createElement('img');
        demo_imgBG.src="images/gameplay/bg-pirateShip.svg";
        demo_imgBG.className='demo_imgBG';
        demo_text.appendChild(demo_imgBG);
    }else
    if(place==9){
        let exitToRollerCoaster_point =document.createElement('img');//增加出口到雲霄飛車事件
        exitToRollerCoaster_point.src="images/gameplay/point.svg";
        exitToRollerCoaster_point.className='exitToRollerCoaster_point point';
        smallMap.appendChild(exitToRollerCoaster_point);
        place=6;
        let demo_text=document.getElementsByClassName('demo_text')[5];//增加雲霄飛車背景
        let demo_imgBG =document.createElement('img');
        demo_imgBG.src="images/gameplay/bg-rollerCoaster.svg";
        demo_imgBG.className='demo_imgBG';
        demo_text.appendChild(demo_imgBG);
    }
};

function moveRight(e) {
    let removeChild =document.getElementsByClassName('point')[0]; //移動座標重置
    removeChild.remove();
    let removeBG =document.getElementsByClassName('demo_imgBG')[0]; //背景重置
    removeBG.remove();
    // console.log(containerX);
    if (containerX >= -50) {
        containerX -= 33.3333;
        demo_container.style.transform = `translate(${containerX}%,${containerY}%)`;
        if (containerX <= -50) {
            demo_rightarrow.style.display = 'none';
        }
        demo_leftarrow.style.display = '';
        if(place==1){
            let storeToWaterSlide_point =document.createElement('img');//增加滑水道到商店事件
            storeToWaterSlide_point.src="images/gameplay/point.svg";
            storeToWaterSlide_point.className='storeToWaterSlide_point point';
            smallMap.appendChild(storeToWaterSlide_point);
            place=2;
            let demo_text=document.getElementsByClassName('demo_text')[1];//增加滑水道背景
            let demo_imgBG =document.createElement('img');
            demo_imgBG.src="images/gameplay/bg-waterSlide.svg";
            demo_imgBG.className='demo_imgBG';
            demo_text.appendChild(demo_imgBG);
        }else
        if(place==2){
            let WaterSlideToswivelChair_point =document.createElement('img');//增加滑水道到旋轉椅事件
            WaterSlideToswivelChair_point.src="images/gameplay/point.svg";
            WaterSlideToswivelChair_point.className='WaterSlideToswivelChair_point point';
            smallMap.appendChild(WaterSlideToswivelChair_point);
            place=3;
            let demo_text=document.getElementsByClassName('demo_text')[2];//增加旋轉椅背景
            let demo_imgBG =document.createElement('img');
            demo_imgBG.src="images/gameplay/bg-swivelChair.svg";
            demo_imgBG.className='demo_imgBG';
            demo_text.appendChild(demo_imgBG);
        }else
        if(place==4){
            let PirateShipToGate_point =document.createElement('img');//增加海盜船到入口事件
            PirateShipToGate_point.src="images/gameplay/point.svg";
            PirateShipToGate_point.className='PirateShipToGate_point point';
            smallMap.appendChild(PirateShipToGate_point);
            place=5;
            let demo_text=document.getElementsByClassName('demo_text')[4];//增加入口背景
            let demo_imgBG =document.createElement('img');
            demo_imgBG.src="images/gameplay/bg-entrance.svg";
            demo_imgBG.className='demo_imgBG';
            demo_text.appendChild(demo_imgBG);
        }else
            if(place==5){
            let gateTorollerCoaster_point =document.createElement('img');//增加入口到雲霄飛車事件
            gateTorollerCoaster_point.src="images/gameplay/point.svg";
            gateTorollerCoaster_point.className='gateTorollerCoaster_point point';
            smallMap.appendChild(gateTorollerCoaster_point);
            place=6;
            let demo_text=document.getElementsByClassName('demo_text')[5];//增加雲霄飛車背景
            let demo_imgBG =document.createElement('img');
            demo_imgBG.src="images/gameplay/bg-rollerCoaster.svg";
            demo_imgBG.className='demo_imgBG';
            demo_text.appendChild(demo_imgBG);
        }else
        if(place==8){
            let FerrisWheelToExit_point =document.createElement('img');//增加旋轉椅到出口事件
            FerrisWheelToExit_point.src="images/gameplay/point.svg";
            FerrisWheelToExit_point.className='FerrisWheelToExit_point point';
            smallMap.appendChild(FerrisWheelToExit_point);
            place=9;
            let demo_text=document.getElementsByClassName('demo_text')[8];//增加出口背景
            let demo_imgBG =document.createElement('img');
            demo_imgBG.src="images/gameplay/bg-out.svg";
            demo_imgBG.className='demo_imgBG';
            demo_text.appendChild(demo_imgBG);
        }else
        if(place==7){
            let CarouselToFerrisWheel_point =document.createElement('img');//增加旋轉木馬到摩天輪事件
            CarouselToFerrisWheel_point.src="images/gameplay/point.svg";
            CarouselToFerrisWheel_point.className='CarouselToFerrisWheel_point point';
            smallMap.appendChild(CarouselToFerrisWheel_point);
            place=8;
            let demo_text=document.getElementsByClassName('demo_text')[7];//增加摩天輪背景
            let demo_imgBG =document.createElement('img');
            demo_imgBG.src="images/gameplay/bg-ferrisWheel.svg";
            demo_imgBG.className='demo_imgBG';
            demo_text.appendChild(demo_imgBG);
        }
    }
};

function moveLeft(e) {
    let removeChild =document.getElementsByClassName('point')[0]; //移動座標重置
    removeChild.remove();
    let removeBG =document.getElementsByClassName('demo_imgBG')[0]; //背景重置
    removeBG.remove();
    if (containerX <= -10) {
        containerX += 33.3333;
        demo_container.style.transform = `translate(${containerX}%,${containerY}%)`;
        if (containerX >= -10) {
            demo_leftarrow.style.display = 'none';
        }
        demo_rightarrow.style.display = '';

        if(place==2){
            let WaterSlideToStore_point =document.createElement('img');//增加滑水道到商店事件
            WaterSlideToStore_point.src="images/gameplay/point.svg";
            WaterSlideToStore_point.className='WaterSlideToStore_point point';
            smallMap.appendChild(WaterSlideToStore_point);
            place=1;
            let demo_text=document.getElementsByClassName('demo_text')[0];//增加商店背景
            let demo_imgBG =document.createElement('img');
            demo_imgBG.src="images/gameplay/bg-store.svg";
            demo_imgBG.className='demo_imgBG';
            demo_text.appendChild(demo_imgBG);
        }else
        if(place==3){
            let swivelChairToWaterSlide_point =document.createElement('img');//增加旋轉椅到滑水道事件
            swivelChairToWaterSlide_point.src="images/gameplay/point.svg";
            swivelChairToWaterSlide_point.className='swivelChairToWaterSlide_point point';
            smallMap.appendChild(swivelChairToWaterSlide_point);
            place=2;
            let demo_text=document.getElementsByClassName('demo_text')[1];//增加滑水道背景
            let demo_imgBG =document.createElement('img');
            demo_imgBG.src="images/gameplay/bg-waterSlide.svg";
            demo_imgBG.className='demo_imgBG';
            demo_text.appendChild(demo_imgBG);
        }else
        if(place==5){
            let gateToPirateShip_point =document.createElement('img');//增加旋轉椅到滑水道事件
            gateToPirateShip_point.src="images/gameplay/point.svg";
            gateToPirateShip_point.className='gateToPirateShip_point point';
            smallMap.appendChild(gateToPirateShip_point);
            place=4;
            let demo_text=document.getElementsByClassName('demo_text')[3];//增加海盜船背景
            let demo_imgBG =document.createElement('img');
            demo_imgBG.src="images/gameplay/bg-pirateShip.svg";
            demo_imgBG.className='demo_imgBG';
            demo_text.appendChild(demo_imgBG);
        }else
        if(place==6){
            let rollerCoasterToGate_point =document.createElement('img');//增加雲霄飛車到入口事件
            rollerCoasterToGate_point.src="images/gameplay/point.svg";
            rollerCoasterToGate_point.className='rollerCoasterToGate_point point';
            smallMap.appendChild(rollerCoasterToGate_point);
            place=5;
            let demo_text=document.getElementsByClassName('demo_text')[4];//增加入口背景
            let demo_imgBG =document.createElement('img');
            demo_imgBG.src="images/gameplay/bg-entrance.svg";
            demo_imgBG.className='demo_imgBG';
            demo_text.appendChild(demo_imgBG);
        }else
        if(place==9){
            let ExitToFerrisWheel_point =document.createElement('img');//增加出口到摩天輪事件
            ExitToFerrisWheel_point.src="images/gameplay/point.svg";
            ExitToFerrisWheel_point.className='ExitToFerrisWheel_point point';
            smallMap.appendChild(ExitToFerrisWheel_point);
            place=8;
            let demo_text=document.getElementsByClassName('demo_text')[7];//增加摩天輪背景
            let demo_imgBG =document.createElement('img');
            demo_imgBG.src="images/gameplay/bg-ferrisWheel.svg";
            demo_imgBG.className='demo_imgBG';
            demo_text.appendChild(demo_imgBG);
        }else
        if(place==8){
            let FerrisWheelToCarousel_point =document.createElement('img');//增加摩天輪到旋轉木馬事件
            FerrisWheelToCarousel_point.src="images/gameplay/point.svg";
            FerrisWheelToCarousel_point.className='FerrisWheelToCarousel_point point';
            smallMap.appendChild(FerrisWheelToCarousel_point);
            place=7;
            let demo_text=document.getElementsByClassName('demo_text')[6];//增加旋轉木馬背景
            let demo_imgBG =document.createElement('img');
            demo_imgBG.src="images/gameplay/bg-carousel.svg";
            demo_imgBG.className='demo_imgBG';
            demo_text.appendChild(demo_imgBG);
        }
    }
};

function moveBottom(e) {
    let removeChild =document.getElementsByClassName('point')[0]; //移動座標重置
    removeChild.remove();
    let removeBG =document.getElementsByClassName('demo_imgBG')[0]; //背景重置
    removeBG.remove();
    if (containerY >= -50) {
        containerY -= 33.3333;
        demo_container.style.transform = `translate(${containerX}%,${containerY}%)`;
        if (containerY <= -50) {
            demo_bottom.style.display = 'none';
        }
        demo_toparrow.style.display = '';
    }
    if(place==2){
        let WaterSlideToGate_point =document.createElement('img');//增加滑水道到入口事件
        WaterSlideToGate_point.src="images/gameplay/point.svg";
        WaterSlideToGate_point.className='WaterSlideToGate_point point';
        smallMap.appendChild(WaterSlideToGate_point);
        place=5;
        let demo_text=document.getElementsByClassName('demo_text')[4];//增加入口背景
        let demo_imgBG =document.createElement('img');
        demo_imgBG.src="images/gameplay/bg-entrance.svg";
        demo_imgBG.className='demo_imgBG';
        demo_text.appendChild(demo_imgBG);
    }else
    if(place==1){
        let StoreTopPirateShipe_point =document.createElement('img');//增加商店到海盜船事件
        StoreTopPirateShipe_point.src="images/gameplay/point.svg";
        StoreTopPirateShipe_point.className='StoreTopPirateShipe_point point';
        smallMap.appendChild(StoreTopPirateShipe_point);
        place=4;
        let demo_text=document.getElementsByClassName('demo_text')[3];//增加海盜船背景
        let demo_imgBG =document.createElement('img');
        demo_imgBG.src="images/gameplay/bg-pirateShip.svg";
        demo_imgBG.className='demo_imgBG';
        demo_text.appendChild(demo_imgBG);
    }else
    if(place==3){
        let swivelChairToRollerCoaster_point =document.createElement('img');//增加旋轉椅到雲霄飛車事件
        swivelChairToRollerCoaster_point.src="images/gameplay/point.svg";
        swivelChairToRollerCoaster_point.className='swivelChairToRollerCoaster_point point';
        smallMap.appendChild(swivelChairToRollerCoaster_point);
        place=6;
        let demo_text=document.getElementsByClassName('demo_text')[5];//增加雲霄飛車背景
        let demo_imgBG =document.createElement('img');
        demo_imgBG.src="images/gameplay/bg-rollerCoaster.svg";
        demo_imgBG.className='demo_imgBG';
        demo_text.appendChild(demo_imgBG);
    }else
        if(place==5){
        let gateToFerrisWheel_point =document.createElement('img');//增加入口到摩天輪事件
        gateToFerrisWheel_point.src="images/gameplay/point.svg";
        gateToFerrisWheel_point.className='gateToFerrisWheel_point point';
        smallMap.appendChild(gateToFerrisWheel_point);
        place=8;
        let demo_text=document.getElementsByClassName('demo_text')[7];//增加摩天輪背景
        let demo_imgBG =document.createElement('img');
        demo_imgBG.src="images/gameplay/bg-ferrisWheel.svg";
        demo_imgBG.className='demo_imgBG';
        demo_text.appendChild(demo_imgBG);
    }else
    if(place==4){
        let pirateShipTocarousel_point =document.createElement('img');//增加海盜船到旋轉木馬事件
        pirateShipTocarousel_point.src="images/gameplay/point.svg";
        pirateShipTocarousel_point.className='pirateShipTocarousel_point point';
        smallMap.appendChild(pirateShipTocarousel_point);
        place=7;
        let demo_text=document.getElementsByClassName('demo_text')[6];//增加旋轉木馬背景
        let demo_imgBG =document.createElement('img');
        demo_imgBG.src="images/gameplay/bg-carousel.svg";
        demo_imgBG.className='demo_imgBG';
        demo_text.appendChild(demo_imgBG);
    }else
    if(place==6){
        let rollerCoasterToExit_point =document.createElement('img');//增加出口到雲霄飛車事件
        rollerCoasterToExit_point.src="images/gameplay/point.svg";
        rollerCoasterToExit_point.className='rollerCoasterToExit_point point';
        smallMap.appendChild(rollerCoasterToExit_point);
        place=9;
        let demo_text=document.getElementsByClassName('demo_text')[8];//增加出口背景
        let demo_imgBG =document.createElement('img');
        demo_imgBG.src="images/gameplay/bg-out.svg";
        demo_imgBG.className='demo_imgBG';
        demo_text.appendChild(demo_imgBG);
    }
};

let BGdown=window.addEventListener('load',function (){ 
    let demo_imgBG =document.createElement('img');//自動載入入口背景事件
    demo_imgBG.src="images/gameplay/bg-entrance.svg";
    demo_imgBG.className='demo_imgBG';
    demo_text.appendChild(demo_imgBG);
},false)