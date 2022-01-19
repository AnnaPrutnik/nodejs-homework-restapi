const {HttpCode} = require('../../configs/constants');
const {responseStatus} = require('../../configs/messages');
const {
  AvatarUploadService,
  LocalStorage,
} = require('../../services/upload-avatar');

const updateAvatars = async (req, res, next) => {
  const avatarFile = req.file;
  const userInfo = req.user;
  const avatarUploadService = new AvatarUploadService(
    LocalStorage,
    avatarFile,
    userInfo
  );
  const avatarURL = await avatarUploadService.updateAvatar();
  res.status(HttpCode.OK).json({
    code: HttpCode.OK,
    status: responseStatus.SUCCESS,
    avatarURL,
  });
};

module.exports = updateAvatars;
