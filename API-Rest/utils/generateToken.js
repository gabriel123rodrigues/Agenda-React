const jwt = require('jsonwebtoken');

const generateToken = (id)=>{
    return jwt.sign({id},process.env.JWT_SECRET,{
        expiresIn: "30d",
    })
}
const authMiddleware = (req, res,next)=>{
    const token = req.headers.authorization;
    if(!token){
        return res.status(401).json({msg: 'Token de autenticação não fornecido'})
    }
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded)=>{
        if (err){
            return res.status(401).json({msg:'token de autenticação inválido'})
        }
        req.user= decoded;
        next();
    })
    
}

const loginRequired = (req,res,next)=>{

    const token = req.headers.authorization;
    if(!token){
        return res.status(401).json({msg: 'É necessário estar logado'})
    }
    try {
        const dados = jwt.verify(token, process.env.JWT_SECRET);
        const {_id, email}=dados;
        req.userId = _id;
        req.userEmail = email;
        return next()
    } catch (error) {
        return res.status(401).json({
           error: "token expirado ou inválido"
        })
    }

}


module.exports = {generateToken, authMiddleware, loginRequired}