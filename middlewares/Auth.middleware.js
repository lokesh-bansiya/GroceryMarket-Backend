const jwt = require("jsonwebtoken");
require('dotenv').config();

const AuthValidator = (req, res, next) => {
    const token = req.headers.authorization;
    // console.log(token);
    // if (token) {
        const decoded = jwt.verify(token, process.env.key);
        if (decoded.userID) {
            next();
        } else {
            res.send({ Message: "Please Login First 1" });
        }
    // } else {
    //     res.send({ Message: "Please Login First 2" });
    // }
};

module.exports = { AuthValidator };