import pool from "../config/database";

export interface User {
    id?: number;
    username: string;
    email: string;
    password: string;
    created_at?: Date;
    updated_at?: Date;
}

export class UserModel {
    create: any;
    // Example findById method; adjust the SQL query as needed
    async findById(id: string): Promise<User | null> {
        const result = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
        return result.rows.length ? result.rows[0] : null; 
    }
}

export default new UserModel();

