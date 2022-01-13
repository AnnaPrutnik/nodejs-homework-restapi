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
} = require('../../middleware/validation/');

const {checkToken} = require('../../middleware/auth/checkToken');

router.get('/', checkToken, getAllContacts);

router.get('/:id', checkToken, getSingleContact);

router.post('/', [checkToken, addContactValidation], addContact);

router.delete('/:id', checkToken, removeContact);

router.put('/:id', [checkToken, changeContactValidation], updateContact);

router.patch(
  '/:id/favorite',
  [checkToken, changeFavoriteValidation],
  updateContact
);

module.exports = router;
