const express = require('express');
const logger = require('morgan');
const cors = require('cors');
require('dotenv').config();

const contactsRouter = require('./routes/api/contacts');
const userRouter = require('./routes/api/users');

const app = express();

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.use('/api/users', userRouter);
app.use('/api/contacts', contactsRouter);

// TODO: status and messages in response with error
app.use((req, res) => {
  res.status(404).json({message: 'Not found'});
});

app.use((err, req, res, next) => {
  const params = req.params;
  res.status(500).json({params, message: err.message});
});

module.exports = app;
