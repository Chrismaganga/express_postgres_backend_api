"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteSubCategory = exports.updateSubCategory = exports.getAllSubCategories = exports.getSubCategoryById = exports.createSubCategory = exports.deleteCategory = exports.updateCategory = exports.getAllCategories = exports.getCategoryById = exports.createCategory = void 0;
const categoryModel_1 = require("../models/categoryModel");
const categoryModel = new categoryModel_1.CategoryModel();
const subCategoryModel = new categoryModel_1.SubCategoryModel();
const createCategory = (req, res) => {
    const category = req.body;
    const newCategory = categoryModel.createCategory(category);
    res.status(201).json(newCategory);
};
exports.createCategory = createCategory;
const getCategoryById = (req, res) => {
    const { id } = req.params;
    const category = categoryModel.getCategoryById(Number(id));
    if (category) {
        res.status(200).json(category);
    }
    else {
        res.status(404).json({ message: 'Category not found' });
    }
};
exports.getCategoryById = getCategoryById;
const getAllCategories = (req, res) => {
    const categories = categoryModel.getAllCategories();
    res.status(200).json(categories);
};
exports.getAllCategories = getAllCategories;
const updateCategory = (req, res) => {
    const { id } = req.params;
    const updatedCategory = req.body;
    const category = categoryModel.updateCategory(Number(id), updatedCategory);
    if (category) {
        res.status(200).json(category);
    }
    else {
        res.status(404).json({ message: 'Category not found' });
    }
};
exports.updateCategory = updateCategory;
const deleteCategory = (req, res) => {
    const { id } = req.params;
    const isDeleted = categoryModel.deleteCategory(Number(id));
    if (isDeleted) {
        res.status(200).json({ message: 'Category deleted successfully' });
    }
    else {
        res.status(404).json({ message: 'Category not found' });
    }
};
exports.deleteCategory = deleteCategory;
const createSubCategory = (req, res) => {
    const subCategory = req.body;
    const newSubCategory = subCategoryModel.createSubCategory(subCategory);
    res.status(201).json(newSubCategory);
};
exports.createSubCategory = createSubCategory;
const getSubCategoryById = (req, res) => {
    const { id } = req.params;
    const subCategory = subCategoryModel.getSubCategoryById(Number(id));
    if (subCategory) {
        res.status(200).json(subCategory);
    }
    else {
        res.status(404).json({ message: 'SubCategory not found' });
    }
};
exports.getSubCategoryById = getSubCategoryById;
const getAllSubCategories = (req, res) => {
    const subCategories = subCategoryModel.getAllSubCategories();
    res.status(200).json(subCategories);
};
exports.getAllSubCategories = getAllSubCategories;
const updateSubCategory = (req, res) => {
    const { id } = req.params;
    const updatedSubCategory = req.body;
    const subCategory = subCategoryModel.updateSubCategory(Number(id), updatedSubCategory);
    if (subCategory) {
        res.status(200).json(subCategory);
    }
    else {
        res.status(404).json({ message: 'SubCategory not found' });
    }
};
exports.updateSubCategory = updateSubCategory;
const deleteSubCategory = (req, res) => {
    const { id } = req.params;
    const isDeleted = subCategoryModel.deleteSubCategory(Number(id));
    if (isDeleted) {
        res.status(200).json({ message: 'SubCategory deleted successfully' });
    }
    else {
        res.status(404).json({ message: 'SubCategory not found' });
    }
};
exports.deleteSubCategory = deleteSubCategory;
