const jwt = require('jsonwebtoken');
const {HttpCode} = require('../../configs/constants');
const {responseMessages, responseStatus} = require('../../configs/messages');
const {findUserById} = require('../../repository/users');

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

const verifyToken = (token) => {
  try {
    const verify = jwt.verify(token, JWT_SECRET_KEY);
    return !!verify;
  } catch (error) {
    return false;
  }
};

const checkToken = async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  const isTokenValid = verifyToken(token);
  if (!isTokenValid) {
    return res.status(HttpCode.UNAUTHORIZED).json({
      code: HttpCode.UNAUTHORIZED,
      status: responseStatus.ERROR,
      message: responseMessages.NO_AUTHORIZED,
    });
  }
  const {id} = jwt.decode(token);
  const user = await findUserById(id);
  if (!user || user.token !== token) {
    return res.status(HttpCode.UNAUTHORIZED).json({
      code: HttpCode.UNAUTHORIZED,
      status: responseStatus.ERROR,
      message: responseMessages.NO_AUTHORIZED,
    });
  }
  req.user = user;
  next();
};

module.exports = {checkToken};
