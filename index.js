var express = require('express'); 
var app = express(); 

var http = require('http').Server(app); 

var socket = require('socket.io'); 
var io = socket(http);

app.get('/', function(req, res)
{
res.sendFile(__dirname + '/index.html'); 
}
);

io.on('connection', function(socket){
	console.log('a user is connected'); 
	socket.on('chat message', function(msg)
	{
		io.emit('chat message', msg); 
	}); 
});

http.listen(80, function()
{
	console.log('listening on 80'); 
}
);


