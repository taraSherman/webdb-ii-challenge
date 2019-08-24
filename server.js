const express = require('express');
const knex = require('knex');
const Router = require('./Router');
const db = require('./data/dbConfig.js');
const server = express();
const helmet = require('helmet');
const logger = require('morgan');

server.use(express.json());
server.use(helmet());
server.use(logger('dev'));
server.use('/api/cars', Router);

server.get('/', (req, res) => {
  res.send(`
  <h2>Web DB II Challenge Car Dealership</h2>
  `)
});

module.exports = server;