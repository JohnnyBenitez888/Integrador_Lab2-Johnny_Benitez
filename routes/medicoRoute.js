const express = require('express');
const router = express.Router();
const medicoController = require('../controllers/medicoController');

// Ruta basica de ejemplo
router.get('/', medicoController.listarMedicos);

module.exports = router;