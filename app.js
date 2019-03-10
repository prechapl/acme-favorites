const express = require('express');
const app = express();
const path = require('path');
const User = require('./db/User');
const Thing = require('./db/Thing');

app.get('/app.js', (req, res, next) =>
  res.sendFile(path.join(__dirname, 'dist', 'main.js')));

app.get('/', (req, res, next) =>
  res.sendFile(path.join(__dirname, 'index.html')));

app.get('/users', (req, res, next) => {
  User.findAll()
    .then(users => res.send(users))
    .catch(next);
});

app.get('/things', (req, res, next) => {
  Thing.findAll()
    .then(things => res.send(things))
    .catch(next);
});
module.exports = app;
