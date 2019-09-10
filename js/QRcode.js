// <!-- 產生QRcode -->
$(document).ready(function () {
    let array = ['e0000000001', 'f0000000001', 'f0000000002', 'f0000000003', 'e0000000002', 'f0000000004', 'f0000000005', 'f0000000006', 'e0000000003'];
    for (let i = 0; i < 9; i++) {
        theURL = array[i];
        // qrcodes[i].text(array[i]);
        $(`#QRcode${i}`).qrcode({
            text: theURL,
            size: 200,
            fill: '#000',
            background: '#fff',
            // mode: 2,
            // label: 'silvia.com',
            // fontname: 'Tahoma',
            // fontcolor: 'red',
        });
    }
});

let check = false;
let cameranum = 0;
let cameranow = 0;
let scanner = new Instascan.Scanner({
    video: document.getElementById('preview'),
    mirror: false
});
// 開啟一個新的掃描
// 宣告變數scanner，在html<video>標籤id為preview的地方開啟相機預覽。
// Notice:這邊注意一定要用<video>的標籤才能使用，詳情請看他的github API的部分解釋。
let buttom = document.querySelectorAll('.buttom_style');
scanner.addListener('scan', function (content) {
    console.log(content);
    scanner.stop();
    document.querySelector(".section_camera").style.display = "none";
});
//開始偵聽掃描事件，若有偵聽到印出內容。

for (let i = 0; i < buttom.length; i++) {
    buttom[i].addEventListener('click', openCamera, false);
}

function openCamera() {
    Instascan.Camera.getCameras().then(function (cameras) {
        //取得設備的相機數目
        if (cameras.length > 0) {
            ///若設備相機數目大於0 則先開啟第0個相機(程式的世界是從第零個開始的)
            scanner.start(cameras[1]);
            check = true;
        } else {
            //若設備沒有相機數量則顯示"No cameras found";
            //這裡自行判斷要寫什麼
            console.error('No cameras found.');
        }
    }).catch(function (e) {

        console.error(e);
    });
    document.querySelector(".section_camera").style.display = "flex";
}