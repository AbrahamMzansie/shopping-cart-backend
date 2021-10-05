const jwt = require("jsonwebtoken");
const User = require("../models/authModels");
const asyncHandler = require("express-async-handler");

const protect = asyncHandler(async (req, res, next) => {
  if (req.header("api-key")) {
    try {
      //let api_key = req.query.api_key; //version 1 with the querystring
      //let api_key = req.params.apikey; //version 2 with the URL params
      let api_key = req.header("api-key"); //version 3 using a header
      console.log(api_key);
      req.user = await User.findOne({
        apiKey: api_key,
        host: process.env.HOST,
      }).select("-password");
      if (req.user) {
        next();
      } else {
        res.status(401);
        throw new Error("Not authorized ,API Key is invalid");
      }
    } catch (error) {
      res.status(401);
      throw new Error("Not authorized , API Key failed or invalid");
    }
  } else {
    res.status(401);
    throw new Error("Not authorized ,no API key");
  }
});

const admin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401);
    throw new Error("Not authorized as an admin");
  }
};
module.exports = {
  protect,
  admin,
};
