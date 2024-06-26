import { Request, Response } from "express";
import { OrderService } from "./order.service";
import { FilterQuery } from "mongoose";
import { TOrder } from "./order.interface";
import OrderValidationSchema from "./order.validation";

// Controller to handle getting all order or searching order by email
const getAllOrderFromDb = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const email: FilterQuery<TOrder> = {};
    const emails: string[] = [];

    // Dynamically build the search criteria based on query parameters (email)
    if (req.query.email) {
      email.email = { $regex: req.query.email as string, $options: "i" };
      emails.push(`'${req.query.email}'`);
    }

    const order = await OrderService.getAllOrderFromDb(email);

    const message =
      emails.length > 0
        ? `Order matching search term ${emails.join(
            ", "
          )} fetched successfully!`
        : "Orders fetched successfully!";

    res.status(200).json({
      success: true,
      message: message,
      data: order,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || "Something went wrong",
      error: error,
    });
  }
};

// Controller to handle creating a new order
const createOrder = async (req: Request, res: Response): Promise<void> => {
  try {
    const orderData: TOrder = req.body;
    // Data validation using Zod
    const zodParseData = OrderValidationSchema.parse(orderData);

    const result = await OrderService.createOrderIntoDb(zodParseData);
    res.status(200).json({
      success: true,
      message: "Order created successfully!",
      data: result,
    });
  } catch (error: any) {
    if (error.name === "ZodError") {
      res.status(400).json({
        success: false,
        message: "Validation failed",
        error: error.errors,
      });
    } else if (
      error.message === "Order not found" ||
      error.message === "Insufficient quantity available in inventory"
    ) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    } else {
      res.status(500).json({
        success: false,
        message: "Something went wrong",
        error: error.message,
      });
    }
  }
};

// Handle route not found
const routeNotFound = (req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
};

// exporting OrderController all methods
export const OrderController = {
  createOrder,
  getAllOrderFromDb,
  routeNotFound,
};
