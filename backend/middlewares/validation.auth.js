const joi = require("joi");
const { Error } = require("../templates/responseStructures");

exports.signupValidation = function (req, res, next) {
  const schema = joi.object({
    name: joi.string().min(3).max(50).required(),
    email: joi.string().email().required(),
    password: joi.string().min(8).required(),
    uni_org: joi.string(),
  });

  const { error } = schema.validate(req.body);

  if (error) {
    return res.status(400).json(Error("Bad Request", error, false));
  }

  next();
};

exports.otpValidation = function (req, res, next) {
  const schema = joi.object({
    email: joi.string().email().required(),
    otp: joi.number().min(100000).max(999999),
  });

  const { error } = schema.validate(req.body);

  if (error) {
    return res.status(400).json(Error("Bad Request", error, false));
  }

  next();
};

exports.loginValidation = function (req, res, next) {
  const schema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().min(8).required(),
  });

  const { error } = schema.validate(req.body);

  if (error) {
    return res.status(400).json(Error("Bad Request", error, false));
  }

  next();
};
