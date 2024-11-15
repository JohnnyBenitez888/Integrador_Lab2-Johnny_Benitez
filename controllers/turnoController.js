const turno = require("../models/turno");

exports.listarTurnos = async (req, res) => {
  try {
    const turnos = await turno.findAll();
    res.render("allturnos.pug", {
      titulo: "Secretaria",
      tituloMenu: "Turnos",
      turnos: turnos,
    });
  } catch (error) {
    console.error("Error al obtener los turnos gg:", error);
    res.status(500).send("Error al obtener los turnos");
  }
};
