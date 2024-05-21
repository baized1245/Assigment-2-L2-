import express from "express";
import { ProductController } from "./product.controller";
const router = express.Router();

// New product create route
router.post("/", ProductController.createProduct);

// All product get / find route
router.get("/", ProductController.getAllProduct);

export const ProductRoutes = router;
