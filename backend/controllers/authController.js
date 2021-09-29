const User = require("../models/authModels");
const Product = require("../models/productModels");
const asyncHandler = require("express-async-handler");
const generateToken = require("../token/generateToken");

//@desc : auth user && login user
//@route : GET /api/users/login
//@access : public access
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email: email });
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

//@desc : register a new user
//@route : POST /api/users
//@access : public access
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password , isAdmin} = req.body;
  const userExist = await User.findOne({ email: email });
  if (userExist) {
    res.status(400);
    throw new Error(`User with email ${email} already exist`);
  } else {
    const user = await User.create({
      name: name,
      email: email,
      password: password,
      isAdmin: isAdmin,
    });
    if (user) {
      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(user._id),
      });
    } else {
      res.status(404);
      throw new Error(`Invalid data`);
    }
  }
});


module.exports = {
  authUser: authUser,
  registerUser: registerUser,
  
};
