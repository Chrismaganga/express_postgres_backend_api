"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOrder = exports.updateOrder = exports.getOrdersById = exports.getOrders = void 0;
const orderModel_1 = __importDefault(require("../models/orderModel"));
const getOrders = async (req, res) => {
    try {
        const orders = await orderModel_1.default.findAll();
        res.json(orders);
    }
    catch (err) {
        const error = err;
        res.status(500).json({ error: error.message });
    }
};
exports.getOrders = getOrders;
const getOrdersById = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const order = await orderModel_1.default.findById(id);
        res.json(order);
    }
    catch (err) {
        const error = err;
        res.status(500).json({ error: error.message });
    }
};
exports.getOrdersById = getOrdersById;
const updateOrder = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const order = req.body;
        const updatedOrder = await orderModel_1.default.update(id, order);
        res.json(updatedOrder);
    }
    catch (err) {
        const error = err;
        res.status(500).json({ error: error.message });
    }
};
exports.updateOrder = updateOrder;
const deleteOrder = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        await orderModel_1.default.delete(id);
        res.json({ message: 'Order deleted' });
    }
    catch (err) {
        const error = err;
        res.status(500).json({ error: error.message });
    }
};
exports.deleteOrder = deleteOrder;
