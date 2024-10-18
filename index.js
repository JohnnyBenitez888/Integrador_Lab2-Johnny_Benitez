 const express = require('express');
 const app = express();
 const path = require('path');
 require('dotenv').config();
 const port = process.env.SERVER_PORT || 3000;
 const sequelize = require('./config/database');

/* Middleware */
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

/* Rutas */
 /* const loginRoute = require('./routes/loginRoute');
 app.use('/login', loginRoute);  */

 /* Motor de Plantillas Pug*/
 app.set('view engine', 'pug');
 app.set('views', path.join(__dirname, 'views'));

 /* Ruta principal */
 app.get('/', (req, res) => {
     res.render('home');
 });
 app.get('/register-login', (req, res) => {
    res.render('login');
  });



/* Sincronizar la base de datos */
sequelize.sync()
  .then(() => console.log('Base de datos conectada'))
  .catch((error) => console.error('Error al conectar con la base de datos:', error));

 /* Servidor */
 app.listen(port, () => {
     console.log(`Servidor corriendo en http://localhost:${port}`);
 });
 