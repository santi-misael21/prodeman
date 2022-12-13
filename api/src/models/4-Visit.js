const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le inyectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  // console.log(sequelize);
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