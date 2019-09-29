//Middleware to add to any routes to only allow authenticated users to access them

const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next)=>{
    //Pull the token value from the header on any requests that come in. If the token isn't present, reject access to the route
    const token = req.header('auth-token');
    if(!token) res.status(401).send("Access Denied");

    //Use jwt.verify() to check if the token is valid. jwt.verify() returns the content of the JWT, which we store in user
    //If token is verified, add the jwt content to the req object as req.user, so we can access the user id in each route
    //If token is not verified, reject the request
    try {
        const user = jwt.verify(token, process.env.TOKEN_SECRET);
        if(user) req.user = user;
        next();
    } catch(e){
        res.status(400).send("Invalid credentials");
    }
}

module.exports = authMiddleware;