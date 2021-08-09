import express from 'express';
import Game from './game'
import { ExpansionSets } from './types';
const app = express();
const http = require('http');
const server = http.createServer(app);
import { Server } from 'socket.io';
import { Socket } from 'socket.io';
const io = new Server(server);
import { client } from './config'

let games: {[key: string]: Game} = {}

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
        let exp: ExpansionSets = []

        for (const doc of docs) {
            if (doc.name === 'CAH Base Set') {
                exp.unshift({name: doc.name, checked: true})
            } else {
                exp.push({name: doc.name, checked: false})
            }
        }
        
        callback(exp)
        //await client.close()
    } finally {
        
    }
}

function createGame(gameID: string, ownerName: string, expansions: string[], callback: Function) {
    games[gameID] = new Game(gameID, ownerName, expansions)
    //games[gameID].getCards()
    callback('ok')
}