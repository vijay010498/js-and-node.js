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


const User = mongoose.model("User", UserSchema);
module.exports = {
    User
}