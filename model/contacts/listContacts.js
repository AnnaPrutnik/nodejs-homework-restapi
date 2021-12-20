const {readFile} = require('./readFile');

const listContacts = async () => {
  try {
    const contacts = await readFile();
    return contacts;
  } catch (error) {
    return error.message;
  }
};

module.exports = listContacts;
