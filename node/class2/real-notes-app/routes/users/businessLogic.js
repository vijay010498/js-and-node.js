const {userDB} = require('./tempUserDatabase');
const {UserAuthenticationError} = require("../../errors/user/user-errors");
const signInAnUser = function (req) {
    return new Promise((resolve, reject) => {
        try {
            const {email, password} = req.body;
            if (userDB.some((user) => {
                return user.email === email && user.password === password;
            })) {
                // meaning user exists
                resolve('Login success');
            } else {
                reject(new UserAuthenticationError);
            }
        } catch (err) {
            reject(new UserAuthenticationError);
        }
    })
}

module.exports = {
    signInAnUser
}