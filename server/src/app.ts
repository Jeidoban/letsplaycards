import { Socket } from 'dgram';
import express from 'express';
import Game from './game'
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

let games: {[key: string]: Game}

app.get('/', (req, res) => {
    res.send('Some stuff!');
    let game = new Game('cool', 'Jade', ['CAH Base Set', '90s Nostalgia Pack', 'CAH: Box Expansion'])
    game.getCards()
})

io.on('connection', (socket: Socket) => {
    console.log('Connected!')
    
    socket.on('createGame', createGame) 

    socket.on('disconnect', () => {
        console.log('Disconnected!')
    })
});

server.listen(3001, () => {
    console.log('listening on port 3001');
});

function createGame(gameID: string, ownerName: string, expansions: string[]) {
    games[gameID] = new Game(gameID, ownerName, expansions)
}