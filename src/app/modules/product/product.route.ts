import express from "express";
import { ProductController } from "./product.controller";
const router = express.Router();

// New product create route
router.post("/", ProductController.createProduct);

// All product get route
router.get("/", ProductController.getAllProductFromDB);

// Single product get route
router.get("/:productId", ProductController.getSingleProductFromDB);

export const ProductRoutes = router;
