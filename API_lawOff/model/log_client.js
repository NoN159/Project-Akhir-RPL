const Sequelize = require("sequelize");
const sequelize = require("../util/db");

const LogClient = sequelize.define("Log_Client",{
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    status:{
        type: Sequelize.ENUM("DITERIMA", "DITOLAK", "PROSES"),
        allowNull: false
    },
    namaKasus:{
        type: Sequelize.STRING,
        allowNull: true,
    },
    namaClient:{
        type: Sequelize.STRING,
        allowNull: true,
    },
    namaPegawai:{
        type: Sequelize.STRING,
        allowNull: true
    },
    statusDeskripsi:{
        type: Sequelize.STRING,
        allowNull: true
    }
},{
    tableName: 'Log_Client',
    timestamps: false,
    caseSensitive: false
})

module.exports = LogClient;