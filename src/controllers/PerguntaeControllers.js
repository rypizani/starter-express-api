const Perguntae = require("../models/Perguntae");

module.exports = {
  async index(req, res) {
    const perguntae = await Perguntae.findAll();
    return res.json(perguntae);
  },

  async store(req, res) {
    const { p, rota, put } = req.body;

    if (!req.file) {
      throw new Error(" error upload file");
    } else {
      const { originalname, filename:rota } = req.file;

  

      const perguntae = await Perguntae.create({
        p,
        rota,
        put
      });


      return res.json(perguntae);
    }
  },

  async update(req, res) {
    const { p, rota, put } = req.body;
    if (!req.file) {
      throw new Error(" error upload file");
    } else {
      const { originalname, filename:rota} = req.file;

      const perguntae = await Perguntae.update( 
        { p, rota, put },
        {
          where: { id: req.params.id },
        }

      );

      return res.json(perguntae)
    }
  },
};
