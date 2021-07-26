const {scrypt, randomBytes} = require('crypto');
const {promisify} = require('util');
const {Buffer} = require('buffer');

const scryptAsync = promisify(scrypt)


class Password {
    static async toHash(password) {
        const salt = randomBytes(8).toString("hex");
        const bufTemp = (await scryptAsync(password, salt, 64))
        const buf = Buffer.from(bufTemp);
        return `${buf.toString('hex')}.${salt}`
    }

    static async compare(storePassword, suppliedPassword) {
        const [hashedPassword, salt] = storePassword.split(".");
        const bufTemp = (await scryptAsync(suppliedPassword, salt, 64));
        const buf = Buffer.from(bufTemp);
        return buf.toString("hex") === hashedPassword;
    }


}

module.exports = {
    Password
}