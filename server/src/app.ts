import express from 'express';
import Game from './game'
const app = express();
const http = require('http');
const server = http.createServer(app);
import { Server } from 'socket.io';
import { Socket } from 'socket.io';
const io = new Server(server);
import { MongoClient } from 'mongodb';

const uri = "mongodb+srv://jade424433:fiqva8nHf4ePy4WN@cluster0.bhstq.mongodb.net/letsplaycards?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let games: {[key: string]: Game}

app.get('/', (req, res) => {
    res.send('Some stuff!');
    // let game = new Game('cool', 'Jade', ['CAH Base Set', '90s Nostalgia Pack', 'CAH: Box Expansion'])
    // game.getCards()
})

io.on('connection', (socket: Socket) => {
    console.log('Connected!')
    
    socket.on('createGame', createGame) 
    socket.on('getExpansions', getExpansions)
    
    socket.on('disconnect', () => {
        console.log('Disconnected!')
    })
})

server.listen(3001, () => {
    console.log('listening on port 3001');
});

async function getExpansions(callback: Function) {
    try {
        await client.connect();
    
        const database = client.db('letsplaycards');
        const expansions = database.collection('expansions');
        const docs = await expansions.find().toArray()
        let exp: {name: string, checked: boolean}[] = []

        for (const doc of docs) {
            exp.push({name: doc.name, checked: false})
        }
        
        callback(exp)
    } finally {
        await client.close()
    }
}

function createGame(gameID: string, ownerName: string, expansions: string[], callback: Function) {
    games[gameID] = new Game(gameID, ownerName, expansions)
    callback('ok')
}