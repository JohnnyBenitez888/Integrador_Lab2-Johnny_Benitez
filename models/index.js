const Sequelize = require('sequelize');
const sequelize = require('../config/database');

// Importar modelos
const Medico = require('./medico');
const Especialidad = require('./especialidad');
const MedicosEspecialidades = require('./medicos_especialidades');

// Definir relaciones
Medico.belongsToMany(Especialidad, { 
    through: MedicosEspecialidades,
    foreignKey: 'id_medico',
    otherKey: 'id_especialidad',
    as: 'especialidades'
});

Especialidad.belongsToMany(Medico, { 
    through: MedicosEspecialidades,
    foreignKey: 'id_especialidad',
    otherKey: 'id_medico',
    as: 'medicos'
});

// Exportar los modelos y la instancia de Sequelize
module.exports = {
    Medico,
    Especialidad,
    MedicosEspecialidades,
    sequelize
};
