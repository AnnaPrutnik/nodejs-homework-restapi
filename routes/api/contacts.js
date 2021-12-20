const express = require('express');
const router = express.Router();

const {
  handlerGetAllContacts,
  handlerGetContact,
  handlerAddContact,
  handlerRemoveContact,
  handlerUpdateContact,
} = require('../../controllers/contacts');

const {
  addContactValidation,
  changeContactValidation,
} = require('../../middleware/validation/contactValidation');

router.get('/', handlerGetAllContacts);

router.get('/:id', handlerGetContact);

router.post('/', addContactValidation, handlerAddContact);

router.delete('/:id', handlerRemoveContact);

router.put('/:id', changeContactValidation, handlerUpdateContact);

module.exports = router;
