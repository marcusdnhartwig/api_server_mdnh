'use strict';

const express = require('express');
const errorHandler = require('./error-handlers/500');
const logger = require('./middleware/logger');
const validator = require('./middleware/validator');
const notFoundHandler = require('./error-handlers/404');
const clothesRouter = require('./routes/clothes');
const foodRouter = require('./routes/food');


const app = express();

const PORT = process.env.PORT || 3002;

app.use(express.json());
app.use(logger);
app.use(clothesRouter);
app.use(foodRouter);
app.use(notFoundHandler);
app.use(errorHandler);


module.exports = {
  server: app,
  start: () => app.listen(PORT, console.log('listening on port', PORT)),
};