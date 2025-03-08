const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const OtpHandler = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  uni_org: {
    type: String,
    required: false,
  },
  otp: Number,
  expiresAt: Number,
});

module.exports = mongoose.model("OtpHandler", OtpHandler);
