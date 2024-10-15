import pool from "../config/database";


export const getAllProducts = async () => {
    const result = await pool.query('SELECT * FROM products');
    return result.rows;
};

export const getProductById = async (id: number) => {
    const result = await pool.query('SELECT * FROM products WHERE id = $1', [id]);
    return result.rows[0]; 
};
