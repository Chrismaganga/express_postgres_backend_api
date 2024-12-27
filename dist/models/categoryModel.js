"use strict";
// import { Category, SubCategory } from '../types/categoryTypes';
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubCategoryModel = exports.CategoryModel = void 0;
class CategoryModel {
    constructor() {
        this.categories = [];
    }
    createCategory(category) {
        this.categories.push(category);
        return category;
    }
    getCategoryById(id) {
        return this.categories.find(category => category.id === id);
    }
    getAllCategories() {
        return this.categories;
    }
    updateCategory(id, updatedCategory) {
        const categoryIndex = this.categories.findIndex(category => category.id === id);
        if (categoryIndex === -1) {
            return undefined;
        }
        this.categories[categoryIndex] = { ...this.categories[categoryIndex], ...updatedCategory };
        return this.categories[categoryIndex];
    }
    deleteCategory(id) {
        const categoryIndex = this.categories.findIndex(category => category.id === id);
        if (categoryIndex === -1) {
            return false;
        }
        this.categories.splice(categoryIndex, 1);
        return true;
    }
}
exports.CategoryModel = CategoryModel;
class SubCategoryModel extends CategoryModel {
    constructor() {
        super(...arguments);
        this.subCategories = [];
    }
    createSubCategory(subCategory) {
        this.subCategories.push(subCategory);
        return subCategory;
    }
    getSubCategoryById(id) {
        return this.subCategories.find(subCategory => subCategory.id === id);
    }
    getAllSubCategories() {
        return this.subCategories;
    }
    updateSubCategory(id, updatedSubCategory) {
        const subCategoryIndex = this.subCategories.findIndex(subCategory => subCategory.id === id);
        if (subCategoryIndex === -1) {
            return undefined;
        }
        this.subCategories[subCategoryIndex] = { ...this.subCategories[subCategoryIndex], ...updatedSubCategory };
        return this.subCategories[subCategoryIndex];
    }
    deleteSubCategory(id) {
        const subCategoryIndex = this.subCategories.findIndex(subCategory => subCategory.id === id);
        if (subCategoryIndex === -1) {
            return false;
        }
        this.subCategories.splice(subCategoryIndex, 1);
        return true;
    }
}
exports.SubCategoryModel = SubCategoryModel;
