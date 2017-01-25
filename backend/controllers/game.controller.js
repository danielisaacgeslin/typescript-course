"use strict";
var GameController = (function () {
    function GameController() {
    }
    GameController.prototype.get = function (req, res, next) {
        res.json({
            list: [
                { id: 789, name: 'Dark Souls 3' },
                { id: 123, name: 'Battlefield One' },
                { id: 456, name: 'Final Fantasy XV' }
            ]
        });
        next();
    };
    GameController.prototype.post = function (req, res, next) {
        res.json({ post: true });
        next();
    };
    GameController.prototype.put = function (req, res, next) {
        res.json({ put: true });
        next();
    };
    GameController.prototype.delete = function (req, res, next) {
        res.json({ delete: true });
        next();
    };
    return GameController;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = GameController;
//# sourceMappingURL=game.controller.js.map