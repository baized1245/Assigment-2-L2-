import { FilterQuery } from "mongoose";
import { TProduct } from "./product.interface";
import { Product } from "./product.model";

// Create a product into DB (service)
const createProductIntoDb = async (productData: TProduct) => {
  const result = await Product.create(productData);
  return result;
};

// Function to search products based on criteria or get all products if no criteria provided
const getAllProductFromDB = async (searchTerm: FilterQuery<TProduct> = {}) => {
  return Product.find(searchTerm);
};

// Get single product from DB (service)
const getSingleProductFromDB = async (id: string) => {
  const result = await Product.findById(id);
  return result;
};

// Update a product a from Db (service)
const updateAProductFromDB = async (
  id: string,
  updateData: Partial<TProduct>
) => {
  const options = { new: true };
  const result = await Product.findByIdAndUpdate(id, updateData, options);
  return result;
};

// Delete a product from DB (service)
const deleteAProductFromDb = async (id: string) => {
  const result = await Product.findByIdAndDelete(id);
  return result;
};

// exporting ProductService methods
export const ProductService = {
  createProductIntoDb,
  getAllProductFromDB,
  getSingleProductFromDB,
  deleteAProductFromDb,
  updateAProductFromDB,
};
