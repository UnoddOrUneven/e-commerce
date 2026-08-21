import express from "express";
import userRoutes from "../src/routes/user.routes";
import productRoutes from "../src/routes/product.routes";
import cartsRoutes from "../src/routes/carts.routes";
const app = express();
app.use(express.json());
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/carts",cartsRoutes)
export default app
