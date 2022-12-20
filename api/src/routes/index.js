const { Router } = require('express');
// Importar todos los routers;

const categoriesRoutes = require ("./Categories.js");
const visitRoutes = require ("./Visit.js")
const subcategoriesRoutes = require ("./Subcategories.js");
const cat_subcatsRoutes = require ("./Cat-subcat.js");
const usersRoutes = require ("./Users.js");
const teamsRoutes = require ("./Teams.js");
const notationsRoutes = require ("./Notation.js");
const adminsRoutes = require ("./Admins.js");
const imagesRoutes = require ("./Admins.js");

const router = Router();

router.use("/categories", categoriesRoutes);
router.use("/visit", visitRoutes);
router.use("/subcategories", subcategoriesRoutes);
router.use("/catsubcats", cat_subcatsRoutes);
router.use("/users", usersRoutes);
router.use("/teams", teamsRoutes);
router.use("/notations", notationsRoutes);
router.use("/admins", adminsRoutes);
router.use("/image", imagesRoutes);

module.exports = router;
// Configurar los routers



