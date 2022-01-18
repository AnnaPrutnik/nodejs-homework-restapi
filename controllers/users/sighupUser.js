const authService = require('../../services/auth/auth');
const {HttpCode} = require('../../configs/constants');
const {responseStatus, responseMessages} = require('../../configs/messages');

const signupUser = async (req, res, next) => {
  try {
    const {email} = req.body;
    const isUserExist = await authService.isUserExist(email);
    if (isUserExist) {
      return res.status(HttpCode.CONFLICT).json({
        code: HttpCode.CONFLICT,
        status: responseStatus.ERROR,
        message: responseMessages.USER_EXIST,
      });
    }

    const data = await authService.createUser(req.body);
    const {subscription, avatarURL} = data;
    return res.status(HttpCode.CREATED).json({
      code: HttpCode.CREATED,
      status: responseStatus.SUCCESS,
      user: {email, subscription, avatarURL},
    });
  } catch (error) {
    next(error);
  }
};

module.exports = signupUser;
