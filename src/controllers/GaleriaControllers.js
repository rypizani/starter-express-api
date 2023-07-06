const Galeria = require("../models/Galeria");

module.exports = {
  async index(req, res) {
    const galeria = await Galeria.findAll();
    return res.json(galeria);
  },

  async store(req, res) {
    const { title, subtitle, description, rota, put } = req.body;

    if (!req.file) {
      throw new Error(" error upload file");
    } else {
      const { originalname, filename:rota } = req.file;

  

      const galeria = await Galeria.create({
        title,
        subtitle,
        description,
        rota,
        put
      });


      return res.json(galeria);
    }
  },

  async update(req, res) {
    const { title, subtitle, description, rota, put } = req.body;
    if (!req.file) {
      throw new Error(" error upload file");
    } else {
      const { originalname, filename:rota} = req.file;

      const galeria = await Galeria.update( 
        { title, subtitle, description, rota, put },
        {
          where: { id: req.params.id },
        }

      );
      console.log(req.body, rota, put)

      return res.json(galeria)
    }
  },
};
