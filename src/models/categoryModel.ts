// import { Category, SubCategory } from '../types/categoryTypes';

import { Category, SubCategory } from "../types/Category";

export class CategoryModel {
    private categories: Category[] = [];

    createCategory(category: Category): Category {
        this.categories.push(category);
        return category;
    }

    getCategoryById(id: number): Category | undefined {
        return this.categories.find(category => category.id === id);
    }

    getAllCategories(): Category[] {
        return this.categories;
    }

    updateCategory(id: number, updatedCategory: Partial<Category>): Category | undefined {
        const categoryIndex = this.categories.findIndex(category => category.id === id);
        if (categoryIndex === -1) {
            return undefined;
        }
        this.categories[categoryIndex] = { ...this.categories[categoryIndex], ...updatedCategory };
        return this.categories[categoryIndex];
    }

    deleteCategory(id: number): boolean {
        const categoryIndex = this.categories.findIndex(category => category.id === id);
        if (categoryIndex === -1) {
            return false;
        }
        this.categories.splice(categoryIndex, 1);
        return true;
    }
}

export class SubCategoryModel extends CategoryModel {
    private subCategories: SubCategory[] = [];

    createSubCategory(subCategory: SubCategory): SubCategory {
        this.subCategories.push(subCategory);
        return subCategory;
    }

    getSubCategoryById(id: number): SubCategory | undefined {
        return this.subCategories.find(subCategory => subCategory.id === id);
    }

    getAllSubCategories(): SubCategory[] {
        return this.subCategories;
    }

    updateSubCategory(id: number, updatedSubCategory: Partial<SubCategory>): SubCategory | undefined {
        const subCategoryIndex = this.subCategories.findIndex(subCategory => subCategory.id === id);
        if (subCategoryIndex === -1) {
            return undefined;
        }
        this.subCategories[subCategoryIndex] = { ...this.subCategories[subCategoryIndex], ...updatedSubCategory };
        return this.subCategories[subCategoryIndex];
    }

    deleteSubCategory(id: number): boolean {
        const subCategoryIndex = this.subCategories.findIndex(subCategory => subCategory.id === id);
        if (subCategoryIndex === -1) {
            return false;
        }
        this.subCategories.splice(subCategoryIndex, 1);
        return true;
    }
}