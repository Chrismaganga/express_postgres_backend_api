import { Router } from 'express';
import { deleteProduct, getAllProducts, getProductById } from '../controllers/productController';


const router = Router();

router.get('/', getAllProducts);
router.get('/:id', getProductById);
router.delete('/:id', deleteProduct);

export default router;
