"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var player_1 = __importDefault(require("./player"));
var mongodb_1 = require("mongodb");
// Replace the uri string with your MongoDB deployment's connection string.
var uri = "mongodb+srv://jade424433:fiqva8nHf4ePy4WN@cluster0.bhstq.mongodb.net/letsplaycards?retryWrites=true&w=majority";
var client = new mongodb_1.MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
var Game = /** @class */ (function () {
    function Game(gameID, gameOwner, expansions, password) {
        this.highestScore = 0;
        this.blackCardDrawPile = [];
        this.whiteCardDrawPile = [];
        this.currentBlackCard = '';
        this.players = {};
        this.maxCardsInHand = 10;
        this.gameID = gameID;
        this.password = password;
        this.expansions = expansions;
        //this.getCards()
        this.addPlayer(gameOwner, true);
    }
    Game.prototype.updateScore = function () {
    };
    Game.prototype.dealCards = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    Game.prototype.resetTimeout = function () {
        // reset to 0 everytime a server action is taken
    };
    Game.prototype.getCards = function () {
        return __awaiter(this, void 0, void 0, function () {
            var database, expansions, query, docs, _i, docs_1, doc;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, , 3, 5]);
                        return [4 /*yield*/, client.connect()];
                    case 1:
                        _c.sent();
                        database = client.db('letsplaycards');
                        expansions = database.collection('expansions');
                        query = { name: { $in: this.expansions } };
                        return [4 /*yield*/, expansions.find(query).toArray()];
                    case 2:
                        docs = _c.sent();
                        for (_i = 0, docs_1 = docs; _i < docs_1.length; _i++) {
                            doc = docs_1[_i];
                            (_a = this.blackCardDrawPile).push.apply(_a, doc.black);
                            (_b = this.whiteCardDrawPile).push.apply(_b, doc.white);
                        }
                        this.shuffleArray(this.blackCardDrawPile);
                        this.shuffleArray(this.whiteCardDrawPile);
                        console.log('hello');
                        return [3 /*break*/, 5];
                    case 3: return [4 /*yield*/, client.close()];
                    case 4:
                        _c.sent();
                        return [7 /*endfinally*/];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    Game.prototype.shuffleArray = function (array) {
        var _a;
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            _a = [array[j], array[i]], array[i] = _a[0], array[j] = _a[1];
        }
    };
    Game.prototype.addPlayer = function (name, isGameOwner) {
        this.players[name] = new player_1.default(name, isGameOwner);
    };
    return Game;
}());
exports.default = Game;
//# sourceMappingURL=game.js.map