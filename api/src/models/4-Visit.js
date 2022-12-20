const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('visit', {
        Id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        Opening_date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        Closing_date: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        Team: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Closed: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        }
    },
    {
        timeStamps: true,
        createdAt: true, // don't add createdAt attribute
        updatedAt: true
    })
}