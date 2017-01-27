"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var base_controller_1 = require("./base.controller");
var GameController = (function (_super) {
    __extends(GameController, _super);
    function GameController() {
        return _super.call(this) || this;
    }
    GameController.prototype.get = function (req, res, next) {
        res.json({
            list: [
                { id: 789, name: 'Dark Souls 3' },
                { id: 123, name: 'Battlefield One' },
                { id: 456, name: 'Final Fantasy XV' },
                { id: 917, name: 'The Sims 4' },
                { id: 798, name: 'Diablo 3' }
            ]
        });
        next();
    };
    GameController.prototype.post = function (req, res, next) {
        res.json({ id: Date.now() });
        next();
    };
    GameController.prototype.put = function (req, res, next) {
        res.json({ id: Number(req.params.id) });
        next();
    };
    GameController.prototype.delete = function (req, res, next) {
        res.json({ id: Number(req.params.id) });
        next();
    };
    return GameController;
}(base_controller_1.BaseController));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = GameController;
//# sourceMappingURL=game.controller.js.map