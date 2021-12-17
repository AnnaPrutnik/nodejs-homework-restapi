const fs = require('fs/promises');
const path = require('path');
const crypto = require('crypto');

const contactsPath = path.join(__dirname, 'contacts.json');

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

const listContacts = async () => {
  try {
    const contacts = await readFile();
    return contacts;
  } catch (error) {
    return error.message;
  }
};

const getContactById = async (contactId) => {
  try {
    const contacts = await readFile();
    const contact = contacts.find(
      (contact) => String(contact.id) === String(contactId)
    );
    return contact;
  } catch (error) {
    return error.message;
  }
};

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

const removeContact = async (contactId) => {
  try {
    const contacts = await readFile();
    const index = contacts.findIndex((contact) => contact.id === contactId);
    if (index === -1) {
      return false;
    }
    const newContacts = contacts.filter(
      (contact) => String(contact.id) === String(contactId)
    );
    await fs.writeFile(contactsPath, JSON.stringify(newContacts, null, 2));
    return true;
  } catch (error) {
    return error.message;
  }
};

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

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
