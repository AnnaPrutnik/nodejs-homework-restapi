const express = require('express');
const router = express.Router();

const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
} = require('../../model/');

const {
  addContactValidation,
  changeContactValidation,
} = require('../../middleware/validationMiddleware');

router.get('/', async (req, res, next) => {
  const contacts = await listContacts();
  res.status(200).json({contacts});
});

router.get('/:id', async (req, res, next) => {
  const id = req.params.id;
  const contact = await getContactById(id);
  if (contact) {
    return res.status(200).json({contact});
  }
  return res.status(404).json({message: 'Not found'});
});

router.post('/', addContactValidation, async (req, res, next) => {
  const body = req.body;
  const newContact = await addContact(body);
  res.status(201).json({newContact});
});

router.delete('/:id', async (req, res, next) => {
  const id = req.params.id;
  const deleteStatus = await removeContact(id);
  if (!deleteStatus) {
    return res.status(404).json({message: 'Not found'});
  }
  res.status(200).json({message: 'contact deleted'});
});

router.put('/:id', changeContactValidation, async (req, res, next) => {
  const id = req.params.id;
  const body = req.body;
  const changeContact = await updateContact(id, body);
  if (!changeContact) {
    return res.status(404).json({message: 'Not found'});
  }
  res.status(200).json({changeContact});
});

module.exports = router;
