const { DataTypes } = require("sequelize");

module.exports= (sequelize)=>{
    sequelize.define("image", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        url: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    },{
    timeStamps: false,
    createdAt: true, // don't add createdAt attribute
    updatedAt: false
  })
}