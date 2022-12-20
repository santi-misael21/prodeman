const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    
    sequelize.define('subcategory', {
        // Id: {
        //     type: DataTypes.INTEGER,
        //     autoIncrement: true,
        //     primaryKey: true,
        //     allowNull: false,
        //     // get(){
        //     //     let v= this.getDataValue('Id')
        //     //     return v +" foods"
        //     // }
        // },
        Nombre: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    },
    {
        timeStamps: false,
        createdAt: false, // don't add createdAt attribute
        updatedAt: false
    })
}