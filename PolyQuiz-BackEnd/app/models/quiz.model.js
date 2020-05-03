const Joi = require('joi')
const BaseModel = require('../utils/base-model.js')

module.exports = new BaseModel('Quiz', {
  name: Joi.string().required(),
  themeId: Joi.number().required(),
  image: Joi.string().allow(''),
  trouble: Joi.string().required(),
})
