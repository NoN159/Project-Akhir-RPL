const Sequelize = require('sequelize');
const sequelize = require('../util/db');

const Persidangan = sequelize.define('Persidangan',{
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    tanggal:{
        type: Sequelize.STRING,
        allowNull: false
    },
    nama_client: {
        type: Sequelize.STRING,
        allowNull: false
    }
},{
    tableName: "Persidangan",
    timestamps: false
});

module.exports = Persidangan;