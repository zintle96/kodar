const sequelizeConnection = require('../config/db.config')
const { Sequelize } = require('sequelize')
const { DataTypes } = Sequelize // GETS THE DataTypes Object, used to set data types of fields

const Overview = sequelizeConnection.define('overview', {
    overview_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    course_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    overview_desc: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    overview_about: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    overview_prereq: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    overview_picture: {
        type: DataTypes.VARCHAR(255),
        allowNull: true
    }

})

module.exports = Overview