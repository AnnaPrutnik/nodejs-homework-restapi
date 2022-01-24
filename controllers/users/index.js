const signupUser = require('./sighupUser');
const loginUser = require('./loginUser');
const logoutUser = require('./logoutUser');
const getCurrentUser = require('./getCurrentUser');
const changeRole = require('./changeRole');
const updateAvatars = require('./updateAvatars');
const verificationEmail = require('./verificationEmail');
const repeatSendEmail = require('./repeatSendEmail');

module.exports = {
  signupUser,
  loginUser,
  logoutUser,
  getCurrentUser,
  changeRole,
  updateAvatars,
  verificationEmail,
  repeatSendEmail,
};
