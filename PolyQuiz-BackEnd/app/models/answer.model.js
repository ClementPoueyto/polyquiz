const Joi = require('joi')
const BaseModel = require('../utils/base-model.js')

module.exports = new BaseModel('Answer', {
  text:  Joi.string().allow(''),
  isCorrect: Joi.bool().required(),
  questionId: Joi.number().required(),
  image: Joi.string().allow('')
})