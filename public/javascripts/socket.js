$(function () {
  var socket = io();
  $('form').submit(function(){
    var obj = { nickname: $('#nickname').val(), msg: $('#m').val()};
    socket.emit('chat message', obj);
    msg = obj.nickname + ":" + obj.msg;
    $('#messages').append($('<li>').text(msg));
    $('#m').val('');
    return false;
  });
  socket.on('chat message', function(msg){
    $('#messages').append($('<li>').text(msg));
  });
  socket.on('user connection', function(msg){
    $('#messages').append($('<li>').text(msg));
  });

});