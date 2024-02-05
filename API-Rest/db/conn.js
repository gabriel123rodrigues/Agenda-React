const mongoose = require("mongoose")

async function main(){
    try{
        
        await mongoose.connect("mongodb+srv://kardimrodrigues:vg2KaSKScof2SQY5@cluster0.zsjixjp.mongodb.net/?retryWrites=true&w=majority");
        console.log("conectado ao banco")
    } catch (error){
        console.log(`ERRO: ${error}`)
    }
}

module.exports = main