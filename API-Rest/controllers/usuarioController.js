const {Usuario: UsuarioModel} = require ("../models/Usuario");
const { generateToken } = require('../utils/generateToken');

const usuarioController ={

    async create (req, res){
        const {name,email,password} = req.body;
        const userExists = await UsuarioModel.findOne({email});

        if(userExists){
            res.status(400).json("usuário já existe");
        }
        try {
            const usuario = await UsuarioModel.create({
                name,
                email,
                password,
            });
            res.status(200).json({usuario, msg: "usuário criado com sucesso"});
        } catch (error) {
            console.log(error)
        }
    },
    delete: async (req, res)=>{
        try {
            const id = req.userId;
            
            const usuario = await UsuarioModel.findById(id);
            console.log(req.userId)
            if (!usuario){
                res.status(404).json({msg:"Usuário não encontrado"});
                return
            }
            const deleteUsuario = await UsuarioModel.findByIdAndDelete(id);
            res.status(200).json({deleteUsuario, msg:"Usuário excluido com sucesso"})

        } catch (error) {
            console.log(error)
        }
    },
    update: async (req,res)=>{
        try {
            const id = req.userId;
            
            if (!id) return res.status(400).json({errors:'usuário não existe'});

            const usuario = {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                
            }

            const {email} = usuario;
            const checkEmail = await UsuarioModel.findOne({email});
            if(checkEmail) return res.status(400).json("email já cadastrado tente outro");
            
        const updateUsuario = await UsuarioModel.findByIdAndUpdate(id, usuario);

        if(!updateUsuario) return res.status(404).json({ msg:"serviço não encontrado"});
        res.status(200).json({usuario, msg:"usuário atualizado com sucesso"})
        } catch (error) {
            console.log(error)
        }
    },
    async login(req,res){
        const {email, password} = req.body
        const usuario = await UsuarioModel.findOne({email});

        if (!usuario){

           return res.status(400).json("usuário não existe")
        }
        if (await usuario.matchPassword(password)){
            
            res.status(200).json({
                _id:usuario._id,
                name:usuario.name,
                email:usuario.email,
                token: generateToken(usuario._id),
            })
        }else{
            res.status(400).json("E-mail ou senha inválidos")
        }
    }
}

module.exports = usuarioController