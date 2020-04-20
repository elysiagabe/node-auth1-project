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

module.exports = router;