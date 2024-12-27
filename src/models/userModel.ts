import pool from "../config/database";
import { User } from "../types/Users";


export class UserModel {
    findByIdAndUpdate(id: string, userData: User, arg2: { new: boolean; }): User | PromiseLike<User | null> | null {
        throw new Error('Method not implemented.');
    }
    findByIdAndRemove(id: string): User | PromiseLike<User | null> | null {
        throw new Error('Method not implemented.');
    }
    // Create a new user
    async createUser(userData: User): Promise<User> {
        const result = await pool.query(
            'INSERT INTO users (username, email, password, created_at, updated_at) VALUES ($1, $2, $3, NOW(), NOW()) RETURNING *',
            [userData.username, userData.email, userData.password]
        );
        return result.rows[0];
    }

    // Update a user by ID
    async updateUser(id: string, userData: User): Promise<User | null> {
        const result = await pool.query(
            'UPDATE users SET username = $1, email = $2, password = $3, updated_at = NOW() WHERE id = $4 RETURNING *',
            [userData.username, userData.email, userData.password, id]
        );
        return result.rows.length ? result.rows[0] : null;
    }

    // Delete a user by ID
    async deleteUser(id: string): Promise<User | null> {
        const result = await pool.query(
            'DELETE FROM users WHERE id = $1 RETURNING *',
            [id]
        );
        return result.rows.length ? result.rows[0] : null;
    }

    // Get all users
    async getAllUsers(): Promise<User[]> {
        const result = await pool.query('SELECT * FROM users');
        return result.rows;
    }

    // Example findById method; adjust the SQL query as needed
    async findById(id: string): Promise<User | null> {
        const result = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
        return result.rows.length ? result.rows[0] : null; 
    }
}

