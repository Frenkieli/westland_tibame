window.onload = function() {

 //定義變數
  var form = document.getElementById('messagesBox');
  var messageField = document.getElementById('message');
  var messagesList = document.getElementById('messages');
  var socketStatus = document.getElementById('status');
  var closeBtn = document.getElementById('close');


  // 建立WebSocket伺服器
  var socket = new WebSocket('wss://secure.example.com/wsapi');


  // 建立一個fun錯誤產生會有log
  socket.onerror = function(error) {
    console.log('WebSocket Error: ' + error);
  };


  // 建立一個fun偵測確定連線成功訊息
  socket.onopen = function(event) {
    socketStatus.innerHTML = 'Connected to: ' + event.currentTarget.url;
    socketStatus.className = 'open';
  };


  // 寄出訊息
  socket.onmessage = function(event) {
    var message = event.data;
    // messagesList.innerHTML += '<div class="message_container"><img class="who" src="pic/information/who.svg" alt="頭像"><div id="messagesBox"><div id="message">' + message + '</div></div></div>';
  };


  //建立一個fun是WebSocket關閉開關
  socket.onclose = function(event) {
    socketStatus.innerHTML = 'Disconnected from WebSocket.';
    socketStatus.className = 'closed';
  };


  // 建立一個fun送出訊息
  form.onsubmit = function(e) {
    e.preventDefault();
    var message = messageField.value;
    socket.send(message);
    messagesList.innerHTML += '<div class="message_container"><img class="who" src="images/information/who.svg" alt="頭像"><div id="messagesBox"><div id="message" style="border-radius:10px;">' + message + '</div></div></div>';
    messageField.value = '';
    return false;
  };
 //建立一個fun是WebSocket關閉開關
  closeBtn.onclick = function(e) {
    e.preventDefault();
    //WebSocket關閉開關
    socket.close();
    return false;
  };
};