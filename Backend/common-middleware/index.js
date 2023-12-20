const jwt = require('jsonwebtoken')
const multer = require('multer')
const path = require('path')
const shortid = require('shortid')
const multerS3 = require('multer-s3')
const aws = require('aws-sdk')


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(path.dirname(__dirname), 'uploads'))
  },
  filename: function (req, file, cb) {
    cb(null, shortid.generate() + '-' + file.originalname)
  }
})

const s3 = new aws.S3({
  accessKeyId: 'AKIA3UY247NG3WNBHLUL',
  secretAccessKey: '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'
})

exports.upload = multer({ storage })

exports.uploadS3 = multer({
  storage: multerS3({
    s3: s3,
    acl: 'public-read',
    contentType: multerS3.AUTO_CONTENT_TYPE,
    contentDisposition: 'inline',
    bucket: 'mymaterials231',
    metadata: function (req, file, cb) {
      cb(null, { fieldName: file.fieldname });
    },
    key: function (req, file, cb) {
      cb(null, shortid.generate() + '-' + file.originalname)
    }
  })
})

