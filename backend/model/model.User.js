const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const User = new Schema(
  {
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
    hackathons: {
      type: [mongoose.Types.ObjectId],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", User);
