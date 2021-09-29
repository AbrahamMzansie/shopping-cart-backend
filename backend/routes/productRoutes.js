const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const productControllers = require("../controllers/productController");

router
  .route("/create-product")
  .get(productControllers.getProducts)
  .post(
    authMiddleware.protect,
    authMiddleware.admin,
    productControllers.createProduct
  );
router
  .route("/get-all-products")
  .get(
    authMiddleware.protect,
    authMiddleware.admin,
    productControllers.getProducts
  );

module.exports = router;
