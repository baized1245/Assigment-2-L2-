import { z } from "zod";

// Variant validation schema with trimming
const VariantValidationSchema = z.object({
  type: z
    .string()
    .min(1, "Type is required")
    .transform((value) => value.trim()),
  value: z
    .string()
    .min(1, "Value is required")
    .transform((value) => value.trim()),
});

// Inventory validation schema with trimming
const InventoryValidationSchema = z.object({
  quantity: z.number().min(0, "Quantity must be a non-negative number"),
  inStock: z.boolean(),
});

// Product validation schema with trimming
const ProductValidationSchema = z.object({
  name: z.string().min(1, "Name is required").trim(),
  description: z.string().min(1, "Description is required").trim(),
  price: z.number().min(0, "Price must be a non-negative number"),
  category: z.string().min(1, "Category is required").trim(),
  tags: z.array(z.string().min(1, "Tag cannot be empty").trim()),
  variants: z
    .array(VariantValidationSchema)
    .nonempty("At least one variant is required"),
  inventory: InventoryValidationSchema,
});

export default ProductValidationSchema;
