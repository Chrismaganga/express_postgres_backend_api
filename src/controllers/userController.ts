// src/controllers/userController.ts
import { Request, Response } from 'express';
import userModel, { User } from '../models/userModel';

export const createUser = async (req: Request, res: Response) => {
    try {
        const newUser: User = req.body; 
        const createdUser = await userModel.create(newUser);
        res.status(201).json(createdUser);
    } catch (err) {
        const error = err as Error; 
        res.status(500).json({ error: error.message });
    }
};

export const getUser = async (req: Request, res: Response) => {
    const id: string = req.params.id; 

    try {
        const user: User | null = await userModel.findById(id);

        if (!user) {
            return res.status(404).json({ message: 'User not found' }); 
        }

        res.json(user);
    } catch (err) {
        const error = err as Error; 
        res.status(500).json({ error: error.message });
    }
};

export const updateUser = async (req: Request, res: Response) => {
    const id: string = req.params.id; 
    const userData: User = req.body; 

    try {
        const user: User | null = await deleteUser(id, userData, { new: true }) ?? null;
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(user);
    } catch (err) {
        const error = err as Error;
        res.status(500).json({ error: error.message });
    }
}
export const deleteUser = async (req: Request, res: Response) => {
    const id: string = req.params.id; 

    try {
        const user: User | null = await userModel?.findByIdAndDelete(id);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.json(user);
    } catch (err) {
        const error = err as Error; 
        res.status(500).json({ error: error.message });
    }
};