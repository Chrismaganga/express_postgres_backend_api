"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const database_1 = __importDefault(require("../config/database"));
class UserModel {
    findByIdAndUpdate(id, userData, arg2) {
        throw new Error('Method not implemented.');
    }
    findByIdAndRemove(id) {
        throw new Error('Method not implemented.');
    }
    // Create a new user
    async createUser(userData) {
        const result = await database_1.default.query('INSERT INTO users (username, email, password, created_at, updated_at) VALUES ($1, $2, $3, NOW(), NOW()) RETURNING *', [userData.username, userData.email, userData.password]);
        return result.rows[0];
    }
    // Update a user by ID
    async updateUser(id, userData) {
        const result = await database_1.default.query('UPDATE users SET username = $1, email = $2, password = $3, updated_at = NOW() WHERE id = $4 RETURNING *', [userData.username, userData.email, userData.password, id]);
        return result.rows.length ? result.rows[0] : null;
    }
    // Delete a user by ID
    async deleteUser(id) {
        const result = await database_1.default.query('DELETE FROM users WHERE id = $1 RETURNING *', [id]);
        return result.rows.length ? result.rows[0] : null;
    }
    // Get all users
    async getAllUsers() {
        const result = await database_1.default.query('SELECT * FROM users');
        return result.rows;
    }
    // Example findById method; adjust the SQL query as needed
    async findById(id) {
        const result = await database_1.default.query('SELECT * FROM users WHERE id = $1', [id]);
        return result.rows.length ? result.rows[0] : null;
    }
}
exports.UserModel = UserModel;
