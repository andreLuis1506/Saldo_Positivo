const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../app/models/User');
const Month = require('../app/models/Month');
const Expense = require('../app/models/Expense');

const connection = new Sequelize('db', '', '',dbConfig);

User.init(connection);
Month.init(connection);
Expense.init(connection);

module.exports = connection;
