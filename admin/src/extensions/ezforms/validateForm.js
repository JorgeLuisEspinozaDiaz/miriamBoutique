const Joi = require("joi");

const schema = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  phone: Joi.string()
    .required()
    .pattern(new RegExp(/((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}/i))
    .messages({
      "string.pattern.base": "Invalid Phone Number",
    }),
  email: Joi.string()
    .required()
    .pattern(
      new RegExp(
        /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
      )
    )
    .messages({
      "string.pattern.base": "Invalid Email",
    }),
  message: Joi.string().allow(null, ""),
  product: Joi.string().required(),
  captcha: Joi.string().required(),
});

module.exports = { schema };
