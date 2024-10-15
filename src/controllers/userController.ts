// src/controllers/userController.ts
import { Request, Response } from 'express';

export const createUser = (req: Request, res: Response) => {
    // Logic to create user
    res.send('User created');
};

export const getUser = (req: Request, res: Response) => {
    // Logic to get user
    res.send(`User with ID ${req.params.id}`);
};
