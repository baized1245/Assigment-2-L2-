import { TProduct } from "./product.interface";
import { Product } from "./product.model";

// Create a product in DB (service)
const createProductIntoDb = async (productData: TProduct) => {
  const result = await Product.create(productData);
  return result;
};

// Get all product from DB (service)
const getAllProductFromDB = async () => {
  const result = await Product.find();
  return result;
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
): Promise<TProduct | null> => {
  const options = { new: true };
  const result = await Product.findByIdAndUpdate(id, updateData, options);
  return result;
};

// Delete a product from DB (service)
const deleteAProductFromDb = async (id: string) => {
  const result = await Product.findByIdAndDelete(id);
  return result;
};

export const ProductService = {
  createProductIntoDb,
  getAllProductFromDB,
  getSingleProductFromDB,
  deleteAProductFromDb,
  updateAProductFromDB,
};
