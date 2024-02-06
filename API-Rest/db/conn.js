const mongoose = require("mongoose")
require('dotenv').config();

async function main(){
    try{
        
        await mongoose.connect(process.env.MONGO_DB_URL);
        console.log("conectado ao banco")
    } catch (error){
        console.log(`ERRO: ${error}`)
    }
}

module.exports = main