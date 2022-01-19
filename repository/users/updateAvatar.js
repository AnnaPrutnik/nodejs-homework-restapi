const User = require('../../models/User');

const updateAvatar = async (id, avatarURL) => {
  return await User.findOneAndUpdate({_id: id}, {avatarURL});
};

module.exports = updateAvatar;
