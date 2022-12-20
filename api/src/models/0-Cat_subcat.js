const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
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
