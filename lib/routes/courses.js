const express = require('express')
const coursesController = require('../controllers/courses')
const router = express.Router();

router.get('/', coursesController.index)
router.post('/', coursesController.create)
router.get('/:id', coursesController.showId)
router.put('/:id', coursesController.edit)
router.delete('/:id', coursesController.delete)
router.get('/title/:title', coursesController.showTitle)

module.exports = router
