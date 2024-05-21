import { FilterQuery } from "mongoose";
import { TOrder } from "./order.interface";
import { Order } from "./order.model";
import { Product } from "../product/product.model";

// Function to search order based on email or get all order if no email provided
const getAllOrderFromDb = async (email: FilterQuery<TOrder> = {}) => {
  const result = await Order.find(email);
  return result;
};

// Create an order and update inventory
const createOrderIntoDb = async (orderData: TOrder) => {
  // Find the product in the inventory
  const product = await Product.findOne({ _id: orderData.productId });
  if (!product) {
    throw new Error("Product not found");
  }

  // Check if the ordered quantity exceeds the available quantity
  if (product.inventory.quantity < orderData.quantity) {
    throw new Error("Insufficient quantity available in inventory");
  }

  // Create the order
  const result = await Order.create(orderData);

  // Update the product quantity and inStock status
  product.inventory.quantity -= orderData.quantity;
  product.inventory.inStock = product.inventory.quantity > 0;
  await product.save();

  return result;
};

// exporting orderService methods
export const OrderService = {
  createOrderIntoDb,
  getAllOrderFromDb,
};
