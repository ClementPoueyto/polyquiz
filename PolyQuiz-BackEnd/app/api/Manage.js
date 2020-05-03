const { Quiz } = require('../models')
const { Question } = require('../models')
const { Answer } = require('../models')
const { Theme } = require('../models')

const addQuiz = (id) => {
  let quiz
  let quizToSend
  try {
    quiz = { ...Quiz.getById(id) }
    quizToSend = { id: quiz.id, name: quiz.name, trouble: quiz.trouble }
    const theme = addThemes(quiz.themeId)
    quizToSend.theme = { name: theme.name }
  } catch (err) {
    res.status(500).json(err)
  }
  return quizToSend
}

const addQuestions = (quizId) => {
  let questions = []
  try {
    Question.get().filter((ques) => ques.quizId == quizId).forEach((ques) => {
      let nQues = { ...ques, answers: addAnswers(ques.id) }
      questions.push(nQues)
    })
  } catch (err) {
    res.status(500).json(err)
  }
  return questions
}

const addAnswers = (questionId) => {
  let answers = []
  try {
    answers = Answer.get().filter((ans) => ans.questionId == questionId)
  } catch (err) {
    res.status(500).json(err)
  }
  return answers
}

const addThemes = (themeId) => {
  let theme = null
  try {
    theme = Theme.get().find((ques) => ques.id == themeId)
  } catch (err) {
    res.status(500).json(err)
  }
  return theme
}

const deleteQuestionsAndAnswers = (quizId) => {
  try {
    Question.get().filter((ques) => ques.quizId == quizId).forEach((ques) => {
      deleteAnswers(ques.id)
      Question.delete(ques.id)
    })
  } catch (error) {
    res.status(404).json(err)
  }
}

const deleteAnswers = (questionId) => {
  try {
    Answer.get().filter((ans) => ans.questionId == questionId).forEach((ans) => {
      Answer.delete(ans.id)
    })
  } catch (error) {
    res.status(404).json(err)
  }
}

module.exports = {
  addQuiz,
  addAnswers,
  addQuestions,
  deleteQuestionsAndAnswers,
  deleteAnswers,
  addThemes,
}
