const Sequelize = require('sequelize');
const database = require('../config/dataBase.js');
const Cidade = require('./cidade.js');
 
const Cliente = database.define('cliente', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    sexo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    dataNascimento: {
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    idade: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
})

Cidade.hasMany(Cliente, {
    foreignKey: 'cidadeId'
});
Cliente.belongsTo(Cidade);
 
module.exports = Cliente;