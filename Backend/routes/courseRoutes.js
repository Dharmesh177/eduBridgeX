const express = require('express');
const courseRouter = express.Router();

const { addNewCourse, getAllCourses, getCourseById, deleteCourseById, deleteAllCourse, getCourseOfMentor, increaseCounter } = require('../controller/courseController');

courseRouter.post('/addNewCourse', addNewCourse);
courseRouter.get('/getAllCourses', getAllCourses);
courseRouter.get('/getCourseById/:id', getCourseById);
courseRouter.get('/deleteCourseById/:id', deleteCourseById);
courseRouter.get('/deleteAllCourse', deleteAllCourse);
courseRouter.get('/CourseOfMentor/:email', getCourseOfMentor);
courseRouter.get('/updateCounter/:id', increaseCounter);

module.exports = courseRouter;
