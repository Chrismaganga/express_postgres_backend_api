import { Router } from 'express';
import { fetchAllProducts, fetchProductById } from '../controllers/productController';

const router = Router();

router.get('/', fetchAllProducts);
router.get('/:id', fetchProductById); 

export default router;
