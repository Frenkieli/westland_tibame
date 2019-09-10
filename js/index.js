// 控制首頁第一屏的動畫

setTimeout(() => {
    let winnerPeoples = document.querySelectorAll('.Podium_winner img:first-child');
    for (let i = 0; i < winnerPeoples.length; i++) {
        winnerPeoples[i].className = 'winnermove';
        console.log('開始');
    }
}, 1200);


// 商品的套件程式碼

var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,
    prevButton: '.swiper-button-prev',
    nextButton: '.swiper-button-next',
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
    },
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});
let sliderWidth = document.getElementsByClassName('slider_container')[0].offsetWidth;
let sliderHeight = document.getElementsByClassName('slider_container')[0].offsetHeight;
let facility_slider = document.getElementsByClassName('facility_slider')[0];

document.getElementsByClassName('slider_container')[0].style.perspective = sliderWidth * 5 + "px";
console.log(sliderWidth, "====", sliderHeight);
$('.slider_container').polygon({

    // width of the cube slider
    width: sliderWidth,

    // height of the cube slider
    height: sliderHeight,

    // autoplay interval
    timer: false,
});