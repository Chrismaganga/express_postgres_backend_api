"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const productRoutes_1 = __importDefault(require("./routes/productRoutes"));
const database_1 = __importDefault(require("./config/database"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const orderRoutes_1 = __importDefault(require("./routes/orderRoutes"));
const categoryRoutes_1 = __importDefault(require("./routes/categoryRoutes"));
const morgan_1 = __importDefault(require("morgan"));
const app = (0, express_1.default)();
app.use((0, morgan_1.default)("tiny"));
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)());
app.options("*", (0, cors_1.default)());
app.use(express_1.default.json());
const port = process.env.PORT || 3001;
const api = process.env.API_URL;
(async () => {
    try {
        const result = await database_1.default.query("SELECT NOW()");
        console.log("Database connected:", result.rows[0]);
    }
    catch (err) {
        console.error("Error connecting to the database", err);
    }
})();
app.use(`${api}/products`, productRoutes_1.default).defaultConfiguration;
app.use(`${api}/users`, userRoutes_1.default).defaultConfiguration;
app.use(`${api}/orders`, orderRoutes_1.default).defaultConfiguration;
app.use(`${api}/orders`, orderRoutes_1.default).defaultConfiguration;
app.use(`${api}/category`, categoryRoutes_1.default).defaultConfiguration;
app.listen(port, () => {
    console.log(`starting app on: ${port}`);
});
exports.default = app;
