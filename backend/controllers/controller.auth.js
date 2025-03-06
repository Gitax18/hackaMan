const bcrypt = require("bcrypt");
const User = require("../model/model.User");

const {
  Message,
  Error,
  Success,
} = require("../responseStructure/responseStructures");

exports.postSignup = async function (req, res, next) {
  try {
    const { name, email, password, uni_org } = req.body;
    // check if mail id exist
    const user = await User.findOne({ email });

    // If user exist
    if (user) {
      return res
        .status(409)
        .json(Error("User Exist", "User already exist, please login", false));
    }

    // creating new User
    const newUser = new User({ name, email, password, uni_org });

    // hashing user password
    const salt = await bcrypt.genSalt(10);
    newUser.password = await bcrypt.hash(password, salt);

    // save the user
    await newUser.save();

    return res
      .status(201)
      .json(Message("User Created Successfully, Now Please Login", true));
  } catch (error) {
    console.error("Error in Controller Signup: ", error);
    return res.status(500).json(Error("Server Side Error", error, false));
  }
};
