const mongoose = require ("mongoose");
const bcrypt = require("bcryptjs")
const {Schema} = mongoose;

const usuarioSchema = new Schema({
    name:{
        type: String,
        required:true
    },
    email:{
        type: String,
        required:true,
        unique:true,
    },
    password:{
        type: String,
        required:true
    },
},{timestamps:true}
);

usuarioSchema.methods.matchPassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password)
}

usuarioSchema.pre("save",async function(next){
    if (!this.isModified("password")){
        next()
    }
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password,salt)
})


const Usuario = mongoose.model("Usuraio",usuarioSchema);


module.exports = {
    Usuario,
    usuarioSchema,
}