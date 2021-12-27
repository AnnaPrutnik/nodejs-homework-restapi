const Contact = require('../../models/Contact');

const updateContact = async (req, res, next) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const changeContact = await Contact.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    });
    if (!changeContact) {
      return res.status(404).json({
        code: 404,
        status: 'Not Found',
        message: `Not found contact with id: ${id}`,
      });
    }
    res.status(200).json({
      code: 200,
      status: 'success',
      message: `Update contact with id: ${id}`,
      data: changeContact,
    });
  } catch (error) {
    return res
      .status(400)
      .json({code: 400, status: 'Bad request', message: error.message});
  }
};

module.exports = updateContact;
