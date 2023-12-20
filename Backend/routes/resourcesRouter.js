const express = require('express')
const resourceRouter = express.Router();
const { uploadS3 } = require('../common-middleware');
const { addresources, getAllresources, getResourcesByMentorId }=require('../controller/resourcesController')

resourceRouter.get('/', getAllresources);
resourceRouter.post('/add', uploadS3.array('docLink'), addresources);
resourceRouter.get('/:id', getResourcesByMentorId);

module.exports = resourceRouter;
