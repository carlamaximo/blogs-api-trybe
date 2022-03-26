const express = require('express');
const { createCategory, getAllCategories } = require('../controller/CategoryController');
const { checkToken } = require('../middleware/jwtToken');
const { createCategoryValidate } = require('../middleware/CategoryValidate');

const router = express.Router();

router.post('/', createCategoryValidate, checkToken, createCategory);
router.get('/', checkToken, getAllCategories);

module.exports = router;