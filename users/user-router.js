const router = require('express').Router();
const Users = require('../users/user-model');

// ~~ ENDPOINTS ~~ //
// SEE ALL USERS -- GET all users, restricted to logged in users only
router.get('/', (req, res) => {
    Users.find()
        .then(users => {
            res.json(users)
        })
        .catch(err => {
            res.status(500).json({ errorMessage: "Could not find list of users" })
        })
})

module.exports = router;