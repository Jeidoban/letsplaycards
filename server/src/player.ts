class Player {
    isGameOwner: boolean
    name: string
    score = 0

    constructor(name: string, isGameOwner: boolean) {
        this.name = name
        this.isGameOwner = isGameOwner
    }
}

export default Player