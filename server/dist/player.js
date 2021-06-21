"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Player = /** @class */ (function () {
    function Player(name, isGameOwner) {
        this.score = 0;
        this.currentCards = [];
        this.name = name;
        this.isGameOwner = isGameOwner;
    }
    Player.prototype.playerTimeout = function () {
        // 
    };
    return Player;
}());
exports.default = Player;
//# sourceMappingURL=player.js.map