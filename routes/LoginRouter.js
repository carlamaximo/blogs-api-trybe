const express = require('express');
const { login } = require('../controller/UserController');
const { loginUserValidate } = require('../middleware/LoginUserValidate');

const router = express.Router();

router.post('/', loginUserValidate, login);

module.exports = router; 