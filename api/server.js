const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const configureRoutes = require('../config/routes.js');
require('dotenv').config();
console.log(process.env.JWT_SECRET)

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

configureRoutes(server);

server.get('/', (req, res) => {
    res.send('Hello User, server is alive!')
})

module.exports = server;
