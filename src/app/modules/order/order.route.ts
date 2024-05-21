import express from "express";
import { OrderController } from "./order.controller";

const router = express.Router();
// New product create route
router.post("/", OrderController.createOrder);

export const OrderRoute = router;
