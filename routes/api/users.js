const express = require('express');
const router = express.Router();
const {
  signupUser,
  loginUser,
  logoutUser,
  getCurrentUser,
  changeRole,
} = require('../../controllers/users');

const {
  userValidation,
  changeSubscriptionValidation,
} = require('../../middleware/validation');

const {checkToken} = require('../../middleware/auth/checkToken');

router.post('/signup', userValidation, signupUser);
router.post('/login', userValidation, loginUser);
router.get('/logout', checkToken, logoutUser);
router.get('/current', checkToken, getCurrentUser);
router.patch('/', [checkToken, changeSubscriptionValidation], changeRole);

module.exports = router;
