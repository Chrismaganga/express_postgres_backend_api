import { CustomRequest, Products } from './../types/Products';
import { Request, Response } from 'express';
import { ProductModel } from '../models/productModel';


const productModel = new ProductModel();

export const createProduct = async (req: CustomRequest, res: Response) => {
  try {
    const { name, description, price, category } = req.body;
    const image_url = req.file? `/uploads/${req.file.filename}` : undefined;

    const newProduct: Products = {
        name, description, price, category, image_url,
        id: 0
    };
    const createdProduct = await productModel.create(newProduct);
    res.status(201).json(createdProduct);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const updateProduct = async (req: CustomRequest, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({ error: 'Invalid ID' });
    }

    const { name, description, price, category } = req.body;
    const image_url = req.file ? `/uploads/${req.file.filename}` : undefined;

    const updatedProduct: Products = { id, name, description, price, category, image_url };
    const result = await productModel.update(id, updatedProduct);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const getAllProducts = async (_req: Request, res: Response) => {
  try {
    const products = await productModel.getAll();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const getProductById = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({ error: 'Invalid ID' });
    }

    const product = await productModel.getById(id);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ error: 'Product not found' });
    }
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({ error: 'Invalid ID' });
    }

    const result = await productModel.delete(id);
    if (result !== undefined) {
      res.json({ message: 'Product deleted successfully' });
    } else {
      res.status(404).json({ error: 'Product not found' });
    }
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};
