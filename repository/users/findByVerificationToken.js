const User = require('../../models/User');

const findByVerificationToken = async (verificationToken) => {
  const user = await User.findOne({verificationToken});
  return user;
};

module.exports = findByVerificationToken;
