const jwt  = require("jsonwebtoken")
const jwt_secret = "wsgrjdksueplkdqasndh"
function isAuthenticated(req,res,next){
    const token  = req.headers['authorization'].split(' ')[1]
    const verifyToken = jwt.verify(token,jwt_secret)
    if(verifyToken){
        req.user_id = verifyToken.id
        next()
    }
    else{
        res.status(401).json({message:"Please login!"})
    }
}

module.exports = isAuthenticated