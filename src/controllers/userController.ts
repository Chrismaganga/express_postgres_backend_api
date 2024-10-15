// src/controllers/userController.ts
import { Request, Response } from 'express';
import userModel, { User } from '../models/userModel';

export const createUser = async (req: Request, res: Response) => {
    try {
        const newUser: User = req.body; // Assuming the body contains user data
        const createdUser = await userModel.create(newUser);
        res.status(201).json(createdUser);
    } catch (err) {
        const error = err as Error; // Type assertion for better error handling
        res.status(500).json({ error: error.message });
    }
};

export const getUser = async (req: Request, res: Response) => {
    const id: string = req.params.id; // Get user ID from the request parameters

    try {
        const user: User | null = await userModel.findById(id); // Call findById method

        if (!user) {
            return res.status(404).json({ message: 'User not found' }); // Handle case where user is not found
        }

        res.json(user); // Return the found user
    } catch (err) {
        const error = err as Error; // Type assertion for better error handling
        res.status(500).json({ error: error.message }); // Handle other errors
    }
};
