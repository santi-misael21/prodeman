const { DataTypes } = require("sequelize");

module.exports= (sequelize)=>{

    sequelize.define("team", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        teamname: {
            type: DataTypes.STRING(25),
            allowNull: false,
        },
    },{
    timeStamps: false,
    createdAt: false, // don't add createdAt attribute
    updatedAt: false
  })
}