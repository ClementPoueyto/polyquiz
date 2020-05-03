const { Router } = require('express')

const { Quiz, Stat } = require('../../models')
const QuestionRouter = require('./questions')
const { addQuestions, deleteQuestionsAndAnswers,addThemes } = require('../Manage')


const router = new Router()
router.use('/:quizId/questions', QuestionRouter)

router.get('/', (req, res) => {
  try {
    const quizzes = Quiz.get()
    let quizzesToSend = []
    quizzes.forEach(element => {
      let quiz = {...element,questions:addQuestions(element.id),theme:addThemes(element.themeId)}
      quizzesToSend.push(quiz)
    });
    res.status(200).json(quizzesToSend)
  } catch (err) {
    res.status(500).json(err)
  }
})

router.get('/:quizId', (req, res) => {
  try {
    const quiz = {...Quiz.getById(req.params.quizId)}
    quiz.questions = addQuestions(quiz.id)
    quiz.theme=addThemes(quiz.themeId)
    res.status(200).json(quiz)
  } catch (err) {
    res.status(404).json(err)
  }
})

router.post('/', (req, res) => {
  try {
    const quiz = Quiz.create({ ...req.body })
    res.status(201).json(quiz)
  } catch (err) {
    if (err.name === 'ValidationError') {
      res.status(400).json(err.extra)
    } else {
      res.status(500).json(err)
    }
  }
})

router.delete('/:quizId', (req, res) => {
  try {
    deleteQuestionsAndAnswers(req.params.quizId)
    Stat.get().filter((stat)=> stat.quizId == req.params.quizId).forEach((stat)=>{
      Stat.delete(stat.id)
    })
    res.status(200).json(Quiz.delete(req.params.quizId))
  } catch (err) {
    res.status(404).json(err)
  }
})

router.put('/:quizId', (req, res) => {
  try {
    res.status(200).json(Quiz.update(req.params.quizId,req.body))
  } catch (err) {
    res.status(404).json(err)
  }
})

module.exports = router
