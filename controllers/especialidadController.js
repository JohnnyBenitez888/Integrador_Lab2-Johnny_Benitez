const especialidad = require('../models/especialidad');

exports.listarEspecialidades = async () => {
    try {
      const especialidades = await especialidad.findAll();
      return especialidades;
    } catch (error) {
      console.error("Error al obtener las especialidades:", error);
    }
  };

exports.crearEspecialidad = async (req,res) => {
    try {
      const { descripcion } = req.body;
      console.log("DATO IMPORTANTE " + descripcion)
      await especialidad.create({descripcion});
      res.redirect("/allespecialidades");
    } catch (error) {
      console.error("Error al crear la especialidad:", error);
      res.status(500).send("Hubo un error al crear la especialidad.");
    }
  };

exports.eliminarEspecialidad = async (req,res) => {
    try {
      const deletedRows = await especialidad.destroy({where: { id_especialidad: req.params.id }});

      if (deletedRows > 0) {
        res.redirect("/allespecialidades");
      } else {
        res.status(404).send('especialidad no encontrada.');
      }
      
    } catch (error) {
      console.error("Error al eliminar la especialidad:", error);
      res.status(500).send("Hubo un error al eliminar la especialidad.");
    }
  };