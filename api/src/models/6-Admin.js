const { DataTypes } = require("sequelize");

module.exports= (sequelize)=>{

    sequelize.define("admin", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        adminname: {
            type: DataTypes.STRING(25),
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING(25),
            allowNull: false,
        },

    },{
    timeStamps: false,
    createdAt: false, // don't add createdAt attribute
    updatedAt: false
  })
}