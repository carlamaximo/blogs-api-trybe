const express = require('express');
const { createUser } = require('../controller/UserController');
const { createUserValidate } = require('../middleware/UserValidates');

const router = express.Router();

router.post('/', createUserValidate, createUser);

module.exports = router;