const express = require('express');
const cors = require('cors');
// import express-session here

const userRouter = require('./users/user-router');
const authRouter = require('./auth/auth-router');
// probably import authenticator here

const server = express();

// define sessionConfig object here

server.use(express.json());
server.use(cors());
// use session(sessionConfig) here

server.use('/api/users', userRouter); // can apply authenticator middleware here
// apply authRouter here! QUESTION: WHAT SHOULD THE ROUTE BE? For example, just /api? Or /api/auth (this is what we did in the guided project BUT the endpoints we want to build are /api/register & /api/login)

server.get('/', (req, res) => {
    res.json({ api: 'It\'s working!' })
});

module.exports = server;