const {
  addContactSchema,
  updateContactSchema,
  updateFavoriteStatusSchema,
} = require('./contactSchema');

const {HttpCode} = require('../../../configs/constants');
const {responseStatus, responseMessages} = require('../../../configs/messages');

const addContactValidation = (req, res, next) => {
  const validateBody = addContactSchema.validate(req.body);
  if (validateBody.error) {
    const {
      details: [{type}],
    } = validateBody.error;
    if (type === 'any.required') {
      return res.status(HttpCode.BAD_REQUEST).json({
        code: HttpCode.BAD_REQUEST,
        status: responseStatus.ERROR,
        message: responseMessages.MISSING_FIELDS_NAME,
      });
    }
    return res.status(HttpCode.BAD_REQUEST).json({
      code: HttpCode.BAD_REQUEST,
      status: responseStatus.ERROR,
      message: validateBody.error.details[0].message,
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
      return res.status(HttpCode.BAD_REQUEST).json({
        code: HttpCode.BAD_REQUEST,
        status: responseStatus.ERROR,
        message: responseMessages.MISSING_FIELD,
      });
    }
    return res.status(HttpCode.BAD_REQUEST).json({
      code: HttpCode.BAD_REQUEST,
      status: responseStatus.ERROR,
      message: responseMessages.NO_FIELDS,
    });
  }
  next();
};

const changeFavoriteValidation = (req, res, next) => {
  const validateBody = updateFavoriteStatusSchema.validate(req.body);
  if (validateBody.error) {
    return res.status(HttpCode.BAD_REQUEST).json({
      code: HttpCode.BAD_REQUEST,
      status: responseStatus.ERROR,
      message: responseMessages.MISSING_FIELD_FAVORITE,
    });
  }
  next();
};

module.exports = {
  addContactValidation,
  changeContactValidation,
  changeFavoriteValidation,
};
