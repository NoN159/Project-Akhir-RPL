const Sequelize = require('sequelize');
const sequelize = require('../util/db');

const Pegawai = sequelize.define('Profile_Pegawai',{
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    nama:{
        type: Sequelize.STRING,
        allowNull: false
    },
    posisi:{
        type: Sequelize.STRING,
        allowNull: false
    },
    alamat:{
        type: Sequelize.STRING,
        allowNull: false
    },
    no_hp:{
        type: Sequelize.STRING,
        allowNull: false
    }
},{
    tableName: 'Profile_Pegawai',
    timestamps: false,
    caseSensitive: false
});

module.exports = Pegawai;
