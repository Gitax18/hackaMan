const bcrypt = require("bcrypt");
const User = require("../model/model.User");
const OTPHandler = require("../model/model.OtpHandler");
const jwt = require("jsonwebtoken");

const { Message, Error, Success } = require("../templates/responseStructures");
const { createOtp, sendOTPMail } = require("./controller.utils");

function returnServerError(error) {
  console.error("Error in Controller Signup: ", error);
  return res.status(500).json(Error("Server Side Error", error, false));
}

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

    //if user tries to signup multiple times without verifying otp
    await OTPHandler.deleteMany({ email });

    const otp = createOtp();
    const expiresAt = new Date().getTime() + 3600000;

    // creating unverified user through OTPhandler
    const otpHandler = new OTPHandler({
      name,
      email,
      password,
      uni_org,
      otp,
      expiresAt,
    });

    // hashing user password
    const salt = await bcrypt.genSalt(10);
    otpHandler.password = await bcrypt.hash(password, salt);

    // sending the otp
    sendOTPMail(email, otp);
    // save the user
    await otpHandler.save();

    return res
      .status(201)
      .json(Message("OTP has been sent to your email", true));
  } catch (error) {
    return returnServerError(error);
  }
};

exports.postVerifyOTP = async (req, res) => {
  try {
    const { email, otp } = req.body;

    const otpuser = await OTPHandler.findOne({ email });

    // if user email not matched then send error
    if (!otpuser) {
      return res
        .status(403)
        .json(Message("Email does not matched, please check your mail", false));
    }

    if (otpuser.expiresAt < new Date().getTime()) {
      return res
        .status(410)
        .json(Message("OTP expires, please sign up again.", false));
    }

    const isMatched = otp == otpuser.otp;

    if (isMatched) {
      const user = new User({
        name: otpuser.name,
        email: email,
        password: otpuser.password,
        uni_org: otpuser.uni_org,
      });

      await OTPHandler.deleteMany({ email });

      await user.save();

      // creating the jwt token
      const jwtToken = jwt.sign(
        { id: user._id, name: user.name },
        process.env.JWT_SECRET,
        { expiresIn: "24h" }
      );

      return res
        .status(201)
        .json(
          Success(
            "Account creating Succeed",
            { token: jwtToken, name: user.name },
            true
          )
        );
    } else {
      return res.status(400).json(Message("OTP is not valid", false));
    }
  } catch (error) {
    return returnServerError(error);
  }
};

exports.postLogin = async function (req, res, next) {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    // if user email not matched then send error
    if (!user) {
      return res
        .status(403)
        .json(Message("User does not exist, please signup", false));
    }

    // check if password match
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res
        .status(403)
        .json(Message("User does not exist, please signup", false));
    }

    // creating the jwt token
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
    return returnServerError(error);
  }
};
