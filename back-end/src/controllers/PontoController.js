const monngoose = require("mongoose");

const Ponto = monngoose.model("Ponto");
module.exports = {
    async index(req,res){
        const pontos = await Ponto.find();

        return res.json(pontos);
    },
    async show(req,res){
        const ponto  = await Ponto.find({name: {$regex:req.params.name, $options:"i"}});
        
        if(!ponto) return res.statis(204).json({error:"Ponto não encontrado"})

        return res.json(ponto);
    },
    async store(req,res){
        const ponto = await Ponto.create(req.body); 
        return res.json(ponto);
    }
    
};