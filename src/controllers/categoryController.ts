import { Request, Response } from 'express';
import { CategoryModel, SubCategoryModel } from '../models/categoryModel';

const categoryModel = new CategoryModel();
const subCategoryModel = new SubCategoryModel();

export const createCategory = (req: Request, res: Response) => {
    const category = req.body;
    const newCategory = categoryModel.createCategory(category);
    res.status(201).json(newCategory);
};

export const getCategoryById = (req: Request, res: Response) => {
    const { id } = req.params;
    const category = categoryModel.getCategoryById(Number(id));
    if (category) {
        res.status(200).json(category);
    } else {
        res.status(404).json({ message: 'Category not found' });
    }
};

export const getAllCategories = (req: Request, res: Response) => {
    const categories = categoryModel.getAllCategories();
    res.status(200).json(categories);
};

export const updateCategory = (req: Request, res: Response) => {
    const { id } = req.params;
    const updatedCategory = req.body;
    const category = categoryModel.updateCategory(Number(id), updatedCategory);
    if (category) {
        res.status(200).json(category);
    } else {
        res.status(404).json({ message: 'Category not found' });
    }
};

export const deleteCategory = (req: Request, res: Response) => {
    const { id } = req.params;
    const isDeleted = categoryModel.deleteCategory(Number(id));
    if (isDeleted) {
        res.status(200).json({ message: 'Category deleted successfully' });
    } else {
        res.status(404).json({ message: 'Category not found' });
    }
};

export const createSubCategory = (req: Request, res: Response) => {
    const subCategory = req.body;
    const newSubCategory = subCategoryModel.createSubCategory(subCategory);
    res.status(201).json(newSubCategory);
};

export const getSubCategoryById = (req: Request, res: Response) => {
    const { id } = req.params;
    const subCategory = subCategoryModel.getSubCategoryById(Number(id));
    if (subCategory) {
        res.status(200).json(subCategory);
    } else {
        res.status(404).json({ message: 'SubCategory not found' });
    }
};

export const getAllSubCategories = (req: Request, res: Response) => {
    const subCategories = subCategoryModel.getAllSubCategories();
    res.status(200).json(subCategories);
};

export const updateSubCategory = (req: Request, res: Response) => {
    const { id } = req.params;
    const updatedSubCategory = req.body;
    const subCategory = subCategoryModel.updateSubCategory(Number(id), updatedSubCategory);
    if (subCategory) {
        res.status(200).json(subCategory);
    } else {
        res.status(404).json({ message: 'SubCategory not found' });
    }
};

export const deleteSubCategory = (req: Request, res: Response) => {
    const { id } = req.params;
    const isDeleted = subCategoryModel.deleteSubCategory(Number(id));
    if (isDeleted) {
        res.status(200).json({ message: 'SubCategory deleted successfully' });
    } else {
        res.status(404).json({ message: 'SubCategory not found' });
    }
};