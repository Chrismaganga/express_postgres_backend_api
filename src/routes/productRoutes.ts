import { Router } from 'express';
import { deleteProduct, getAllProducts, getProductById, updateProduct } from '../controllers/productController';


const router = Router();

router.get('/', getAllProducts);
router.get('/:id', getProductById);
router.post('/:id', updateProduct);
router.delete('/:id', deleteProduct);

export default router;
