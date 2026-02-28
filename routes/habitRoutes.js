const express = require('express');
const router = express.Router();
const authenticate = require('../middleware/auth');
const { getHabits, createHabit, updateHabit, deleteHabit } = require('../controllers/habitController');

router.use(authenticate);
router.get('/', getHabits);
router.post('/', createHabit);
router.put('/:id', updateHabit);
router.delete('/:id', deleteHabit);

module.exports = router;
