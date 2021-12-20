const fs = require('fs/promises');
const crypto = require('crypto');
const {readFile, contactsPath} = require('./readFile');

const addContact = async (body) => {
  try {
    const {name, email, phone} = body;
    const contacts = await readFile();
    const id = crypto.randomBytes(4).toString('hex');
    const newContact = {id, name, email, phone};
    contacts.push(newContact);
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
    return newContact;
  } catch (error) {
    return error.message;
  }
};

module.exports = addContact;
