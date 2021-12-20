const Joi = require('joi');

const addContactValidation = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    email: Joi.string()
      .email({minDomainSegments: 2, tlds: {allow: ['com', 'net']}})
      .required(),
    phone: Joi.string().required(),
  });
  const validateBody = schema.validate(req.body);
  if (validateBody.error) {
    const {
      details: [{type}],
    } = validateBody.error;
    // const = details;
    if (type === 'any.required') {
      return res.status(400).json({message: 'missing required name field'});
    }
    return res.status(400).json({message: 'bad request: have extra field'});
  }
  next();
};

const changeContactValidation = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(30).optional(),
    email: Joi.string()
      .email({minDomainSegments: 2, tlds: {allow: ['com', 'net']}})
      .optional(),
    phone: Joi.string().optional(),
  }).or('name', 'email', 'phone');
  const validateBody = schema.validate(req.body);
  if (validateBody.error) {
    const {
      details: [{type}],
    } = validateBody.error;
    if (type === 'object.missing') {
      return res.status(400).json({message: 'missing fields'});
    }
    return res.status(400).json({message: 'bad request: have extra field'});
  }
  next();
};

module.exports = {addContactValidation, changeContactValidation};
