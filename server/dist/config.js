"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
var mongodb_1 = require("mongodb");
var uri = "mongodb+srv://jade424433:fiqva8nHf4ePy4WN@cluster0.bhstq.mongodb.net/letsplaycards?retryWrites=true&w=majority";
exports.client = new mongodb_1.MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
//# sourceMappingURL=config.js.map