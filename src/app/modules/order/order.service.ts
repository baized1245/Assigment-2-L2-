import { FilterQuery } from "mongoose";
import { TOrder } from "./order.interface";
import { Order } from "./order.model";

// Create a order into DB (service)
const createOrderIntoDb = async (OrderData: TOrder) => {
  const result = await Order.create(OrderData);
  return result;
};

// Function to search order based on email or get all order if no email provided
const getAllOrderFromDb = async (email: FilterQuery<TOrder> = {}) => {
  const result = await Order.find(email);
  return result;
};

// exporting orderService methods
export const OrderService = {
  createOrderIntoDb,
  getAllOrderFromDb,
};
