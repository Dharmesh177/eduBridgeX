const express = require('express')
const eventRouter = express.Router();

const { addEvent, getAllevent, getEventById, getEventByMentorId, deleteEventById } = require('../controller/eventController')

eventRouter.get('/', getAllevent);
eventRouter.post('/addevent', addEvent);
eventRouter.get('/eventid/:id', getEventById);
eventRouter.get('/mentorid/:id', getEventByMentorId);
eventRouter.delete('/delete/:id', deleteEventById);

module.exports = eventRouter;
