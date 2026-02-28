const express = require('express');
const router = express.Router();
const authenticate = require('../middleware/auth');
const { getLogs, logHabit, deleteLog } = require('../controllers/logController');

router.use(authenticate);
router.get('/', getLogs);
router.post('/', logHabit);
router.delete('/:id', deleteLog);

module.exports = router;
