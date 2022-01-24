const Joi = require('joi');
const {Role} = require('../../../configs/constants');

const userSchema = Joi.object({
  email: Joi.string().email({minDomainSegments: 2}).required(),
  password: Joi.string().min(6).max(15).required(),
  subscription: Joi.string()
    .valid(...Object.values(Role))
    .optional(),
});

const changeSubscription = Joi.object({
  subscription: Joi.string()
    .valid(...Object.values(Role))
    .required(),
});

const sendEmailSchema = Joi.object({
  email: Joi.string().email({minDomainSegments: 2}).required(),
});

module.exports = {userSchema, changeSubscription, sendEmailSchema};
