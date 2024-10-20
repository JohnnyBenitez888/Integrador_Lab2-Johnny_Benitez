const paciente = require("../models/paciente");
const ObraSocial = require("../models/obra_social");

exports.listarPasientes = async (req, res) => {
  try {
    const pacientes = await paciente.findAll(
      {
        include: [
          {
            model: ObraSocial,
            attributes: ["id_obra_social", "nombre"],
            as: 'obra_social'
          },
        ],
      });
    res.render("pacientes.pug", { pacientes });
  } catch (error) {
    console.error("Error al obtener los pacientes gg:", error);
  }
};

