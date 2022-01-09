const {HttpCode} = require('../../configs/constants');
const {responseStatus, responseMessages} = require('../../configs/messages');

const {updateUser} = require('../../repository/users');

const changeRole = async (req, res, next) => {
  const {subscription} = req.body;
  const userId = req.user.id;
  const user = await updateUser(userId, {subscription});
  return res.status(HttpCode.OK).json({
    code: HttpCode.OK,
    status: responseStatus.SUCCESS,
    message: `Subscription for ${user.email} change to ${user.subscription}`,
  });
};

module.exports = changeRole;
