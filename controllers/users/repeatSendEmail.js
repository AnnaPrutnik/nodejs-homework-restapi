const {findUserByEmail} = require('../../repository/users');
const sendVerifyTokenService = require('../../services/sendEmail/sendEmailService');
const {HttpCode} = require('../../configs/constants');
const {responseStatus, responseMessages} = require('../../configs/messages');

const repeatSendEmail = async (req, res, next) => {
  const {email} = req.body;
  const user = await findUserByEmail(email);
  if (!user) {
    return res.status(HttpCode.NOT_FOUND).json({
      code: HttpCode.NOT_FOUND,
      status: responseStatus.ERROR,
      message: responseMessages.USER_NOT_FOUND,
    });
  }

  if (user.verify) {
    return res.status(HttpCode.BAD_REQUEST).json({
      code: HttpCode.BAD_REQUEST,
      status: responseStatus.ERROR,
      message: responseMessages.VERIFICATION_ALREADY_PASSED,
    });
  }

  const {verificationToken} = user;
  await sendVerifyTokenService.sendEmail(email, verificationToken);

  return res.status(HttpCode.OK).json({
    code: HttpCode.OK,
    status: responseStatus.SUCCESS,
    message: responseMessages.VERIFICATION_EMAIL_SEND,
  });
};

module.exports = repeatSendEmail;
