const {Contato: ContatoModel } = require("../models/Contato");

const contatoController = {

    create: async (req, res)=>{
        try{

            console.log('dados recebidos:', req.body);
            console.log("id:",req.use._id)

            const contato ={
                name: req.body.name,
                email: req.body.email,
                telefone: req.body.telefone,
                image:req.body.image,
                user: req.user._id
            }
            const response = await ContatoModel.create(contato);
            res.status(201).json({response, msg: "Contato criado com sucesso"});
        }catch(error){
            console.log(error)
        }
    },
    getAll: async (req,res)=>{
        try {
            const contatos = await ContatoModel.find({user:req.user._id});
            res.json(contatos);
        } catch (error) {
            console.log(error)
        }
    },
    get: async(req, res) =>{
        try {
            const id = req.params.id;
            const contato = await ContatoModel.findByOne({_id:id, user: req.user._id});
            if (!contato){
                res.status(404).json({msg:"Serviço não encontrado"});
                return
            }
            res.json(contato);
        } catch (error) {
            console.log(error)
        }
    },
    delete: async (req, res)=>{
        try {
            const id = req.params.id;
            const contato = await ContatoModel.findById(id);
            if (!contato){
                res.status(404).json({msg:"Serviço não encontrado"});
                return
            }
            const deleService = await ContatoModel.findByIdAndDelete(id);
            res.status(200).json({deleService, msg:"contato excluído com sucesso"})

        } catch (error) {
            console.log(error)
        }
    },
    update: async (req,res)=>{
        const id = req.params.id;

        const contato = {
                name: req.body.name,
                email: req.body.email,
                telefone: req.body.telefone,
                image:req.body.image,
        }
        const updateContato = await ContatoModel.findByIdAndUpdate(id, contato);
        if (!updateContato){
            res.status(404).json({msg:"Serviço não encontrado"});
            return
        }
        res.status(200).json({contato, msg: "serviço atualizado com sucesso"})

    }
};

module.exports = contatoController;