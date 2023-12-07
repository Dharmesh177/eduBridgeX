const express = require('express')
const signupLoginRoute = express.Router();
const { studentSignUp, mentorSignUp, saveMentor, loginMentor, loginStudent } = require('../controller/signUpLoginController');
const { uploadS3 } = require('../common-middleware');

signupLoginRoute.post('/studentsignup', studentSignUp);
signupLoginRoute.post('/mentorsignup', mentorSignUp);
signupLoginRoute.post('/studentlogin', loginStudent);
signupLoginRoute.post('/savementor', uploadS3.array('docLink'), saveMentor);
signupLoginRoute.post('/loginmentor', loginMentor);


module.exports = signupLoginRoute
