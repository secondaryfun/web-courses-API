const express = require('express')
const categoryController = require('../controllers/category')
const router = express.Router();

router.get('/', categoryController.index)
router.post('/', categoryController.create)
router.get('/:id', categoryController.showId)
router.put('/:id', categoryController.edit)
router.delete('/:id', categoryController.delete)
router.get('/title/:title', categoryController.showTitle)
router.get('/search/', categoryController.query)


module.exports = router
