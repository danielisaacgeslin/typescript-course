"use strict";
const express = require("express");
const body_parser_1 = require("body-parser");
const constants_1 = require("./constants");
const app = express();
app.use(body_parser_1.urlencoded({ extended: true }));
app.use(body_parser_1.json());
app.listen(constants_1.PORT, () => {
    console.log(`listening to port ${constants_1.PORT}`);
});
//# sourceMappingURL=app.js.map