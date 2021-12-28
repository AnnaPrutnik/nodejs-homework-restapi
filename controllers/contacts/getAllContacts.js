const Contact = require('../../models/Contact');

const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find({});
    return res.status(200).json({
      code: '200',
      status: 'success',
      total: contacts.length,
      data: contacts,
    });
  } catch (error) {
    return res
      .status(400)
      .json({code: 400, status: 'Bad request', message: error.message});
  }
};

module.exports = getAllContacts;
