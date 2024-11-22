"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProductById = exports.getAllProducts = void 0;
const database_1 = __importDefault(require("../config/database"));
const getAllProducts = async () => {
    const result = await database_1.default.query('SELECT * FROM products');
    return result.rows;
};
exports.getAllProducts = getAllProducts;
const getProductById = async (id) => {
    const result = await database_1.default.query('SELECT * FROM products WHERE id = $1', [id]);
    return result.rows[0];
};
exports.getProductById = getProductById;
