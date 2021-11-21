const express = require('express');
const router = express.Router();
const BookController = require('../controller/Book.controller')
router.get('/', BookController.getList )
router.post('/', BookController.addBook)

module.exports = router;