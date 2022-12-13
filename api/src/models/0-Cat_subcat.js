const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le inyectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  // console.log(sequelize);
  sequelize.define('cat_subcat', {
    Id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
  },{
    timeStamps: false,
    createdAt: false, // don't add createdAt attribute
    updatedAt: false
  }
  );
};
