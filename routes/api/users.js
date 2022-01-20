const express = require('express');
const router = express.Router();
const {
  signupUser,
  loginUser,
  logoutUser,
  getCurrentUser,
  changeRole,
  updateAvatars,
  verificationEmail,
  repeatSendEmail,
} = require('../../controllers/users');

const {
  userValidation,
  changeSubscriptionValidation,
  sendEmailValidation,
} = require('../../middleware/validation');

const {checkToken} = require('../../middleware/auth/checkToken');
const {upload} = require('../../middleware/users/upload-avatar');

router.post('/signup', userValidation, signupUser);
router.post('/login', userValidation, loginUser);
router.get('/logout', checkToken, logoutUser);
router.get('/current', checkToken, getCurrentUser);
router.patch('/', [checkToken, changeSubscriptionValidation], changeRole);
router.patch('/avatars', [checkToken, upload.single('avatar')], updateAvatars);
router.get('/verify/:verificationToken', verificationEmail);
router.post('/verify', sendEmailValidation, repeatSendEmail);

module.exports = router;
