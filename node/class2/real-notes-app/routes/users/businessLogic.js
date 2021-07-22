const {userDB} = require('./tempUserDatabase');
const {UserAuthenticationError} = require("../../errors/user/user-errors");
const signInAnUser = function (req) {
    return new Promise((resolve, reject) => {
        try {
            const {email, password} = req.body;
            if (checkValidUser(email, password))
                resolve('Login Success')
            else
                reject(new UserAuthenticationError);
        } catch (err) {
            reject(new UserAuthenticationError);
        }
    })
}

const checkValidUser = (email, password) => {
    return userDB.some((user) => {
        return user.email === email && user.password === password
    })
}


const updatePassword = function (req) {
    return new Promise((resolve, reject) => {
        try {
            const {oldPassword, newPassword, email} = req.body;
            // user exists
            if (checkValidUser(email, oldPassword)) {
                userDB.find((user, index) => {
                    if (user.email === email) {
                        // update the password
                        userDB[index].password = newPassword;
                        resolve('Password updated');
                    }
                })
            } else {
                reject(new UserAuthenticationError)
            }
        } catch (err) {
            reject(new UserAuthenticationError)
        }
    })
}

module.exports = {
    signInAnUser,
    updatePassword
}