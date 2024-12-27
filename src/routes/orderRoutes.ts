import { Router } from 'express';
import { getOrders, getOrdersById, updateOrder, deleteOrder } from '../controllers/orderController';


const router = Router();

router.get('/', getOrders);
router.get('/:id', getOrders);
router.get('/:id', getOrdersById);
router.put('/:id', updateOrder);
router.delete('/:id', deleteOrder);

export default router;
