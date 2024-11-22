// src/tests/product.test.ts
import request from 'supertest';
import app from '../server';

describe('Product API', () => {
    it('should create a product', async () => {
        const response = await request(app)
            .post('/api/products')
            .send({ name: 'Test Product', price: 100 });
        expect(response.status).toBe(200);
        expect(response.text).toBe('Product created');
    });

    it('should get a product', async () => {
        const response = await request(app).get('/api/products/1');
        expect(response.status).toBe(200);
        expect(response.text).toBe('Product with ID 1');
    });
});
