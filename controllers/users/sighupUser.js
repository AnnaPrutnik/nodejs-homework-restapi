const authService = require('../../services/auth/auth');
const {HttpCode} = require('../../configs/constants');
const {responseStatus, responseMessages} = require('../../configs/messages');
const sendVerifyTokenService = require('../../services/sendEmail/sendEmailService');

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

    const userData = await authService.createUser(req.body);
    const {subscription, avatarURL, verificationToken} = userData;
    const isSendEmailWithVerification = await sendVerifyTokenService.sendEmail(
      email,
      verificationToken
    );

    return res.status(HttpCode.CREATED).json({
      code: HttpCode.CREATED,
      status: responseStatus.SUCCESS,
      user: {email, subscription, avatarURL},
      isSendEmailWithVerification,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = signupUser;
