"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/userRoutes.ts
var express_1 = require("express");
var userController_1 = require("../controllers/userController");
var router = (0, express_1.Router)();
router.post('/', userController_1.createUser);
router.get('/:id', userController_1.getUser);
exports.default = router;
