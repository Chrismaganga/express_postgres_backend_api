"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOrders = void 0;
const orderModel_1 = __importDefault(require("../models/orderModel"));
const getOrders = async (req, res) => {
    try {
        const orders = await orderModel_1.default.findAll();
        res.json(orders);
    }
    catch (err) {
        // Assert that err is an instance of Error
        const error = err;
        res.status(500).json({ error: error.message });
    }
};
exports.getOrders = getOrders;
