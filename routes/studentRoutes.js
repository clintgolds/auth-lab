const express = require('express');
const requireAuth = require('../middleware/auth');
const { getStudents, deleteStudent } = require('../controllers/studentController');

const router = express.Router();

// Apply middleware to GET endpoint
router.get('/students', requireAuth, getStudents);

// Apply middleware to DELETE endpoint
router.delete('/students/:id', requireAuth, deleteStudent);

module.exports = router;