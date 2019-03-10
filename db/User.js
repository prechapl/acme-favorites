const conn = require('./conn');
const Sequelize = require('sequelize');

const User = conn.define('user', {
  name: Sequelize.STRING
});

module.exports = User;
