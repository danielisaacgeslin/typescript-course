"use strict";
var express = require("express");
var body_parser_1 = require("body-parser");
var constants_1 = require("./config/constants");
var allowCrossDomain_1 = require("./services/allowCrossDomain");
var logger_1 = require("./services/logger");
var game_controller_1 = require("./controllers/game.controller");
var gameCtrl = new game_controller_1.default();
var app = express();
app.use(body_parser_1.urlencoded({ extended: true }));
app.use(body_parser_1.json());
app.use(allowCrossDomain_1.default);
app.all('*', logger_1.default.logRequest);
/* game */
app.get('/game', gameCtrl.get);
app.post('/game', gameCtrl.post);
app.put('/game', gameCtrl.put);
app.delete('/game', gameCtrl.delete);
app.listen(constants_1.PORT, function () {
    console.log("listening to port " + constants_1.PORT);
});
//# sourceMappingURL=app.js.map