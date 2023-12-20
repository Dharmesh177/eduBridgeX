const express = require('express');
const { getUserById,getAllUser } = require('../controller/userContrller');
const UserRoute = express.Router();

UserRoute.get('/user/:id', getUserById);
UserRoute.get('/user', getAllUser);

module.exports = UserRoute;
