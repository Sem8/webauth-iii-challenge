const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const usersRouter = require('../routers/users-router.js');
const authRouter = require('../routers/auth/auth-router.js')

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api/auth', authRouter);
server.use('/api/users', usersRouter);

server.get("/", (req, res) => {
  res.send(
    "Please navigate to /api/users to see users & /api/auth/register to register & /api/auth/login to login"
  );
});

module.exports = server;
