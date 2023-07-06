const Geral = require ('../models/Geral');

module.exports={

    async index (req, res){
        const geral = await Geral.findAll()
        return res.json(geral)
    },

async store(req, res){
    const {quemsomos, ficha, binicio, bfinal, comment} = req.body;

    const geral = await Geral.create({quemsomos, ficha, binicio, bfinal, comment})
    
    return res.json(geral)
},

async update(req, res) {
    const {quemsomos, ficha, binicio, bfinal, comment} = req.body;

const geral= await Geral.update(
        {quemsomos, ficha, binicio, bfinal, comment},
        {
            where:{id: req.params.id},
        }
    );
    return res.json(geral)

}
};