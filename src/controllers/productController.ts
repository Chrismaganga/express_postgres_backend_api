import { Request, Response } from 'express';
import { getAllProducts, getProductById } from '../models/productModel';

export const fetchAllProducts = async (req: Request, res: Response) => {
    try {
        const products = await getAllProducts();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const fetchProductById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    try {
        const product = await getProductById(id);
        if (product) {
            res.status(200).json(product);
        } else {
            res.status(404).json({ error: 'Product not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
