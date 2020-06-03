const express = require('express')
const coursesController = require('../controllers/courses')
const router = express.Router();

// router.get('/', coursesController.index)
router.post('/', coursesController.create)
router.get('/courseID/:courseId?', coursesController.showId)
router.put('/:courseId', coursesController.edit)
router.delete('/:courseId', coursesController.delete)
router.get('/title/:title', coursesController.showTitle)
//search by instructors

module.exports = router
