const Jimp = require('jimp');

class AvatarUploadService {
  constructor(Storage, file, user) {
    this.storage = new Storage(file, user);
    this.pathFile = file.path;
  }

  async updateAvatar() {
    await this.normalizeAvatar(this.pathFile);
    const avatarURL = await this.storage.save();
    return avatarURL;
  }

  async normalizeAvatar(pathFile) {
    const pic = await Jimp.read(pathFile);
    await pic
      .autocrop()
      .cover(
        250,
        250,
        Jimp.HORIZONTAL_ALIGN_CENTER | Jimp.VERTICAL_ALIGN_MIDDLE
      )
      .writeAsync(pathFile);
  }
}

module.exports = AvatarUploadService;
