
let door_text = document.getElementsByClassName('door_text');
let backLight = 1;
let bulletstop;

function openDoor() {
    let door_open = document.getElementsByClassName('door_open');
    let door_container = document.getElementsByClassName('door_container')[0];
    let door_containertitlet = document.getElementsByClassName('door_containertitlet')[0];
    clearInterval(bulletstop);
    for (i = 0; i < door_open.length; i++) {
        if (i == 1) {

            door_open[i].style.transform = 'rotateY(90deg)';

        } else {
            door_open[i].style.transform = 'rotateY(-90deg)';


        }

        setTimeout(() => {
            document.getElementsByClassName('door')[0].style.clipPath = 'polygon(0% 0%, 0% 100%, 0% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 0%, 0 100%, 100% 100%, 100% 0%)';
            // document.getElementsByTagName('body')[0].style.opacity = '0';
        }, 500);

    }
    if (this.id == 'fontend') {
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 1500);
    } else {
        setTimeout(() => {
            window.location.href = 'backend/backend.html';
        }, 1500);
    }
}

for (i = 0; i < door_text.length; i++) {
    door_text[i].addEventListener('click', openDoor, false);
}

$(document).ready(function () {
    bulletstop = setInterval(function () {
        a = Math.round(Math.random() * 100);
        b = Math.round(Math.random() * 100);
        $('.start_door').append(`<div class="bullet" style="top: ${a}%;left:${b}%;"><img src="images/entrance/bullet.svg" alt=""></div>`);
        setTimeout(function () {
            $('.bullet:nth-child(6)').remove();
        }, 100)

    }, 500);
});

