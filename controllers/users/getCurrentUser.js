const {HttpCode} = require('../../configs/constants');
const {responseStatus, responseMessages} = require('../../configs/messages');

const getCurrentUser = async (req, res, next) => {
  const user = req.user;
  if (!user) {
    return res.status(HttpCode.UNAUTHORIZED).json({
      code: HttpCode.UNAUTHORIZED,
      status: responseStatus.ERROR,
      message: responseMessages.NO_AUTHORIZED,
    });
  }
  const {email, subscription} = user;
  return res.status(HttpCode.OK).json({
    code: HttpCode.OK,
    status: responseStatus.SUCCESS,
    user: {email, subscription},
  });
};

module.exports = getCurrentUser;
