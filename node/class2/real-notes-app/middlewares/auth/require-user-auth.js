const {User} = require("../../models/User");
const jwt = require('jsonwebtoken');

const requireAuth = async (req, res, next) => {
    if (!req.session.JWT) {
        res.status(401).send("User not authenticated ");
    } else {
        let email;
        try {
            const payload = await jwt.verify(req.session.JWT, "29i8379287uz01m8zw09128wWZ<(_012w8zem109832z");
            email = payload.email.toString();
            //check in db
            const existingUser = await User.findOne({email});
            if (!existingUser) {
                res.session = null;
                res.status(401).send("User not authenticated");
            }
            next();
        } catch (err) {
            console.error(err);
            res.session = null;
            res.status(401).send("User not authenticated");
        }
    }
}
module.exports = {
    requireAuth
}