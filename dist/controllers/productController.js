"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = exports.getProductById = exports.getAllProducts = exports.updateProduct = exports.createProduct = void 0;
const productModel_1 = require("../models/productModel");
const productModel = new productModel_1.ProductModel();
const createProduct = async (req, res) => {
    try {
        const { name, description, price, category } = req.body;
        const image_url = req.file ? `/uploads/${req.file.filename}` : undefined;
        const newProduct = {
            name, description, price, category, image_url,
            id: 0
        };
        const createdProduct = await productModel.create(newProduct);
        res.status(201).json(createdProduct);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.createProduct = createProduct;
const updateProduct = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        if (isNaN(id)) {
            return res.status(400).json({ error: 'Invalid ID' });
        }
        const { name, description, price, category } = req.body;
        const image_url = req.file ? `/uploads/${req.file.filename}` : undefined;
        const updatedProduct = { id, name, description, price, category, image_url };
        const result = await productModel.update(id, updatedProduct);
        res.json(result);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.updateProduct = updateProduct;
const getAllProducts = async (_req, res) => {
    try {
        const products = await productModel.getAll();
        res.json(products);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.getAllProducts = getAllProducts;
const getProductById = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        if (isNaN(id)) {
            return res.status(400).json({ error: 'Invalid ID' });
        }
        const product = await productModel.getById(id);
        if (product) {
            res.json(product);
        }
        else {
            res.status(404).json({ error: 'Product not found' });
        }
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.getProductById = getProductById;
const deleteProduct = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        if (isNaN(id)) {
            return res.status(400).json({ error: 'Invalid ID' });
        }
        const result = await productModel.delete(id);
        if (result !== undefined) {
            res.json({ message: 'Product deleted successfully' });
        }
        else {
            res.status(404).json({ error: 'Product not found' });
        }
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.deleteProduct = deleteProduct;
