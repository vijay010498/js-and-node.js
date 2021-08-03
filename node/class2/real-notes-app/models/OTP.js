const mongoose = require("mongoose");
const {OTPService} = require("../services/OTP");
const OTPSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        index: true,
        unique: true
    },
    OPT: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 300
    }
});
OTPSchema.pre("save", async function (done) {
    if (this.isModified("OTP")) {
        const hashed = await OTPService.toHash(this.get("OTP"));
        this.set("OTP", hashed);
    }
    done();
});
const OTP = mongoose.model("OPT", OTPSchema);
module.exports = {
    OTP
}