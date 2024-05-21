import { Request, Response } from "express";
import { OrderService } from "./order.service";

// New Order add into DB (controller)
const createOrder = async (req: Request, res: Response) => {
  try {
    const orderData = req.body;
    const result = await OrderService.createOrderIntoDb(orderData);
    res.status(200).json({
      success: true,
      message: "Order created successfully!",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || "Something went wrong",
      error: error,
    });
  }
};

// exporting all methods
export const OrderController = {
  createOrder,
};
