const express = require('express');
const cors = require('cors');
const session = require('express-session');

const userRouter = require('./users/user-router');
const authRouter = require('./auth/auth-router');
const authenticator = require('./auth/authenticator');

const server = express();

// sessionConfig object: 
const sessionConfig = {
    name: 'auth',
    secret: process.env.SESSION_SECRET || 'this is a secret',
    resave: false,
    saveUninitialized: process.env.SEND_COOKIES || true,
    cookie: {
        maxAge: 1000 * 60 * 10,
        secure: process.env.USE_SECURE_COOKIES || false,
        httpOnly: true,
    },
}

server.use(express.json());
server.use(cors({
    credentials: true, 
    origin: "http://localhost:3000"
}));
server.use(session(sessionConfig));

server.use('/api/users', authenticator, userRouter); // can apply authenticator middleware here
server.use('/api', authRouter);

server.get('/', (req, res) => {
    res.json({ api: 'It\'s working!' })
});

module.exports = server;