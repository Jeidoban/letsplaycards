import Player from './player'

class Game {
    highestScore = 0
    blackCardDrawPile: string[] = []
    whiteCardDrawPile: string[] = []
    currentBlackCard = ''
    gameID: string
    players: {[key: string]: Player} = {}
    password?: string
    maxCardsInHand = 10

    constructor(gameID: string, gameOwner: string, expansions: string[], password?: string) {
        this.gameID = gameID
        this.password = password
        this.getCards(expansions)
        this.addPlayer(gameOwner, true)
    }

    updateScore() {

    }

    dealCards() {
        for (const player in this.players) {
            const cards = this.players[player].currentCards
            for (let i = 0; i < this.maxCardsInHand - cards.length; i++) {
                cards.push(this.whiteCardDrawPile.pop()!)
            }
        }
    }

    resetTimeout() {
        // reset to 0 everytime a server action is taken
    }

    async getCards(expansions: string[]) {
        // reach out to DB and pull all cards in those expansions
    }

    addPlayer(name: string, isGameOwner: boolean) {
        this.players[name] = new Player(name, isGameOwner)
    }
}

export default Game

