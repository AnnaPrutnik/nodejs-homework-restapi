const fs = require('fs/promises');
const {readFile, contactsPath} = require('./readFile');

const updateContact = async (contactId, body) => {
  try {
    const contacts = await readFile();
    const index = contacts.findIndex((contact) => contact.id === contactId);
    if (index === -1) {
      return false;
    }
    const newContact = {...contacts[index], ...body};
    contacts[index] = newContact;
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
    return newContact;
  } catch (error) {
    return error.message;
  }
};

module.exports = updateContact;
