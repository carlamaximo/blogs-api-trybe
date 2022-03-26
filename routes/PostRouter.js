const express = require('express');
const { createPost,
  getAllPosts,
  getPostById,
  editPost,
  deletePost,
  getPostByText } = require('../controller/PostController');
const { checkToken } = require('../middleware/jwtToken');
const {
  createPostValidate,
  idPostValidate,
  editPostValidate,
  permisionValidate,
  postExist,
} = require('../middleware/PostValidate');
const { categoryExists } = require('../middleware/CategoryValidate');

const router = express.Router();

router.use(checkToken);

router.get('/search', checkToken, getPostByText);
router.post('/', createPostValidate, categoryExists, createPost);
router.get('/', getAllPosts);
router.get('/:id', idPostValidate, getPostById);
router.put('/:id', editPostValidate, permisionValidate, editPost);
router.delete('/:id', postExist, permisionValidate, deletePost);

module.exports = router; 