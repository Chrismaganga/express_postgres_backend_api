import { Router } from 'express';
import {

createCategory,
getCategoryById,
getAllCategories,
updateCategory,
deleteCategory,
createSubCategory,
getSubCategoryById,
getAllSubCategories,
updateSubCategory,
deleteSubCategory
} from '../controllers/categoryController';

const router = Router();

router.post('/categories', createCategory);
router.get('/categories/:id', getCategoryById);
router.get('/categories', getAllCategories);
router.put('/categories/:id', updateCategory);
router.delete('/categories/:id', deleteCategory);

router.post('/subcategories', createSubCategory);
router.get('/subcategories/:id', getSubCategoryById);
router.get('/subcategories', getAllSubCategories);
router.put('/subcategories/:id', updateSubCategory);
router.delete('/subcategories/:id', deleteSubCategory);

export default router;