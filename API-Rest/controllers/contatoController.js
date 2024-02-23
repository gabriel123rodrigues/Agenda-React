const {Contato: ContatoModel } = require("../models/Contato");


const contatoController = {

    create: async (req, res)=>{
        try{
            const id = req.userId;
           
        //*** */

            if(!id)  return res.status(400).json({errors:'É necessário estar logado'});

            const contato ={
                name: req.body.name,
                email: req.body.email,
                telefone: req.body.telefone,
                imageId:foto._id,
                user: req.userId
            }
            const response = await ContatoModel.create(contato);

            await FotoModel.findByIdAndUpdate(foto._id,{contatoUser: response._id})

            console.log("response do contato:",response);
            res.status(201).json({response, msg: "Contato criado com sucesso"});
        }catch(error){
            console.log(error)
        }
    },
    getAll: async (req,res)=>{
        const users = req.userId;
        if(!users) return res.status(400).json({errors:'id não existe'});
        try {
            const contatos = await ContatoModel.find({user:users});
            if(contatos.length === 0) return res.status(400).json({errors:'nenhum contato cadastrado'});
            res.json(contatos);
        } catch (error) {
            console.log(error)
        }
    },
    get: async(req, res) =>{
        try {
            const nome = req.query.name;
            const users = req.userId;
            const contato = await ContatoModel.findOne({ name:nome,user: users });
            if (!contato){
                res.status(404).json({msg:"contato não encontrado"});
                return
            }
            res.json(contato);
        } catch (error) {
            console.log(error)
        }
    },
    delete: async (req, res)=>{
        try {
            const id = req.userId;
            const contatoId = req.params.id;
            console.log("id:",id,"contatoId:",contatoId);
            const contato = await ContatoModel.findOne({_id: contatoId, user: id});
            if (!contato){
                res.status(404).json({msg:"erro usuário token"});
                return
            }
            const deleService = await ContatoModel.findByIdAndDelete(contatoId);
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