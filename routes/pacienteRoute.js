const express = require('express');
const router = express.Router();
const pacienteController = require('../controllers/pacienteController');

// Ruta basica de ejemplo
router.get('/', pacienteController.listarPacientes);

module.exports = router;