import { z } from "zod";

// Defining order validation using zod
const OrderValidationSchema = z.object({
  email: z
    .string()
    .trim()
    .email({ message: "Invalid email address" })
    .min(1, { message: "Email is required" }),
  productId: z.string().trim().min(1, { message: "Product ID is required" }),
  price: z
    .number()
    .nonnegative({ message: "Price must be a non-negative number" }),
  quantity: z
    .number()
    .int()
    .positive({ message: "Quantity must be a positive integer" }),
});

export default OrderValidationSchema;
