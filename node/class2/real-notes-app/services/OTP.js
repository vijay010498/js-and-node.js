const {scrypt, randomBytes} = require('crypto');
const {promisify} = require('util');
const {Buffer} = require('buffer');

const scryptAsync = promisify(scrypt);

class OTPService {
    static async toHash(OTP) {
        const salt = randomBytes(8).toString("hex");
        const bufTemp = (await scryptAsync(OTP.toString(), salt, 64));
        const buf = Buffer.from(bufTemp);
        return `${buf.toString("hex")}.${salt}`;
    }

    static async compare(storedOTP, suppliedOTP) {
        const [hashedOTP, salt] = storedOTP.split('.');
        const bufTemp = (await scryptAsync(suppliedOTP.toString(), salt, 64));
        const buf = Buffer.from(bufTemp);
        return buf.toString("hex") === hashedOTP
    }
}

module.exports = {
    OTPService
}