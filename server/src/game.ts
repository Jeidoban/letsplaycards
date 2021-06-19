import Player from './player'

class Game {
    highestScore = 0
    gameID: string
    players: Player[]
    expansions: string[]
    password?: string

    constructor(gameID: string, players: Player[], expansions: string[], password?: string) {
        this.gameID = gameID
        this.players = players
        this.password = password
        this.expansions = expansions
    }

    updateScore() {

    }

    addPlayer(name: string, isGameOwner: boolean) {
        this.players.push(new Player(name, isGameOwner))
    }
    

}

export default Game

