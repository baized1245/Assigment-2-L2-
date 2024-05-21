import { Request, Response } from "express";
import { ProductService } from "./product.service";

// New product add into DB (controller)
const createProduct = async (req: Request, res: Response) => {
  try {
    const product = req.body;
    const result = await ProductService.createProductIntoDb(product);

    res.status(200).json({
      success: true,
      message: "Product created successfully!",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || "Something went wrong",
      error: error,
    });
  }
};

// Get all products from DB (controller)
const getAllProductFromDB = async (req: Request, res: Response) => {
  try {
    const result = await ProductService.getAllProductFromDB();
    res.status(200).json({
      success: true,
      message: "Products fetched successfully!",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || "Something went wrong",
      error: error,
    });
  }
};

// Get single product from DB (controller)
const getSingleProductFromDB = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await ProductService.getSingleProductFromDB(productId);
    res.status(200).json({
      success: true,
      message: "Product fetched successfully!",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || "Something went wrong",
      error: error,
    });
  }
};

// Delete single product from DB (controller)
const deleteProductFromDB = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await ProductService.deleteAProductFromDb(productId);
    res.status(200).json({
      success: true,
      message: "Student is deleted successfully",
      data: null,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || "Something went wrong",
      error: error,
    });
  }
};

// exporting all methods
export const ProductController = {
  createProduct,
  getAllProductFromDB,
  getSingleProductFromDB,
  deleteProductFromDB,
};
