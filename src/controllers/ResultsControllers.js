const Results = require ('../models/Results');
const Sequelize = require ('sequelize')
module.exports={

    async index (req, res){
        const results = await Results.findAll()
        return res.json(results)
    },

    async selecionado (req, res){
        var query = {
                        attributes:[
                                        'idpergunta',
                                        [Sequelize.literal(`(SELECT COUNT(result1) from results  where result1 = 'a' and idpergunta = Results.idpergunta)`),'RSA'],
                                        [Sequelize.literal(`(SELECT COUNT(result1) from results  where result1 = 'b' and idpergunta = Results.idpergunta)`),'RSB'],
                                        [Sequelize.literal(`(SELECT COUNT(result1) from results  where result1 = 'c' and idpergunta = Results.idpergunta)`),'RSC'],
                                        [Sequelize.literal(`(SELECT COUNT(result1) from results  where result1 = 'd' and idpergunta = Results.idpergunta)`),'RSD'],
                                        [Sequelize.literal(`(SELECT COUNT(result1) from results  where result1 = 'e' and idpergunta = Results.idpergunta)`),'RSE']
                        ],
                        group:['idpergunta']
                    }
        const results = await Results.findAll(query);
        return res.json(results)
    },

    async basedetele (req, res){
        const results = await Results.destroy({
            truncate: true, 
            cascade: false
        });
        return res.json(results)
    },

async store(req, res){
    const {result1, result2, result3, result4, result5, result6, result7, result8, result9, result10, idpergunta} = req.body;

    const results = await Results.create({result1, result2, result3, result4, result5, result6, result7, result8, result9, result10, idpergunta})
    
    return res.json(results)
},

async update(req, res) {
    const {result1, result2, result3, result4, result5, result6, result7, result8, result9, result10, idpergunta} = req.body;

const results = await Results.update(
    {result1, result2, result3, result4, result5, result6, result7, result8, result9, result10, idpergunta},
        {
            where:{id: req.params.id},
        }
    );
    return res.json(results)

}
};