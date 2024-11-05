const express = require('express');
const router = express.Router();
const medicoController = require('../controllers/medicoController');
const {listarEspecialidades} = require('../controllers/especialidadController');

// Ruta basica de ejemplo
router.get('/', medicoController.listarMedicos);
router.get('/crear', async (req, res) => {
    const especialidades = await listarEspecialidades();
    //console.log(especialidades);
    res.render('medicos-crear.pug', { titulo: 'Médico', tituloMenu: "Crear Médico", especialidades });
});

module.exports = router;