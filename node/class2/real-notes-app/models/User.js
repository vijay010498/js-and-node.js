const mongoose = require('mongoose');
const {Password} = require('../services/auth')
const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        index: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})
UserSchema.pre("save", async function (done) {
    if (this.isModified("password")) {
        const hashed = await Password.toHash(this.get("password"));
        this.set("password", hashed);
    }
    done();
})
UserSchema.pre("findOneAndUpdate", async function (done) {
    const password = this.getUpdate().$set.password;
    if (!password) {
        return done();
    }
    try {
        const hashed = await Password.toHash(password);
        this.set("password", hashed)
    } catch (err) {
        return done(err);
    }
})


const User = mongoose.model("User", UserSchema);
module.exports = {
    User
}