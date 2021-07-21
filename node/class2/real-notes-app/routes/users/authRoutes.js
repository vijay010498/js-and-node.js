const express = require('express');
const router = express.Router({
    caseSensitive: false
})
const {signInAnUser} = require('./businessLogic');
const chalk = require('chalk');

router.get("/api/sayHi", (req, res) => {
    res.status(200).send('Hi ALL AKjdaksjd');
})

router.post("/api/v1/user/signIn", async (req, res) => {
    try {
        const loginMessage = await signInAnUser(req);
        res.status(200).send(loginMessage);
    } catch (err) {
        console.log(chalk.red('User SignIn Failed', err));
        res.status(err.errorCode).send(err.message);
    }
})


module.exports = {
    userAuthRouter: router
}