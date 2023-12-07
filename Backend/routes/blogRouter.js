const express = require('express')
const blogRouter = express.Router();

const {getAllBlogs, getBlogsByAuthorId, addBlog} = require('../controller/blogController')

blogRouter.get('/', getAllBlogs);
blogRouter.get('/:id', getBlogsByAuthorId);
blogRouter.post('/addblog', addBlog);

module.exports = blogRouter;
