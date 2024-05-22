import { OrderRoute } from "./app/modules/order/order.route";
import express, { Application, Request, Response } from "express";
import cors from "cors";
import { ProductRoutes } from "./app/modules/product/product.route";
const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

// Product route
app.use("/api/products", ProductRoutes);

// Order route
app.use("/api/orders", OrderRoute);

// Root route
app.get("/", (req: Request, res: Response) => {
  res.send("Level 2 student");
});

// Handle undefined routes
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

export default app;
