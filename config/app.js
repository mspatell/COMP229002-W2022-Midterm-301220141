const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const database = require('./database');
const dbConfig = require('./db');
const errorHandler = require('../middleware/errorHandler');

const app = express();

// Database connection
database.connect(dbConfig.AtlasDB);
app.locals.isDbConnected = () => database.getConnectionStatus();

// Routes
const indexRouter = require('../routes/index');
const movieRouter = require('../routes/movie');

// view engine setup
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.static(path.join(__dirname, '../node_modules')));

app.use('/', indexRouter);
app.use('/movie', movieRouter);

// Error handling
app.use(errorHandler.notFound);
app.use(errorHandler.globalHandler);

module.exports = app;
