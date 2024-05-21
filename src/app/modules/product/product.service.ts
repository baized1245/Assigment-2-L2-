import { TProduct } from "./product.interface";
import { Product } from "./product.model";

// Create a product in DB controller
const createProductIntoDb = async (productData: TProduct) => {
  const result = await Product.create(productData);
  return result;
};

// Get all product from DB controller
const getAllProductFromDB = async () => {
  const result = await Product.find();
  return result;
};

// Get single product from DB controller
const getSingleProductFromDB = async (id: string) => {
  const result = await Product.findById(id);
  return result;
};

// Delete a product from DB
const deleteAProductFromDb = async (id: string) => {
  const result = await Product.findByIdAndDelete(id);
  return result;
};

export const ProductService = {
  createProductIntoDb,
  getAllProductFromDB,
  getSingleProductFromDB,
  deleteAProductFromDb,
};
