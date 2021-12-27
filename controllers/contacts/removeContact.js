const Contact = require('../../models/Contact');

const removeContact = async (req, res, next) => {
  try {
    const id = req.params.id;
    const deleteContact = await Contact.findByIdAndRemove(id);
    if (!deleteContact) {
      return res.status(404).json({
        code: 404,
        status: 'Not found',
        message: `Not found contact with id: ${id}`,
      });
    }
    res.status(200).json({
      code: 200,
      status: 'success',
      message: `Contact with id ${id} deleted`,
      data: deleteContact,
    });
  } catch (error) {
    return res
      .status(400)
      .json({code: 400, status: 'Bad request', message: error.message});
  }
};

module.exports = removeContact;
