"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUser = exports.createUser = void 0;
const userModel_1 = __importDefault(require("../models/userModel"));
const createUser = async (req, res) => {
    try {
        const newUser = req.body; // Assuming the body contains user data
        const createdUser = await userModel_1.default.create(newUser);
        res.status(201).json(createdUser);
    }
    catch (err) {
        const error = err; // Type assertion for better error handling
        res.status(500).json({ error: error.message });
    }
};
exports.createUser = createUser;
const getUser = async (req, res) => {
    const id = req.params.id; // Get user ID from the request parameters
    try {
        const user = await userModel_1.default.findById(id); // Call findById method
        if (!user) {
            return res.status(404).json({ message: 'User not found' }); // Handle case where user is not found
        }
        res.json(user); // Return the found user
    }
    catch (err) {
        const error = err; // Type assertion for better error handling
        res.status(500).json({ error: error.message }); // Handle other errors
    }
};
exports.getUser = getUser;
