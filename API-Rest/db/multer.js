const multer = require ('multer')
const  {extname,resolve} = require ('path');
const path = require('path');

// const aleatorio = () => Math.floor(Math.random() * 10000 + 10000);
const fileFilter = (req, file, cb)=>{
    if(file.mimetype != 'image/jpeg' && file.mimetype != 'image/png'){
        return cb(new multer.MulterError ('arquivo deve ser PNG ou JPG'))
    }
    return cb(null,true);
}
const storage =  multer.diskStorage({
   
    destination: function (req, file, cb){
        cb(null, "uploads/")
    },
    filename: function (req,file,cb){
        cb(null,Date.now() +  path.extname(file.originalname))
    }
})

const upload = multer({
    storage:storage,
    fileFilter:fileFilter
})

module.exports = upload