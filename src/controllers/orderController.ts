// src/controllers/orderController.ts
import { Request, Response } from 'express';

export const createOrder = (req: Request, res: Response) => {
    // Logic to create order
    res.send('Order created');
};

export const getOrder = (req: Request, res: Response) => {
    // Logic to get order
    res.send(`Order with ID ${req.params.id}`);
};
