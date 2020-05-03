const { Router } = require('express')
const QuizzesRouter = require('./quizzes')
const ProfilesRouter = require('./profiles')
const ThemesRouter = require('./quizzes/themes')


const router = new Router()
router.get('/status', (req, res) => res.status(200).json('ok'))
router.use('/quizzes', QuizzesRouter)
router.use('/profiles', ProfilesRouter)
router.use('/themes', ThemesRouter)

module.exports = router
