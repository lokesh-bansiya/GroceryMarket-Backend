const jwt = require("jsonwebtoken");
require('dotenv').config();

const AuthValidator = (req, res, next) => {
    const token = req.headers.authorization;
    const decoded = jwt.verify(token, process.env.key);
    if (decoded.userID) {
        next();
    } 
    else {
        res.send({ Message: "Please Login First!" });
    }
};

module.exports = { AuthValidator };