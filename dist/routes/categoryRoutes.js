"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const categoryController_1 = require("../controllers/categoryController");
const router = (0, express_1.Router)();
router.post('/categories', categoryController_1.createCategory);
router.get('/categories/:id', categoryController_1.getCategoryById);
router.get('/categories', categoryController_1.getAllCategories);
router.put('/categories/:id', categoryController_1.updateCategory);
router.delete('/categories/:id', categoryController_1.deleteCategory);
router.post('/subcategories', categoryController_1.createSubCategory);
router.get('/subcategories/:id', categoryController_1.getSubCategoryById);
router.get('/subcategories', categoryController_1.getAllSubCategories);
router.put('/subcategories/:id', categoryController_1.updateSubCategory);
router.delete('/subcategories/:id', categoryController_1.deleteSubCategory);
exports.default = router;
