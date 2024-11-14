const express = require('express');
const router = express.Router();
const especialidadController = require('../controllers/especialidadController');
const {listarEspecialidades} = require('../controllers/especialidadController');

router.get('/', async (req, res) => {
    const especialidades = await listarEspecialidades();
    //console.log(especialidades);
    res.render('especialidades.pug', { titulo: 'Administrador', tituloMenu: "Crear Médico", especialidades });
});

router.post('/crear', especialidadController.crearEspecialidad);
router.get('/eliminar/:id', especialidadController.eliminarEspecialidad);

module.exports = router;