import { TOrder } from "./order.interface";
import { Order } from "./order.model";

// Create a product in DB (service)
const createOrderIntoDb = async (OrderData: TOrder) => {
  const result = await Order.create(OrderData);
  return result;
};

export const OrderService = {
  createOrderIntoDb,
};
