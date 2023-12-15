const express = require('express');
const courseRouter = express.Router();

const { addNewCourse, getAllCourses, getCourseById, deleteCourseById } = require('../controller/courseController');

courseRouter.post('/addNewCourse', addNewCourse);
courseRouter.get('/getAllCourses', getAllCourses);
courseRouter.get('/getCourseById/:id', getCourseById);
courseRouter.get('/deleteCourseById/:id', deleteCourseById);

module.exports = courseRouter;
