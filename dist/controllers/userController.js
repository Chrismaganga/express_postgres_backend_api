"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.getUser = exports.createUser = void 0;
const userModel_1 = require("../models/userModel");
const userModel = new userModel_1.UserModel();
const createUser = async (req, res) => {
    try {
        const newUser = req.body;
        const createdUser = await userModel.createUser(newUser);
        res.status(201).json(createdUser);
    }
    catch (err) {
        const error = err;
        res.status(500).json({ error: error.message });
    }
};
exports.createUser = createUser;
const getUser = async (req, res) => {
    const id = req.params.id;
    try {
        const user = await userModel.findById(id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(user);
    }
    catch (err) {
        const error = err;
        res.status(500).json({ error: error.message });
    }
};
exports.getUser = getUser;
const updateUser = async (req, res) => {
    const id = req.params.id;
    const userData = req.body;
    try {
        const user = await userModel.updateUser(id, userData);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(user);
    }
    catch (err) {
        const error = err;
        res.status(500).json({ error: error.message });
    }
};
exports.updateUser = updateUser;
const deleteUser = async (req, res) => {
    const id = req.params.id;
    try {
        const user = await userModel.deleteUser(id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(user);
    }
    catch (err) {
        const error = err;
        res.status(500).json({ error: error.message });
    }
};
exports.deleteUser = deleteUser;
