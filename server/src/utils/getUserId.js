const jwt = require("jsonwebtoken");


const getUserId = (integrationContext) => {

    const token = integrationContext.req.headers.authorization    
    if (!token) throw new Error("Wrong facebook creds!")
    const decodedToken = jwt.verify(token, process.env.JWTTOKEN)
    return decodedToken.id
};


module.exports = getUserId

