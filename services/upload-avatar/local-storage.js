const path = require('path');
const fs = require('fs/promises');
const {updateAvatar} = require('../../repository/users');

const FOLDER_FOR_AVATAR = process.env.FOLDER_FOR_AVATAR;
const PUBLIC_FOLDER = process.env.PUBLIC_FOLDER;

class LocalStorage {
  constructor(file, user) {
    this.userId = user.id;
    this.fileName = file.filename;
    this.filePath = file.path;
    this.folderAvatars = path.join(PUBLIC_FOLDER, FOLDER_FOR_AVATAR);
  }

  async save() {
    const destination = path.join(this.folderAvatars, this.userId);
    await fs.mkdir(destination, {recursive: true});
    await fs.rename(this.filePath, path.join(destination, this.fileName));
    const avatarURL = path.join(FOLDER_FOR_AVATAR, this.userId, this.fileName);
    await updateAvatar(this.userId, avatarURL);
    return avatarURL;
  }
}

module.exports = LocalStorage;
