const express = require('express');
const router = express.Router();

const {
  getAllContacts,
  getSingleContact,
  addContact,
  removeContact,
  updateContact,
} = require('../../controllers/contacts');

const {
  addContactValidation,
  changeContactValidation,
  changeFavoriteValidation,
} = require('../../middleware/validation/contactValidation');

router.get('/', getAllContacts);

router.get('/:id', getSingleContact);

router.post('/', addContactValidation, addContact);

router.delete('/:id', removeContact);

router.put('/:id', changeContactValidation, updateContact);

router.patch('/:id/favorite', changeFavoriteValidation, updateContact);

module.exports = router;
