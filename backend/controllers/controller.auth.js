const bcrypt = require("bcrypt");
const User = require("../model/model.User");
const jwt = require("jsonwebtoken");

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

exports.postLogin = async function (req, res, next) {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res
        .status(403)
        .json(Message("User does not exist, please signup", false));
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res
        .status(403)
        .json(Message("User does not exist, please signup", false));
    }

    const jwtToken = jwt.sign(
      { id: user._id, name: user.name },
      process.env.JWT_SECRET,
      { expiresIn: "24h" }
    );

    return res
      .status(201)
      .json(
        Success("Login Succeed", { token: jwtToken, name: user.name }, true)
      );
  } catch (error) {
    console.error("Error in controller Login", error);
    return res.status(500).json(Error("Server Side Error", error, false));
  }
};
