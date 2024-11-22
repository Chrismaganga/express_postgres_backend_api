"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/tests/product.test.ts
const supertest_1 = __importDefault(require("supertest"));
const server_1 = __importDefault(require("../server"));
describe('Product API', () => {
    it('should create a product', async () => {
        const response = await (0, supertest_1.default)(server_1.default)
            .post('/api/products')
            .send({ name: 'Test Product', price: 100 });
        expect(response.status).toBe(200);
        expect(response.text).toBe('Product created');
    });
    it('should get a product', async () => {
        const response = await (0, supertest_1.default)(server_1.default).get('/api/products/1');
        expect(response.status).toBe(200);
        expect(response.text).toBe('Product with ID 1');
    });
});
