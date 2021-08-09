import Player from './player'
import { client } from './config'

class Game {
    highestScore = 0
    expansions: string[]
    blackCardDrawPile: Object[] = []
    whiteCardDrawPile: Object[] = []
    currentBlackCard = ''
    gameID: string
    players: {[key: string]: Player} = {}
    password?: string
    maxCardsInHand = 10

    constructor(gameID: string, gameOwner: string, expansions: string[], password?: string) {
        this.gameID = gameID
        this.password = password
        this.expansions = expansions
        this.addPlayer(gameOwner, true)
        this.getCards()
    }

    updateScore() {
    
    }

    async dealCards() {
        // for (const player in this.players) {
        //     const cards = this.players[player].currentCards
        //     for (let i = 0; i < this.maxCardsInHand - cards.length; i++) {
        //         if (this.whiteCardDrawPile.length > 0) {
        //             let card = this.whiteCardDrawPile.pop()!
        //             cards.push(card)
        //         } else {
        //             await this.getCards()
        //             let card = this.whiteCardDrawPile.pop()!
        //             cards.push(card)
        //         }
        //     }
        // }

        // if (this.blackCardDrawPile.length > 0) {
        //     this.currentBlackCard = this.blackCardDrawPile.pop()!
        // } else {
        //     await this.getCards()
        //     this.currentBlackCard = this.blackCardDrawPile.pop()!
        // }
    }

    resetTimeout() {
        // reset to 0 everytime a server action is taken
    }

    public async getCards() {
        try {
            await client.connect();
        
            const database = client.db('letsplaycards')
            const expansions = database.collection('expansions')
        
            const query = {name: {$in: this.expansions}}

            const docs = await expansions.find(query).toArray()

            for (const doc of docs) {
                this.blackCardDrawPile.push(...doc.black)
                this.whiteCardDrawPile.push(...doc.white)
            }

            this.shuffleArray(this.blackCardDrawPile)
            this.shuffleArray(this.whiteCardDrawPile)
        } finally {
         //   await client.close()
        }
    }

    private shuffleArray(array: Object[]) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    addPlayer(name: string, isGameOwner: boolean) {
        this.players[name] = new Player(name, isGameOwner)
    }
}

export default Game

