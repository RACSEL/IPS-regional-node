const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const broadcastRouter = require('./routes/broadcast');
const indexRouter = require('./routes/index');

const app = express();

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// endpoints list
app.use('/fhir/DocumentReference', broadcastRouter);
app.use('/*', indexRouter);

module.exports = app;
