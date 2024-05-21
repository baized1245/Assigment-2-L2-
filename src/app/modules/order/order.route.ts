import express from "express";
import { OrderController } from "./order.controller";

const router = express.Router();

// New order create route
router.post("/", OrderController.createOrder);

// All order get or search by email  route
router.get("/", OrderController.getAllOrderFromDb);

// Route not found handler
router.use(OrderController.routeNotFound);

export const OrderRoute = router;
