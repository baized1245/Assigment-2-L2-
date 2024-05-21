import { TOrder } from "./order.interface";
import { Order } from "./order.model";

// Create a order into DB (service)
const createOrderIntoDb = async (OrderData: TOrder) => {
  const result = await Order.create(OrderData);
  return result;
};

// get all order from DB (service)
const getAllOrderFromDb = async () => {
  const result = await Order.find();
  return result;
};

export const OrderService = {
  createOrderIntoDb,
  getAllOrderFromDb,
};
