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
            const id = req.params.id;
            const contato = await UsuarioModel.findById(id);
            if (!contato){
                res.status(404).json({msg:"Serviço não encontrado"});
                return
            }
            const deleteUsuario = await UsuarioModel.findByIdAndDelete(id);
            res.status(200).json({deleteUsuario, msg:"Usuário excluido com sucesso"})

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