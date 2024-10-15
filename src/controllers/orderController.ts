// src/controllers/orderController.ts
import { Request, Response } from 'express';
import orderModel, { Order } from '../models/orderModel';

export const getOrders = async (req: Request, res: Response) => {
    try {
        const orders: Order[] = await orderModel.findAll();
        res.json(orders);
    } catch (err) {
        // Assert that err is an instance of Error
        const error = err as Error; 
        res.status(500).json({ error: error.message });
    }
};
