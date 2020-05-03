const { Router } = require('express')

const { Theme, Quiz } = require('../../../models')

const router = new Router()

router.get('/', (req, res) => {
  try {
    res.status(200).json(Theme.get())
  } catch (err) {
    res.status(500).json(err)
  }
})


router.get('/:themeId', (req, res) => {
  try {
    res.status(200).json(Theme.getById(req.params.themeId))
  } catch (err) {
    res.status(404).json(err)
  }
})

router.post('/', (req, res) => {
  try {
    const theme = Theme.create({ ...req.body })
    res.status(201).json(theme)
  } catch (err) {
    if (err.name === 'ValidationError') {
      res.status(400).json(err.extra)
    } else {
      res.status(500).json(err)
    }
  }
})

router.delete('/:themeId', (req, res) => {
  try {
    Quiz.get().filter((quiz)=>quiz.themeId==req.params.themeId).forEach(element => {
      element.themeId = 0
      Quiz.update(element.id,element)
    });
    res.status(200).json(Theme.delete(req.params.themeId))
  } catch (err) {
    res.status(404).json(err)
  }
})

router.put('/:themeId', (req, res) => {
  try {
    res.status(200).json(Theme.update(req.params.themeId,req.body))
  } catch (err) {
    res.status(404).json(err)
  }
})

module.exports = router
