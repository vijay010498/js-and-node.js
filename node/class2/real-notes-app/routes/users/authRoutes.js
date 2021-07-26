const express = require('express');
const router = express.Router({
    caseSensitive: false
});
const {User} = require("../../models/User")
const jwt = require('jsonwebtoken');
const chalk = require('chalk');
const {Password} = require("../../services/auth");

router.get("/api/sayHi", (req, res) => {
    res.status(200).send('Hi ALL AKjdaksjd');
})

router.post("/api/v1/user/signUp", async (req, res) => {
    const {email, password} = req.body;
    const existingUser = await User.findOne({email});
    if (existingUser)
        res.status(401).send('Email already in use');
    try {
        const user = {
            email,
            password
        }
        await User.create(user);
        // generate JWT and store in session
        const JWT = await jwt.sign({
            email: user.email
        }, "29i8379287uz01m8zw09128wWZ<(_012w8zem109832z", {
            expiresIn: "1d",
            algorithm: "HS512"
        });
        req.session = {
            JWT
        }
        res.status(200).send('Account created successfully')
    } catch (err) {
        console.log(err);
        res.status(401).send(err);
    }
})

// sign In logic
router.post("/api/v1/user/signIn", async (req, res) => {
    const {email, password} = req.body;
    const existingUser = await User.findOne({email});
    if (!existingUser)
        res.status(401).send('Invalid credentials');
    // check for password matching
    const passwordMatches = await Password.compare(existingUser.password, password);
    if (!passwordMatches) {
        res.status(401).send('Invalid credentials');
    }
    try {
        // generate JWT and store in session
        const JWT = await jwt.sign({
            email: existingUser.email
        }, "29i8379287uz01m8zw09128wWZ<(_012w8zem109832z", {
            expiresIn: "1d",
            algorithm: "HS512"
        });
        req.session = {
            JWT
        }
        res.status(201).send({
            message: "Login success"
        });
    } catch (err) {
        console.log(err);
        res.status(401).send(err);
    }
})

// router.post("/api/v1/user/signIn", async (req, res) => {
//     try {
//         const loginMessage = await signInAnUser(req);
//         res.status(200).send(loginMessage);
//     } catch (err) {
//         console.log(chalk.red('User SignIn Failed', err));
//         res.status(err.errorCode).send(err.message);
//     }
// })
// router.patch("/api/v1/user/updatePassword", async (req, res) => {
//     try {
//         const message = await updatePassword(req);
//         res.status(200).send(message);
//     } catch (err) {
//         console.log(chalk.red('update password failed', err));
//         res.status(err.errorCode).send(err.message);
//     }
// })


module.exports = {
    userAuthRouter: router
}