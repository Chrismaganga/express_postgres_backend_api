"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/tests/order.test.ts
const supertest_1 = __importDefault(require("supertest"));
const server_1 = __importDefault(require("../server"));
describe('Order API', () => {
    it('should create an order', async () => {
        const response = await (0, supertest_1.default)(server_1.default)
            .post('/api/orders')
            .send({ userId: 1, productId: 1, quantity: 2 });
        expect(response.status).toBe(200);
        expect(response.text).toBe('Order created');
    });
    it('should get an order', async () => {
        const response = await (0, supertest_1.default)(server_1.default).get('/api/orders/1');
        expect(response.status).toBe(200);
        expect(response.text).toBe('Order with ID 1');
    });
});
