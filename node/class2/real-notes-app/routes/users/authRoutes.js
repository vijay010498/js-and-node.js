const express = require('express');
const router = express.Router({
    caseSensitive: false
});
const {User} = require("../../models/User")
const {OTP} = require("../../models/OTP");
const jwt = require('jsonwebtoken');
const chalk = require('chalk');
const MailService = require("@sendgrid/mail");
MailService.setApiKey("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");
const {Password} = require("../../services/auth");
const {requireAuth} = require("../../middlewares/auth/require-user-auth")

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

router.patch("/api/v1/user/changePassword", requireAuth, async (req, res) => {
    const {oldPassword, newPassword} = req.body
    const payload = await jwt.verify(req.session.JWT, "29i8379287uz01m8zw09128wWZ<(_012w8zem109832z");
    const email = payload.email.toString();
    const existingUser = await User.findOne({email});
    const passwordMatches = await Password.compare(existingUser.password, oldPassword);
    if (!passwordMatches)
        res.status(401).send("Old password not valid");
    try {
        await User.findOneAndUpdate({
            email: email
        }, {
            $set: {
                password: newPassword
            }
        })
        // generate session
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
            message: "Password updated"
        });
    } catch (err) {
        console.error(err);
        res.status(401).send(err);
    }
});

router.post("/api/v1/users/requestOTP", async (req, res) => {
    const {email} = req.body;
    const doesUserExists = await User.findOne({email});
    if (!doesUserExists) {
        res.status(401).send("Invalid email");
    }
    //
    const alreadyRequested = await OTP.findOne({email});
    if (alreadyRequested) {
        res.status(401).send({
            message: "OPT already requested please wait"
        })
    }
    // 6 DIGIT OTP
    const DIGIT = Math.floor(100000 + Math.random() * 900000);
    const OTPEmail = {
        to: {
            email: email,
            name: "TEST NAME"
        },
        from: {
            email: "admin@oncampus.in",
            name: "oncampus.in"
        },
        reply_to: {
            email: "admin@oncampus.in",
            name: "oncampus.in"
        },
        click_tracking: {
            enable: true,
            enable_text: true
        },
        open_tracking: {
            enable: true
        },
        template_id: "d-9d3ee07ff23845889fd29df671e7b7d4",
        dynamic_template_data: {
            name: "TEST NAME",
            PASS: DIGIT.toString()
        }
    }
    try {
        await MailService.send(OTPEmail);
        // if OPT sent
        const userOTP = {
            OPT: DIGIT,
            email
        }
        await OTP.create(userOTP);
        res.status(200).send({
            message: "OPT sent successfully, OTP will expire in 5 minutes"
        })
    } catch (err) {
        console.error(err);
        res.status(400).send(err);
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