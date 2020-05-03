const Joi = require('joi')
const BaseModel = require('../utils/base-model.js')

module.exports = new BaseModel('Stat', {
  profileId: Joi.number().required(),
  quizId: Joi.number().required(),
  score: Joi.number().required(),
  time: Joi.number().required(),
  trial: Joi.object().pattern(Joi.string(), Joi.number()),
  questionsDone: Joi.array().required(),
  nbRightAnswers: Joi.number().required(),
  nbWrongAnswers: Joi.number().required(),
  date: Joi.string().required(),
  resume: Joi.object().pattern(Joi.string(), Joi.boolean()),
  missclics: Joi.number(),
})