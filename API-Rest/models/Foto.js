const mongoose = require ("mongoose");
const {Contato} = require ("./Contato");
const appConfig = require('../config/appConfig');
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
});

fotoSchema.virtual('url').get(function(){
        return `${appConfig.url}/images/${this.filename}`;
});

fotoSchema.set('toJSON', {
    getters: true,
    virtuals: true,
    transform: function(doc, ret) {
        ret.url = doc.url;
        delete ret._id;
        delete ret.__v;
    }
});

const Foto = mongoose.model("Foto",fotoSchema);

module.exports = {
    Foto,
    fotoSchema,
}