"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var game_1 = __importDefault(require("./game"));
var app = express_1.default();
var http = require('http');
var server = http.createServer(app);
var Server = require("socket.io").Server;
var io = new Server(server);
var games;
app.get('/', function (req, res) {
    res.send('Some stuff!');
});
io.on('connection', function (socket) {
    console.log('Connected!');
    socket.on('createGame', createGame);
    socket.on('disconnect', function () {
        console.log('Disconnected!');
    });
});
server.listen(3001, function () {
    console.log('listening on port 3001');
});
function createGame(gameID, ownerName, expansions) {
    games[gameID] = new game_1.default(gameID, ownerName, expansions);
}
//# sourceMappingURL=app.js.map