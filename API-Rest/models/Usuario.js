const mongoose = require ("mongoose");

const {Schema} = mongoose;

const usuarioSchema = new Schema({
    name:{
        type: String,
        required:true
    },
    email:{
        type: String,
        required:true
    },
    password:{
        type: String,
        required:true
    },
},{timestamps:true}
);

const Usuario = mongoose.model("Usuraio",usuarioSchema);

module.exports = {
    Usuario,
    usuarioSchema,
}