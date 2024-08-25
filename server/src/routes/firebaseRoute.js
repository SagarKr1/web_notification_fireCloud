const express = require('express');
const sendNotification = require('../controllers/firebaseController');


const route = express.Router();

route.post('/send',sendNotification);

module.exports = route;