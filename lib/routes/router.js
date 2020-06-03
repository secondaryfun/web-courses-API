const express = require('express')
const coursesController = require('../controllers/courses')
const router = express.Router();

// router.get('/', coursesController.index)
router.use('/courses', require('./courses'))

module.exports = router
