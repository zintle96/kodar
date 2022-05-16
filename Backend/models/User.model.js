const sequelizeConnection = require('../config/db.config')
const { Sequelize } = require('sequelize')
const { DataTypes } = Sequelize // GETS THE DataTypes Object, used to set data types of fields


const User = sequelizeConnection.define('user', {
    user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    
    phone_number: {
        type: DataTypes.STRING,
        allowNull: false
    },

    password: {
        type: DataTypes.STRING,
        allowNull: false
    }

})


module.exports = User
