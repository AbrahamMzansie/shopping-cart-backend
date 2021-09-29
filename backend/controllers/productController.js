const Product = require("../models/productModels");
const asyncHandler = require("express-async-handler");

//@desc : CREATE A PRODUCT
//@route : PUT /api/products/
//@access : private/admin
const createProduct = asyncHandler(async (req, res) => {
  const { name, price, description, image, brand, category, countInStock } =
    req.body;
  const product = new Product({
    name: name,
    price: price,
    description: description,
    brand: brand,
    category: category,
    countInStock: countInStock,
    user: req.user._id,
    image: image,
  });
  const createdProduct = await product.save();
  res.status(201).json(createdProduct);
});

//@desc : FETCH ALL PRODUCTS
//@route : GET /api/products
//@access : public access
const getProducts = asyncHandler(async (req, res) => {
  const allProducts = await Product.find({});
  res.json(allProducts);
});

module.exports = {
  getProducts: getProducts,
  createProduct: createProduct,
};
