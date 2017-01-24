"use strict";
function allowCrossDomain(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = allowCrossDomain;
//# sourceMappingURL=allowCrossDomain.js.map