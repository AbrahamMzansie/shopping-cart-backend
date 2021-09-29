const Cart = require("../models/cartModels");
const asyncHandler = require("express-async-handler");

//@desc : CREATE A NEW CART
//@route : PUT /api/create-cart
//@access : private
const createNewCart = asyncHandler(async (req, res) => {
  const { cartItems } = req.body;
  const __cart = await Cart.findOne({
    user: req.user._id,
  });
  if (cartItems && cartItems.length === 0) {
    res.status(400);
    throw Error("Add at least one cart item");
  } else if (__cart) {
    const productExist = __cart.cartItems.find(
      (item) => item.product == req.body.cartItems.product
    );
    if (productExist) {
      const cart = await Cart.findOneAndUpdate(
        {
          user: req.user._id,
          "cartItems.product": req.body.cartItems.product,
        },
        {
          $set: {
            "cartItems.$": {
              ...req.body.cartItems,
              quantity: req.body.cartItems.quantity,
            },
          },
        },
        {
          new: true,
        }
      );
      res.status(201).json(cart);
    } else {
      const cart = await Cart.findOneAndUpdate(
        { user: req.user._id },
        {
          $push: {
            cartItems: req.body.cartItems,
          },
        },
        {
          new: true,
        }
      );
      res.status(201).json(cart);
    }
  } else {
    const cart_ = new Cart({
      cartItems,
      user: req.user._id,
    });
    const cart = await cart_.save();
    res.status(201).json(cart);
  }
});

//@desc : UPDATE CART
//@route : PUT /api/cart/update-cart/:id
//@access : private
const updateCart = asyncHandler(async (req, res) => {
  const { cartItems } = req.body;
  const __cart = await Cart.findOne({
    user: req.user._id,
  });
  if (cartItems && cartItems.length === 0) {
    res.status(400);
    throw Error("Add at least one cart item");
  } else if (__cart) {
    const productExist = __cart.cartItems.find(
      (item) => item.product == req.body.cartItems.product
    );
    if (productExist) {
      const cart = await Cart.findOneAndUpdate(
        {
          user: req.user._id,
          "cartItems.product": req.body.cartItems.product,
        },
        {
          $set: {
            "cartItems.$": {
              ...req.body.cartItems,
              quantity: req.body.cartItems.quantity,
            },
          },
        },
        {
          new: true,
        }
      );
      res.status(201).json(cart);
    } else {
      const cart = await Cart.findOneAndUpdate(
        { user: req.user._id },
        {
          $push: {
            cartItems: req.body.cartItems,
          },
        },
        {
          new: true,
        }
      );
      res.status(201).json(cart);
    }
  } else {
    const cart_ = new Cart({
      cartItems,
      user: req.user._id,
    });
    const cart = await cart_.save();
    res.status(201).json(cart);
  }
});

//@desc : DELETE A CART
//@route : DELETE /api/cart/delete-cart/:id
//@access : private
const deleteCart = asyncHandler(async (req, res) => {
  const cart = await Cart.findById(req.params.id);
  if (cart) {
    await cart.remove();
    res.json({ message: "Cart removed successful" });
  } else {
    res.status(404);
    throw new Error("Cart not found");
  }
});

//@desc : GET LOGGED IN USER CART
//@route : GET /api/cart/get-cart
//@access : private
const getUserCarts = asyncHandler(async (req, res) => {
  const cart = await Cart.find({
    user: req.user._id,
  });
  res.json(cart);
});

//@desc : GET ALL CARTS
//@route : GET /api/cart/get-cart-by-id/:id
//@access : private/admin
const getAllCarts = asyncHandler(async (req, res) => {
  const cart = await Cart.find({});
  res.json(cart);
});
module.exports = {
  createNewCart: createNewCart,
  getUserCarts: getUserCarts,
  deleteCart: deleteCart,
  getAllCarts: getAllCarts,
  updateCart: updateCart,
};
