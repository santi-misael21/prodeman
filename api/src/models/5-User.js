const { DataTypes } = require("sequelize");

module.exports= (sequelize)=>{

    sequelize.define("user", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        username: {
            type: DataTypes.STRING(25),
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING(25),
            allowNull: false,
        },
        lastVisitId: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        // teamId: {
        //     typeof: DataTypes.INTEGER,
        //     allowNull: false,
        //     foreignKey: true,
        // }

    },{
    timeStamps: false,
    createdAt: false, // don't add createdAt attribute
    updatedAt: false
  })
}