const express = require('express');

const router = express.Router();
const users = require('../controllers/users');

router.get('/', users.getAll);
router.get('/:id', users.getById);
router.delete('/:id', users.remove);
router.post('/', users.register);
router.patch('/:id', users.update);

module.exports = router;
