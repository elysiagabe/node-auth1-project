const router = require('express').Router();
const Users = require('../users/user-model');

// ~~ ENDPOINTS ~~ //
// SEE ALL USERS -- GET all users, restricted to logged in users only (authenticator middleware applied in server.js)
router.get('/', (req, res) => {
    Users.find()
        .then(users => {
            res.json(users)
        })
        .catch(err => {
            res.status(500).json({ errorMessage: "Could not find list of users" })
        })
})

// SPECIFIC USER -- GET user by id, restricted to logged in users only (authenticator middleware applied in server.js)
router.get('/:id', (req, res) => {
    Users.findById(req.params.id)
        .then(user => {
            if(user) {
                res.json(user);
            } else {
                res.status(401).json({ errorMessage: "There is no user with the specified id" })
            }
        })
        .catch(err => {
            res.status(500).json({ errorMessage: "Could not get specified user" })
        })
})

module.exports = router;