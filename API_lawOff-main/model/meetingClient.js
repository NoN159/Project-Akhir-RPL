const Sequelize = require('sequelize');
const sequelize = require('../util/db');

const MeetingClient = sequelize.define('Meeting_Client',{
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
    tableName: "Meeting_Client",
    timestamps: false
});

module.exports = MeetingClient;