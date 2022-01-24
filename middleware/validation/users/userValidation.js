const {
  userSchema,
  changeSubscription,
  sendEmailSchema,
} = require('./userScheme');

const {HttpCode} = require('../../../configs/constants');
const {responseStatus, responseMessages} = require('../../../configs/messages');

const userValidation = (req, res, next) => {
  const validateBody = userSchema.validate(req.body);
  if (validateBody.error) {
    return res.status(HttpCode.BAD_REQUEST).json({
      code: HttpCode.BAD_REQUEST,
      status: responseStatus.ERROR,
      message: validateBody.error.details[0]?.message,
    });
  }
  next();
};

const changeSubscriptionValidation = (req, res, next) => {
  const validateBody = changeSubscription.validate(req.body);
  if (validateBody.error) {
    return res.status(HttpCode.BAD_REQUEST).json({
      code: HttpCode.BAD_REQUEST,
      status: responseStatus.ERROR,
      message: validateBody.error.details[0]?.message,
    });
  }
  next();
};

const sendEmailValidation = (req, res, next) => {
  const validateBody = sendEmailSchema.validate(req.body);
  if (validateBody.error) {
    return res.status(HttpCode.BAD_REQUEST).json({
      code: HttpCode.BAD_REQUEST,
      status: responseStatus.ERROR,
      message: responseMessages.MISSING_FIELD_EMAIL,
    });
  }
  next();
};

module.exports = {
  userValidation,
  changeSubscriptionValidation,
  sendEmailValidation,
};
