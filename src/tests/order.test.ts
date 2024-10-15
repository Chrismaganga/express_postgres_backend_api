// src/tests/order.test.ts
import request from 'supertest';
import app from '../app';

describe('Order API', () => {
    it('should create an order', async () => {
        const response = await request(app)
            .post('/api/orders')
            .send({ userId: 1, productId: 1, quantity: 2 });
        expect(response.status).toBe(200);
        expect(response.text).toBe('Order created');
    });

    it('should get an order', async () => {
        const response = await request(app).get('/api/orders/1');
        expect(response.status).toBe(200);
        expect(response.text).toBe('Order with ID 1');
    });
});
