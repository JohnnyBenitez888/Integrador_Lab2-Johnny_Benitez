 const express = require('express');
 const app = express();
 const path = require('path');
 require('dotenv').config();
 const port = process.env.SERVER_PORT || 3000;
 const sequelize = require('./config/database');

 /* calendario -----------------------------------------------------------------------------------------*/
 const { cargarMesAnterior, cargarMesSiguiente, cargarMesActual, meses } = require('./public/js/calendario.js');

/* Middleware ------------------------------------------------------------------------------------------*/
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

 /* Motor de Plantillas Pug ---------------------------------------------------------------------------*/
 app.set('view engine', 'pug');
 app.set('views', path.join(__dirname, 'views'));

 /* Ruta principal ------------------------------------------------------------------------------------*/
 app.get('/', (req, res) => {
     res.render('home');
 });
 app.get('/register-login', (req, res) => {
    res.render('login');
  });


/* Rutas del Calendario------------------------------------------------------------------------------- */
app.get('/calendario', (req, res) => {
  const calendario = cargarMesActual();  // Generar el calendario del mes actual
  //console.log(calendario);
  res.render('calendario', { calendario});
});

app.get('/calendario/mes-anterior', (req, res) => {
  const calendario = cargarMesAnterior(); // Generar el calendario del mes anterior
  res.render('calendario', { calendario});
});

app.get('/calendario/mes-siguiente', (req, res) => {
  const calendario = cargarMesSiguiente(); // Generar el calendario del mes siguiente
  res.render('calendario', { calendario});
});

/* Rutas del Nuevo Turno--------------------------------------------------------------------------------- */
app.get('/nuevo-turno', (req, res) => {
  res.render('nuevo-turno');
});

/* Rutas del login----------------------------------------------------------------------------------------*/
 /* const loginRoute = require('./routes/loginRoute');
 app.use('/login', loginRoute);  */

 app.get('/agendarPaciente', (req, res) => {
    res.render('agenda');
  });

/* Sincronizar la base de datos --------------------------------------------------------------------------*/
sequelize.sync()
  .then(() => console.log('Base de datos conectada'))
  .catch((error) => console.error('Error al conectar con la base de datos:', error));

 /* Servidor */
 app.listen(port, () => {
     console.log(`Servidor corriendo en http://localhost:${port}`);
 });
 