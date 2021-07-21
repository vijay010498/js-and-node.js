const express = require('express');
const {json} = require('express');

// user routes
const {userAuthRouter} = require("./routes/users/authRoutes")

const app = express();
app.use(json());
app.use(userAuthRouter)


module.exports = {
    app
}