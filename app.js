'use strict';
require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const port = process.env.PORT || '3000';
const cors = require('cors');
const database = require('./database/database');

const app = express();

const reservation = require('./routes/reservation.route');
const pay = require('./routes/pay.route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// cors
app.use(cors({credentials: true, origin: '*'}));

// routes
app.use('/reservation', reservation);
app.use('/pay', pay);

// server
const server = app.listen(port, () => {
  console.log("Server listening on " + port);
});

module.exports = app;