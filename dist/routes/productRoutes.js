"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var productController_1 = require("../controllers/productController");
var router = (0, express_1.Router)();
router.get('/', productController_1.fetchAllProducts);
router.get('/:id', productController_1.fetchProductById);
exports.default = router;
