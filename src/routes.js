const express = require('express')
const multer = require('multer')

const GaleriaController = require ('./controllers/GaleriaControllers')
const QuestionarioController = require('./controllers/QuestionarioControllers')
const ResultsController = require('./controllers/ResultsControllers')
const GeralController =  require('./controllers/GeralControllers')
const UserController =  require('./controllers/UserControllers')
const PerguntaeController = require('./controllers/PerguntaeControllers')

const routes = express.Router();

const uploadConfig = require ('./config/multer')

const upload = multer(uploadConfig.upload("./tmp"))

routes.get('/galeria', GaleriaController.index)
routes.post('/galeria',  upload.single('file'),GaleriaController.store)
routes.put('/galeria/:id',  upload.single('file'),GaleriaController.update)

routes.get('/pergunta', QuestionarioController.index)
routes.post('/pergunta', QuestionarioController.store)
routes.put('/pergunta/:id', QuestionarioController.update)

routes.get('/resultado', ResultsController.index)
routes.get('/selecionado', ResultsController.selecionado)
routes.get('/basedelete', ResultsController.basedetele)
routes.post('/resultado', ResultsController.store)
routes.put('/resultado/:id', ResultsController.update)


routes.get('/geral', GeralController.index)
routes.post('/geral', GeralController.store)
routes.put('/geral/:id', GeralController.update)


routes.get('/user', UserController.index)
routes.post('/user', UserController.store)
routes.put('/user/:id', UserController.update)
routes.delete('/user/delet/:id', UserController.delete)

routes.get('/perguntae', PerguntaeController.index)
routes.post('/perguntae',  upload.single('file'),PerguntaeController.store)
routes.put('/perguntae/:id',  upload.single('file'),PerguntaeController.update)

module.exports = routes;