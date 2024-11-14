const express = require('express');
const router = express.Router();
const agendaController = require('../controllers/agendaController');
const {listarMedicosAgendas, listarClasificaciones, listarSucursales} = require('../controllers/medicoController');
const {listarEspecialidades} = require('../controllers/especialidadController');

router.get('/', agendaController.listarAgendas);
router.get('/crear', async (req, res) => {
    const medicos = await listarMedicosAgendas();
    const especialidades = await listarEspecialidades();
    const clasificaciones = await listarClasificaciones();
    const sucursales = await listarSucursales();
    //console.log(especialidades);
    res.render('agendas-crear.pug', { titulo: 'Administrador', tituloMenu: "Crear Agenda", medicos: medicos, especialidades: especialidades, clasificaciones: clasificaciones, sucursales: sucursales});
});
router.post('/crear', agendaController.crearAgendas);



module.exports = router;