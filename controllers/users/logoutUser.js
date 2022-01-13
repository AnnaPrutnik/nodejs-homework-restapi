const authService = require('../../services/auth/auth');
const {HttpCode} = require('../../configs/constants');
const {responseStatus, responseMessages} = require('../../configs/messages');

const logoutUser = async (req, res, next) => {
  const user = req.user;
  if (!user) {
    return res.status(HttpCode.UNAUTHORIZED).json({
      code: HttpCode.UNAUTHORIZED,
      status: responseStatus.ERROR,
      message: responseMessages.NO_AUTHORIZED,
    });
  }
  const {_id: id} = user;
  await authService.setToken(id, null);
  return res
    .status(HttpCode.NO_CONTENT)
    .json({code: HttpCode.NO_CONTENT, status: responseStatus.SUCCESS});
};

module.exports = logoutUser;
