import pool from '../config/database';
import { QueryResult } from 'pg';
import { Products } from '../types/Products';

export class ProductModel {
  async getAll(): Promise<Products[]> {
    const result: QueryResult<Products> = await pool.query(
      'SELECT id, name, description, price, category, image_url, created_at, updated_at FROM products'
    );
    return result.rows;
  }

  async getById(id: number): Promise<Products | null> {
    const result: QueryResult<Products> = await pool.query(
      'SELECT id, name, description, price, category, image_url, created_at, updated_at FROM products WHERE id = $1',
      [id]
    );
    return result.rows[0] || null;
  }

  async create(product: Products): Promise<Products> {
    const { name, description, price, category, image_url } = product;
    const result: QueryResult<Products> = await pool.query(
      `INSERT INTO products (name, description, price, category, image_url) 
       VALUES ($1, $2, $3, $4, $5) 
       RETURNING id, name, description, price, category, image_url, created_at, updated_at`,
      [name, description, price, category, image_url]
    );
    return result.rows[0];
  }

  async update(id: number, product: Products): Promise<Products> {
    const { name, description, price, category, image_url } = product;
    const result: QueryResult<Products> = await pool.query(
      `UPDATE products 
       SET name = $1, description = $2, price = $3, category = $4, image_url = $5, updated_at = CURRENT_TIMESTAMP 
       WHERE id = $6 
       RETURNING id, name, description, price, category, image_url, created_at, updated_at`,
      [name, description, price, category, image_url, id]
    );
    return result.rows[0];
  }

  async delete(id: number): Promise<void> {
    await pool.query('DELETE FROM products WHERE id = $1', [id]);
  }
}
export { Products };

