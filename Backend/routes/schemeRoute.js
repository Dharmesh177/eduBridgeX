const express = require('express')
const schemeRouter = express.Router();

const { addNewScheme,getAllSChemes, deleteAllScheme, getSchemesFromTag, getSchemesFromOrg, getSchemFromEligibility } = require('../controller/schemeController');

schemeRouter.post('/addnewScheme', addNewScheme);
schemeRouter.get('/getAllSchemes', getAllSChemes);
schemeRouter.get('/deleteAll', deleteAllScheme);
schemeRouter.get('/getSchemeFromTag/:tag', getSchemesFromTag);
schemeRouter.get('/getSchemeFromOrg/:org', getSchemesFromOrg);
schemeRouter.get('/getSchemeFromElig/:eligibility', getSchemFromEligibility);

module.exports = schemeRouter;
