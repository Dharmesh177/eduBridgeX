const express = require('express')
const mentorRouter = express.Router()
const { getAllMentors, getMentorById,addMentorwithId, getRecommendedMentors, addNewMentor, deleteMentorByEmail } = require('../controller/mentorsController')

mentorRouter.get('/', getAllMentors);
mentorRouter.post('/addNewMentor', addNewMentor);
mentorRouter.get('/recommended-mentors/:interest', getRecommendedMentors);
mentorRouter.get('/mentor/:id', getMentorById);
mentorRouter.post('/addmentor/:id', addMentorwithId);
mentorRouter.get('deleteByEmail/:email', deleteMentorByEmail);

module.exports = mentorRouter ;
