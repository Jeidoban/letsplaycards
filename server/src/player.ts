class Player {
    isGameOwner: boolean
    name: string
    score = 0
    currentCards: string[] = []

    constructor(name: string, isGameOwner: boolean) {
        this.name = name
        this.isGameOwner = isGameOwner
    }

    playerTimeout() {
        // 
    }
}

export default Player