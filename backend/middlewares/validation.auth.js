const joi = require("joi");
const { Error } = require("../responseStructure/responseStructures");

exports.signupRegistration = function (req, res, next) {
  const schema = joi.object({
    name: joi.string().min(3).max(50).required(),
    email: joi.string().email().required(),
    password: joi.string().min(8).required(),
    org_uni: joi.string(),
  });

  const { error } = schema.validate(req.body);

  if (error) {
    return res.status(400).json(Error("Bad Request", error, false));
  }

  next();
};
