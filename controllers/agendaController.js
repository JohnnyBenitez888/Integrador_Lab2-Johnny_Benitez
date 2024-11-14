const agenda = require("../models/agenda");
const medicos_especialidades = require("../models/medicos_especialidades");
const clasificacion = require("../models/clasificacion");
const sucursal = require("../models/sucursal");
const {listarMedicosAgendas, listarClasificaciones, listarSucursales, buscarMedico_Especialidad} = require('../controllers/medicoController');
const {listarEspecialidades} = require('../controllers/especialidadController');

exports.listarAgendas = async (req, res) => {
    try {
        const agendas = await agenda.findAll({
            include: [
                {
                    model: medicos_especialidades,
                    as: 'medicoEspecialidad', // Alias opcional
                },
                {
                    model: clasificacion,
                    as: 'clasificacion', // Alias opcional
                },
                {
                    model: sucursal,
                    as: 'sucursal', // Alias opcional
                },
            ],
        });

        const medicos = await listarMedicosAgendas();
        const clasificaciones = await listarClasificaciones();
        const sucursales = await listarSucursales();
        const especialidades = await listarEspecialidades();

        res.render("allagendas.pug", { titulo: 'Administrador', tituloMenu: "Agendas", agendas: agendas, medicos: medicos, especialidades: especialidades, clasificaciones: clasificaciones, sucursales: sucursales });
        //res.json(agendas);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al obtener las agendas" });
    }
};


exports.crearAgendas = async (req, res) => {
    try {
      const { id_medico_especialidad, id_clasificacion, diasT, hora_inicio, hora_fin, duracion_turno, nombre_sucursal } = req.body;
      //console.log(req.body);
      const dias = JSON.stringify(diasT);
      await agenda.create({ id_medico_especialidad, id_clasificacion, dias, hora_inicio, hora_fin, duracion_turno, nombre_sucursal });
      
      res.redirect("/allagendas");
      
    } catch (error) {
      console.error("Error al crear la agenda:", error);
      res.status(500).send("Hubo un error al crear la agenda.");
    }
  };


