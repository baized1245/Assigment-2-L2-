import express, { Application, Request, Response } from "express";
import cors from "cors";
import { ProductRoutes } from "./app/modules/product/product.route";
import { OrderRoute } from "./app/modules/order/order.route";
const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

// Product route
app.use("/api/products", ProductRoutes);

// Order route
app.use("/api/orders", OrderRoute);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello world");
});

export default app;
