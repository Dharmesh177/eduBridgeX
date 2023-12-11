const express = require('express')
const schemeRouter = express.Router();

const { addNewScheme,getAllSChemes, deleteAllScheme, getSchemesFromTag } = require('../controller/schemeController');

schemeRouter.post('/addnewScheme', addNewScheme);
schemeRouter.get('/getAllSchemes', getAllSChemes);
schemeRouter.get('/deleteAll', deleteAllScheme);
schemeRouter.get('/getSchemeFromTag/:tag', getSchemesFromTag);

module.exports = schemeRouter;
