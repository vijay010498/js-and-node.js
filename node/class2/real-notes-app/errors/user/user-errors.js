class UserAuthenticationError extends Error {
    constructor() {
        super('User Authentication Error');
        this.errorCode = 401;
        this.message = 'Email or password not valid'
    }
}
module.exports = {
    UserAuthenticationError
}