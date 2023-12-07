const express = require('express')
const mentorRouter = express.Router()
const { getAllMentors, getMentorById,addMentorwithId, getRecommendedMentors } = require('../controller/mentorsController')

mentorRouter.get('/', getAllMentors);
mentorRouter.get('/recommended-mentors/:interest', getRecommendedMentors);
mentorRouter.get('/mentor/:mentorId', getMentorById);
mentorRouter.post('/addmentor/:id', addMentorwithId);
module.exports = mentorRouter ;
