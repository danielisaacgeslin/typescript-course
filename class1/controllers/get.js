"use strict";
function default_1(req, res, next) {
    const response = { status: 1, message: 'Hello' };
    res.json(response);
    next();
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
//# sourceMappingURL=get.js.map