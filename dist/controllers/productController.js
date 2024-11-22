"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchProductById = exports.fetchAllProducts = void 0;
const productModel_1 = require("../models/productModel");
const fetchAllProducts = async (req, res) => {
    try {
        const products = await (0, productModel_1.getAllProducts)();
        res.status(200).json(products);
    }
    catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
exports.fetchAllProducts = fetchAllProducts;
const fetchProductById = async (req, res) => {
    const id = parseInt(req.params.id);
    try {
        const product = await (0, productModel_1.getProductById)(id);
        if (product) {
            res.status(200).json(product);
        }
        else {
            res.status(404).json({ error: 'Product not found' });
        }
    }
    catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
exports.fetchProductById = fetchProductById;
