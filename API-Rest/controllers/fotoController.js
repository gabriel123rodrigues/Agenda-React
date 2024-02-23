const multer = require ('multer');
const multerConfig = require ('../config/multer');
const { Foto: FotoModel } = require('../models/Foto');

const upload = multer(multerConfig).single('image');


const fotoController = {
    create: (req,res)=>{
        return upload(req, res, async (error)=>{
            
                const id = req.userId;
                console.log("id create", id)
                if(!id)  return res.status(400).json({errors:'É necessário estar logado'});
                if(error){
                    return res.status(400).json({
                        errors:[error.code],
                    })
                }
                if(!req.file)  return res.status(400).json({errors:'selecione um arquivo'});

                try {
                const {originalname, filename} = req.file;
                const file = req.file.path;
                const {contatoUser} = req.body;
                if(!contatoUser)  return res.status(400).json({errors:'Usuário inixistente'});
                
                const foto = await FotoModel.create({
                    originalname: originalname,
                    filename: filename,
                    src: file,
                    user: id,
                    contatoUser: contatoUser,
                })
              
                
    
                res.status(200).json({foto, msg:"imagem salva com sucesso"})
            } catch (error) {
                console.log(error)
               res.status(400).json({error: 'contato não existe'})
            }
           
        })
    },
    delete: async (req,res)=>{
        try {
            const id = req.userId;

            if (!id) return res.status(400).json({msg: "token é necessário"});
           
            const fotoId = req.params.id.trim();
            
            const foto = await FotoModel.findOne({ _id:fotoId})
            console.log(foto, fotoId)
            
            if (!foto) return res.status(400).json({msg: "foto não existe"});

            const deleteFoto = await FotoModel.findByIdAndDelete(fotoId);
            res.status(200).json({deleteFoto,msg:"foto deletada com sucesso"});
        } catch (error) {
            console.log(error)
        }
    },
    getAll: async (req,res)=>{
        const users = req.userId;
        if(!users) return res.status(400).json({errors: 'necessário estar logado'});
        try {
            const fotos = await FotoModel.find({user:users})
            if(fotos.length === 0) return res.status(400).json({errors:'nenhum contato cadastrado'});
            res.status(200).json({fotos, msg:"lista de todas as fotos"})
        } catch (error) {
            console.log(error)
        }
    },
    get: async(req,res)=>{
        try {
            const id = req.userId;
            console.log('idfotocontroller',id)
            const fotoId = req.params.id.trim();
            if (!id) return res.status(400).json({msg: "token é necessário"});
            const foto = await FotoModel.findById(fotoId)
            if(!foto) return res.status(400).json({msg:'foto não encontrada'});
            res.json(foto)

        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = fotoController