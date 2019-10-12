const mongoose = require('mongoose');

const PontoSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true,
    },
    adress:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    trash_type:{
        type:String,
        required:true,
    },
    createdAt:{
        type: Date,
        default:Date.now,
    },
});

module.exports = mongoose.model('Ponto', PontoSchema);;