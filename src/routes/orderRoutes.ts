
import { Router } from 'express';
import { getOrders} from '../controllers/orderController';


const router = Router();

router.post('/', getOrders);
router.get('/:id', getOrders);

export default router;
