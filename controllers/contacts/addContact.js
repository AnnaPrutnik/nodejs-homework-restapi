const Contact = require('../../models/Contact');

const addContact = async (req, res, next) => {
  try {
    const body = req.body;
    const newContact = await Contact.create(body);
    res.status(201).json({
      code: 201,
      status: 'success',
      message: 'Contact create',
      data: newContact,
    });
  } catch (error) {
    return res
      .status(400)
      .json({code: 400, status: 'Bad request', message: error.message});
  }
};

module.exports = addContact;
