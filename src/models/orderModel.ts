import pool from "../config/database";

export interface Order {
    id?: number;
    user_id: number;
    product_id: number;
    quantity: number;
    status?: string;
    created_at?: Date;
    updated_at?: Date;
}

class OrderModel {
    async create(order: Order): Promise<Order> {
        const result = await pool.query(
            'INSERT INTO orders (user_id, product_id, quantity, status) VALUES ($1, $2, $3, $4) RETURNING *',
            [order.user_id, order.product_id, order.quantity, order.status || 'pending']
        );
        return result.rows[0];
    }

    async findById(id: number): Promise<Order> {
        const result = await pool.query('SELECT * FROM orders WHERE id = $1', [id]);
        return result.rows[0];
    }

    async findAll(): Promise<Order[]> {
        const result = await pool.query('SELECT * FROM orders');
        return result.rows;
    }

    async update(id: number, order: Partial<Order>): Promise<Order> {
        const result = await pool.query(
            'UPDATE orders SET user_id = $1, product_id = $2, quantity = $3, status = $4 WHERE id = $5 RETURNING *',
            [order.user_id, order.product_id, order.quantity, order.status, id]
        );
        return result.rows[0];
    }

    async delete(id: number): Promise<void> {
        await pool.query('DELETE FROM orders WHERE id = $1', [id]);
    }
}

export default new OrderModel();
