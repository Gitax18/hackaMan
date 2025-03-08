const nodemailer = require("nodemailer");
const sendgridTransport = require("nodemailer-sendgrid-transport");
const {
  OTPMailTemplate,
  OTPTextTemplate,
} = require("../templates/otpMailTemp");

require("dotenv").config();

const transporter = nodemailer.createTransport(
  sendgridTransport({
    auth: {
      api_key: process.env.SENDGRID_API,
    },
  })
);

exports.createOtp = () => {
  const otp = Math.floor(100000 + Math.random() * 900000);
  return otp;
};

exports.sendOTPMail = (email, otp) => {
  const htmlMessage = OTPMailTemplate(otp);
  const textMessage = OTPTextTemplate(otp);
  try {
    transporter
      .sendMail({
        to: email,
        from: process.env.SENDGRID_MAIL,
        subject: "OTP verification for HackaMan",
        html: htmlMessage,
        text: textMessage,
      })
      .then((response) => {
        return true;
      })
      .catch((err) => {
        return false;
      });
  } catch (error) {
    throw new Error("Error in Sending OTP: " + error);
  }
};
