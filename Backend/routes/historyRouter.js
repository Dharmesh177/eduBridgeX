const express = require('express')
const historyRouter = express.Router();

const { gethistoryById, addHistory } = require('../controller/historyController')

historyRouter.get('/:id', gethistoryById);
historyRouter.post('/add/:id', addHistory);

module.exports = historyRouter;
