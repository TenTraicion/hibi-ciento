const express = require('express');
const { getAdmin, getHome, createPost, getSinglePost, updatePost, deletePost } = require('../controllers/post-controllers');

const router = express.Router();

router.get('/', getHome);

router.get('/admin', getAdmin);

router.post('/posts', createPost);

router.get('/posts/:id/edit', getSinglePost);

router.post('/posts/:id/edit', updatePost);

router.post('/posts/:id/delete', deletePost);

module.exports = router;
