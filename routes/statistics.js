/**
 * statistics Router
 * @module routes/statistics
 * @author Ruben Barseghyan
 */
const express = require('express');

const router = express.Router();
const statistics = require('../controllers/statistics');

router.get('/', statistics.getAll);
router.get('/:time', statistics.getByTime);
router.delete('/:id', statistics.remove);
router.post('/', statistics.create);
router.patch('/:id', statistics.update);

module.exports = router;
