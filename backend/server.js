const express = require("express");
const dotenv = require("dotenv");
const app = express();
const morgan = require("morgan");
const middlewareError = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");

const productRoutes = require("./routes/productRoutes");
const authRoutes = require("./routes/authRoutes");
const cartRoutes = require("./routes/cartRoutes");

dotenv.config();
connectDB();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(express.json());

const PORT = process.env.PORT || 2000;
app.use("/api/products", productRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/cart", cartRoutes);

app.use(middlewareError.notFound);
app.use(middlewareError.errorHandler);
app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
