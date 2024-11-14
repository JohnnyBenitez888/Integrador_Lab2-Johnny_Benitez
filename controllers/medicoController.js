/* const medico = require("../models/medico");
const especialidad = require('./especialidad');
const medicos_especialidades = require("../models/medicos_especialidades"); */
const { Medico, Especialidad, MedicosEspecialidades } = require("../models");
const {listarEspecialidades} = require('../controllers/especialidadController');

exports.listarMedicos = async (req, res) => {
  try {
    const medicos = await Medico.findAll({
      include: {
        model: Especialidad,
        as: 'especialidades',
        through: { model: MedicosEspecialidades, attributes: ['matricula'] },
        attributes: ['descripcion'] 
      }
    });
    //console.log(medicos[5].especialidades.dataValues);
    res.render("medicos.pug", { titulo: 'Administrador', medicos: medicos });
  } catch (error) {
    console.error("Error al obtener los médicos gg:", error);
  }
};

exports.crearMedico = async (req, res) => {
  try {
    const { apellido, nombre, dni, fecha_nacimiento, domicilio, sexo, especialidades, email, matricula } = req.body;
    //console.log(req.body);
    /* creo el médico */
    const nuevoMedico = await Medico.create({ apellido, nombre, dni, fecha_nacimiento, domicilio, sexo, email});

    /* creo el medicos_especialidades con el id_medico del recien creado */
    await MedicosEspecialidades.create({ id_medico: nuevoMedico.id_medico, id_especialidad: especialidades, matricula: matricula });

    res.redirect("/allmedicos");
  } catch (error) {
    console.error("Error al crear el médico:", error);
    res.status(500).send("Hubo un error al crear el médico.");
  }
};

exports.buscarMedico = async (req, res) => {
  try {
    const especialidades = await listarEspecialidades();
    const medico = await Medico.findByPk(req.params.id, {
      include: {
        model: Especialidad,
        as: 'especialidades',
        through: { model: MedicosEspecialidades, attributes: ['id_medico_especialidad', 'matricula'] },
        attributes: ['id_especialidad','descripcion']
      }
    });
    //console.log(medico.especialidades);
    if (medico) {
      res.render('medicos-editar.pug',  { titulo: 'Administrador', tituloMenu: "Editar Médico", medico: medico, especialidades });
    } else {
      res.status(404).send('Médico no encontrado.');
    }
  } catch (error) {
    console.error('Error al obtener el médico:', error);
    res.status(500).send('Error al obtener el médico.');
  }
};

exports.editarMedico = async (req, res) => {
  try {
    const { id_medico, apellido, nombre, dni, fecha_nacimiento, domicilio, sexo, especialidades, email, matricula, id_medico_especialidad } = req.body;
    console.log({ id_medico, apellido, nombre, dni, fecha_nacimiento, domicilio, sexo, especialidades, email, matricula, id_medico_especialidad });
    const [updatedRows1] = await Medico.update( {apellido, nombre, dni, fecha_nacimiento, domicilio, sexo, email} , {
      where: { id_medico: id_medico }
    });

    const [updatedRows2] =await MedicosEspecialidades.update({ id_medico: id_medico, id_especialidad: especialidades, matricula: matricula }, {
      where: { id_medico_especialidad: id_medico_especialidad }
    });

    if (updatedRows1 > 0 || updatedRows2 > 0) {
      res.redirect('/allmedicos');
    } else {
      res.status(404).send('Médico no encontrado.');
    }
  } catch (error) {
    console.error('Error al actualizar el médico:', error);
    res.status(500).send('Error al actualizar el médico.');
  }
};

exports.desactivarMedico = async (req, res) => {
  try {
    //const {id_medico} = req.params.id;
    const activo = 0;
    console.log(req.params.id);
    const [updatedRows1] = await Medico.update( {activo} , {
      where: { id_medico: req.params.id }
    });

    if (updatedRows1 > 0 ) {
      res.redirect('/allmedicos');
    } else {
      res.status(404).send('Médico no desactivado.');
    }
  } catch (error) {
    console.error('Error al desactivar el médico:', error);
    res.status(500).send('Error al desactivar el médico.');
  }
};

exports.activarMedico = async (req, res) => {
  try {
    //const {id_medico} = req.params.id;
    const activo = 1;
    console.log(req.params.id);
    const [updatedRows1] = await Medico.update( {activo} , {
      where: { id_medico: req.params.id }
    });

    if (updatedRows1 > 0 ) {
      res.redirect('/allmedicos');
    } else {
      res.status(404).send('Médico no activado.');
    }
  } catch (error) {
    console.error('Error al activar el médico:', error);
    res.status(500).send('Error al activar el médico.');
  }
};

