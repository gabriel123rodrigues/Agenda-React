const mongoose = require ("mongoose");
const {Contato} = require ("./Contato")
const {Schema} = mongoose;

const fotoSchema = new Schema({
   
  
    originalname:{
        type:String,
        required:true,
    },
    filename:{
        type:String,
        required:true,
    },
    src:{
        type: String,
        required:true
    },
    contatoUser: {
        type: Schema.Types.ObjectId,
        ref:Contato,
        required: true,
    }
}, {
    timestamps:true,
})

const Foto = mongoose.model("Foto",fotoSchema);

module.exports = {
    Foto,
    fotoSchema,
}