const multer = require ('multer');
const multerConfig = require ('../db/multer');
const { Foto: FotoModel } = require('../models/foto');

const upload = multer(multerConfig).single('image');


const fotoController = {
    create: (req,res)=>{
        return upload(req, res, async (error)=>{
            try {
                const id = req.userId;
                console.log("id create", id)
                if(!id)  return res.status(400).json({errors:'É necessário estar logado'});
                if(error){
                    return res.status(400).json({
                        errors:[error.code],
                    })
                }
                if(!req.file)  return res.status(400).json({errors:'selecione um arquivo'});
                const {originalname, filename} = req.file;
                const file = req.file.path;
                const {contatoUser} = req.body;
                if(!contatoUser)  return res.status(400).json({errors:'Usuário inixistente'});
                const foto = await FotoModel.create({
                    originalname: originalname,
                    filename: filename,
                    src: file,
                    contatoUser: contatoUser,
                })
                
    
                res.status(200).json({foto, msg:"imagem salva com sucesso"})
            } catch (error) {
                console.log(error)
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
    }
}

module.exports = fotoController