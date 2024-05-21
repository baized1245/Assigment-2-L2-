import express from "express";
import { OrderController } from "./order.controller";

const router = express.Router();

// New order create route
router.post("/", OrderController.createOrder);

// All order get  route
router.get("/", OrderController.getAllOrderFromDb);

export const OrderRoute = router;
