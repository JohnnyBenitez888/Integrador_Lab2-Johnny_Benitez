const especialidad = require('../models/especialidad');

exports.listarEspecialidades = async () => {
    try {
      const especialidades = await especialidad.findAll();
      return especialidades;
    } catch (error) {
      console.error("Error al obtener las especialidades:", error);
    }
  };