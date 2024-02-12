const jwt = require('jsonwebtoken');

const generateToken = (id)=>{
    return jwt.sign({id},process.env.JWT_SECRET,{
        expiresIn: "30d",
    })
}
const authMiddleware = (req, res,next)=>{
    const token = req.headers.authorization;
    
    if(!token) return res.status(401).json({msg: 'Token de autenticação não fornecido'})
    
    
    try {
        const dados = jwt.verify(token, process.env.JWT_SECRET);
        // console.log(dados)
        if (!dados){
            return res.status(401).json({msg:'token de autenticação inválido'})
        }
        req.userId = dados.id;
       console.log(req.userId)
        next();
    } catch (error) {
        res.status(401).json({error: 'Token inválido ou expirado'});
    }
}

const loginRequired = (req,res,next)=>{

    const token = req.headers.authorization;
    if(!token){
        return res.status(401).json({msg: 'É necessário estar logado'})
    }
    try {
        const dados = jwt.verify(token, process.env.JWT_SECRET);
        
        req.userId = dados.id;
        req.userEmail = dados.email;
       
        // if (req.params.id && req.params.id !== req.userId){
        //     return res.status(403)
        //     .json({ msg: 'você não tem permissão para acessar este recurso'})
        // }
        return next()
    } catch (error) {
        return res.status(401).json({
           error: "token expirado ou inválido"
        })
    }

}


module.exports = {generateToken, authMiddleware, loginRequired}