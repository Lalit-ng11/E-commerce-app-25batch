import jwt from 'jsonwebtoken';

const authMiddleware = (req,res,next)=>{
  
    const token = req.headers.authorization;
    if(!token) return res.status(401).json({
        message:"Unauthorized Token..!"
    })

    try {
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        req.user = decoded;

        next();

    } catch (error) {
        res.status(403).json({
            message:"Invalid Token..!"
        });
    }
}
export default authMiddleware;
