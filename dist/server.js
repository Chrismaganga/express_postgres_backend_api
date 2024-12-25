"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/server.ts
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var orderRoutes_1 = __importDefault(require("./routes/orderRoutes"));
var productRoutes_1 = __importDefault(require("./routes/productRoutes"));
var userRoutes_1 = __importDefault(require("./routes/userRoutes"));
var app = (0, express_1.default)();
var address = "0.0.0.0:3000";
app.use(body_parser_1.default.json());
// Define routes
app.use('/api/users', userRoutes_1.default);
app.use('/api/products', productRoutes_1.default);
app.use('/api/orders', orderRoutes_1.default);
app.get('/', function (_, res) {
    res.send({
        message: 'Welcome to the E-commerce API',
        type: 'GET',
    });
});
app.listen(3000, function () {
    console.log("starting app on: ".concat(address));
});
exports.default = app;
