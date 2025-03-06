const express = require("express");
const {
  signupValidation,
  loginValidation,
} = require("../middlewares/validation.auth");
const { postSignup, postLogin } = require("../controllers/controller.auth");

const router = express.Router();

router.post("/signup", signupValidation, postSignup);

router.post("/login", loginValidation, postLogin);

module.exports = router;
