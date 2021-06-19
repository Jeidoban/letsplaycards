class Game {
    highestScore = 0
    gameID: string
    players: Player[]
    password?: string

    constructor(gameID: string, players: Player[], password?: string) {
        this.gameID = gameID
        this.players = players
        this.password = password
    }

    updateScore() {

    }

    addPlayer(name: string, isGameOwner: boolean) {
        this.players.push(new Player(name, isGameOwner))
    }
    

}

class Player {
    isGameOwner: boolean
    name: string
    score = 0

    constructor(name: string, isGameOwner: boolean) {
        this.name = name
        this.isGameOwner = isGameOwner
    }

}