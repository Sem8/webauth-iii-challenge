const usersRouter = require('express').Router();
// const bcrypt = require('bcryptjs');

const userdb = require('../database/dbConfig.js');
const restricted = require('./auth/restricted-middleware.js');

usersRouter.get('/', restricted, (req, res) => {
    userdb('users').select('id', 'username', 'password', 'department')
    .then(users => {
        res.json(users);
    })
    .catch(error => res.send(error));
});

module.exports = usersRouter;