const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const cartController = require("../controllers/cartController");

router
  .route("/create-cart")
  .post(authMiddleware.protect, cartController.createNewCart);
  
router
  .route("/get-cart")
  .get(authMiddleware.protect, cartController.getUserCarts);

router.route("/get-all-carts").get(authMiddleware.protect ,authMiddleware.admin ,cartController.getAllCarts);
router
  .route("/update-cart")
  .put(authMiddleware.protect, cartController.updateCart);
router
  .route("/delete-cart/:id")
  .delete(authMiddleware.protect, cartController.deleteCart);

module.exports = router;
