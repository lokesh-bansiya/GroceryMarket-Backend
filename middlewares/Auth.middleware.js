const jwt = require("jsonwebtoken");
require('dotenv').config();

const AuthValidator = (req, res, next) => {
    const token = req.headers.authorization;
    console.log(token);
    if (token) {
        const decoded = jwt.verify(token, process.env.key);
    console.log(decoded.userID);

        if (decoded.userID) {
            next();
        } else {
            res.send({ Message: "Please Login First" });
        }
    } else {
        res.send({ Message: "Please Login First" });
    }
};

module.exports = { AuthValidator };