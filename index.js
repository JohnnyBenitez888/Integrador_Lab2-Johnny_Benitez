const express = require("express");
const app = express();
const path = require("path");
require("dotenv").config();
const port = process.env.SERVER_PORT || 3000;
const sequelize = require("./config/database");

/* calendario -----------------------------------------------------------------------------------------*/
const {
  cargarMesAnterior,
  cargarMesSiguiente,
  cargarMesActual,
  meses,
} = require("./public/js/calendario.js");

/* Middleware ------------------------------------------------------------------------------------------*/
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static("assets"));

/* Motor de Plantillas Pug ---------------------------------------------------------------------------*/
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

/* Ruta principal ------------------------------------------------------------------------------------*/
app.get("/", (req, res) => {
  res.render("includes/principal");
});
app.get("/register-login", (req, res) => {
  res.render("login");
});

/* Rutas del Calendario------------------------------------------------------------------------------- */
app.get("/calendario", (req, res) => {
  const calendario = cargarMesActual(); // Generar el calendario del mes actual
  //console.log(calendario);
  res.render("calendario", { calendario });
});

app.get("/calendario/mes-anterior", (req, res) => {
  const calendario = cargarMesAnterior(); // Generar el calendario del mes anterior
  res.render("calendario", { calendario });
});

app.get("/calendario/mes-siguiente", (req, res) => {
  const calendario = cargarMesSiguiente(); // Generar el calendario del mes siguiente
  res.render("calendario", { calendario });
});

/* Rutas del Administrador--------------------------------------------------------------------------------- */
app.get("/admin", (req, res) => {
  res.render("home", { titulo: "Administrador" });
});
/* Rutas del Secretaria--------------------------------------------------------------------------------- */
app.get("/secretaria", (req, res) => {
  res.render("home", { titulo: "Secretaria" });
});
/* Rutas del Nuevo Turno--------------------------------------------------------------------------------- */
app.get("/nuevo-turno", (req, res) => {
  res.render("nuevo-turno");
});

/* Rutas del medico----------------------------------------------------------------------------------------*/
const medicoRoute = require("./routes/medicoRoute.js");
app.get("/medicos", (req, res) => {
  res.render("home", { titulo: "Médico" });
});
app.use("/allmedicos", medicoRoute);

/* Rutas Especialidad------------------------------------------------------------------------------------*/
const especialidadRoute = require("./routes/especialidadRoute");
/* app.get('/allespecialidades', (req, res) => {
  res.render('home', {titulo: 'Administrador'});
}); */
app.use("/allespecialidades", especialidadRoute);

/* Rutas del Paciente------------------------------------------------------------------------------------*/
const pacienteRoute = require("./routes/pacienteRoute.js");
app.get("/pacientes", (req, res) => {
  res.render("home", { titulo: "Paciente" });
});
app.use("/allpaciente", pacienteRoute);

app.get("/ingresarPaciente", (req, res) => {
  /* AgendarPaciente */
  res.render("ingresarPaciente");
});

/* Sincronizar la base de datos --------------------------------------------------------------------------*/
sequelize
  .sync()
  .then(() => console.log("Base de datos conectada"))
  .catch((error) =>
    console.error("Error al conectar con la base de datos:", error)
  );

/* Servidor */
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
