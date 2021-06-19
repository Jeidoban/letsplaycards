"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
var http = require('http');
var server = http.createServer(app);
var Server = require("socket.io").Server;
var io = new Server(server);
app.get('/', function (req, res) {
    res.send('Some stuff!');
});
io.on('connection', function (socket) {
    console.log('Connected!');
    socket.emit('hello', 'some words!', 'for', 'you');
    socket.on('disconnect', function () {
        console.log('Disconnected!');
    });
});
server.listen(3001, function () {
    console.log('listening on port 3000');
});
//# sourceMappingURL=app.js.map