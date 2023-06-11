const Sequelize = require('sequelize');
const sequelize = require('../util/db');

const MeetingKantor = sequelize.define('Meeting_Kantor',{
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
},{
    tableName: "Meeting_Kantor",
    timestamps: false
});

module.exports = MeetingKantor;