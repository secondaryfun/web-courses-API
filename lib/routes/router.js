const express = require('express')
// const coursesController = require('../controllers/courses')
const categoryController = require('../controllers/category')
const router = express.Router();

router.get('/', categoryController.index)
router.use('/courses', require('./courses'))
router.use('/category', require('./category'))

module.exports = router
