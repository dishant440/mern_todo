const jwt = require('jsonwebtoken');
const authKey = process.env.JWT_SECRET;

function authmiddleware(req, res, next) {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({ message: "No token provided" });
    }

    const token = authHeader.split(" ")[1];
    
    if (!token) {
        return res.status(401).json({ message: "Invalid token format" });
    }

    try {
        const authorized = jwt.verify(token, authKey);
     
        if (authorized) {
            req.userId = authorized._id;  
            return next();
        } else {
            return res.status(401).json({ message: "Not authenticated, please sign up" });
        }
    } catch (error) {
        return res.status(401).json({ message: "Invalid token" });
    }
}

module.exports = { authmiddleware };
