const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const trustedPartyRouter = require('./routes/trusted-party');
const indexRouter = require('./routes/index');

const app = express();

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// endpoints list
app.use('/trusted-parties', trustedPartyRouter);
app.use('/*', indexRouter);

module.exports = app;
