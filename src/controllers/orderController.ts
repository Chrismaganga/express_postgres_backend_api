import { Request, Response } from 'express';
import orderModel, { Order } from '../models/orderModel';

export const getOrders = async (req: Request, res: Response) => {
    try {
        const orders: Order[] = await orderModel.findAll();
        res.json(orders);
    } catch (err) {
        const error = err as Error; 
        res.status(500).json({ error: error.message });
    }
};
export const getOrdersById = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id);
        const order: Order = await orderModel.findById(id);
        res.json(order);
    } catch (err) {
        const error = err as Error;
        res.status(500).json({ error: error.message });
    }

};
export const updateOrder = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id);
        const order: Partial<Order> = req.body;
        const updatedOrder = await orderModel.update(id, order);
        res.json(updatedOrder);
    } catch (err) {
        const error = err as Error;
        res.status(500).json({ error: error.message });
    }
};

export const deleteOrder = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id);
        await orderModel.delete(id);
        res.json({ message: 'Order deleted' });
    } catch (err) {
        const error = err as Error;
        res.status(500).json({ error: error.message });
    }
};