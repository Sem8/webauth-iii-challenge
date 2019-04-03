const router = require("express").Router();
const bcrypt = require("bcryptjs");

const userdb = require("../../database/dbConfig.js");

router.post("/register", (req, res) => {
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 4);
  user.password = hash;

  userdb("users")
    .where({ username: req.params.username })
    .first()
    .insert(user)
    .then(saved => {
      res.status(201).json(saved);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.post('/login', (req, res) => {
    let { username, password } = req.body;
    userdb('users').where({ username }).first().then(user => {
        if (user && bcrypt.compareSync(password, user.password)) {
            // req.session.user = user;
            res.status(200).json({ message: `Welcome ${user.username} you're logged in.`});
        } else {
            res.status(401).json({ message: 'Your credentials are invalid'});
        }
    })
    .catch(error => {
        res.status(500).json(error);
    });
})

module.exports = router;
