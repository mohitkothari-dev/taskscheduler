var express = require('express');
var app = express();

var server = app.listen(process.env.PORT || 3000);

app.use(express.static('public'));

console.log(`My Socket Server is Running at http://localhost:3000`);

var socket = require('socket.io');
var io = socket(server);
io.sockets.on('connection', newConnection);

function newConnection(socket) {
    console.log('New Connection:' + socket.id);
}