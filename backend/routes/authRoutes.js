const express = require("express");
const router = express.Router();

const authControllers = require("../controllers/authController");

router.route("/register").post(authControllers.registerUser);
router.post("/login", authControllers.authUser);

module.exports = router;
