const mongoose = require ("mongoose");
const {Usuario} = require ("./Usuario")

const {Schema} = mongoose;

const contatoSchema = new Schema({
    name: {
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    telefone:{
        type:String,
        required:true,
    },
    image:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Foto',
       
    },
    user:{
        type: Schema.Types.ObjectId,
        ref:Usuario,
        required: true,
    }
}, {
    timestamps:true,
})

const Contato = mongoose.model("Contato",contatoSchema);

module.exports = {
    Contato,
    contatoSchema,
}