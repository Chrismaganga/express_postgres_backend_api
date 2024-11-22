// src/tests/user.test.ts
import request from 'supertest';
import app from '../server';

describe('User API', () => {
    it('should create a user', async () => {
        const response = await request(app)
            .post('/api/users')
            .send({ username: 'testuser', password: 'password123' });
        expect(response.status).toBe(200);
        expect(response.text).toBe('User created');
    });

    it('should get a user', async () => {
        const response = await request(app).get('/api/users/1');
        expect(response.status).toBe(200);
        expect(response.text).toBe('User with ID 1');
    });
});
