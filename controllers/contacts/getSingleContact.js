const Contact = require('../../models/Contact');

const getSingleContact = async (req, res, next) => {
  try {
    const id = req.params.id;
    const contact = await Contact.findById(id);
    if (!contact) {
      return res
        .status(404)
        .json({
          code: 404,
          status: 'Not found',
          message: `Not found contact wuth id ${id}`,
        });
    }
    return res.status(200).json({code: 201, status: 'success', data: contact});
  } catch (error) {
    return res
      .status(400)
      .json({code: 400, status: 'Bad request', message: error.message});
  }
};

module.exports = getSingleContact;
