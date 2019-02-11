/**
 * Category Router
 * @module routes/books
 * @author Ruben Barseghyan
 */
const express = require('express');

const router = express.Router();
const books = require('../controllers/books');

router.get('/', books.getAll);
router.get('/:id', books.getById);
router.delete('/:id', books.remove);
router.post('/', books.create);
router.patch('/:id', books.update);

module.exports = router;
