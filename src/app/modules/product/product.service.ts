import { TProduct } from "./product.interface";
import { Product } from "./product.model";

// Create a product in DB controller
const createProductIntoDb = async (productData: TProduct) => {
  const result = await Product.create(productData);
  return result;
};

// Get a product from DB controller
const getAllProductFromDB = async () => {
  const result = await Product.find();
  return result;
};

export const ProductService = {
  createProductIntoDb,
  getAllProductFromDB,
};
