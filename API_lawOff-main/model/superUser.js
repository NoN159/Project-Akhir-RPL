const Sequelize = require('sequelize');
const sequelize = require("../util/db");

const SuperUser = sequelize.define("Super_User",{
    username:{
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false
    },
    password:{
        type: Sequelize.STRING,
        allowNull: false
    }
},{
    tableName: 'Super_User',
    timestamps: false,
    caseSensitive: false
})

module.exports = SuperUser;