/**
 * Category Router
 * @module routes/categories
 * @author Ruben Barseghyan
 */
const express = require('express');

const router = express.Router();
const cat = require('../controllers/category');

router.get('/', cat.getAll);
router.get('/:id', cat.getById);
router.delete('/:id', cat.remove);
router.post('/', cat.create);
router.patch('/:id', cat.update);

module.exports = router;
