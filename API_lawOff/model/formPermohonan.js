const Sequelize = require('sequelize');
const sequelize = require('../util/db');

const FormPermohonan = sequelize.define("Form_Permohonan",{
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    alamat_email:{
        type: Sequelize.STRING,
        allowNull: true
    },
    nama:{
        type: Sequelize.STRING,
        allowNull: true
    },
    file:{
        type: Sequelize.STRING,
        allowNull: false
    }
},{
    tableName: 'form_permohonan',
    timestamps: false,
    caseSensitive: false
})

module.exports = FormPermohonan;