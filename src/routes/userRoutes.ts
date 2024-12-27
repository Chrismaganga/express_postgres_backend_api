// src/routes/userRoutes.ts
import { Router } from 'express';
import { createUser, deleteUser, getUser, updateUser } from '../controllers/userController';


const router = Router();

router.get('/', getUser);
router.post('/:id', createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);



export default router;
