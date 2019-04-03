const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const secrets = require("../../api/secrets.js");

const userdb = require("../../database/dbConfig.js");

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    jwt.verify(token, secrets.jwtSecret, (error, decodedToken) => {
      if (error) {
        res.status(401).json({ message: "Invalid token" });
      } else {
        req.decodedJwt = decodedToken;

        next();
      }
    });
  } else {
    res.status(401).json({ message: "No token provided" });
  }
};

// module.exports = (req, res, next) => {
//     const { username, password } = req.headers;

//     if(username && password) {
//         userdb('users').where({ username }).first().then(user => {
//             if (user && bcrypt.compareSync(password, user.password)) {
//                 next();
//             } else {
//                 res.status(401).json({ message: 'Your credentials are invalid!'});
//             }
//         })
//         .catch(error => {
//             res.status(500).json({ message: `Ran into an unexpected error: ${error}`});
//         });
//     } else {
//         res.status(400).json({ message: `You didn't provide all the credentials`});
//     }
// };
