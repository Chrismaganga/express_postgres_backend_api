"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/tests/user.test.ts
const supertest_1 = __importDefault(require("supertest"));
const server_1 = __importDefault(require("../server"));
describe('User API', () => {
    it('should create a user', async () => {
        const response = await (0, supertest_1.default)(server_1.default)
            .post('/api/users')
            .send({ username: 'testuser', password: 'password123' });
        expect(response.status).toBe(200);
        expect(response.text).toBe('User created');
    });
    it('should get a user', async () => {
        const response = await (0, supertest_1.default)(server_1.default).get('/api/users/1');
        expect(response.status).toBe(200);
        expect(response.text).toBe('User with ID 1');
    });
});
