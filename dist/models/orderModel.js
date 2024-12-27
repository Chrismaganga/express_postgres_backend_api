"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../config/database"));
class OrderModel {
    async create(order) {
        const result = await database_1.default.query('INSERT INTO orders (user_id, product_id, quantity, status) VALUES ($1, $2, $3, $4) RETURNING *', [order.user_id, order.product_id, order.quantity, order.status || 'pending']);
        return result.rows[0];
    }
    async findById(id) {
        const result = await database_1.default.query('SELECT * FROM orders WHERE id = $1', [id]);
        return result.rows[0];
    }
    async findAll() {
        const result = await database_1.default.query('SELECT * FROM orders');
        return result.rows;
    }
    async update(id, order) {
        const result = await database_1.default.query('UPDATE orders SET user_id = $1, product_id = $2, quantity = $3, status = $4 WHERE id = $5 RETURNING *', [order.user_id, order.product_id, order.quantity, order.status, id]);
        return result.rows[0];
    }
    async delete(id) {
        await database_1.default.query('DELETE FROM orders WHERE id = $1', [id]);
    }
}
exports.default = new OrderModel();
