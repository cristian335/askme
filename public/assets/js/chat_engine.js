var socket = io();

socket.on('connect', function(){
    console.log('Connected to server');
});


socket.on('disconnect', function () {
    console.log('Disconnected from server');
});

socket.on('newMessage', function(message) {
    var list = document.createElement("li");
    var mess = document.createTextNode(`${message.from}: ${message.text}`);
    list.appendChild(mess);
    document.getElementById("messages").appendChild(list);
});

function sendMessage () {

    let name = document.getElementById("name-form").value;
    let message = document.getElementById("message-form").value;
    
    socket.emit('createMessage', {
        from: name,
        text: message
    }, function (){
    
    }); 

    document.getElementById("message-form").value = "";
};

document.getElementById("send-message").addEventListener("click", sendMessage);
