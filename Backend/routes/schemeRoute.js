const express = require('express')
const schemeRouter = express.Router();

const { addNewScheme } = require('../controller/schemeController');

schemeRouter.post('/addnewScheme', addNewScheme);

module.exports = schemeRouter;
