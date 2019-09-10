//設定navbar的會員圖示 id = "spanLogin"

function showLoginForm() {
    //檢查登入bar面版上 spanLogin 的字是登入或登出
    //如果是登入，就顯示登入用的燈箱(lightBox)
    //如果是登出
    //將登入bar面版上，登入者資料清空r
    //將頁面上的使用者資料清掉
    // $id("passwordLightBox").style.display = "none";
    var spanLogin = document.getElementById("spanLogin")

    // 假使點擊nevbar的會員
    if($id('spanLogin').innerHTML == "登入"){ //未登入
        $id('lightBox').style.display = 'block';
    }else{                                       //登入   
      $id('lightBox').style.display = 'none';
      islogin = true;
    }
  } 
  function cancelLogin(){
    //將登入表單上的資料清空，並將燈箱隱藏起來
      document.getElementById("lightBox").style.display = "none";
      memId.value="";
      memPsw.value="";
  }
  function init(){
    //===設定spanLogin.onclick 事件處理程序是 showLoginForm
    document.getElementById("spanLogin").onclick = showLoginForm;
  
    //===設定btnLogin.onclick 事件處理程序是 sendForm
    // document.getElementById("btnLogin").onclick = sendForm;
    //===設定btnLoginCancel.onclick 事件處理程序是 cancelLogin
    document.getElementById("login_cancel").onclick = cancelLogin;
  }; //window.onload
  
  window.onload=init;