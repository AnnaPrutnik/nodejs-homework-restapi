const fs = require('fs/promises');

const {readFile, contactsPath} = require('./readFile');

const removeContact = async (contactId) => {
  try {
    const contacts = await readFile();
    const index = contacts.findIndex((contact) => contact.id === contactId);
    if (index === -1) {
      return false;
    }
    const newContacts = contacts.filter(
      (contact) => String(contact.id) !== String(contactId)
    );
    await fs.writeFile(contactsPath, JSON.stringify(newContacts, null, 2));
    return true;
  } catch (error) {
    return error.message;
  }
};

module.exports = removeContact;
