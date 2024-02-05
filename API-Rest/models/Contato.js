const mongoose = require ("mongoose");

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
        type:String,
        required:true,
    },
}, {
    timestamps:true,
})

const Contato = mongoose.model("Contato",contatoSchema);

module.exports = {
    Contato,
    contatoSchema,
}