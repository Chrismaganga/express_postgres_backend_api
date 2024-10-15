// src/controllers/productController.ts
import { Request, Response } from 'express';

export const createProduct = (req: Request, res: Response) => {
    // Logic to create product
    res.send('Product created');
};

export const getProduct = (req: Request, res: Response) => {
    // Logic to get product
    res.send(`Product with ID ${req.params.id}`);
};
