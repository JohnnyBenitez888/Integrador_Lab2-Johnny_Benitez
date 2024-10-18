const Sequelize = require('sequelize');

const sequelize = new Sequelize('agenda_consultorios', 'root', '5872', {
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
    define: {
        freezeTableName: true,
        timestamps: false
    }
});

module.exports = sequelize