const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('notation', {
        Id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        Note: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        Observations: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        Image: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        saved: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
    },
    {
        timeStamps: true,
        createdAt: true, // don't add createdAt attribute
        updatedAt: true
    })
}