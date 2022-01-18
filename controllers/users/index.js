const signupUser = require('./sighupUser');
const loginUser = require('./loginUser');
const logoutUser = require('./logoutUser');
const getCurrentUser = require('./getCurrentUser');
const changeRole = require('./changeRole');
const updateAvatars = require('./updateAvatars');

module.exports = {
  signupUser,
  loginUser,
  logoutUser,
  getCurrentUser,
  changeRole,
  updateAvatars,
};
