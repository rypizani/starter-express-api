const crypto = require('crypto')

const multer = require('multer')


const path = require('path')


const Galeria = require ('../models/Galeria');


module.exports={

    upload(folder){
    return{
      storage: multer.diskStorage({
        destination: path.resolve(__dirname, '..', '..', folder),
        filename: (req, file, callback) => {
          const fileHash = crypto.randomBytes(16).toString("hex");
          const fileName = `${fileHash}-${file.originalname}`
         // const fileName = `${req.params.id}`
         


          return callback(null, fileName)
        }
      })
    }
  },



  atualiza(folder){
    return{
      storage: multer.diskStorage({
        destination: path.resolve(__dirname, '..', '..', folder),
        filename: (req, file, callback) => {
          const fileHash = crypto.randomBytes(16).toString("hex");
          const fileName = `${fileHash}-${file.originalname}`

          return callback(null, fileName)
        }
      })
    }
  }

}