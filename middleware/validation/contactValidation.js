const {
  addContactSchema,
  updateContactSchema,
  updateFavoriteStatusSchema,
} = require('./contactSchema');

const addContactValidation = (req, res, next) => {
  const validateBody = addContactSchema.validate(req.body);
  if (validateBody.error) {
    const {
      details: [{type}],
    } = validateBody.error;
    if (type === 'any.required') {
      return res.status(400).json({
        code: 400,
        status: 'Bad request',
        message: 'missing required name field',
      });
    }
    return res.status(400).json({
      code: 400,
      status: 'Bad request',
      message: 'bad request: have extra field',
    });
  }
  next();
};

const changeContactValidation = (req, res, next) => {
  const validateBody = updateContactSchema.validate(req.body);
  if (validateBody.error) {
    const {
      details: [{type}],
    } = validateBody.error;
    if (type === 'object.missing') {
      return res
        .status(400)
        .json({code: 400, status: 'Bad request', message: 'missing fields'});
    }
    return res.status(400).json({
      code: 400,
      status: 'Bad request',
      message: 'bad request: have extra field',
    });
  }
  next();
};

const changeFavoriteValidation = (req, res, next) => {
  const validateBody = updateFavoriteStatusSchema.validate(req.body);
  if (validateBody.error) {
    return res.status(400).json({
      code: 400,
      status: 'Bad request',
      message: 'missing field favorite',
    });
  }
  next();
};

module.exports = {
  addContactValidation,
  changeContactValidation,
  changeFavoriteValidation,
};
