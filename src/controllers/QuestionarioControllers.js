const Questionario = require ('../models/Questionario');

module.exports={

    async index (req, res){
        const questionario = await Questionario.findAll()
        return res.json(questionario)
    },

async store(req, res){
    const {p, r1, r2, r3, r4, r5, r6, nome, rota} = req.body;

    const questionario = await Questionario.create({p, r1, r2, r3, r4, r5, r6, nome, rota})
    
    return res.json(questionario)
},

async update(req, res) {
    const {p, r1, r2, r3, r4, r5, r6, nome, rota} = req.body;

const questionario = await Questionario.update(
    {p, r1, r2, r3, r4, r5, r6, nome, rota},
        {
            where:{id: req.params.id},
        }
    );
    return res.json(questionario)

}
};