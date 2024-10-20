const medico = require("../models/medico");

exports.listarMedicos = async (req, res) => {
  try {
    const medicos = await medico.findAll();
    res.render("medicos.pug", { medicos });
  } catch (error) {
    console.error("Error al obtener los médicos gg:", error);
  }
};