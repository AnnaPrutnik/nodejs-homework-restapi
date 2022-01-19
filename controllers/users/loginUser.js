const authService = require('../../services/auth/auth');
const {HttpCode} = require('../../configs/constants');
const {responseStatus, responseMessages} = require('../../configs/messages');

const loginUser = async (req, res, next) => {
  try {
    const {email, password} = req.body;
    const user = await authService.getUser(email, password);
    if (!user) {
      return res.status(HttpCode.UNAUTHORIZED).json({
        code: HttpCode.UNAUTHORIZED,
        status: responseStatus.ERROR,
        message: responseMessages.CREDENTIALS_ERROR,
      });
    }
    const token = authService.getToken(user);
    await authService.setToken(user.id, token);
    const {subscription} = user;

    return res.status(HttpCode.OK).json({
      code: HttpCode.OK,
      status: responseStatus.SUCCESS,
      user: {email, subscription},
      token,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = loginUser;
