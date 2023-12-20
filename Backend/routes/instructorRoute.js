const express = require('express')
const InstructorRoute = express.Router();
const { loginInstructor, InstructorSignUp } = require('./instructorController');


InstructorRoute.post('/instructorsignup', InstructorSignUp);
InstructorRoute.post('/instructorlogin', loginInstructor);



module.exports = InstructorRoute
