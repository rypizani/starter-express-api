const Sequelize = require ('sequelize')

const dbConfig = require('../config/database')

const Galeria = require ('../models/Galeria')

const Questionario = require('../models/Questionario')

const Perguntae = require('../models/Perguntae')

const Results = require('../models/Results')

const Geral = require('../models/Geral')

const User = require('../models/User')


const connection = new Sequelize(dbConfig)

Galeria.init(connection);
Questionario.init(connection);
Results.init(connection);
Geral.init(connection);
User.init(connection);
Perguntae.init(connection);


module.exports = connection