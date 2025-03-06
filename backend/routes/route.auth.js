const express = require("express");
const { signupValidation } = require("../middlewares/validation.auth");
const { postSignup } = require("../controllers/controller.auth");

const router = express.Router();

router.post("/signup", signupValidation, postSignup);

module.exports = router;
