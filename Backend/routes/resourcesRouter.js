const express = require('express')
const resourceRouter = express.Router();

const { addresources, getAllresources, getResourcesByMentorId }=require('../controller/resourcesController')

resourceRouter.get('/', getAllresources);
resourceRouter.post('/add', addresources);
resourceRouter.get('/:id', getResourcesByMentorId);

module.exports = resourceRouter;
