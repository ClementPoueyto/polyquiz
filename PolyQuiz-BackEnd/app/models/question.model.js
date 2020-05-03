const Joi = require('joi')
const BaseModel = require('../utils/base-model.js')

module.exports = new BaseModel('Question', {
  text: Joi.string().required(),
  quizId: Joi.number(),
  image: Joi.string().allow(''),
  answersAreText: Joi.bool().required(),
})