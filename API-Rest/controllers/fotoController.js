const multer = require ('multer');
const multerConfig = require ('../db/multer');

const upload = multer(multerConfig).single('image');


const fotoController = {
    create: async(req,res)=>{
        return upload(req, res, (error)=>{
            if(error){
                return res.status(400).json({
                    errors:[error.code],
                })
            }
            res.json(req.file)
        })
    }
}

module.exports = fotoController