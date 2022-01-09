const Joi = require('joi');

const userSchema = Joi.object({
  email: Joi.string().email({minDomainSegments: 2}).required(),
  password: Joi.string().min(6).max(15).required(),
  subscription: Joi.string().optional(),
});

const changeSubscription = Joi.object({
  subscription: Joi.string().valid('starter', 'pro', 'business').required(),
});

module.exports = {userSchema, changeSubscription};
