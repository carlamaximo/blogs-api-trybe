const express = require('express');
const { createUser, getAll, getById, deleteUser } = require('../controller/UserController');
const { createUserValidate } = require('../middleware/UserValidates');
const { generateToken, checkToken } = require('../middleware/jwtToken');
const { getUserId } = require('../middleware/LoginUserValidate');

const router = express.Router();

router.post('/', createUserValidate, generateToken, createUser);
router.get('/', checkToken, getAll);
router.get('/:id', checkToken, getById);
router.delete('/me', checkToken, getUserId, deleteUser);

module.exports = router; 