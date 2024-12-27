export interface Category {
    id: number;
    name: string;
    description?: string;
    parentCategoryId?: number;
}

export interface SubCategory extends Category {
    parentCategoryId: number;
}