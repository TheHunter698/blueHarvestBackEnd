require('dotenv').config();

const express = require('express');

const app = express();

const createUserAcc = require('./routes/createUser');
const transaction = require('./routes/makeTransaction')

app.use('/openAccount', createUserAcc);
app.use('/transaction', transaction)

module.exports = app;
