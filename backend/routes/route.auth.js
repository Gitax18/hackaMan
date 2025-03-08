const express = require("express");
const {
  signupValidation,
  loginValidation,
  otpValidation,
} = require("../middlewares/validation.auth");
const {
  postSignup,
  postLogin,
  postVerifyOTP,
} = require("../controllers/controller.auth");

const router = express.Router();

router.post("/signup", signupValidation, postSignup);

router.post("/verifyotp", otpValidation, postVerifyOTP);

router.post("/login", loginValidation, postLogin);

module.exports = router;
