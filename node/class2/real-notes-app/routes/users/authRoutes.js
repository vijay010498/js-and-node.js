const express = require('express');
const router = express.Router({
    caseSensitive: false
});
const {User} = require("../../models/User")
const {signInAnUser} = require('./businessLogic');
const {updatePassword} = require('./businessLogic');
const chalk = require('chalk');

router.get("/api/sayHi", (req, res) => {
    res.status(200).send('Hi ALL AKjdaksjd');
})

router.post("/api/v1/user/signUp", async (req, res) => {
    const {email, password} = req.body;
    const existingUser = await User.findOne({email})
    if (existingUser) {
        res.status(401).send('Email already in use');
    }
    try {
        const user = {
            email,
            password
        }
        await User.create(user);
        res.status(200).send('User Created');
    } catch (err) {
        console.log(err);
        res.status(401).send(err);

    }
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
router.patch("/api/v1/user/updatePassword", async (req, res) => {
    try {
        const message = await updatePassword(req);
        res.status(200).send(message);
    } catch (err) {
        console.log(chalk.red('update password failed', err));
        res.status(err.errorCode).send(err.message);
    }
})


module.exports = {
    userAuthRouter: router
}