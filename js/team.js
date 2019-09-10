let wanted_name = '';
let wanted_playerphoto = '';
let wanted_teamname = '';
let wanted_bounty = '';
let wanted_mascot = '';
let info_teamname = '';
let info_teamslogan = '';
let info_teamcount = '';

function $id(id) {
    return document.getElementById(id);
}
function join() {
    document.querySelector('.select_ticket_content').innerText="請選擇加入隊伍使用的門票 :";
    $id("joined").style.display = 'none';
    $id("create").style.display = 'none';
    $id("join").style.display = '';
    $id("team_join").classList.add('team_option_select');
    $id("team_joined").classList.remove('team_option_select');
    $id("team_create").classList.remove('team_option_select');
    var select = document.querySelectorAll('#join .team_list_box')
    // console.log(select.length);
    if (select.length == 0)
        document.querySelector('.no_can_join').style.display = '';
    else
        document.querySelector('.no_can_join').style.display = 'none';
    select.forEach((ele, index) => {
        ele.classList.add('click_join');
        ele.style.cursor = "pointer";
        ele.removeEventListener('click', dropOut, false);
    });
    var click_joins = document.querySelectorAll('.click_join');
    click_joins.forEach((ele, index) => {
        ele.addEventListener('click', joinInvitation, false);
        // console.log('!');    
    });
    // for(i in select){
    //     select[i].addEventListener('click',joinInvitation,false);
    // }
    // let aa = [...document.querySelectorAll('#join .team_list_box')];
    // console.log(aa); 
    // for(let i=0 ; i<document.querySelectorAll('.team_list_box').length;i++){
    //     document.querySelectorAll('.team_list_box')[i].addEventListener("click",joinInvitation,false);
    // }
    $id("ok").innerText = '加入團隊';
    $id("no").innerText = '我不要';
}

function joinInvitation() {
    // console.log(1);
    this.style.cursor='context-menu';
    $id("team_join_window").style.opacity = 1;
    $id("team_join_window").style.clipPath = "polygon(0 0% , 100% 00% , 100% 100%,0 100%)";
    let select_team = $id('select_team');
    select_team.removeChild(select_team.firstChild);
    wanted_name = this.firstElementChild.firstElementChild.innerText;
    let playerphoto_src = this.firstElementChild.firstElementChild.nextElementSibling.firstElementChild.src;
    wanted_playerphoto = playerphoto_src.substr(playerphoto_src.indexOf('images'));
    wanted_teamname = this.firstElementChild.firstElementChild.nextElementSibling.nextElementSibling.innerText;
    wanted_bounty = this.firstElementChild.lastElementChild.previousElementSibling.innerText;
    let mascot_src = this.firstElementChild.lastElementChild.firstElementChild.src;
    wanted_mascot = mascot_src.substr(mascot_src.indexOf('images'));
    console.log(this.lastElementChild.firstElementChild);
    info_teamname = this.lastElementChild.firstElementChild.nextElementSibling.innerText;
    info_teamslogan = this.lastElementChild.lastElementChild.previousElementSibling.innerText;
    info_teamcount = this.lastElementChild.lastElementChild.firstElementChild.innerText;
    console.log(wanted_name);
    console.log(wanted_playerphoto);
    console.log(wanted_teamname);
    console.log(wanted_bounty);
    console.log(wanted_mascot);
    console.log(info_teamname);
    console.log(info_teamslogan);
    console.log(info_teamcount);
    let reference_this = this;
    let cl = this.cloneNode(true);
    select_team.appendChild(cl);
    $id("no").addEventListener("click", () => {
        $id("team_join_window").style.clipPath = "polygon(0 50% , 100% 50% , 100% 50%,0 50%)";
        $id("team_join_window").style.opacity = 0;
        $id("ok").removeEventListener("click", move, false);
        this.style.cursor="pointer";;
    }, false);
    $id("ok").addEventListener("click", move, false);
    function move() {
        reference_this.remove();
        $id("joined").append(reference_this);
        $id("team_join_window").style.clipPath = "polygon(0 50% , 100% 50% , 100% 50%,0 50%)";
        $id("team_join_window").style.opacity = 0;
        reference_this.classList.remove('click_join');
        var select = document.querySelectorAll('#join .team_list_box')
        if (select.length == 0)
            document.querySelector('.no_can_join').style.display = '';
    }
}
function joined() {
    document.querySelector('.select_ticket_content').innerText="加入此隊伍所選擇的票號 :";
    $id("join").style.display = 'none';
    $id("create").style.display = 'none';
    $id("joined").style.display = '';
    $id("team_joined").classList.add('team_option_select');
    $id("team_join").classList.remove('team_option_select');
    $id("team_create").classList.remove('team_option_select');
    let select = document.querySelectorAll('#joined .team_list_box');
    for (let i = 0; i < document.querySelectorAll('.team_list_box').length; i++) {
        document.querySelectorAll('.team_list_box')[i].removeEventListener('click', joinInvitation, false);
    }
    if (select.length == 0)
        document.querySelector('.no_joined').style.display = '';
    else
        document.querySelector('.no_joined').style.display = 'none';
    select.forEach((ele, index) => {
        ele.classList.add('click_joined');
        ele.style.cursor = "pointer";
        ele.removeEventListener('click', joinInvitation, false);
    });
    let click_joined = document.querySelectorAll('.click_joined');
    click_joined.forEach((ele, index) => {
        ele.addEventListener('click', dropOut, false);
    });
    $id("ok").innerText = '退出團隊';
    $id("no").innerText = '我不想';
}

