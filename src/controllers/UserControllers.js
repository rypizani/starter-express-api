const User = require ('../models/User');

module.exports={

    async index (req, res){
        const user = await User.findAll()
        return res.json(user)
    },

async store(req, res){
    const {name, comment} = req.body;

    const user = await User.create({name, comment})
    
    return res.json(user)
},

async update(req, res) {
    const {name, comment} = req.body;

const user= await User.update(
        {name, comment},
        {
            where:{id: req.params.id},
        }
    );
    return res.json(user)

},

async delete(req, res){
    const {id} = req.params

    const user = await  User.findOne({where:{id}})

    if(!user){
        res.status(401).json({message: 'id nao encontrado'})
    }else{
        await  User.destroy({where:{id}})
        res.status(200).json({ok:true})
    }



},

};