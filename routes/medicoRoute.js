const express = require('express');
const router = express.Router();
const medicoController = require('../controllers/medicoController');
const {listarEspecialidades} = require('../controllers/especialidadController');

// Ruta basica de ejemplo
router.get('/', medicoController.listarMedicos);
router.get('/crear', async (req, res) => {
    const especialidades = await listarEspecialidades();
    //console.log(especialidades);
    res.render('medicos-crear.pug', { titulo: 'Administrador', tituloMenu: "Crear Médico", especialidades });
});
router.post('/crear', medicoController.crearMedico);
router.get('/buscar/:id', medicoController.buscarMedico);
router.post('/editar', medicoController.editarMedico);
router.get('/desactivar/:id', medicoController.desactivarMedico);
router.get('/activar/:id', medicoController.activarMedico);

module.exports = router;