function dropOut() {
    // console.log(2);
    this.style.cursor='context-menu';
    $id("team_join_window").style.opacity = 1;
    $id("team_join_window").style.clipPath = "polygon(0 0% , 100% 00% , 100% 100%,0 100%)";
    let select_team = $id('select_team');
    select_team.removeChild(select_team.firstChild);
    wanted_name = this.firstElementChild.firstElementChild.innerText;
    let playerphoto_src = this.firstElementChild.firstElementChild.nextElementSibling.firstElementChild.src;
    wanted_playerphoto = playerphoto_src.substr(playerphoto_src.indexOf('images'));
    wanted_teamname = this.firstElementChild.firstElementChild.nextElementSibling.nextElementSibling.innerText;
    wanted_bounty = this.firstElementChild.lastElementChild.previousElementSibling.innerText;
    let mascot_src = this.firstElementChild.lastElementChild.firstElementChild.src;
    wanted_mascot = mascot_src.substr(mascot_src.indexOf('images'));
    console.log(this.lastElementChild.firstElementChild);
    info_teamname = this.lastElementChild.firstElementChild.nextElementSibling.innerText;
    info_teamslogan = this.lastElementChild.lastElementChild.previousElementSibling.innerText;
    info_teamcount = this.lastElementChild.lastElementChild.firstElementChild.innerText;
    console.log(wanted_name);
    console.log(wanted_playerphoto);
    console.log(wanted_teamname);
    console.log(wanted_bounty);
    console.log(wanted_mascot);
    console.log(info_teamname);
    console.log(info_teamslogan);
    console.log(info_teamcount);
    let reference_this = this;
    let c = this.cloneNode(true);
    select_team.appendChild(c);
    $id("no").addEventListener("click", () => {
        $id("team_join_window").style.clipPath = "polygon(0 50% , 100% 50% , 100% 50%,0 50%)";
        $id("team_join_window").style.opacity = 0;
        $id("ok").removeEventListener("click", move, false);
        this.style.cursor="pointer";;
    }, false);
    $id("ok").addEventListener("click", move, false);
    function move() {
        reference_this.remove();
        $id("join").append(reference_this);
        $id("team_join_window").style.clipPath = "polygon(0 50% , 100% 50% , 100% 50%,0 50%)";
        $id("team_join_window").style.opacity = 0;
        reference_this.classList.remove('click_joined');
        var select = document.querySelectorAll('#joined .team_list_box')
        if (select.length == 0)
            document.querySelector('.no_joined').style.display = '';
    }
}

function create() {
    $id("join").style.display = 'none';
    $id("joined").style.display = 'none';
    $id("create").style.display = '';
    $id("team_join").classList.remove('team_option_select');
    $id("team_joined").classList.remove('team_option_select');
    $id("team_create").classList.add('team_option_select');
}

window.addEventListener("load", () => {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 100,
        nav: true,
        // dots: true,
        dotsEach: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
    $id("team_join").addEventListener("click", join, false);
    $id("team_joined").addEventListener("click", joined, false);
    $id("team_create").addEventListener("click", create, false);
    document.querySelector('.create_team_name').addEventListener("input",()=>{
        let select=document.querySelector('.create_team_name').value;
        document.querySelector('.team_name_remainder').innerText=6-select.length;
    },false);
    document.querySelector('.create_team_slogan').addEventListener("input",()=>{
        let select=document.querySelector('.create_team_slogan').value;
        document.querySelector('.team_slogan_remainder').innerText=40-select.length;
    },false);
    document.querySelector('.no_can_join').style.display = "none";
    document.querySelector('.no_joined').style.display = "none";
    document.querySelector('.no_can_join').style.opacity = 1;
    document.querySelector('.no_joined').style.opacity = 1;
    join();
}, false);