const express = require('express');
const {json} = require('express');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');

// user routes
const {userAuthRouter} = require("./routes/users/authRoutes")

const app = express();
app.use(json());
app.use(cookieParser());
app.use(cookieSession({
    signed: false,
    secure: process.env.NODE_ENV === "production"
}))
app.use(userAuthRouter)


module.exports = {
    app
}