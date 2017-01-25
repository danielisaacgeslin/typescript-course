"use strict";
var Logger = (function () {
    function Logger() {
    }
    Logger.info = function (data) {
        console.info(data);
    };
    Logger.logRequest = function (req, res, next) {
        Logger.info(req.method + " " + req.path + " | " + res.statusCode);
        next();
    };
    return Logger;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Logger;
;
//# sourceMappingURL=logger.js.map