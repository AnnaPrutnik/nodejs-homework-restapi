const {findByVerificationToken, updateUser} = require('../../repository/users');
const {HttpCode} = require('../../configs/constants');
const {responseStatus, responseMessages} = require('../../configs/messages');

const verificationEmail = async (req, res, next) => {
  const {verificationToken} = req.params;
  const user = await findByVerificationToken(verificationToken);

  if (!user || verificationToken === 'null') {
    return res.status(HttpCode.NOT_FOUND).json({
      code: HttpCode.NOT_FOUND,
      status: responseStatus.ERROR,
      message: responseMessages.USER_NOT_FOUND,
    });
  }
  await updateUser(user.id, {
    verificationToken: 'null',
    verify: true,
  });
  return res.status(HttpCode.OK).json({
    code: HttpCode.OK,
    status: responseStatus.SUCCESS,
    message: responseMessages.VERIFICATION_SUCCESS,
  });
};

module.exports = verificationEmail;
