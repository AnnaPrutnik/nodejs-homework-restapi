const fs = require('fs/promises');
const path = require('path');

const contactsPath = path.join(__dirname, '..', '..', 'db', 'contacts.json');

const readFile = async () => {
  try {
    const contactsFile = await fs
      .readFile(contactsPath, 'utf8')
      .then((res) => JSON.parse(res));
    return contactsFile;
  } catch (error) {
    return error.message;
  }
};

module.exports = {readFile, contactsPath};
