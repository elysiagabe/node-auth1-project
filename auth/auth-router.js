const router = require('express').Router();
const bcrypt = require('bcryptjs');
const Users = require('../users/user-model');

// ~~~ ENDPOINTS ~~~ //
// REGISTRATION -- POST / create new user account
router.post('/register', (req, res) => {
    let userInfo = req.body;
    const rounds = process.env.HASH_ROUNDS || 6;
    const hash = bcrypt.hashSync(userInfo.password, rounds);
    userInfo.password = hash;

    Users.add(userInfo)
        .then(newAcct => {
            res.status(201).json(newAcct)
        })
        .catch(err => {
            res.status(500).json({ errorMessage: err.message })
        })
})

// LOGIN & AUTHENTICATION -- POST / match login credentials to user info in db
router.post('/login', (req, res) => {
    let { username, password } = req.body;

    Users.findBy({ username })
        .then(foundUser => {
            if (foundUser && bcrypt.compareSync(password, foundUser[0].password)) {
                req.session.loggedIn = true;
                res.status(200).json({ message: `Welcome back!`})
            } else {
                res.status(401).json({ message: "Account not found. You shall not pass!" })
            }
        })
        .catch(err => {
            res.status(500).json({ errorMessage: err.message })
        })
})

module.exports = router;