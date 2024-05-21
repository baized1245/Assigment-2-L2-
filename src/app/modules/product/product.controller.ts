import { FilterQuery } from "mongoose";
import { Request, Response } from "express";
import { ProductService } from "./product.service";
import { TProduct } from "./product.interface";
import ProductValidationSchema from "./product.validation";

// New product add into DB (controller)
const createProduct = async (req: Request, res: Response): Promise<void> => {
  try {
    const product = req.body;

    // data validation using zod
    const zodParseData = ProductValidationSchema.parse(product);

    const result = await ProductService.createProductIntoDb(zodParseData);

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

// Controller to handle getting all products or searching products
const getAllProductFromDB = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const searchTerm: FilterQuery<TProduct> = {};
    const searchTerms: string[] = [];

    // Dynamically build the search criteria based on query parameters
    if (req.query.name) {
      searchTerm.name = { $regex: req.query.name as string, $options: "i" };
      searchTerms.push(`'${req.query.name}'`);
    }
    if (req.query.description) {
      searchTerm.description = {
        $regex: req.query.description as string,
        $options: "i",
      };
      searchTerms.push(`'${req.query.description}'`);
    }
    if (req.query.category) {
      searchTerm.category = {
        $regex: req.query.category as string,
        $options: "i",
      };
      searchTerms.push(`'${req.query.category}'`);
    }

    const products = await ProductService.getAllProductFromDB(searchTerm);

    const message =
      searchTerms.length > 0
        ? `Products matching search term ${searchTerms.join(
            ", "
          )} fetched successfully!`
        : "Products fetched successfully!";

    res.status(200).json({
      success: true,
      message: message,
      data: products,
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
const getSingleProductFromDB = async (
  req: Request,
  res: Response
): Promise<void> => {
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

// Update a product from database (controller)
const updateAProductFromDB = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { productId } = req.params;
    const updatedData = req.body;
    const updatedProduct = await ProductService.updateAProductFromDB(
      productId,
      updatedData
    );

    res.status(200).json({
      success: true,
      message: "Product updated successfully!",
      data: updatedProduct,
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
const deleteProductFromDB = async (
  req: Request,
  res: Response
): Promise<void> => {
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
  updateAProductFromDB,
};
