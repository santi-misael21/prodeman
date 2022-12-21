require('dotenv').config();
const { Sequelize , Op} = require('sequelize');
const ModelCat_Subcat = require("./models/0-Cat_subcat.js");
const ModelCat = require ("./models/1-Category.js");// cambios importantes
const ModelSub = require("./models/2-Subcategory.js");// cambios importantes
const ModelNot = require("./models/3-Notation.js");
const ModelVis = require ("./models/4-Visit.js");// cambios importantes 
const User = require("./models/5-User.js");// cambios importantes
const Admin = require("./models/6-Admin.js");// cambios importantes
const Team = require("./models/7-Team.js");
const Image = require("./models/8-Image.js");

const fs = require('fs');
const path = require('path');
const { PassThrough } = require('stream');
const {
  DB_USER, DB_PASSWORD, DB_HOST
} = process.env;

// console.log(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/spoondiets`);
let DB = DB_USER === 'postgres' ? 'prodeman' : DB_USER ;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB}`, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  dialect: 'sqlite',    
  storage: 'database.sqlite'
});

ModelCat(sequelize); //agregado
ModelSub(sequelize); //agregado  
ModelNot(sequelize); //agregado
ModelVis(sequelize); //agregado
ModelCat_Subcat(sequelize);
User(sequelize);
Admin(sequelize);
Team(sequelize);
Image(sequelize);


// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { category, subcategory, notation, visit, /*notation_visit,*/ cat_subcat, user, team, image } = sequelize.models; 
// Aca vendrian las relaciones

category.belongsToMany(subcategory, {through: cat_subcat});
subcategory.belongsToMany(category, {through: cat_subcat});

visit.hasMany(notation, /*{ foreignKey: 'visitId' }*/);
notation.belongsTo(visit,/*{ foreignKey: 'visit' }*/)

cat_subcat.hasOne(notation);
notation.belongsTo(cat_subcat, /*{foreignKey: 'visitId'}*/);

team.hasMany(user);
user.belongsTo(team);

user.hasMany(visit);
visit.belongsTo(user);

notation.hasMany(image);
image.belongsTo(notation);


module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
  Op
};
