const express = require('express')
const schemeRouter = express.Router();

const { addNewScheme,getAllSChemes, deleteAllScheme, getSchemesFromTag, getSchemesFromOrg, getSchemFromEligibility, getSchemeById } = require('../controller/schemeController');

schemeRouter.post('/addnewScheme', addNewScheme);
schemeRouter.get('/getAllSchemes/:type', getAllSChemes);
schemeRouter.get('/deleteAll', deleteAllScheme);
schemeRouter.get('/getSchemeFromTag/:tag', getSchemesFromTag);
schemeRouter.get('/getSchemeFromOrg/:org', getSchemesFromOrg);
schemeRouter.get('/getSchemeFromElig/:eligibility', getSchemFromEligibility);
schemeRouter.get('/getSchemeById/:id', getSchemeById);

module.exports = schemeRouter;
