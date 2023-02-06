const jwt = require("jsonwebtoken");
require('dotenv').config();

const AddToCartValidation = (req, res, next) => {
    const token = req.headers.authorization;
    console.log(token);
    const decoded = jwt.verify(token, process.env.key);
    console.log("decoded:", decoded);

    if (req.method === "POST" && decoded) {
        req.body.cartID = decoded.userID;
        next();
    } 
    else {
        res.send({ Message: "Please Login First!" });
    }
};

module.exports = { AddToCartValidation };