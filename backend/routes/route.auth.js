const express = require("express");
const { signupRegistration } = require("../middlewares/validation.auth");
const { postSignup } = require("../controllers/controller.auth");

const router = express.Router();

router.post("/signup", signupRegistration, postSignup);

module.exports = router;
