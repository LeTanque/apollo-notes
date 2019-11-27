const jwt = require("jsonwebtoken");

module.exports = (id) => {
    return jwt.sign({ id }, process.env.JWTSECRET, { expiresIn: "7 days" })
};
